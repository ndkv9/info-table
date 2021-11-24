// helper fn to transform timestamp to date value with format: YYYY-MM-DD
const getDateValue = timestamp => {
  const partsOfDate = new Date(timestamp).toLocaleDateString().split('/')
  const year = partsOfDate.pop()
  partsOfDate.unshift(year)
  const date = partsOfDate.join('-')

  return date
}

export default { getDateValue }
