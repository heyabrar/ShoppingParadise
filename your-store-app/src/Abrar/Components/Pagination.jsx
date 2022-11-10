import { Box, Button, Flex } from "@chakra-ui/react"
import {GrPrevious, GrNext} from 'react-icons/gr'

export default function Pagination ({current,onChange,totalPage}){    
    return (
        <>
        <Flex w={{base : '30%', md : '20%', lg : '10%'}} m='auto' justifyContent='space-between' mt={{base : '20px'}} fontSize={{base : '20px'}} color='#fc2779' paddingBottom='20px'>
        <Button onClick={( ) => onChange(current-1)} disabled={current===1} bg='#fc2779' size={{base : 'sm', md : 'md'}} color='white' colorScheme='#fc2779'><GrPrevious/></Button>
       <Button onClick={( ) => onChange(current+1)} disabled={current === Math.ceil(totalPage/15)}  bg='#fc2779' size={{base : 'sm', md : 'md'}} color='white' colorScheme='#fc2779'><GrNext/></Button>
        </Flex>
      
        </>
    )
}