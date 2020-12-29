import { toUnicode } from "punycode"

export const state = () => ({
  list: []
})

export const mutations = {
  add (state: any, text: string) {
    state.list.push({
      text: text,
      done: false
    })
  },
  toggle (state: any, todo: any) {
    todo.done = !todo.done
  }
}
