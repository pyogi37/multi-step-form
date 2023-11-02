import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Box,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useUserContext } from "../context/UserContext";
import { useState } from "react";

const PersonalInfoForm = () => {
  // Access the user context and the setUser function
  const { user, setUser } = useUserContext();
  const toast = useToast();

  // Local state to manage form input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Function to handle the submission of the form
  const handleFormSubmit = () => {
    // validating email format
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        status: "error",
        duration: 3000, // Duration for which the toast is displayed (in milliseconds)
        isClosable: true, // Allow the user to close the toast manually
      });
      return;
    }

    if (!/^\+(?:\d{1,4})?(\d{10})$/.test(phone)) {
      toast({
        title: "Invalid Phone number",
        description: "Please enter a valid Phone number.",
        status: "error",
        duration: 3000, // Duration for which the toast is displayed (in milliseconds)
        isClosable: true, // Allow the user to close the toast manually
      });
      return;
    }

    console.log("personal info", name, email, phone);
    // Update the user context with the entered data
    setUser({
      ...user,
      name,
      email,
      phoneNumber: phone,
      currentPage: user.currentPage + 1,
    });

    // Update the currentPage in the user context
    console.log(user);
  };

  const title = "Personal Info";
  const info = "Please provide your name, email address, and phone number.";
  return (
    <Box p={6} borderRadius="md" w={"70%"} h={"100%"}>
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
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            placeholder="e.g. Stephen King"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Email Address</FormLabel>
          <Input
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Phone Number</FormLabel>
          <Input
            type="text"
            placeholder="e.g. +1 234 567 890"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
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
