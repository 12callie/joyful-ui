// @ts-nocheck

import * as fs from 'fs'
import { baseParse } from '@vue/compiler-core'

export default {
  vueCustomBlockTransforms: {
    demo: (options) => {  //文件中含有demo标签，就会进行处理
      const { path } = options
      const file = fs.readFileSync(path).toString()
      const parsed = baseParse(file).children.find((n) => n.tag === 'demo')  //就是那个 demo标签
      const title = parsed.children[0].content //demo 标签里写的内容
      const main = file.split(parsed.loc.source).join('').trim()
      return `export default function (Component) {
        Component.__sourceCode = ${JSON.stringify(main)}   //代码部分
        Component.__sourceCodeTitle = ${JSON.stringify(title)}   //标题部分，也就是demo标签里的内容
      }`.trim()
    },
  },
}
