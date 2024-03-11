import { BookingPayload } from "./booking-payload.interface";
import { SearchTransfer } from "./search-transfer.interface";

export interface TransferPayloadProps {
    transferSearchState: SearchTransfer,
    booking: BookingPayload
}