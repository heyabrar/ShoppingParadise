import { Box, Image, Text } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export default function ShopBySkinConcern ( ) {
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
            image : 'https://images-static.nykaa.com/uploads/050a6ccb-288c-42c5-a32b-d7ed71f777a6.jpg?tr=w-400,cm-pad_resize'
        },
        {
            id : 2,
            image : 'https://images-static.nykaa.com/uploads/f901fb3b-707a-4de8-a81b-d1c24997606e.jpg?tr=w-400,cm-pad_resize'
        },
        {
            id : 3,
            image : 'https://images-static.nykaa.com/uploads/2ae6668a-5e4d-4b13-a2bd-29f8e5aa8f2a.jpg?tr=w-400,cm-pad_resize'
        },
        {
            id : 4,
            image : 'https://images-static.nykaa.com/uploads/eca5dd45-8c78-475f-9f32-bf56253d02ae.jpg?tr=w-400,cm-pad_resize'
        },
        {
            id : 5,
            image : 'https://images-static.nykaa.com/uploads/eca5dd45-8c78-475f-9f32-bf56253d02ae.jpg?tr=w-400,cm-pad_resize'
        },
         {
            id : 7,
            image : 'https://images-static.nykaa.com/uploads/4a101340-2025-46ba-8d73-ffb84e83c146.jpg?tr=w-400,cm-pad_resize'
        },
      ]
    return (
        <>
         <Text textAlign='center' fontSize={{base : '16px', md : '24px', lg : '26px'}} fontWeight='650' letterSpacing={{base  : '2px'}} mt={{base : '20px', md : '30px', lg: '7%'}}>SHOP BY SKIN CONCERN</Text>
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
                        <Image src={elem.image} m='auto'/>
                    </Box>
                })}
            </Carousel>
        </Box>
        </>
    )
}

