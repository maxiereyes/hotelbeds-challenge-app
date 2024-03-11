export interface BookingPayload {
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