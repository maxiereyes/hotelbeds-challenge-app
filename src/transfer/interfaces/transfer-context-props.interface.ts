import { BookingPayload } from "./booking-payload.interface"
import { SearchTransfer } from "./search-transfer.interface"

export interface TransferContextProps {
    transferSearchState: {
        language: string,
        fromType: string,
        toType: string,
        fromCode: string,
        toCode: string,
        outbound: string,
        adults: number,
        infants: number,
        children: number,
    },
    booking: {
        language: string,
        holder: {
            name: string,
            surname: string,
            email: string,
            phone: string
        },
        transfers: {
            rateKey: string,
            transferDetails: {
                type: string,
                direction: string,
                code: string,
                companyName: string
            }[]
        }[],
        clientReference: string,
        remark: string
    }
    load: (payload: SearchTransfer) => void,
    reset: () => void,
    loadBooking: (payload: BookingPayload) => void
}