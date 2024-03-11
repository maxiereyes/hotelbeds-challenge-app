import { useReducer } from "react"
import { TransferContext } from "./TransferContext"
import { transferReducer } from "./transferReducer"
import { BookingPayload, SearchTransfer } from "../transfer/interfaces"
import { TransferTypes } from "../types"

const initialState = {
    transferSearchState: {
        language: "es",
        fromType: "",
        toType: "",
        fromCode: "",
        toCode: "",
        outbound: "",
        adults: 0,
        infants: 0,
        children: 0
    },
    booking: {
        language: "es",
        holder: {
            name: "",
            surname: "",
            email: "",
            phone: ""
        },
        transfers: [{
            rateKey: "",
            transferDetails: []
        }],
        clientReference: "",
        remark: ""
    }
}

export const TransferProvider = ({children}: {children: JSX.Element}) => {
    const [state, dispatch] = useReducer(transferReducer, initialState)


    const load = (searchValues: SearchTransfer) => {
        dispatch({
            type: TransferTypes.load,
            payload: {
                ...state,
                transferSearchState: searchValues,   
            }
        })
    }

    const reset = () => {
        dispatch({
            type: TransferTypes.reset,
            payload: initialState
        })
    }

    const loadBooking = (payload: BookingPayload) => {
        dispatch({
            type: TransferTypes.loadBooking,
            payload: {
                ...state,
                booking: payload
            }
        })
    }

  return (
    <TransferContext.Provider value={{...state, load, reset, loadBooking}}>
        {children}
    </TransferContext.Provider>
  )
}
