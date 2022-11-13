import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import StaticCarousel from "../CustomComponents/StaticCarousel";
import BrandsYouCantMiss from "./BrandsYouCantMiss";
export default function HomeTopBrands ( ) {
    const topBrands = [
        {
            id : 1,
            image : 'https://images-static.nykaa.com/uploads/ee143edb-ebc4-42d6-a955-63d0a5ffbe52.gif?tr=w-600,cm-pad_resize',
        },
        {
            id : 2,
            image : 'https://images-static.nykaa.com/uploads/5c431d1f-aff3-42df-a82b-59ce1cedeecc.jpg?tr=w-600,cm-pad_resize    '
        },
        {
            id : 3,
            image : 'https://images-static.nykaa.com/uploads/7c547eb5-80a0-4095-9adf-eeb6252ce94f.gif?tr=w-600,cm-pad_resize',
        },
        {
            id : 4,
            image : 'https://images-static.nykaa.com/uploads/cabc302f-96e6-42f2-b89a-ef35fbc8786e.jpg?tr=w-600,cm-pad_resize',
        },
        {
            id : 5,
            image : 'https://images-static.nykaa.com/uploads/adf25e46-c804-4122-8bbc-5f52dcc21232.jpg?tr=w-600,cm-pad_resize',
        },  {
            id : 6,
            image : 'https://images-static.nykaa.com/uploads/600fff77-a05f-461f-946e-2650fad35e8d.jpg?tr=w-600,cm-pad_resize',
        },
        {
            id : 7,
            image : 'https://images-static.nykaa.com/uploads/7cd66dc1-d218-4c89-840f-487f7a9238f9.jpg?tr=w-600,cm-pad_resize',
        },
        {
            id : 8,
            image : 'https://images-static.nykaa.com/uploads/6de8eb62-e37b-44ed-9b29-865b9caebfc7.jpg?tr=w-600,cm-pad_resize',
        }

    ]

    const data = [ 
        {
            id : 1,
            image : 'https://images-static.nykaa.com/uploads/f9cfaae2-c9b4-49ac-a41e-e87d4ad46d62.jpg?tr=w-200,cm-pad_resize'
        },
        {
            id : 2,
            image : 'https://images-static.nykaa.com/uploads/a5fb58d0-4b5a-4f7b-8ce1-6a6f3b04e542.jpg?tr=w-200,cm-pad_resize'
        },
        {
            id : 3,
            image : 'https://images-static.nykaa.com/uploads/174cc9a9-73ce-47b3-8776-a534cfdc929b.jpg?tr=w-200,cm-pad_resize'
        },
        {
            id : 4,
            image : 'https://images-static.nykaa.com/uploads/cc1cff17-5f28-4234-9717-ad64623df694.jpg?tr=w-200,cm-pad_resize'
        },
        {
            id : 5,
            image : 'https://images-static.nykaa.com/uploads/bba63b5a-afd3-4e3a-8790-85e077c9aba4.jpg?tr=w-200,cm-pad_resize'
        },
        {
            id : 6,
            image : 'https://images-static.nykaa.com/uploads/b02ec567-2bee-449e-b320-39116cfca7c3.jpg?tr=w-200,cm-pad_resize'
        },
        {
            id : 7,
            image : 'https://images-static.nykaa.com/uploads/25c00bd4-d1d7-4404-b76d-77466680b7cf.jpg?tr=w-200,cm-pad_resize'
        },
        {
            id : 8,
            image : 'https://images-static.nykaa.com/uploads/8ec7b4cb-d2e6-449e-ae26-04474f18e132.jpg?tr=w-200,cm-pad_resize'
        },
        {
            id : 9,
            image : 'https://images-static.nykaa.com/uploads/f9cfaae2-c9b4-49ac-a41e-e87d4ad46d62.jpg?tr=w-200,cm-pad_resize'
        },
        {
            id : 10,
            image : 'https://images-static.nykaa.com/uploads/1795f3c8-99fe-4c97-b9f7-9f718db79770.jpg?tr=w-200,cm-pad_resize'
        },
        {
            id : 11,
            image : 'https://images-static.nykaa.com/uploads/260c7929-ee2c-4efa-a300-e33afd207f00.jpg?tr=w-200,cm-pad_resize'
        },
        
    ]


    const onlyNyka = [
        {
            id : 1,
            image : 'https://images-static.nykaa.com/uploads/9841570d-a378-4336-90f2-3dfb72025f18.jpg?tr=w-600,cm-pad_resize'
        },
        {
            id : 2,
            image : 'https://images-static.nykaa.com/uploads/c3e93c65-2c05-49a2-9066-5c787b54b361.jpg?tr=w-600,cm-pad_resize'
        },
        {
            id : 3,
            image : 'https://images-static.nykaa.com/uploads/1de4c6ae-e18c-4c7d-b106-ce5d29010ee0.jpg?tr=w-600,cm-pad_resize'
        },
        {
            id : 4,
            image : 'https://images-static.nykaa.com/uploads/aeea39f7-f271-4c14-8025-eab3ef8f8abc.gif?tr=w-600,cm-pad_resize'
        }
    ]

    return (
        <>
             <Text textAlign='center' fontSize={{base : '18px', md: '20px', lg: '26px'}} mt='2%' fontWeight='550' letterSpacing='2px'>TOP BRANDS</Text>
        <SimpleGrid columns={[2,2,2,2]} width={{base:  '95%', md :'90%', lg : '80%'}} m='auto' mt={{base : '20px', md : '30px'}} rowGap={{base : '20px', md : '25px', lg: '35px'}}>
            {topBrands.length > 0 && topBrands.map((elem)=>{
                return <Box key={elem.id} width={{base : '95%', lg: '80%'}} m='auto'>
                   <Link to={elem.id === 3 ? '/skinloreal' : elem.id === 2 ? '/skinras' : elem.id === 4 ? '/skinestee' :     'skindotkey'}><Image m='auto' width={{base :'180px', md :'300px', lg : '500px'}} src={elem.image}/></Link> 
                </Box>
            })}
        </SimpleGrid>

        <Box mt={{base : '30px', md :'40px', lg : '50px'}} bg='pink'>
            <Box>
                <Link to='/skinloreal'><Image src="https://images-static.nykaa.com/uploads/6892016b-f17f-4ddb-b463-452ef88fc8d6.png?tr=w-1200,cm-pad_resize"/></Link>
            </Box>
        <StaticCarousel data={data} laptop={6} tab={5} mobile={5} redirect='/skinloreal'/>
        </Box>

        <Text textAlign='center' fontSize={{base : '18px', md: '20px', lg: '26px'}} mt={{base : '45px', md: '50px', lg : '7%'}} fontWeight='550' letterSpacing='2px'>ONLY AT SHOPPING PARADISE</Text>
        <SimpleGrid columns={[2,2,2,2]} width={{base:  '95%', md :'90%', lg : '80%'}} m='auto' mt={{base : '20px', md : '30px'}} rowGap={{base : '20px', md : '25px', lg: '35px'}}>
            {onlyNyka.length > 0 && onlyNyka.map((elem)=>{
                return <Box key={elem.id} width={{base : '95%', lg: '80%'}} m='auto'>
                    <Image m='auto' width={{base :'180px', md :'300px', lg : '500px'}} src={elem.image}/>
                </Box>
            })}
        </SimpleGrid>

        <Box mt='5%'>
        <BrandsYouCantMiss/>
        </Box>
        </>
    )
}