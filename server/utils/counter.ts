export async function incrementCounter() {
  const storage = useStorage('counter')

  const current = (await storage.getItem<number>('value')) ?? 0
  const next = current + 1

  await storage.setItem('value', next)
  return next
}

export async function getCounter() {
  const storage = useStorage('counter')
  return (await storage.getItem<number>('value')) ?? 0
}
