"use client"

import { useCallback } from "react"

export const useNavigation = () => {
  const navigate = useCallback((path: string) => {
    window.location.href = path
  }, [])

  return navigate
}

