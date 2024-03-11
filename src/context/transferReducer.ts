import { TransferPayloadProps, TransferStateReducer } from "../transfer/interfaces"
import { TransferTypes } from "../types"

export const transferReducer = (state: TransferStateReducer, action: {type: string, payload: TransferPayloadProps}) => {
    switch (action.type) {
        case TransferTypes.load:
            return {
                ...state,
                transferSearchState: action.payload.transferSearchState,
            }
        case TransferTypes.reset:
            return {
                ...action.payload
            }
        case TransferTypes.loadBooking:
            return {
                ...state,
                booking: action.payload.booking
            }
        default:
            return state
    }
}
