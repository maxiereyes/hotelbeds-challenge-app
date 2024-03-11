export interface Hotel {
    code: string,
    name: string,
    category: string,
    description: string,
    address: string,
    countryCode: string,
    destinationCode: string,
    coordinates: {
        latitude: number,
        longitude: number
    },
    city: string,
    postalCode: string,
    distance: number
}
    