import { useEffect } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Box,
  Text,
  HStack,
  Checkbox,
} from "@chakra-ui/react";
import { useUserContext } from "../context/UserContext";

const AddonsForm = () => {
  const title = "Pick add-ons";
  const info = "Add-ons help enhance your gaming experience";

  const { user, setUser } = useUserContext();

  const addonServices = [
    {
      name: "Online Services",
      description: "Access to multiplayer games",
      price: 1,
    },
    {
      name: "Larger Storage",
      description: "Extra 1TB of cloud save",
      price: 2,
    },
    {
      name: "Customizable Profile",
      description: "Custom theme on your Profile",
      price: 2,
    },
  ];

  const handleGoBack = () => {
    // Save the selected addons in local storage when navigating away
    localStorage.setItem("selectedAddons", JSON.stringify(user.addOnServices));
    setUser({ ...user, currentPage: user.currentPage - 1 });
  };

  const handleNextStep = () => {
    setUser({ ...user, currentPage: user.currentPage + 1 });
  };

  useEffect(() => {
    // Check if there are previously selected addons in local storage
    const storedAddons =
      JSON.parse(localStorage.getItem("selectedAddons")) || [];
    setUser({ ...user, addOnServices: storedAddons });
  }, []); // Run this effect only when the component mounts

  // Function to handle checkbox changes
  const handleAddonServiceChange = (addon, isChecked) => {
    if (isChecked) {
      const updatedAddons = [...user.addOnServices, addon];
      setUser({ ...user, addOnServices: updatedAddons });
    } else {
      const updatedAddons = user.addOnServices.filter((a) => a !== addon);
      setUser({ ...user, addOnServices: updatedAddons });
    }
  };

  return (
    <Box p={6} borderRadius="md" w={"70%"} h={"100%"}>
      <Box mb={2}>
        <Text color={"hsl(213, 96%, 18%)"} fontWeight={700} fontSize={"24px"}>
          {title}
        </Text>
      </Box>
      <Box mb={4}>
        <Text color={"hsl(231, 11%, 63%)"} fontWeight={400} fontSize={"16px"}>
          {info}
        </Text>
      </Box>
      <VStack>
        {addonServices.map((addon, index) => (
          <Box
            key={index}
            display={"flex"}
            w={"100%"}
            h={"15%"}
            p={1}
            border={"2px"}
            borderColor={"hsl(243, 100%, 62%)"}
            borderRadius={"md"}
            justifyContent={"space-around"}
          >
            <Checkbox
              onChange={(e) =>
                handleAddonServiceChange(addon, e.target.checked)
              }
            />
            <Box>
              <Text fontWeight={500}>{addon.name}</Text>
              <Text fontWeight={400}>{addon.description}</Text>
            </Box>
            <Text color={"hsl(243, 100%, 62%)"}>{`+$${addon.price}/mo`}</Text>
          </Box>
        ))}
      </VStack>
      <Box display={"flex"} justifyContent={"space-between"} mt={6}>
        <Button size="sm" textColor={"white"} onClick={handleGoBack}>
          Go Back
        </Button>
        <Button
          bgColor="hsl(213, 96%, 18%)"
          size="sm"
          textColor={"white"}
          onClick={handleNextStep}
        >
          Next Step
        </Button>
      </Box>
    </Box>
  );
};

export default AddonsForm;
