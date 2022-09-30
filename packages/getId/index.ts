const idMap: any = {}

export function getId(prefix = '_') {
  idMap[prefix] === undefined && (idMap[prefix] = 0)
  return `${prefix || ''}${idMap[prefix] ++}`
}
