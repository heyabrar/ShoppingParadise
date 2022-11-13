import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const MyWishlist = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <VStack p={"4"} bg={"white"} w={"full"} align={"center"}>
        <svg xmlns='http://www.w3.org/2000/svg' width='220' height='169'>
          <defs>
            <linearGradient id='a' x1='50%' x2='50%' y1='83.303%' y2='0%'>
              <stop offset='0%' stop-color='#FFF'></stop>
              <stop offset='100%' stop-color='#EBEBEB'></stop>
            </linearGradient>
            <filter
              id='b'
              width='260%'
              height='282.9%'
              x='-80%'
              y='-91.4%'
              filterUnits='objectBoundingBox'
            >
              <feOffset
                dy='1'
                in='SourceAlpha'
                result='shadowOffsetOuter1'
              ></feOffset>
              <feGaussianBlur
                in='shadowOffsetOuter1'
                result='shadowBlurOuter1'
                stdDeviation='7.5'
              ></feGaussianBlur>
              <feColorMatrix
                in='shadowBlurOuter1'
                result='shadowMatrixOuter1'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'
              ></feColorMatrix>
              <feMerge>
                <feMergeNode in='shadowMatrixOuter1'></feMergeNode>
                <feMergeNode in='SourceGraphic'></feMergeNode>
              </feMerge>
            </filter>
          </defs>
          <g fill='none' fill-rule='evenodd' transform='translate(0 7)'>
            <circle
              cx='115'
              cy='81'
              r='81'
              fill='url(#a)'
              fill-rule='nonzero'
            ></circle>
            <g fill-rule='nonzero' transform='rotate(30 7.796 254.002)'>
              <rect
                width='75.104'
                height='87.691'
                x='1.172'
                y='1.3'
                fill='#FFF'
                stroke='#3F414D'
                stroke-width='1.5'
                rx='10'
              ></rect>
              <rect
                width='61.415'
                height='60.991'
                x='8.355'
                y='8.019'
                fill='#EBEBEB'
                rx='6'
              ></rect>
              <rect
                width='42.264'
                height='10.493'
                x='7.988'
                y='71.91'
                fill='#EBEBEB'
                rx='5.247'
              ></rect>
            </g>
            <g fill-rule='nonzero' transform='translate(55.23 15)'>
              <rect
                width='97.5'
                height='113.5'
                x='.75'
                y='.75'
                fill='#FFF'
                stroke='#3F414D'
                stroke-width='1.5'
                rx='10'
              ></rect>
              <rect
                width='79.2'
                height='78.409'
                x='9.9'
                y='9.801'
                fill='#EBEBEB'
                rx='6'
              ></rect>
              <rect
                width='54.78'
                height='13.068'
                x='9.9'
                y='92.131'
                fill='#EBEBEB'
                rx='6'
              ></rect>
            </g>
            <g
              stroke-width='2'
              filter='url(#b)'
              transform='rotate(10 32.368 771.678)'
            >
              <path
                fill='#FC2779'
                stroke='#3F414D'
                d='M19.811 34.228l-.551-.451c-1.047-.863-2.463-1.798-4.105-2.88C8.758 26.674 0 20.895 0 11.041 0 4.953 5.023 0 11.198 0c3.354 0 6.497 1.473 8.613 3.991A11.234 11.234 0 0 1 28.425 0c6.174 0 11.198 4.953 11.198 11.041 0 9.854-8.759 15.633-15.155 19.856-1.642 1.082-3.058 2.017-4.105 2.88l-.552.451z'
              ></path>
              <path
                stroke='#FFF'
                stroke-linecap='square'
                d='M26.143 6.03c1.885-1.149 3.53-1.439 4.933-.87 1.404.569 2.318 1.93 2.742 4.086'
              ></path>
            </g>
            <path
              d='M.974 56.936l8.375-3.906m16.057 12.798l8.375-3.905m-20.591-.541l8.375-3.905m16.057 12.798l8.375-3.906M13.19 61.382l-3.905-8.375m28.337 17.268L33.717 61.9m-8.311 3.928L21.5 57.453M49.838 74.72l-3.905-8.374'
              fill-rule='nonzero'
              stroke='#F5A623'
              stroke-linecap='square'
            ></path>
            <path
              d='M181.337 126.9l4.896-7.837m20.437 1.988l4.897-7.836m-17.564 10.761l4.897-7.837m-4.897 7.837l-7.836-4.897m33.17-.952l-7.836-4.897m-4.831 7.821l-7.836-4.897'
              fill-rule='nonzero'
              stroke='#FD7685'
              stroke-linecap='square'
            ></path>
            <path
              fill='#7ED321'
              fill-rule='nonzero'
              d='M37.23 116c2.629 1.986 4.629 2.98 6 2.98 1.371 0 3.371-.994 6-2.98-1.99 2.116-2.984 4.157-2.984 6.126 0 1.968.995 3.926 2.984 5.874-2.618-2.377-4.618-3.565-6-3.565-1.382 0-3.382 1.188-6 3.565 2.215-2.555 3.322-4.513 3.322-5.874 0-1.362-1.107-3.404-3.322-6.126z'
            ></path>
            <path
              fill='#BD10E0'
              fill-rule='nonzero'
              d='M184.23 44c2.629 1.986 4.629 2.98 6 2.98 1.371 0 3.371-.994 6-2.98-1.99 2.116-2.984 4.157-2.984 6.126 0 1.968.995 3.926 2.984 5.874-2.618-2.377-4.618-3.565-6-3.565-1.382 0-3.382 1.188-6 3.565 2.215-2.555 3.322-4.513 3.322-5.874 0-1.362-1.107-3.404-3.322-6.126z'
            ></path>
          </g>
        </svg>
        <Text fontSize={["md", "xl"]} fontWeight={"semibold"} pb={4}>
          NO ITEMS IN THE WISHLIST
        </Text>
        <Text
          fontSize={["sm", "md"]}
          fontWeight={"normal"}
          textAlign={"center"}
          pb={4}
        >
          Add now, Buy Later. <br />
          Save your favourite beauty items here!
        </Text>
        <Text
          fontWeight={"semibold"}
          pb={"4"}
          cursor={"pointer"}
          color={"#fc2779"}
          onClick={() => navigate("/")}
        >
          Start Shopping
        </Text>
      </VStack>
    </Box>
  );
};

export default MyWishlist;
