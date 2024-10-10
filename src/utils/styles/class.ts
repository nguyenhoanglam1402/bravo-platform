export const mergeClasses = (...classes: string[]) => {
  return classes.flat().filter(Boolean).join(' ').trim()
}
