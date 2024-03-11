export const getFlagByCountryCode = (countryCode: string) => {
    const codePoinst = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0))
    return String.fromCodePoint(...codePoinst)
}