import { useCallback } from 'react'
import useData from '../hooks/useData'

// every time the table need to fetch data, it will change all necessary states
// this helper hook will cover these changes separately from the table
// this will receive a fn to fetch data from server and a string to identify the data type need to be fetched
const useFetch = (fn, api) => {
  const { dispatch } = useData()

  const fetchData = useCallback(async () => {
    try {
      dispatch({ type: 'LOADING', apiType: api })
      const result = await fn()
      dispatch({ type: 'LOADING_SUCCESS', apiType: api })
      dispatch({ type: 'LOAD_DATA', payload: result.data, apiType: api })

      // handle fetching all data from API
      if (result.offset + result.limit >= result.total) {
        dispatch({ type: 'FETCHED_ALL', apiType: api })
      }
    } catch (error) {
      dispatch({ type: 'LOADING_FAILED', apiType: api })
    }

    dispatch({ type: 'STOP_LOADING', apiType: api })
  }, [dispatch, fn, api])

  return fetchData
}

export default useFetch
