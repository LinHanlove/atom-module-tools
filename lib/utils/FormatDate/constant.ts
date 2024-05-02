export const DATA_CONSTANT = {
    // 一天的毫秒数
    ONE_DAY: 24 * 60 * 60 * 1000,
    // 一小时的毫秒数
    ONE_HOUR: 60 * 60 * 1000,
    // 一分钟的毫秒数
    ONE_MINUTE: 60 * 1000,
    // 一秒的毫秒数
    ONE_SECOND: 1000,
    // 今天（当天00:00:00）的时间戳
    TODAY: new Date().setHours(0, 0, 0, 0),
    // 明天（第二天00:00:00）的时间戳
    TOMORROW: new Date().setHours(24, 0, 0, 0),
    // 昨天（前一天00:00:00）的时间戳
    YESTERDAY: new Date().setHours(-24, 0, 0, 0),
    // 本周的第一天（周一00:00:00）的时间戳
    THIS_WEEK: (() => {
        const day = new Date().getDay() || 7;
        return new Date(new Date().setDate(new Date().getDate() - day)).getTime();
    })(),
    // 下周的第一天（周一00:00:00）的时间戳
    NEXT_WEEK: (() => {
        const day = new Date().getDay() || 7;
        return new Date(new Date().setDate(new Date().getDate() + (7 - day))).getTime();
    })(),
    // 上周的最后一天（周日23:59:59）的时间戳
    LAST_WEEK: (() => {
        const day = new Date().getDay() || 8;
        return new Date(new Date().setDate(new Date().getDate() - day + 1)).getTime();
    })(),
    // 本月第一天（00:00:00）的时间戳
    THIS_MONTH: (() => {
        return new Date(new Date().getFullYear(), new Date().getMonth(), 1).getTime();
    })(),
    // 下月第一天（00:00:00）的时间戳
    NEXT_MONTH: (() => {
        return new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1).getTime();
    })(),
    // 上月最后一天（23:59:59）的时间戳
    LAST_MONTH: (() => {
        const lastDayOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 0);
        return lastDayOfMonth.getTime();
    })()
};