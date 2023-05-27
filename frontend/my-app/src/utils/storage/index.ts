export const getStorage = (
  type: "localStorage" | "sessionStorage",
  key: string
) => {
  if (type !== "localStorage" && type !== "sessionStorage") return null
  const data =
    type === "localStorage"
      ? localStorage.getItem(key)
      : sessionStorage.getItem(key)
  try {
    if (!data) return null
    const dataAsJson = JSON.parse(data)
    if (dataAsJson.expirationTime) {
      if (new Date().getTime() > dataAsJson.expirationTime) {
        sessionStorage.removeItem(key)
        return null
      }
    }
    return dataAsJson.value
  } catch (err) {
    return null
  }
}

export const setStorage = (
  type: "localStorage" | "sessionStorage",
  key: string,
  value: any,
  ttlMs?: number
) => {
  if (type !== "localStorage" && type !== "sessionStorage") return null
  const storage = type === "localStorage" ? localStorage : sessionStorage
  storage.setItem(
    key,
    JSON.stringify(
      ttlMs
        ? {
            value: value,
            expirationTime: new Date().getTime() + ttlMs,
          }
        : { value }
    )
  )
}

export const generateSimpleHashKey = (string: string) => {
  let hash = 0
  for (let i = 0; i < string.length; i++) {
    const char = string.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash
  }
  return hash.toString()
}
