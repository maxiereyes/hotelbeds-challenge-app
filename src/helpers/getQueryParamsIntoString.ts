type Params = {
    [key: string]: string | number
}

export const getQueryParamsIntoString = (params: Params) => {
    return Object.keys(params)
    .map(key => `${key}=${params[key]}`)
    .join('&')
}