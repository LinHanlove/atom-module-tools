/**
 * 保留小数
 */
export function keepDecimal(num: number) {
    return num.toFixed(2);
}

/**
 * 补零
 */
export const fillZero = (value: number) => {
    return value >= 10 ? value : `0${value}`
}

/**
 * @function 生成随机字数字，该数字唯一
 * @param len {string} 所需生成字符串的长度
 */
export function getRandomNumber(len = 8): number {
    const $chars = "0123456789";
    const maxPos = $chars.length;
    let str = "";
    for (let i = 0, length = len; i < length; i++) {
        str += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return Number(str);
}


