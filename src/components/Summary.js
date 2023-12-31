import { Box, Button, Text } from "@chakra-ui/react";
import { useUserContext } from "../context/UserContext"; // Import your UserContext

const Summary = () => {
  const title = "Finishing up";
  const info = "Double-check everything looks OK before confirming";

  // Access the user context
  const { user, setUser } = useUserContext();
  console.log(user);

  const handleGoBack = () => {
    setUser({ ...user, currentPage: user.currentPage - 1 });
  };

  const handleNextStep = () => {
    // setUser({ ...user, currentPage: user.currentPage + 1 });
    console.log(user);
  };

  const calculateTotalPrice = () => {
    // Calculate the total price based on the selected plan charge and add-on service prices
    const planCharge = parseFloat(
      user.selectedPlanCharge.replace("$", "").replace("/mo", "")
    );
    const addonServiceTotal = user.addOnServices.reduce(
      (total, addon) => total + addon.price,
      0
    );
    return planCharge + addonServiceTotal; // Format the result to two decimal places
  };

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
      <Box w="100%" mb={4}>
        <Text fontWeight={600}>Selected Plan: {user.selectedPlan}</Text>
        <Text
          fontWeight={400}
        >{`Plan Charge: ${user.selectedPlanCharge}`}</Text>
      </Box>

      {user.addOnServices.length > 0 && (
        <Box w="100%" mb={4}>
          <Text fontWeight={600}>Selected Add-ons:</Text>
          <ul>
            {user.addOnServices.map((addon) => (
              <li key={addon.name} style={{ listStyleType: "none" }}>
                <Text fontWeight={400}>
                  {addon.name}: +${addon.price}/mo{" "}
                </Text>
              </li>
            ))}
          </ul>
        </Box>
      )}

      <Box w="100%" mt={4}>
        <Text fontWeight={600}>
          Total Price: {`$${calculateTotalPrice()}/mo`}
        </Text>
      </Box>

      <Box display={"flex"} justifyContent={"space-between"} mt={6}>
        {/* Go back Step Button */}
        <Button onClick={handleGoBack} size="sm" textColor={"white"}>
          Go Back
        </Button>

        {/* Next Step Button */}
        <Button
          onClick={handleNextStep}
          bgColor="hsl(213, 96%, 18%)"
          size="sm"
          textColor={"white"}
        >
          Confirm
        </Button>
      </Box>
    </Box>
  );
};

export default Summary;
