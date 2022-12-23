import { Container, Image } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

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
                {data.map((elem, index) => (
                <div className="slide" key={elem.id}>
                 <Link to={elem.id === 1? '/skin' : elem.id === 2 ? '/mombaby' : '/fragrance'}><Image shadow='lg' m='auto' src={elem.image} w={{base : '90%', md :'80%'}}/></Link>
                </div>
                ))}
            </div>
            </Container>
        </>
      );
    }
    
   