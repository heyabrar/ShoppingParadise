
import { Box, Image, Text } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";


export default function HairCancern ( ) {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
      const images =  [
        {
            id : 1,
            image : 'https://images-static.nykaa.com/uploads/49435e2c-ac76-433d-a4e4-3141da09144a.png?tr=w-400,cm-pad_resize'
        },
        {
            id : 2,
            image : 'https://images-static.nykaa.com/uploads/0fe03ced-f0d0-4791-a08d-f21da196a77e.png?tr=w-400,cm-pad_resize'
        },
        {
            id : 3,
            image : 'https://images-static.nykaa.com/uploads/cbcff582-b1a9-4369-91f3-8db44166b020.png?tr=w-400,cm-pad_resize'
        },
        {
            id : 4,
            image : 'https://images-static.nykaa.com/uploads/6079aa3b-5991-4ac3-b343-a01060fc7707.png?tr=w-400,cm-pad_resize'
        },
        {
            id : 5,
            image : 'https://images-static.nykaa.com/uploads/97309aad-1485-4fb1-b19e-0f567b22a1d3.png?tr=w-400,cm-pad_resize'
        },
        {
            id : 6,
            image : 'https://images-static.nykaa.com/uploads/0cd0bc07-04cb-41d6-82da-48b85ab5381d.png?tr=w-400,cm-pad_resize'
        },
        
      ]
    return (
        <>
         <Text textAlign='center' fontSize={{base : '16px', md : '24px', lg : '26px'}} fontWeight='650' letterSpacing={{base  : '2px'}} mt={{base : '20px', md : '30px', lg: '7%'}}>SHOP BY HAIR CONCERN</Text>
        <Box  width={{base : '95%', md : '90%'}} m='auto' mt={{base :'10px'}} >
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                  // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                  // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                >
                {images.length > 0 && images.map((elem)=>{
                    return <Box key={elem.id} w={{base : '95%'}} m='auto'>
                        <Link to='/hairproducts'><Image src={elem.image} m='auto'/></Link>
                    </Box>
                })}
            </Carousel>
        </Box>
        </>
    )
}