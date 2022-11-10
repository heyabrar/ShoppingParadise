import  {Box, Flex, GridItem, Image, List, SimpleGrid, Text, UnorderedList} from '@chakra-ui/react'
import {GrMail} from 'react-icons/gr'
import {BsPhone,BsFillTelephoneFill,BsInstagram,BsFacebook,BsTwitter,BsYoutube,BsPinterest,BsSnapchat} from 'react-icons/bs'
export default function Footer ( ) {
    return (
        <>
        <Box bg='#2D3748' color='white' padding='20px' mt='10px' fontWeight='550'>
            <SimpleGrid columns={[1,2,3,3]} w={{base : '95%', md: '100%'}} m='auto' rowGap={'10px'}>
                <Box fontSize={{base : '12px', lg : '15px'}}>
                    <Flex alignItems='center'  justifyContent='center' gap='10px'>
                        <GrMail/>
                        <Text>Get special discount on your inbox</Text>
                    </Flex>
                </Box>

                <Box fontSize={{base : '12px', lg : '15px'}}>
                    <Flex alignItems='center'  justifyContent='center' gap='10px'>
                        <BsPhone/>
                        <Text>EXPERIENCE THE YOUR STORE MOBILE APP</Text>
                    </Flex>
                </Box>

                <Box fontSize={{base : '12px', lg : '15px'}} >
                    <Flex alignItems='center'  justifyContent='center' gap='10px'>
                        <BsFillTelephoneFill/>
                        <Text>FOR ANY HELP, YOU MAY CALL US <br /> AT 1800-267-4444</Text>
                    </Flex>
                </Box>
            </SimpleGrid>
        </Box>

        <Box bg='RGBA(0, 0, 0, 0.48)' color='white' padding={{base : '10px', lg : '30px'}}>
            <SimpleGrid columns={[3,3,3,5]} fontSize={{base : '12px', md : '13px'}} fontWeight='500' w={{base : '95%', md : '90%'}} m='auto' rowGap='15px'>
                <Box width={{base : '95%', lg : '70%'}} >
                        <UnorderedList lineHeight={{base  : '20px', md : '28px', lg : '30px'}}>
                            <List fontWeight='600'><Text >YOURSTORE.COM</Text></List>
                            <List><Text>Who are we?</Text></List>
                            <List><Text>Careers</Text></List>
                            <List><Text>Authenticity</Text></List>
                            <List><Text>Press</Text></List>
                            <List><Text>Testimonials</Text></List>
                            <List><Text>Your Store CSR</Text></List>
                            <List><Text>Responsible Disclosure</Text></List>
                            <List><Text>Investor Relations</Text></List>
                        </UnorderedList>
                </Box>

                <Box width={{base : '95%', lg : '70%'}} >
                        <UnorderedList lineHeight={{base  : '20px', md : '28px', lg : '30px'}}>
                            <List fontWeight='600'><Text>Help</Text></List>
                            <List><Text>Contact Us</Text></List>
                            <List><Text>Frequently asked questions</Text></List>
                            <List><Text>Store Locator</Text></List>
                            <List><Text>Cancellation & Return</Text></List>
                            <List><Text>Shipping & Delivery</Text></List>
                            <List><Text>Sell on YourStore</Text></List>
                        </UnorderedList>
                </Box>

                <Box width={{base : '95%', lg : '70%'}} >
                        <UnorderedList lineHeight={{base  : '20px', md : '28px', lg : '30px'}}>
                            <List fontWeight='600'><Text>Inspire Me</Text></List>
                            <List><Text>Beauty Book</Text></List>
                            <List><Text>YourStore TV</Text></List>
                            <List><Text>YourStore Network</Text></List>
                            <List><Text>Buying Guides</Text></List>
                        </UnorderedList>
                </Box>


                <Box width={{base : '95%', lg : '70%'}} >
                        <UnorderedList lineHeight={{base  : '20px', md : '28px', lg : '30px'}}>
                            <List fontWeight='600'><Text>Quick Links</Text></List>
                            <List><Text _hover={{color :'pink'}}>Offer Zone</Text></List>
                            <List><Text>New Launches</Text></List>
                            <List><Text>YourStore Man</Text></List>
                            <List><Text>YourStore Fashion</Text></List>
                            <List><Text>YourStore Pro</Text></List>
                            <List><Text>YourStore femina beauty awards winners 2019</Text></List>
                            <List><Text>Sitemape</Text></List>
                        </UnorderedList>
                </Box>

                <Box width={{base : '95%', lg : '70%'}} >
                        <UnorderedList lineHeight={{base  : '20px', md : '28px', lg : '30px'}}>
                            <List fontWeight='600'><Text>Top Categories</Text></List>
                            <List><Text>Makeup</Text></List>
                            <List><Text>Skin</Text></List>
                            <List><Text>Hair</Text></List>
                            <List><Text>Personal Care</Text></List>
                            <List><Text>Appliances</Text></List>
                            <List><Text>Mom & Baby</Text></List>
                            <List><Text>Wellness</Text></List>
                            <List><Text>Fragrance</Text></List>
                            <List><Text>Nature</Text></List>
                            <List><Text>Luxe</Text></List>
                        </UnorderedList>
                </Box>
            </SimpleGrid>
        </Box>


        <Box padding={{base : '10px' ,lg : '60px'}}>
            <SimpleGrid columns={[3,3,3,5]} w={{base : '95%', lg : '85%'}} m='auto' fontSize={{base : '10px', md : '12px'}} rowGap='20px' >
                <Flex gap={{base : '5px', md :'10px'}}  justifyContent='center' alignItems='center'>
                    <Image width={{base : '35px', md : '45px'}} src='https://adn-static2.nykaa.com/media/wysiwyg/2021/Free-shipping.svg'/>
                    <Box>
                    <Text>FREE SHIPPING</Text>
                    <Text>On Orders Above ₹299</Text>
                </Box>
                </Flex>

                <Flex gap={{base : '5px',md : '10px'}} justifyContent='center' alignItems='center'>
                    <Image width={{base : '35px', md : '45px'}} src='https://adn-static2.nykaa.com/media/wysiwyg/2021/return_accepted.svg'/>
                    <Box>
                    <Text>EASY RETURNS</Text>
                    <Text>15-Day Return Policy</Text>
                </Box>
                </Flex>

                <Flex gap={{base : '5px', md :'10px'}} justifyContent='center' alignItems='center'>
                    <Image width={{base : '35px', md : '45px'}} src='https://adn-static2.nykaa.com/media/wysiwyg/2021/Authenticity.svg'/>
                    <Box>
                    <Text>100% AUTHENTIC</Text>
                    <Text>Products Sourced Directly</Text>
                </Box>
                </Flex>

                <Flex gap={{base : '5px', md :'10px'}} justifyContent='center' alignItems='center'>
                    <Image width={{base : '35px', md : '45px'}} src='https://adn-static2.nykaa.com/media/wysiwyg/2021/Brands.svg'/>
                    <Box>
                    <Text>1900+ BRANDS</Text>
                    <Text>1.2 Lakh+ Products</Text>
                </Box>
                </Flex>

               <Box gap={{base : '5px', md : '10px'}} textAlign='center'>
                <Text>Show us some love on social media</Text>
                <Flex gap='10px' fontSize={{base : '12px', md: '16px' ,lg : '20px'}} justifyContent='center' mt={{base : '5px'}}>
                    <Text><BsInstagram/></Text>
                    <Text><BsFacebook/></Text>
                    <Text><BsYoutube/></Text>
                    <Text><BsPinterest/></Text>
                    <Text><BsSnapchat/></Text>
                </Flex>
                </Box>
            </SimpleGrid>
        </Box>


        <Box bg='#fc2779' padding={{base : '10px',md:'15px', lg : '20px'}} color='white'>
            <Flex justifyContent='space-around' width={{base : '98%', md : '85%', lg : '60%'}} m='auto' fontSize={{base : '10px', md : '13px', lg: '16px'}}>
                <Text>Terms & Conditions</Text>
                <Text>Shipping Policy</Text>
                <Text>Cancelation Policy</Text>
                <Text>Privacy Policy</Text>
            </Flex>
            <Text textAlign='center' fontSize={{base : '12px', md: '14px'}} fontWeight='550'>© 2022 YourStore E-Retail Pvt. Ltd. All Rights Reserved.</Text>
        </Box>
    
        </>
    )
}