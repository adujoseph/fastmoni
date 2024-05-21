import { request } from "./makeRequest"

export const getTables = async (payload = {}) => {
    const url = '/tables'
    const response = await request(url,'get', payload)
    return response
}
export const createTable = async (payload: any) => {
    const url = '/tables'
    const response = await request(url,'post', payload)
    return response
}
export const updateTable = async (payload: any) => {
    const url = '/tables'
    const response = await request(url,'put', payload)
    return response
}