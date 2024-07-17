export const isCallbackValid  = (f : Function | undefined) => {
  if (f !== null && f !== undefined && typeof Function === 'function') {
    return true
  } else {
    return false
  }
}