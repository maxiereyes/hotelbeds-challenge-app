/* eslint-disable @typescript-eslint/no-explicit-any */
export interface HttpAdapter {
    get<T>(url: string): Promise<T>,
    post<T>(url: string, data: any): Promise<T>
}