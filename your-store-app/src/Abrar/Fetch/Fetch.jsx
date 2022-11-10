import axios from 'axios'
export const FetchDotKeyData = ( ) =>{
    return axios.get(`https://yourstore-com-backend-server.onrender.com/skin`)
}

export const FetchLorealData = ( ) =>{
    return axios.get(`https://yourstore-com-backend-server.onrender.com/SkinLoreal`)
}