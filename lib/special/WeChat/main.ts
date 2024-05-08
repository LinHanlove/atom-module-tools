/**
 * 思路：为了兼容微信小程序
 * 将小程序需要的公共函数从这里再导出一遍，在dist/wechat下扁平化处理
 */

export * from './CreateQRCode/index'
export * from './UploadFile/index'

// 小程序需要的函数
export * from '@/public/Array/index'
export * from '@/public/FormatDate/index'
export * from '@/public/FormatDate/constant'
export * from '@/public/HighOrderFunction/index'
export * from '@/public/TypeCheck/index'
export * from '@/public/Number/index'
export * from '@/public/String/index'
export * from '@/public/Object/index'
// export type * from '@/public/types/global'
export type * from './types/global'
