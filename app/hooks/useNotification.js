'use client'

import { useEffect, useState } from 'react'
import { useSismo } from '@/app/hooks/useSWR'

const useNotification = () => {
  const [notification, setNotification] = useState(null)

  const { isError, isLoading, sismo } = useSismo()

  useEffect(() => {
    if (!isLoading && !isError && sismo.status !== 'success') {
      setNotification(sismo)
    }
  }, [])

  return {
    notification
  }
}

export { useNotification }
