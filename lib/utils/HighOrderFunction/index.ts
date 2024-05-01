/**
 * sleep 函数用于模拟异步操作的延迟。
 * 它接受一个表示延迟时间（以毫秒为单位）的参数，并返回一个 Promise 对象。
 * 当指定的延迟时间过后，Promise 会被 resolve。
 *
 * @param {number} duration - 延迟的时间，单位为毫秒。
 * @returns {Promise<void>} - 一个在延迟时间过后解析的 Promise 对象。
 */
export function sleep(duration: number | undefined) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}


/**
 * 深度克隆一个值。
 * 使用 JSON 方法进行序列化和反序列化来实现深度克隆。
 * 注意：此方法不能克隆函数、undefined、循环引用的对象等。
 *
 * @param {*} value - 需要深度克隆的值。
 * @returns {*} 深度克隆后的值。
 */
export function cloneDeep(value: unknown) {
  return JSON.parse(JSON.stringify(value));
}


/**
 * 创建一个节流函数，确保函数在指定的时间间隔内最多执行一次。
 *
 * @param {Function} func - 需要节流的函数。
 * @param {number} limit - 时间间隔，单位为毫秒。必须是一个大于0的数字。
 * @param {boolean} immediate - 可选，是否立即执行函数。默认为 false。
 * @returns {Function} - 节流后的函数。
 */
export function throttle(func: Function, limit: number, immediate?: boolean): Function {
  if (typeof limit !== 'number' || limit <= 0) {
    throw new Error('throttle function expects a positive number as the limit');
  }

  let timeout: NodeJS.Timeout | null = null;
  let lastExecution: number = 0;
  let inThrottle: boolean = false;

  return function (this: ThisParameterType<typeof func>, ...args: any[]): void {
    const context = this;
    const now: number = Date.now();

    if (immediate && !inThrottle) {
      // 如果立即执行且当前不在节流状态，则立即执行函数
      func.apply(context, args);
      inThrottle = true;
      lastExecution = now;
    } else if (now - lastExecution >= limit) {
      // 如果不是立即执行，或者已经执行过且时间间隔已到，则执行函数
      func.apply(context, args);
      inThrottle = true;
      lastExecution = now;
    }

    // 清除之前的定时器
    if (timeout !== null) {
      clearTimeout(timeout);
    }

    // 设置新的定时器，以便在节流时间过后重置状态
    timeout = setTimeout(() => {
      inThrottle = false;
    }, limit);
  };
}


/**
 * 创建一个防抖函数，确保函数在指定的时间间隔结束后才执行。
 *
 * @param {Function} func - 需要防抖的函数。
 * @param {number} wait - 等待时间，单位为毫秒。
 * @param {boolean} immediate - 可选，是否立即执行函数。默认为 false。
 * @returns {Function} - 防抖后的函数。
 */
export function debounce(func: Function, wait: number, immediate?: boolean): Function {
  let timeout: NodeJS.Timeout | null;

  return function (this: ThisParameterType<typeof func>, ...args: any[]) {
    // 保存当前的 this 上下文和参数
    const context = this;

    // 清除之前的定时器
    if (timeout !== null) {
      clearTimeout(timeout);
    }

    // 设置新的定时器
    timeout = setTimeout(() => {
      // 如果 immediate 参数为 false，则在等待时间结束后执行函数
      if (!immediate) {
        func.apply(context, args);
      }
    }, wait);

    // 如果 immediate 参数为 true，则立即执行函数
    if (immediate) {
      const callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);

      if (callNow) {
        func.apply(context, args);
      }
    }
  };
}