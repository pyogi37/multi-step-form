import { useContext, useState } from "react";
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
import { useUserContext } from "../context/UserContext"; // Import your UserContext

const AddonsForm = () => {
  const title = "Pick add-ons";
  const info = "Add-ons help enhance your gaming experience";

  // Access the user context and the setUser function
  const { user, setUser } = useUserContext();

  // State to keep track of selected checkboxes and addon services
  const [selectedAddons, setSelectedAddons] = useState({});

  // Define the addon services and their corresponding prices
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

  // Function to update selected addons and calculate the total price
  const handleAddonSelect = (addonIndex, checked) => {
    setSelectedAddons({
      ...selectedAddons,
      [addonIndex]: checked,
    });
  };

  // Function to calculate the total price of selected addons
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const index in selectedAddons) {
      if (selectedAddons[index]) {
        totalPrice += addonServices[index].price;
      }
    }
    return totalPrice;
  };

  const handleGoBack = () => {
    // Handle the "Go Back" action if needed
    // You can decrease the currentPage or navigate to a previous step
    // For simplicity, we're just going back to the previous step here
    setUser({ ...user, currentPage: user.currentPage - 1 });
  };

  const handleNextStep = () => {
    // Update the user's addonServices and totalPrice in the user context
    const updatedUser = {
      ...user,
      addonServices: addonServices.map((addon, index) => ({
        ...addon,
        selected: selectedAddons[index],
      })),
      totalPrice: calculateTotalPrice(),
    };

    // Update the user context with the updated user data
    setUser(updatedUser);

    // Handle the "Next Step" action if needed
    // You can increase the currentPage or navigate to the next step
    // For simplicity, we're just going to the next step here
    setUser({ ...user, currentPage: user.currentPage + 1 });
  };

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
              isChecked={selectedAddons[index]}
              onChange={(e) => handleAddonSelect(index, e.target.checked)}
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
        {/* Go Back Step Button */}
        <Button size="sm" textColor={"white"} onClick={handleGoBack}>
          Go Back
        </Button>

        {/* Next Step Button */}
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
