import './style.css'
import typescriptLogo from './typescript.svg'
import { copyText } from '@/main';


const list = [
  { name: '张三', age: 18 },
  { name: '李四', age: 22 },
  { name: '王五', age: 18 },
]


const copy = (e: string) => {

  return copyText({
    value: e, callback: (e) => {
      console.log('hahha');

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


