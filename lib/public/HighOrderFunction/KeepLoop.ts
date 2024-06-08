import { TYPE, log } from '../main';



/**
 * 定时轮询的类
 */
export class KeepLoop {
  // 参数列表
  option: TYPE.IKeepLoopOption;

  // 定时器
  private timer: NodeJS.Timeout | null = null;

  // 当前轮询次数
  private count: number = 0;

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

  // 执行轮询
  public start(): void {

    if (this.timer !== null) {
      log.warning('KeepLoop is already running.');
      return;
    }

    this.run();
  }

  private run(): void {
    try {
      // 计数器加1
      this.count++;

      // 定义返回参数
      const returnInfo: TYPE.IReturnInfo = {
        currentCount: this.count,
      };

      // 执行轮询函数
     this.option.run(returnInfo);
      // console.log('lh的调试语句','result:', result.then);
      
      // if (result === undefined || result === null || typeof result.then !== 'function') {
      //   throw new Error('The "run" function did not return a promise or a valid value.');
      // }

      // 判断是否达到最大次数
      if (this.option.maxCount && this.count >= this.option.maxCount) {
        log.info('轮询次数达到最大值，停止轮询');
        this.stop();
      } else {
        // 继续轮询
        this.timer = setTimeout(this.run.bind(this), this.option.interval);
      }
    } catch (err) {
      log.error('Error during KeepLoop run:', err);
      this.stop(); // 确保出错时停止轮询
    }
  }

  // 停止轮询
  public stop(): void {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
      this.count = 0;
      log.info('KeepLoop has been stopped.');
    }
  }
}