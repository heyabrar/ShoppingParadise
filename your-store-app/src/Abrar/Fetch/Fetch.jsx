import axios from 'axios'
export const FetchDotKeyData = (page=1,SetTotalPage) =>{
    return fetch(`https://adminside-yourstore.onrender.com/Products?_page=${page}&_limit=9&category=skin&brand=dotkey`)
    .then((res)=>{
        SetTotalPage(Number(res.headers.get('X-Total-Count')))
        return res.json ( );
    })
};


export const FetchSingleDotKeyPage = (id) =>{
    return axios.get(`https://adminside-yourstore.onrender.com/Products/${id}?category=skin&brand=dotkey`)
};


export const FetchLorealData = (page=1,setTotalPage) =>{
    return fetch(`https://adminside-yourstore.onrender.com/Products?_page=${page}&_limit=6&category=skin&brand=loreal`)
    .then((res)=> {
       setTotalPage(Number(res.headers.get('X-Total-Count')))
       return res.json( );
    })
};

export const FetchSingleLorealData = (id) =>{
    return axios.get(`https://adminside-yourstore.onrender.com/Products/${id}?category=skin&brand=loreal`)
};


export const FetchEsteeData = (page=1,setTotalPage) =>{
    return fetch(`https://adminside-yourstore.onrender.com/Products?_page=${page}&_limit=6&category=skin&brand=estee`)
    .then((res)=>{
        setTotalPage(Number(res.headers.get('X-Total-Count')))
        return res.json( );
    })
}

export const FetchEsteeSingleData = (id) =>{
    return axios.get(`https://adminside-yourstore.onrender.com/Products/${id}?category=skin&brand=estee`)
}

export const FetchRasPageData = (page=1,setTotalPage) =>{
    return fetch(`https://adminside-yourstore.onrender.com/Products?_page=${page}&_limit=6&category=skin&brand=skinras`)
    .then((res)=>{
        setTotalPage(Number(res.headers.get('X-Total-Count')))
        return res.json( )
    })
}

export const FetchRasSingleData = (id) =>{
    return axios.get(`https://adminside-yourstore.onrender.com/Products/${id}?category=skin&brand=skinras`)
}

export const FetchMensGarnierData = (page=1,setTotalPage) =>{
    return fetch(`https://adminside-yourstore.onrender.com/Products?_page=${page}&_limit=6&category=men&brand=garnier`)
    .then((res)=>{
        setTotalPage(Number(res.headers.get('X-Total-Count')))
        return res.json( )
    })
};

export const FetchMensGarnierSingleData = (id) =>{
    return axios.get(`https://adminside-yourstore.onrender.com/Products/${id}?category=men&brand=garnier`)
}

export const FetchCartData = ( ) =>{
    return axios.get(`https://adminside-yourstore.onrender.com/cart`)
}

export const DeleteFromCart = (id) =>{
    return axios.delete(`https://adminside-yourstore.onrender.com/cart/${id}`)
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


export const FetchFregrenceData = (page=1,setTotalPage) =>{
    return fetch(`https://adminside-yourstore.onrender.com/Products?_page=${page}&_limit=6&category=fragrance&brand=nykaa`)
    .then((res)=> {
       setTotalPage(Number(res.headers.get('X-Total-Count')))
       return res.json( );
    })
};

export const FetchSingleFregranceData = (id) =>{
    return axios.get(`https://adminside-yourstore.onrender.com/Products/${id}?category=fragrance&brand=nykaa`)
};



