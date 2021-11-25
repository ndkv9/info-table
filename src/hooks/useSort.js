import { useCallback } from 'react'

// helper hook to sort date values base on the order it receives
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
