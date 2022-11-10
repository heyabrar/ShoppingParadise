import { Spinner } from "@chakra-ui/react";

export default function SpinnerCompo ({color,size}) {
    return (
        <>
             <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color={color} size='lg'/>
        </>
    )
}