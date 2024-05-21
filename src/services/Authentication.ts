import { request } from "./makeRequest"

export const createUser = async (payload = {}) => {
    const url = '/users'
    const response = await request(url,'post', payload)
    return response
}
export const signinUser = async (payload: any) => {
    const url = '/users/signin'
    const response = await request(url,'post', payload)
    return response
}
export const getAllUsers = async (payload: any) => {
    const url = '/users'
    const response = await request(url,'get', payload)
    return response
}