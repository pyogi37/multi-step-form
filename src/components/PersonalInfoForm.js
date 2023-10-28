import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Box,
  Text,
} from "@chakra-ui/react";
import { useUserContext } from "../context/UserContext";

const PersonalInfoForm = () => {
  // Access the user context and the setUser function
  const { user, setUser } = useUserContext();

  // Function to handle the submission of the form
  const handleFormSubmit = () => {
    // Update the user context with the entered data
    setUser({
      ...user,
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phoneNumber: document.getElementById("phone").value,
    });

    // Update the currentPage in the user context
    setUser({ ...user, currentPage: user.currentPage + 1 });
    console.log(user.currentPage);
  };

  const title = "Personal Info";
  const info = "Please provide your name, email address and phone number.";
  return (
    <Box p={6} borderRadius="md" w={"70%"} h={"100%"} centerContent>
      {/* Form Title */}
      <Box mb={2}>
        <Text color={"hsl(213, 96%, 18%)"} fontWeight={700} fontSize={"24px"}>
          {title}
        </Text>
      </Box>

      {/* Form Information */}
      <Box mb={4}>
        <Text color={"hsl(231, 11%, 63%)"} fontWeight={400} fontSize={"16px"}>
          {info}
        </Text>
      </Box>

      {/* Form Body */}

      <VStack spacing={4} align="stretch">
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input type="text" placeholder="e.g. Stephen King." />
        </FormControl>

        <FormControl id="email">
          <FormLabel>Email Address</FormLabel>
          <Input type="email" placeholder="e.g. stephenking@lorem.com" />
        </FormControl>

        <FormControl id="phone">
          <FormLabel>Phone Number</FormLabel>
          <Input type="tel" placeholder="e.g. +1 234 567 890" />
        </FormControl>
      </VStack>

      <Box display={"flex"} justifyContent={"space-between"} mt={6}>
        {/* Go back Step Button */}
        <Button
          // bgColor="hsl(213, 96%, 18%)"
          size="sm"
          textColor={"white"}
          hidden
        >
          Go Back
        </Button>

        {/* Next Step Button */}
        <Button
          bgColor="hsl(213, 96%, 18%)"
          size="sm"
          textColor={"white"}
          onClick={handleFormSubmit}
        >
          Next Step
        </Button>
      </Box>
    </Box>
  );
};

export default PersonalInfoForm;
