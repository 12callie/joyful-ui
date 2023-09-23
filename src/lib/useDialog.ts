import Dialog from './Dialog.vue'
import { createApp, h } from 'vue'

type DialogOptions = {
  theme?: 'confirm' | 'success' | 'error',
  title?: string,
  content?: string,
  negativeText?: string,
  positiveText?: string,
  ok?: Function,
  cancel?: Function,
  closeOnClickOverlay?: boolean
}

export const useDialog = (options: DialogOptions) => {
  const {
    theme,
    title,
    content,
    negativeText,
    positiveText,
    ok,
    cancel,
    closeOnClickOverlay,
  } = options
  const div = document.createElement('div')
  document.body.appendChild(div)
  const close = () => {
    dialogDiv.unmount()
    div.remove()
  }
  const dialogDiv = createApp({
    render () {
      return h(Dialog, {
        dialogVisible: true,
        theme,
        title,
        content,
        negativeText,
        positiveText,
        ok,
        cancel,
        closeOnClickOverlay,
        'onUpdate:dialogVisible': (newValue: boolean) => {
          if (newValue === false) {
            close()
          }
        },
      })
    },
  })
  dialogDiv.mount(div)
}
