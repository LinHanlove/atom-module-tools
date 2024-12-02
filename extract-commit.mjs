import { execSync } from 'child_process'
import fs from 'fs/promises'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

const commitInfoDir = resolve(__dirname, 'docs') // 文件夹路径
const commitInfoPath = resolve(__dirname, 'docs/src', 'commitInfo.js') // 文件路径

console.log('Directory:', commitInfoDir)
console.log('File Path:', commitInfoPath)

// 检查文件是否存在，如果不存在，则创建文件
async function createFileIfNotExists(filePath) {
  try {
    await fs.access(filePath) // 检查文件是否存在
  } catch (error) {
    // 如果文件不存在，创建文件并初始化为空
    await fs.writeFile(filePath, '')
    console.log('File did not exist, creating it now...')
  }
}

// 写入 commit 信息到文件
async function extractCommitInfo() {
  try {
    // 确保文件存在
    await createFileIfNotExists(commitInfoPath)

    // 执行 Git 命令获取 commit 消息
    const commitMessagesRaw = execSync('git log --pretty=%B').toString()

    // 执行 Git 命令获取所有提交的时间
    const commitTime = execSync('git log --pretty=%ad --date=format:"%Y-%m-%d %H:%M:%S"')
      .toString()
      .trim()
      .split('\n')

    const commitHash = execSync('git log --pretty=format:"%h"').toString().trim().split('\n')

    // 使用正则表达式按两个换行符分割 message
    const commitMessages = commitMessagesRaw.split(/\n\n/).map((msg) => msg.trim())

    // 创建新的 commit 对象数组
    const newCommitEntries = commitMessages.map((i, idx) => {
      return `{ 
          hash: ${JSON.stringify(commitHash[idx])},
          message:${JSON.stringify(i)},
          commitTime:${JSON.stringify(commitTime[idx])}
        }`
    })
    // 将 commit 信息格式化为对象
    const commitInfo = `export const commitHistory = [
      ${newCommitEntries}
    ];`

    // 写入 commit 信息到文件
    await fs.writeFile(commitInfoPath, commitInfo)
    console.log('Commit information has been extracted.')
  } catch (error) {
    console.error('Error writing commit information:', error.message)
  }
}

// extractCommitInfo()
