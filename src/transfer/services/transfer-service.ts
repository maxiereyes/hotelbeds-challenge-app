import { httpAdapter } from "../../adapters"
import { Booking, BookingPayload, TransferAvailability } from "../interfaces"

export const TransferService = {
    postBooking: async (data: BookingPayload): Promise<Booking> => {
        const response = await httpAdapter.post<Booking>('/transfer/bookings', data)
        return response
    },

    getAvailability: async (url: string) => {
        const response = await httpAdapter.get<TransferAvailability>(url)
        return response
    }
}