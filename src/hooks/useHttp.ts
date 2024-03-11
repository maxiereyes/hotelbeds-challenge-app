import { useEffect, useState } from "react"
import { httpAdapter } from "../adapters"

export const useHttp = <T>(url: string): {data: T | null, loading: boolean, error: Error | null} => {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        let isMounted = true

        const fetchData = async () => {
            try {
                const response = await httpAdapter.get<T>(url)
                if (isMounted) {
                    setData(response)
                    setLoading(false)
                }
            } catch (error) {
                if (isMounted) {
                    setError(error as Error)
                    setLoading(false)
                }
            }
        }

        fetchData()
 
        return () => {
            isMounted = false
        }
    }, [url])

    return {data, loading, error}
}