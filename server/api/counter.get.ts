import { getCounter } from "../utils/counter"

export default defineEventHandler(async () => {
  return {
    value: await getCounter()
  }
})
