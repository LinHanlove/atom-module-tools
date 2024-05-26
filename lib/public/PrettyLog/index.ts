const prettyLog = () => {
    // 检查是否处于生产环境
    const isProduction = import.meta.env.MODE === 'production';

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
        },
    }


    // 漂亮的打印函数，接受日志类型和任意数量的参数
    const prettyPrint = (type: keyof typeof enumType, ...args: any[]) => {
        if (isProduction) return; // 如果是生产环境，则不执行打印

        // 获取日志类型对应的标题和颜色
        const { title, color } = enumType[type];

        // 打印参数
        args.forEach((arg) => {
            // 对于引用类型，使用console.dir以对象格式打印
            if (typeof arg === 'object' && arg !== null) {
                // 打印标题
                console.log(`%c ${title} %c Type is a ${typeof arg}, The details are as follows 👇`,
                    `background:${color}; border:1px solid ${color}; padding: 2px; border-radius: 4px 0 0 4px; color: white;`,
                    `border:1px solid ${color}; padding: 2px; border-radius: 0 4px 4px 0; color: ${color};`
                );
                console.dir(arg, { depth: null, colors: true });
            } else {
                console.log(
                    `%c ${title} %c ${args.length > 0 ? args.join(',') : arg}`,
                    `background:${color}; border:1px solid ${color}; padding: 2px; border-radius: 4px 0 0 4px; color: white;`,
                    `border:1px solid ${color}; padding: 2px; border-radius: 0 4px 4px 0; color: ${color};`
                );
            }
        });
    };

    // 创建具体的日志函数
    const info = (...args: any[]) => prettyPrint('info', ...args);
    const error = (...args: any[]) => prettyPrint('error', ...args);
    const warning = (...args: any[]) => prettyPrint('warning', ...args);
    const success = (...args: any[]) => prettyPrint('success', ...args);

    // 返回所有的日志函数
    return {
        info,
        error,
        warning,
        success
    };
};

// 创建日志实例
export const log = prettyLog();