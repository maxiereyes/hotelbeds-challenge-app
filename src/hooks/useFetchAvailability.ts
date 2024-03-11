/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { getQueryParamsIntoString } from "../helpers"
import { TransferAvailability } from "../transfer/interfaces"
import Swal from "sweetalert2"
import { TransferService } from "../transfer/services"

interface Props {
    titleLoading: string,
    textLoading: string,
    titleError: string
}

interface QueryParamsAvailability {
    [key: string]: string | number
}

export const useFetchAvailability = ({titleLoading, textLoading, titleError}: Props) => {
    const [data, setData] = useState<TransferAvailability | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    const getAvailability = async (queryParams: QueryParamsAvailability) => {
        try {
            setIsLoading(true)
            setError("")
            const queryString = getQueryParamsIntoString(queryParams)
            const url = `/transfer/availability?${queryString}`
            const response = await TransferService.getAvailability(url)
            setData(response)
        } catch (error) {
            const {message} = error as Error
            setError(message as string)
        } finally {
            setIsLoading(false)
        }
    }

    const onReset = () => {
        setData(null)
        setError("")
    }

    useEffect(() => {
        if (isLoading && !data) {
          Swal.fire({
            title: titleLoading,
            text: textLoading,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
            }
          })
        } else {
          Swal.close()
        }
      }, [isLoading])

    useEffect(() => {
        if (error) {
            Swal.fire({
              icon: 'error',
              title: titleError,
              text: error
            })
        }
    }, [error])

    return {
        data,
        error,
        isLoading,
        onReset,
        getAvailability
    }
}