import { isString } from '@/public/TypeCheck'

const prettyLog = () => {
  // 检查是否处于生产环境
  // const isProduction = import.meta.env.MODE === 'production';

  // 定义标题和颜色
  const enumType = {
    info: {
      title: 'Info',
      color: '#909399'
    },
    error: {
      title: 'Error',
      color: '#F56C6C'
    },
    warning: {
      title: 'Warning',
      color: '#E6A23C'
    },
    success: {
      title: 'Success',
      color: '#67C23A'
    }
  }

  // 漂亮的打印函数，接受日志类型和任意数量的参数
  const prettyPrint = (type: keyof typeof enumType, ...args: any[]) => {
    // if (isProduction) return; // 如果是生产环境，则不执行打印

    // 获取日志类型对应的标题和颜色
    const { title, color } = enumType[type]

    // 检查参数列表是否含有引用类型 如果有则输出正常log, 并注明参数类型
    // 否则输出带有标题和颜色的log

    if (args.some((i) => !isString(i))) {
      // 分组打印
      console.group(
        `%c ${title} %c Type is a ${typeof args}, The details are as follows 👇`,
        `background:${color}; border:1px solid ${color}; padding: 2px; border-radius: 4px 0 0 4px; color: white;`,
        `border:1px solid ${color}; padding: 2px; border-radius: 0 4px 4px 0; color: ${color};`
      )
      args.forEach((item) => {
        console.log(item)
      })
      console.groupEnd()
    } else {
      console.log(
        `%c ${title} %c ${args.join(',')}`,
        `background:${color}; border:1px solid ${color}; padding: 2px; border-radius: 4px 0 0 4px; color: white;`,
        `border:1px solid ${color}; padding: 2px; border-radius: 0 4px 4px 0; color: ${color};`
      )
    }
  }

  // 创建具体的日志函数
  const info = (...args: any[]) => prettyPrint('info', ...args)
  const error = (...args: any[]) => prettyPrint('error', ...args)
  const warning = (...args: any[]) => prettyPrint('warning', ...args)
  const success = (...args: any[]) => prettyPrint('success', ...args)

  // 返回所有的日志函数
  return {
    info,
    error,
    warning,
    success
  }
}

// 创建日志实例
export const log = prettyLog()
