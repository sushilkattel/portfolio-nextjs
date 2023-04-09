import { Box, Text, ChakraProvider, HStack, Stack, Button, Link } from "@chakra-ui/react";
import Head from "next/head";
import { useEffect, useRef } from "react";
import { createAnimation } from "../utils/animation";
import { Introduction } from "../components/introduction";
import { Welcome } from "../components/welcome";

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
        <Welcome />
        <Introduction />
      </Box>
    </ChakraProvider>
  );
}
