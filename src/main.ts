import './style.css'
import typescriptLogo from './typescript.svg'
import { copyText, rgbGray, is, isDef, isEmpty, isObject, DATA_CONSTANT, isLeapYear, getUrlParams, randomHexColor, removeElementMark, preventRightKey } from '@/main';

// url地址
const url = 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&tn=49055317_48_hao_pg&wd=atom-tools'

const str = '<p>hello world</p>';

const copy = (e: string) => {
  preventRightKey()

  console.log('颜色灰度化', rgbGray(['96', '77', '77']))

  console.log('解析地址栏参数', getUrlParams(url));

  console.log('随机生成颜色', randomHexColor());

  console.log('删除元素标记', removeElementMark(str));


  // 传入date
  console.log(isLeapYear(2024)) // 04-29

  // 传入时间戳
  console.log(isLeapYear(2023)) // 04-29

  console.log(is('123', 'String')); // true
  console.log(isDef('123')); // true
  console.log(isDef(undefined)); // false
  console.log(isObject(null)); // false
  console.log(isObject({})); // true
  console.log(isEmpty(null)); // true
  console.log(isEmpty({ a: 1 })); // false



  return copyText({
    value: e, callback: () => {
      console.log(DATA_CONSTANT.LAST_WEEK);
    }
  })
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button" >atom</button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`
document.getElementById('counter')?.addEventListener('click', () => copy('atom'))


