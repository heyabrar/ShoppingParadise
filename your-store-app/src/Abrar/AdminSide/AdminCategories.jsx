import { Flex, List, ListIcon, ListItem, OrderedList, Text } from "@chakra-ui/react";
import { IoMdCheckmarkCircle, IoMdSettings } from "react-icons/io";

export default function AdminCategoriesPage( ) {
    return (
        <>
         <Text textAlign='center' fontSize={{base  :'16px', md : '20px' ,lg  :'30px'}} color='#fc2779' fontWeight='550'>CATEGORIES</Text>
         <Flex justifyContent='space-around' width={{base  :'90%', md  :'80%'}} m='auto' mt='2%' fontSize='18px'> 
            <Text>Skin (skin)</Text>
            <Text>Men (men)</Text>
            <Text>Hair (hair)</Text>
            <Text>Fragrance (fragrance)</Text>
         </Flex>
        </>
    )
}