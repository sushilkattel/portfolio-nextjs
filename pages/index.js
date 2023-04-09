import { Box, Text, ChakraProvider, extendTheme } from "@chakra-ui/react";
import Head from "next/head";
import { useEffect, useRef } from "react";
import { createAnimation } from "../utils/animation";

export default function Home() {
  const appRef = useRef();

  useEffect(() => {
    createAnimation(appRef.current);
  }, []);

  return (
    <ChakraProvider>
      <Head>
        <title>Sushil Kattel</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box ref={appRef} w="100%" h="100vh" pos="fixed">
        <Text
          id="welcome-text"
          pos="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          fontSize="10vw"
          textAlign="center"
          color="white"
          opacity={0}
          transition="opacity 1s ease-in-out"
        >
          Welcome
        </Text>
        <Box
          id="intro-box"
          d="none"
          pos="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          p={4}
          bgColor="#f0f0f0"
          textAlign="center"
          borderRadius="5px"
          opacity={0}
          boxShadow="0 0 10px rgba(0, 0, 0, 0.15)"
        >
          Hello, my name is Sushil Kattel
        </Box>
      </Box>
    </ChakraProvider>
  );
}
