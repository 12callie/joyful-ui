import { ref, createApp, h } from 'vue'
import Message from './Message.vue'
import { Theme } from './index'

interface MessageOptions {
  duration?: number
}

interface MountParams {
  text: string,
  options?: MessageOptions,
  theme: Theme
}

export const useMessage = () => {
  const messageRef = ref(null)

  const mount = ({
    text,
    options = { duration: 2500 },
    theme,
  }: MountParams) => {
    if (messageRef.value) return
    const div = document.createElement('div')
    document.body.appendChild(div)

    const messageDiv = createApp({
      render () {
        return h(Message, {
          textMessage: text,
          theme: theme,
        })
      },
    })
    messageRef.value = messageDiv
    messageDiv.mount(div)

    setTimeout(() => {
      messageDiv.unmount()
      div.remove()
      messageRef.value = null
    }, options.duration)
  }

  const showMessage = (
    text: string, options?: MessageOptions, theme?: Theme) => {
    mount({ text, options, theme })
  }

  return {
    info: (text: string, options?: MessageOptions) => {
      showMessage(text, options, 'info')
    },
    error: (text: string, options?: MessageOptions) => {
      showMessage(text, options, 'error')
    },
    warning: (text: string, options?: MessageOptions) => {
      showMessage(text, options, 'warning')
    },
    success: (text: string, options?: MessageOptions) => {
      showMessage(text, options, 'success')
    },
  }
}
