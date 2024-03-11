export interface Terminal {
    code: string,
    content: {
        type: string,
        description: string
    },
    countryCode: string,
    coordinates: {
        latitude: number,
        longitude: number
    },
    language: string
}