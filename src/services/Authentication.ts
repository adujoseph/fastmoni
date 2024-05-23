import { requestHandler } from "./makeRequest"

export const createUser = async (payload = {}) => {
    const url = '/register'
    const response = await requestHandler(url,'post', payload)
    return response
}
export const signinUser = async (payload: any) => {
    const url = '/login'
    const response = await requestHandler(url,'post', payload)
    return response
}
export const getAllUsers = async (payload: any) => {
    const url = '/users'
    const response = await requestHandler(url,'get', payload)
    return response
}