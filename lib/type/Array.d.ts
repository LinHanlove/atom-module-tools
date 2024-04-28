declare namespace TYPE {

    interface IArraySortByKey {
        /** 需要排序的数组 */
        array: any[],
        /* 以什么字段排序 */
        key: string
    }

    interface IUniqueByProperty {
        /** 需要去重的数组 */
        array: any[],
        /** 去重字段 */
        key: string
        /** 回调函数 */
        callback?: (args?: any) => void
    }

    interface IFuzzyMatchByProperty {
        /** 要进行模糊匹配的数组 */
        array: any[]
        /** 模糊匹配针对的属性 */
        prop: string
        /** 传入的字段 多用于本地输入框搜索 */
        key: string
        /** 回调函数 */
        callback?: (args?: any) => void
    }

}