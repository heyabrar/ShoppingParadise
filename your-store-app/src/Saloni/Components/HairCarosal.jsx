import { Box, Image, Text } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function HairCarosal ( ) {
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
      // const images =  [
      //   {
      //       id : 1,
      //       image : 'https://images-static.nykaa.com/uploads/321d36b3-9253-444d-9256-ff6778c43ca3.jpg?tr=w-1200,cm-pad_resize'
      //   },
      //   {
      //       id : 2,
      //       image : 'https://images-static.nykaa.com/uploads/4ff2b551-827d-42b1-9662-9ea9271cfc3e.jpg?tr=w-1200,cm-pad_resize'
      //   },
      //   {
      //       id : 3,
      //       image : 'https://images-static.nykaa.com/uploads/f9e64dd4-ca1f-4a5a-91ce-be2325ce4ceb.jpg?tr=w-1200,cm-pad_resize'
      //   },
      //   {
      //       id : 4,
      //       image : 'https://images-static.nykaa.com/uploads/02ec95ca-f0c3-4499-9c42-a232672d1aa1.gif?tr=w-1200,cm-pad_resize'
      //   }
      // ]
    return (
        <>
         <Text textAlign='center' fontSize={{base : '16px', md : '24px', lg : '26px'}} fontWeight='650' letterSpacing={{base  : '2px'}} mt={{base : '20px', md : '30px', lg: '7%'}}></Text>
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
                {/* {images.length > 0 && images.map((elem)=>{
                    return <Box key={elem.id} w={{base : '95%'}} m='auto'>
                        <Image height='150px' w='850px' src={elem.image} m='auto'/>
                    </Box>
                })} */}
                <Box width={{base : '100%', md : '100%', lg : '75%'}} m='auto' mt={{base : '20px', md : '30px', lg : '45px'}}>
          <Image src="https://images-static.nykaa.com/uploads/8ca8aabe-612f-45bb-a72c-2bad4a6a7345.png?tr=w-1200,cm-pad_resize"/>
        </Box>
            </Carousel>
        </Box>
        </>
    )
}