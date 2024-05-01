/**
 * @type 全局数据类型
 */
declare namespace GLOBAL {
    interface anyType {
        [key: string]: any
    }

    interface IWeChatUploadFile extends anyType {
        url: string,
        name: string,
        filePath: string,
    }
}

declare module 'qrcode' // 二维码生成器


declare namespace wx {
    function uploadFile(param: any): void;
    // 声明其他需要使用的wx对象的方法或属性
}

declare const wx: wx;