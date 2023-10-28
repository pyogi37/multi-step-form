import { Box, Center, Text, useColorModeValue } from "@chakra-ui/react";
import { useUserContext } from "../../context/UserContext"; // Import your UserContext

const Steps = ({ stepNumber, stepTitle }) => {
  const { user } = useUserContext(); // Access the userContext

  // Determine the background color based on the condition
  const stepBackgroundColor = user.currentPage === stepNumber ? "gray.100" : "";

  return (
    <Box
      className="step"
      display={"flex"}
      w={"100%"}
      justifyContent={"flex-start"}
      m={4}
    >
      <Box className="stepCount" m={2}>
        <Box
          bgColor={stepBackgroundColor}
          borderRadius={"full"}
          border={"2px solid lightgray"}
          w={6}
        >
          <Center>{stepNumber}</Center>
        </Box>
      </Box>
      <Box
        className="stepInfo"
        display={"flex"}
        flexDir={"column"}
        ml={2}
        borderRadius="md"
        p={2}
      >
        <Text
          //   fontFamily={"Ubuntu"}
          fontWeight={400}
          fontSize={"16px"}
          color={"gray.400"}
        >{`Step ${stepNumber}`}</Text>
        <Text
          //   fontFamily={"Ubuntu"}
          fontSize={"16px"}
          fontWeight={500}
          color={"white"}
        >
          {stepTitle}
        </Text>
      </Box>
    </Box>
  );
};

export default Steps;
