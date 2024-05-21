import { request } from "./makeRequest"

export const requestOtp = async (payload: any) => {
    try{
        const url = '/otp/generate'
        const response = await request(url,'post', payload)
        return response
    }catch(err){
        console.log(err)
        throw new Error
    }
  
}
export const validateOtp = async (payload: any) => {
    const url = '/otp/validate'
    const response = await request(url,'post', payload)
    return response
}