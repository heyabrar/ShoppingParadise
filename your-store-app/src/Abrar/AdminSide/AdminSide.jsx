import { Alert, Box, Button, Flex, Input, Select, Text, Toast, useToast} from "@chakra-ui/react";
import axios from "axios";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Apurba/context/AuthContext";

export default function AdminSide ( ) {
    const [title,setTitle] = useState('')
    const [url,setUrl] = useState('')
    const [price,setPrice] = useState('')
    const [Aprice,setAPrice] = useState('')
    const [discount,setDiscount] = useState('')
    const [category,setCategory] = useState('')
    const [brand,setBrand] = useState('');
    const [patch,setPatch] = useState('');
    const [patchID,setPatchID] = useState('');
    const [Delete,SetDelete] = useState('')
    const Toast  = useToast( );
    const [patchProduct,setPatchProduct] = useState('')
    const {user,isAdmin} = useContext(AuthContext)

    const handleAdd = (t,u,p,ap,d,c,b) =>{
        const payload = {
            title : t,
            image :u,
            price : p,
            actualPrice : ap,
            discount:d,
            category : c,
            brand : b
        }
        setTitle('');
        setUrl('');
        setPrice('');
        setAPrice('')
        setCategory('');
        setDiscount('')
        setBrand('');
        Toast({position : 'bottom',duration: 2000 ,render: ( )  => (<Box p={5} bg='#fc2779' color='white' borderRadius='10px' fontWeight='600'>Post Successful</Box>)})
        return axios.post(`https://adminside-yourstore.onrender.com/Products`, payload)
        .then((res)=>{

        })
        .catch((err)=> Alert('Error'))
    }

    const handleDelete = (D) =>{
        SetDelete('')
        Toast({position : 'bottom',duration: 2000 ,render: ( )  => (<Box p={5} bg='#fc2779' color='white' borderRadius='10px' fontWeight='600'>Deleted Successfully</Box>)})
        return axios.delete(`https://adminside-yourstore.onrender.com/Products/${D}`)
        .then((res)=>{

        })
    };

    const handlePatch = (patchID,patchProduct,patch) =>{
        const x = patchProduct;
        const payload ={ };
        payload[patchProduct] = patch;
        Toast({position : 'bottom',duration: 2000 ,render: ( )  => (<Box p={5} bg='#fc2779' color='white' borderRadius='10px' fontWeight='600'>Patch Successful</Box>)})
        return axios.patch(`https://adminside-yourstore.onrender.com/Products/${patchID}`, payload)
        .then((res)=>{
        })
    }

    return (
        <>
        <Flex justifyContent='space-around' color='#fc2779' alignItems='center'>
            <Link to='/adminbrands'><Text fontSize='18px' fontWeight='550'>Brands</Text></Link>
            <Text textAlign='center' fontSize={{base: '18px', md: '20px', lg : '26px'}} color='#fc2779' fontWeight='600'>ShoppingParadise.com</Text>
            <Link to='/admincategories'><Text fontSize='18px' fontWeight='550'>Categories</Text></Link>
        </Flex>

        <Text textAlign='center'>Admin Panel</Text>
        <Text textAlign='center' fontSize='22px'>Post</Text>
        <Flex border='5px solid #fc2779' width={{base : '95%', md : '90%', lg : '85%'}} m='auto' gap={{base : '5px', md :'20px' , lg : '40px'}} direction={{base : 'column', md: 'row'}} padding='20px' borderRadius='10px'>
        <Box  w={{base : '90%', md : '80%', lg : '50%'}} m='auto'>
            <Text>Title</Text>
            <Input placeholder="Enter Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <Text mt='10px'>Image URL</Text>
            <Input placeholder="Enter Image URL" value={url} onChange={(e)=>setUrl(e.target.value)}/>
            <Text mt='10px'>Price</Text>
            <Input placeholder="Enter Price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
            <Text mt='10px'>Actual Price</Text>
            <Input placeholder="Enter Actual Price" value={Aprice} onChange={(e)=>setAPrice(e.target.value)}/>
           </Box>

           <Box w={{base : '90%', md : '80%', lg : '50%'}} m='auto' >
            <Text mt='10px'>Discount</Text>
            <Input placeholder="Enter Discount" value={discount} onChange={(e)=>setDiscount(e.target.value)}/>
            <Text mt='10px'>Category</Text>
            <Select defaultValue={'--'} onChange={(e) => setCategory(e.target.value)} value={category}>
                <option value="--">--</option>
                <option value="skin">Skin</option>
                <option value="hair">Hair</option>
                <option value="men">Men</option>
                <option value="fragrance">Fragrance</option>
            </Select>
            <Text mt='10px'>Brand</Text>
            <Select defaultValue={'--'} onChange={(e)=> setBrand(e.target.value)} value={brand}>
                <option value="--">--</option>
                <option value="dotkey">Dot & Key</option>
                <option value="skinras">Skin Ras</option>
                <option value="loreal">Loreal</option>
                <option value="estee">Estee Lauder</option>
                <option value="garnier">Garnier</option>
                <option value="nykaa">Nykaa</option>
            </Select>
            <br /> <br />
            <Text fontSize='12px'>(Make Sure Category Matches The Brand)</Text>
            <Button onClick={( ) => handleAdd(title,url,price,Aprice,discount,category,brand)} 
            disabled={title==='' || url=== '' || price === '' || Aprice === '' || discount === '' || category === '' || brand === ''}
                color='white' bg={'#fc2779'} colorScheme='#fc2779'>Post</Button>
        </Box>
        </Flex>

        <Text textAlign='center' mt='3%' fontSize='22px'>Patch</Text>

        <Box border='5px solid #fc2779' w={{base : '95%',md : '70%', lg: '60%'}} m='auto' borderRadius='10px' padding='20px'>
            <Box width={{base : '90%'}} m='auto'>
                <Text>Product ID</Text>
            <Input placeholder="Enter Product ID" value={patchID} onChange={(e) => setPatchID(e.target.value)}/>
            <br /><br />
            <Text>Select Key</Text>
            <Select value={patchProduct} onChange={(e)=> setPatchProduct(e.target.value)}>
                <option value="--">--</option>
                <option value="title">Title</option>
                <option value="price">Price</option>
                <option value="actualPrice">Actual Pice</option>
                <option value="image">Image</option>
                <option value="discount">Discount</option>
            </Select>
            <br />
            <Text>Content</Text>
            <Input placeholder="Content" value={patch} onChange={(e) => setPatch(e.target.value)}/>
            <Button onClick={( ) => handlePatch(patchID,patchProduct,patch)} mt='20px' color='white' bg='#fc2779' colorScheme='#fc2779' disabled={patch === '' || patchID==='' || patchProduct === ''}>Patch</Button>
            </Box>
        </Box>

        <Text textAlign='center' fontSize='22px' mt='3%'>Delete</Text>
        <Box border='5px solid #fc2779' width={{base : '80%' ,md : '40%', lg : '20%'}} m='auto' padding='20px' borderRadius='10px' shadow='lg'>
        <Text>Delete</Text>
            <Box><Input placeholder='Enter Product Id To Delete' value={Delete} onChange={(e) => SetDelete(e.target.value)}/></Box>
            <br />
            <Button onClick={( ) => handleDelete(Delete)} color='white' bg='#fc2779' colorScheme='#fc2779'>Delete</Button>
        </Box>
        </>
    )   
}