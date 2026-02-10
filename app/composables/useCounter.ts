export const useCounter = () => {
  const counter = useState<number>('counter', () => 0)

  const fetchCounter = async () => {
    const { value } = await $fetch<{ value: number }>('/api/counter')
    counter.value = value
  }

  const increment = async () => {
    const { value } = await $fetch<{ value: number }>('/api/counter', {
      method: 'POST'
    })
    counter.value = value
  }

  return {
    counter,
    fetchCounter,
    increment
  }
}
