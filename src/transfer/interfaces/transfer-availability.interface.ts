export interface Service {
    
        id: number,
        direction: string,
        transferType: string,
        vehicle: {
            code: string,
            name: string
        },
        category: {
            code: string,
            name: string
        },
        pickupInformation: {
            from: {
                code: string,
                description: string,
                type: string
            },
            to: {
                code: string,
                description: string,
                type: string
            },
            date: string,
            time: string,
            pickup: {
                address: string,
                number: string,
                town: string,
                zip: string,
                description: string,
                altitude: string,
                latitude: number,
                longitude: number,
                useWebCheckpickup: boolean,
                pickupId: number,
                stopName: string,
                image: string
            }
        },
        minPaxCapacity: number,
        maxPaxCapacity: number,
        content: {
            vehicle: {
                code: string,
                name: string
            },
            category: {
                code: string,
                name: string
            },
            images: {
                url: string,
                type: string
            }[],
            transferDetailInfo: {
                id: string,
                name: string,
                description: string,
                type: string
            }[],
            transferRemarks: {
                type: string,
                description: string,
                mandatory: boolean
            }[],
            customerTransferTimeInfo: string,
            supplierTransferTimeInfo: string
        },
        price: {
            totalAmount: number,
            netAmount: number,
            currencyId: string
        },
        rateKey: string,
        cancellationPolicies: {
            amount: number,
            from: string,
            currencyId: string
        }[],
        links: {
            rel: string,
            href: string
        }[],
        factsheetId: number;
}

export interface TransferAvailability {
    search: {
        language:  string,
        departure: {
            date: string,
            time: string
        },
        comeBack:  {
            date: string,
            time: string
        },
        occupancy: {
            adults:   number,
            children: number,
            infants:  number
        },
        from: {
            code: string,
            description: string,
            type: string
        },
        to: {
            code: string,
            description: string,
            type: string
        }
    },
    services: Service[]
        
}