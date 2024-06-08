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

// 排除的文件夹名称列表
const excludedFolders = ['node_modules', '.git','WeChat'];

/**
 * 获取文件和文件夹的映射关系，并设置默认折叠状态
 * @param src 目录路径
 * @returns 菜单项数组
 */
const getFilesItem = (src: string): IMenuItem[] => {
  try {
    const dirent = fs.readdirSync(path.join(__dirname, src), { withFileTypes: true });
    if (!dirent) {
      return []; // 如果无法读取目录，返回空数组
    }
    return dirent
      .filter((dirent) => dirent.name[0] !== '.' && !excludedFolders.includes(dirent.name))
      .map((dirent) => {
        const itemPath = path.join(src, dirent.name);
        const menuItem: IMenuItem = {
          text: dirent.name.split('.')[0],
          collapsed: true,
        };

        if (dirent.isDirectory()) {
          menuItem.items = getFilesItem(itemPath); // 递归获取子菜单
        } else {
          menuItem.link = `/${itemPath}`;
        }

        return menuItem;
      });
  } catch (error) {
    console.error(`无法读取目录 ${src}: ${error}`);
    return []; // 如果发生错误，返回空数组
  }
};

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
    },
  ],
  '/template/root/native': [
    {
      text: 'template',
      items: getFilesItem('../template/native/')
    }
  ],
  '/template/native/': [
    {
      text: 'template',
      items: getFilesItem('../template/native/')
    }
  ]
}
