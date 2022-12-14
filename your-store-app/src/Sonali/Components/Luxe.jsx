import { Box, Image, Text } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export default function HairLuxe ( ) {
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
            image : 'https://images-static.nykaa.com/uploads/9ccb71c0-881f-4a95-aa04-5c8c60822d79.jpg?tr=w-400,cm-pad_resize'
        },
        {
            id : 2,
            image : 'https://images-static.nykaa.com/uploads/81394e34-962e-4ee7-9d8b-93ef20e25892.jpg?tr=w-400,cm-pad_resize'
        },
        {
            id : 3,
            image : 'https://images-static.nykaa.com/uploads/f519b465-cb79-4b94-b173-860b00ea5958.jpg?tr=w-400,cm-pad_resize'
        },
        {
            id : 4,
            image : 'https://images-static.nykaa.com/uploads/25dca884-82f7-48c5-b56f-7a8e246df15b.jpg?tr=w-400,cm-pad_resize'
        },
        {
            id : 5,
            image : 'https://images-static.nykaa.com/uploads/62969c88-8971-4cfd-b75f-407182fe1b01.jpg?tr=w-400,cm-pad_resize'
        },
         {
            id : 7,
            image : 'https://images-static.nykaa.com/uploads/4c4ac5bd-15b4-4260-a934-ba6709057435.jpg?tr=w-400,cm-pad_resize'
        },
      ]
    return (
        <>
         <Text textAlign='center' fontSize={{base : '16px', md : '24px', lg : '26px'}} fontWeight='650' letterSpacing={{base  : '2px'}} mt={{base : '20px', md : '30px', lg: '7%'}}>LUXE INDULGENCES</Text>
        <Box  width={{base : '95%', md : '90%'}} m='auto' mt={{base :'10px'}}>
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                //   autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                //   deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                >
                {images.length > 0 && images.map((elem)=>{
                    return <Box width={{base : '95%'}} m='auto' key={elem.id}>
                        <Image src={elem.image} m='auto'/>
                    </Box>
                })}
            </Carousel>
        </Box>
        </>
    )
}

