import axios from 'axios'
export const FetchDotKeyData = (page=1,SetTotalPage) =>{
    return fetch(`https://yourstore-com-backend-server.onrender.com/skin?_page=${page}&_limit=12`)
    .then((res)=>{
        SetTotalPage(Number(res.headers.get('X-Total-Count')))
        return res.json ( );
    })
};


export const FetchSingleDotKeyPage = (id) =>{
    return axios.get(`https://yourstore-com-backend-server.onrender.com/skin/${id}`)
};


export const FetchLorealData = (page=1,setTotalPage) =>{
    return fetch(`https://yourstore-com-backend-server.onrender.com/SkinLoreal?_page=${page}&_limit=6`)
    .then((res)=> {
       setTotalPage(Number(res.headers.get('X-Total-Count')))
       return res.json( );
    })
};

export const FetchSingleLorealData = (id) =>{
    return axios.get(`https://yourstore-com-backend-server.onrender.com/skinloreal/${id}`)
};


export const FetchEsteeData = (page,setTotalPage) =>{
    return fetch(`https://yourstore-com-backend-server.onrender.com/skinEsteeLauder?_page=${page}&_limit=6`)
    .then((res)=>{
        setTotalPage(Number(res.headers.get('X-Total-Count')))
        return res.json( )
    })
}

export const FetchEsteeSingleData = (id) =>{
    return axios.get(`https://yourstore-com-backend-server.onrender.com/skinEsteeLauder/${id}`)
}


export const FetchHairData = (page=1,setTotalPage) =>{
    return fetch(`https://adminside-yourstore.onrender.com/Products?_page=${page}&_limit=6&category=hair&brand=loreal`)
    .then((res)=> {
       setTotalPage(Number(res.headers.get('X-Total-Count')))
       return res.json( );
    })
};

export const FetchSingleHairData = (id) =>{
    return axios.get(`https://adminside-yourstore.onrender.com/Products/${id}?category=hair&brand=loreal`)
};






