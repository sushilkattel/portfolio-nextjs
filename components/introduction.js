import { Box, Text, HStack, Stack, Button, Link, useBreakpointValue } from "@chakra-ui/react"
import { useState } from "react";
import { camera, cube2, delayCamera, moveCameraToPosition } from "../utils/animation";

export const Introduction = () => {
    const bigTextSize = useBreakpointValue({ base: "48px", md: "64px", lg: "96px" });
    const titleSize = useBreakpointValue({ base: "24px", md: "28px", lg: "36px" });
    const descSize = useBreakpointValue({ base: "16px", md: "18px", lg: "24px" });
    //Handles visibility of card
    const handleProjectsClick = async () => {
        const introBox = document.getElementById("intro-box");
        introBox.style.opacity = "0";
      
        // Move the camera to the second cube
        moveCameraToPosition(100, 0, -250);
        await delayCamera(3000);
        moveCameraToPosition(100.1, 0, -200);
      };     
        
    return (
      <Box
      id="intro-box"
      pos="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%) translate3d(0px, 0px, -5px)"
      p={4}
      bgColor="#f0f0f0"
      textAlign="center"
      borderRadius="5px"
      opacity={0}
      boxShadow="0 0 10px rgba(0, 0, 0, 0.15)"
      >
        <link rel="stylesheet" href="https://use.typekit.net/ial4jci.css" />
        <Stack padding={10} align={'flex-start'}>
          <HStack>
            <Text style={{ fontSize: bigTextSize }} className={"BigText"}>
              Hey
            </Text>
            <Text style={{ fontSize: bigTextSize }} className={"BigText"} pl={4}>
              <span className="wave">&#128075;</span>,
            </Text>
          </HStack>
          <HStack>
            <Text style={{ fontSize: bigTextSize }} className={"BigText"}>
              I'm
            </Text>
            <Text color={'#516B7F'} style={{ fontSize: bigTextSize }} className={"BigText"} pl={4}>
              Sushil
            </Text>
          </HStack>
          <Text className="Title" style={{ fontSize: titleSize }}>
            Developer
          </Text>
          <Stack maxWidth={'100%'} align={'flex-start'}>
            <Text className="Desc" align={'start'} style={{ fontSize: descSize }}>
              I design and develop applications using my
              <br />
              imagination and bring it to life using React,
              <br /> NextJS, Express, Kotlin, and many more!
            </Text>
          </Stack>
            <Button size={'lg'} bgColor={'#516B7F'} color={'white'} colorScheme={'twitter'} onClick={handleProjectsClick}>
              Projects
            </Button>
        </Stack>
      </Box>
    );
  };
  