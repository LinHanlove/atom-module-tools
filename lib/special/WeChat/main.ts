/**
 * 思路：为了兼容微信小程序
 * 将公共函数从这里再导出一遍，在dist/wechat下扁平化处理
 */

export * from './CreateQRCode/index'
export * from './UploadFile/index'
export * from '@/public/main'

export type * as wechat from './types/global'
