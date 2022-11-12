import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./Midhome.module.css";
import { Box, Image, useColorModeValue } from "@chakra-ui/react";

function Carousel2() {
  return (
    <>
    <div>
      <Carousel
        additionalTransfrom={0}
        arrows
        centerMode={false}
        className=""
        containerClass="container"
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        // minimumTouchDrag={80}
        // pauseOnHover
        renderArrowsWhenDisabled={true}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
  
      >
        <div className={styles.cardwidth}>
          <Box
            maxW={"235px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"md"}
            overflow={"hidden"}
          >
            <Image
              h={"312.25px"}
              w={"233.46"}
              src={
                "https://images-static.nykaa.com/uploads/5e9c007c-9b44-4485-b8cd-b9cf1adfe49c.png?tr=w-480,cm-pad_resize"
              }
              objectFit={"cover"}
            />
          </Box>
        </div>
        <div>
          <Box
            maxW={"235px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"md"}
            overflow={"hidden"}
          >
            <Image
              h={"312.25px"}
              w={"233.46"}
              src={
                "https://images-static.nykaa.com/uploads/46e74f08-ca24-4dd2-abe3-2e3fa7c675fc.png?tr=w-480,cm-pad_resize"
              }
              objectFit={"cover"}
            />
          </Box>
        </div>
        <div>
          <Box
            maxW={"235px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"md"}
            overflow={"hidden"}
          >
            <Image
              h={"312.25px"}
              w={"233.46"}
              src={
                "https://images-static.nykaa.com/uploads/96b20db6-e6b1-4576-a7c8-314de6d7fa67.png?tr=w-480,cm-pad_resize"
              }
              objectFit={"cover"}
            />
          </Box>
        </div>
        <div>
          <Box
            maxW={"235px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"md"}
            overflow={"hidden"}
          >
            <Image
              h={"312.25px"}
              w={"233.46"}
              src={
                "https://images-static.nykaa.com/uploads/4bf7f0f9-3075-4a43-bd5d-c78f618c3eed.png?tr=w-480,cm-pad_resize"
              }
              objectFit={"cover"}
            />
          </Box>
        </div>
        <div>
          <Box
            maxW={"235px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"md"}
            overflow={"hidden"}
          >
            <Image
              h={"312.25px"}
              w={"233.46"}
              src={
                "https://images-static.nykaa.com/uploads/a8d2592a-0de3-42b0-87d9-32f163a86f50.png?tr=w-480,cm-pad_resize"
              }
              objectFit={"cover"}
            />
          </Box>
        </div>
        <div>
          <Box
            maxW={"235px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"md"}
            overflow={"hidden"}
          >
            <Image
              h={"312.25px"}
              w={"233.46"}
              src={
                "https://images-static.nykaa.com/uploads/ac99be64-68ff-4afd-92d2-98e9b4df2b50.png?tr=w-480,cm-pad_resize"
              }
              objectFit={"cover"}
            />
          </Box>
        </div>
      </Carousel>
      </div>
      ;
    </>
  );
}

export default Carousel2;
