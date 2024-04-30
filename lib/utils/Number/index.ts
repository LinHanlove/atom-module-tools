/**
 * 保留小数
 */
export function keepDecimal(num: number) {
    return num.toFixed(2);
}

/**
 * 补零
 */
export const fillZero = (num: number) => {
    return num >= 10 ? num : `0${num}`
}

/**
 * @function 生成随机字数字，该数字唯一
 * @param len {string} 所需生成字符串的长度
 */
export function getRandomNumber(digit = 8): number {
    const $chars = "0123456789";
    const maxPos = $chars.length;
    let str = "";
    for (let i = 0, length = digit; i < length; i++) {
        str += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return Number(str);
}


