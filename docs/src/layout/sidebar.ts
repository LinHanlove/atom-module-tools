import * as fs from 'fs'
import * as path from 'path'

/**
 * 定义菜单项类型，包含是否折叠的属性
 */
type IMenuItem = {
  text: string
  link?: string
  items?: IMenuItem[]
  collapsed?: boolean
}

const excludedFolders = ['WeChat']

/**
 * 获取文件和文件夹的映射关系，并设置默认折叠状态
 * @param src 目录路径
 * @returns 菜单项数组
 */
const getFilesItem = (src: string): IMenuItem[] => {
  return fs
    .readdirSync(path.join(__dirname, src), { withFileTypes: true })
    .filter((dirent) => dirent.name[0] !== '.' && !excludedFolders.includes(dirent.name)) // 过滤掉以点开头的文件或文件夹
    .map((dirent) => {
      const itemPath = path.join(src, dirent.name)
      let menuItem: IMenuItem = { text: dirent.name.split('.')[0], collapsed: true }

      if (dirent.isDirectory()) {
        // 如果是文件夹，递归获取子菜单
        menuItem.items = getFilesItem(itemPath)
      } else {
        // 如果是文件，设置链接
        menuItem.link = `/${itemPath}`
      }

      return menuItem
    })
}

export default {
  // 使用递归获取的菜单项填充侧边栏结构
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
  ],
  '/template/root/vue': [
    {
      text: 'template',
      items: getFilesItem('../template/vue/')
    }
  ],
  '/template/vue': [
    {
      text: 'template',
      items: getFilesItem('../template/vue/')
    }
  ],
  '/template/root/wxChat': [
    {
      text: 'template',
      items: getFilesItem('../template/wxChat/')
    }
  ],
  '/template/wxChat/': [
    {
      text: 'template',
      items: getFilesItem('../template/wxChat/')
    }
  ]
}
