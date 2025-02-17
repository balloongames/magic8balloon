import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('store', () => {
  const state: Ref<'balloon' | 'response'> = ref('balloon')
  function setState(newState: 'balloon' | 'response') {
    state.value = newState
  }
  const response: Ref<string> = ref('')

  function getNewResponse(): void {
    const responses = [
      `It is certain`,
      `It is decidedly so`,
      `Without a doubt`,
      `Yes definitely`,
      `You may rely on it`,
      `As I see it, yes`,
      `Most likely`,
      `Outlook good`,
      `Yes`,
      `Signs point to yes`,
      `Reply hazy, try again`,
      `Ask again later`,
      `Better not tell you now`,
      `Cannot predict now`,
      `Concentrate and ask again`,
      `Don't count on it`,
      `My reply is no`,
      `My sources say no`,
      `Outlook not so good`,
      `Very doubtful`,
    ]
    const newResponse = responses[Math.floor(Math.random() * responses.length)]
    response.value = newResponse
  }

  return { state, setState, response, getNewResponse }
})
