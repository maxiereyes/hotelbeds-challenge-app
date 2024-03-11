import { BookingPayload } from "./booking-payload.interface";
import { SearchTransfer } from "./search-transfer.interface";

export interface TransferStateReducer {
    transferSearchState: SearchTransfer,
    booking: BookingPayload
}