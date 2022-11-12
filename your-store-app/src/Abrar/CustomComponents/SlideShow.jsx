import { Container, Image } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

    const delay = 2500;  
    export default function Slideshow({data}) {
      const [index, setIndex] = useState(0);
      const timeoutRef = useRef (null);
    
      function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }
    
      useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === data.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
    
        return () => {
          resetTimeout();
        };
      }, [index]);
    
      return (
        <>
            <Container className="slideshow" maxW={{base : '95%', md : '80%', lg : '90%'}}>
            <div className="slideshowSlider"  style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }} >
                {data.map((backgroundColor, index) => (
                <div className="slide" key={backgroundColor.id}>
                   <Image shadow='lg' m='auto' src={backgroundColor.image} w={{base : '90%', md :'80%'}}/>
                </div>
                ))}
            </div>
            </Container>
        </>
      );
    }
    
   