import { useCallback } from 'react'
import useData from '../hooks/useData'

const useFetch = fn => {
  const { dispatch } = useData()

  const fetchData = useCallback(async () => {
    try {
      dispatch({ type: 'LOADING' })
      const result = await fn()
      dispatch({ type: 'LOADING_SUCCESS' })
      dispatch({ type: 'LOAD_DATA', payload: result.data })
      if (result.offset + result.limit >= result.total) {
        dispatch({ type: 'FETCHED_ALL' })
      }
    } catch (error) {
      dispatch({ type: 'LOADING_FAILED' })
    }

    dispatch({ type: 'STOP_LOADING' })
  }, [dispatch, fn])

  return fetchData
}

export default useFetch
