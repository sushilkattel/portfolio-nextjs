import { Text } from "@chakra-ui/react"

export const Welcome = () => {
    return(
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
    )
}