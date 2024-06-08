import { TYPE, log } from '../main';



/**
 *@class 定时轮询的类
 */
export class KeepLoop {
  // 参数列表
  option: TYPE.IKeepLoopOption;

  // 定时器
  private timer: NodeJS.Timeout | null = null;

  // 当前轮询次数
  private count: number = 0;

  // 控制轮询是否暂停
  private isPaused: boolean = false;


  constructor(option: TYPE.IKeepLoopOption) {
    this.option = this.init(option);
  }

  // 初始化参数
  private init(option: TYPE.IKeepLoopOption): TYPE.IKeepLoopOption {
    if (typeof option.run !== 'function') {
      throw new Error('The "run" option must be a function.');
    }

    if (typeof option.interval !== 'number' || option.interval <= 0) {
      throw new Error('The "interval" option must be a positive number.');
    }

    const params = {
      run: option.run,
      interval: option.maxCount ? Math.abs(parseInt(option.interval.toString(), 10)):1000,
      maxCount: option.maxCount ? Math.abs(parseInt(option.maxCount.toString(), 10)) : 0,
    };

    return params;
  }

  public start(): void {
    // 如果 KeepLoop 已经运行，则不执行任何操作
    if (this.timer !== null) {
      log.info('KeepLoop is already running.');
      return;
    }
  
    // 如果 KeepLoop 被暂停了，恢复轮询
    if (this.isPaused) {
      log.info('Resuming KeepLoop from paused state.');
      this.isPaused = false;
    } else {
      // 重置计数器
      this.count = 0;
      log.info('Starting KeepLoop for the first time or after stopping.');
    }
  
    // 执行轮询
    this.run();
  }


  // 暂停轮询
  public pause(): void {
    if (!this.isPaused) {
      this.isPaused = true;
    }
  }

 // 恢复轮询
public resume(): void {
  if (!this.isPaused) {
    log.warning('KeepLoop is not paused or has already been resumed.');
    return;
  }
  this.isPaused = false;
  
  // 如果定时器不存在，需要重新设置
  if (this.timer === null) {
    // 重新设置定时器以继续轮询
    this.timer = setTimeout(this.run.bind(this), this.option.interval);
  } else {
    // 如果定时器存在，可能无需重新设置，但需要确保状态是正确的
    // 这里可以添加逻辑来调整定时器，以补偿因暂停造成的延迟
    // 例如，如果需要立即执行下一次轮询而不是等待当前定时器完成，可以这样做：
    clearTimeout(this.timer);
    this.timer = setTimeout(this.run.bind(this), 0);
  }
}

  // 停止轮询
  public stop(): void {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
      this.count = 0;
      this.isPaused = false; // 确保停止时不再处于暂停状态
      log.info('KeepLoop has been stopped.');
    }
  }

  //轮训处理函数
  private run(): void {
    try {

      if (this.isPaused) {
        log.info('KeepLoop is paused. Skipping run.');
        return;
      }

      // 计数器加1
      this.count++;

      // 定义返回参数
      const returnInfo: TYPE.IReturnInfo = {
        currentCount: this.count,
      };

      // 执行轮询函数
     this.option.run(returnInfo);

       // 判断是否达到最大次数或是否需要继续轮询
    if (!this.isPaused && (!this.option.maxCount || this.count < this.option.maxCount)) {
      // 继续轮询
      this.timer = setTimeout(this.run.bind(this), this.option.interval);
    } else {
      log.info('轮询完成或达到最大次数，不再继续。');
      return 
    }
  } catch (err) {
    log.error('Error during KeepLoop run:', err);
    this.stop(); // 确保出错时停止轮询
  }
  }
}