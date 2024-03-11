/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from "axios";
import { HttpAdapter } from "./interfaces/http.interface";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

export const AxiosAdapter: HttpAdapter = {
    async get<T>(url:string): Promise<T> {
        const response: AxiosResponse<T> = await axiosInstance.get(url)
        return response.data
    },

    async post<T>(url:string, data: any): Promise<T> {
        const response: AxiosResponse<T> = await axiosInstance.post(url, data)
        return response.data
    }

    
}