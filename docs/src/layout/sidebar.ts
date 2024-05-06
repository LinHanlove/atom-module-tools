import * as fs from 'fs'
import * as path from 'path'

/**
 * @type 一级菜单类型
 */
type IAncestor<T = any> = {
  /**
   * @property 菜单名称
   */
  text?: string
  /**
   * @property 菜单链接
   */
  link?: string
  /**
   * @property 是否展开
   */
  collapsed?: boolean
  /**
   * @property 子菜单
   */
  items?: T
}

/**
 * @type 二级菜单类型
 */
type IChildren = {
  /**
   * @property 菜单名称
   */
  text: string
  /**
   * @property 菜单链接
   */
  link: string
}

/**
 * @function 侧边栏结构表
 */
const getFilesItem = (src): IAncestor[] => {
  try {
    // 获取存放文档的目录文件夹
    const dri = path.join(__dirname, src)

    // 一级菜单
    const ancestorsFileMap = [] as IAncestor[]

    // 读取文件夹下的文件
    const readdir = fs.readdirSync(dri)

    readdir.forEach((item, idx) => {
      // 拼接文件路径
      const file = path.join(dri, item)

      // 判断是否为文件夹
      const stat = fs.statSync(file)
      if (stat.isDirectory()) {
        // 二级菜单的key
        const menuKey = item

        // 二级菜单结构
        const childrenFilesMap = [] as IChildren[]

        const subFiles = fs.readdirSync(file)

        subFiles.forEach((subItem) => {
          const key = subItem.split('.')[0]
          // 正则去除src的..
          const base = src.replace(/\.\.\//g, '')
          console.log(`${base}/${menuKey}/${key}`)

          childrenFilesMap.push({
            text: key,
            link: `${base}/${menuKey}/${key}`
          })
        })

        ancestorsFileMap.push({
          text: menuKey,
          collapsed: true,
          items: childrenFilesMap
        })
      }
    })

    return ancestorsFileMap
  } catch (error) {
    return error
  }
}

export default {
  // 使用
  '/utils/': [
    {
      text: 'Guide',
      items: [
        {
          text: '指南',
          link: '/utils/guide/guide.md'
        },
        {
          text: '快速上手',
          link: '/utils/guide/use.md'
        },
        {
          text: '目录结构',
          link: '/utils/guide/directory.md'
        }
      ]
    },
    {
      text: 'Public',
      items: getFilesItem('../utils/public/')
    },
    {
      text: 'Special',
      items: getFilesItem('../utils/special/')
    }
  ]
}
