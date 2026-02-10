import { incrementCounter } from "../utils/counter"

export default defineEventHandler(async () => {
  return {
    value: await incrementCounter()
  }
})
