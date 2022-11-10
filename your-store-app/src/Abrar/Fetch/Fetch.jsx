import axios from 'axios'
export const FetchDotKeyData = (page=1,SetTotalPage) =>{
    return fetch(`https://yourstore-com-backend-server.onrender.com/skin?_page=${page}&_limit=12`)
    .then((res)=>{
        SetTotalPage(Number(res.headers.get('X-Total-Count')))
        return res.json ( );
    })
}
export const FetchLorealData = ( ) =>{
    return axios.get(`https://yourstore-com-backend-server.onrender.com/SkinLoreal`)
}