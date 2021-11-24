import { useCallback } from 'react'

const useSort = isDESC => {
  const sortByDateValue = useCallback(
    data => {
      if (data) {
        if (isDESC) {
          return data.sort(
            (current, next) => next.timestamp - current.timestamp,
          )
        } else {
          return data.sort(
            (current, next) => current.timestamp - next.timestamp,
          )
        }
      }
    },
    [isDESC],
  )

  return sortByDateValue
}

export default useSort
