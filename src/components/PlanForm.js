import { useContext } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Box,
  Text,
  HStack,
} from "@chakra-ui/react";
import { useUserContext } from "../context/UserContext"; // Import your UserContext

const PlanForm = () => {
  const title = "Select your plan";
  const info = "You have the option of monthly or yearly billing";

  const { user, setUser } = useUserContext();

  const handlePlanSelect = (selectedPlan, selectedPlanCharge) => {
    setUser({
      ...user,
      selectedPlan,
      selectedPlanCharge,
    });
  };

  const handleGoBack = () => {
    setUser({ ...user, currentPage: user.currentPage - 1 });
  };

  const handleNextStep = () => {
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
        <Text color={"hsl(231, 11%, 63%)"} fontWeight={500} fontSize={"16px"}>
          {info}
        </Text>
      </Box>

      {/* Form Body */}
      <HStack>
        <Box
          m={"1"}
          border={"2px"}
          borderRadius={"md"}
          borderColor={"hsl(243, 100%, 62%)"}
          w={"25%"}
          p={1}
          onClick={() => handlePlanSelect("Arcade", "$9/mo")}
          className={
            user.selectedPlan === "Arcade" ? "selected-plan" : "" // Apply a class if this plan is selected
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
          >
            <g fill="none" fill-rule="evenodd">
              <circle cx="20" cy="20" r="20" fill="#FFAF7E" />
              <path
                fill="#FFF"
                fill-rule="nonzero"
                d="M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z"
              />
            </g>
          </svg>
          <Text fontWeight={500} color={"hsl(213, 96%, 18%)"}>
            Arcade
          </Text>
          <Text>$9/mo</Text>
        </Box>
        <Box
          m={"1"}
          border={"2px"}
          borderRadius={"md"}
          borderColor={"hsl(243, 100%, 62%)"}
          w={"25%"}
          p={1}
          onClick={() => handlePlanSelect("Advanced", "$12/mo")}
          className={
            user.selectedPlan === "Advanced" ? "selected-plan" : "" // Apply a class if this plan is selected
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
          >
            <g fill="none" fill-rule="evenodd">
              <circle cx="20" cy="20" r="20" fill="#F9818E" />
              <path
                fill="#FFF"
                fill-rule="nonzero"
                d="M25.057 15H14.944C12.212 15 10 17.03 10 19.885c0 2.857 2.212 4.936 4.944 4.936h10.113c2.733 0 4.943-2.08 4.943-4.936S27.79 15 25.057 15ZM17.5 20.388c0 .12-.108.237-.234.237h-1.552v1.569c0 .126-.138.217-.259.217H14.5c-.118 0-.213-.086-.213-.203v-1.583h-1.569c-.126 0-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12 0 .236.108.236.234v1.551h1.555c.125 0 .231.083.231.204v.988Zm5.347.393a.862.862 0 0 1-.869-.855c0-.472.39-.856.869-.856.481 0 .87.384.87.856 0 .471-.389.855-.87.855Zm1.9 1.866a.86.86 0 0 1-.87-.852.86.86 0 0 1 .87-.855c.48 0 .87.38.87.855a.86.86 0 0 1-.87.852Zm0-3.736a.862.862 0 0 1-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862 0 0 1-.87.854Zm1.899 1.87a.862.862 0 0 1-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862 0 0 1-.868.855Z"
              />
            </g>
          </svg>
          <Text fontWeight={400} color={"hsl(213, 96%, 18%)"}>
            Advanced
          </Text>
          <Text>$12/mo</Text>
        </Box>
        <Box
          m={"1"}
          border={"2px"}
          borderRadius={"md"}
          borderColor={"hsl(243, 100%, 62%)"}
          w={"25%"}
          p={1}
          onClick={() => handlePlanSelect("Pro", "$15/mo")}
          className={
            user.selectedPlan === "Pro" ? "selected-plan" : "" // Apply a class if this plan is selected
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
          >
            <g fill="none" fill-rule="evenodd">
              <circle cx="20" cy="20" r="20" fill="#483EFF" />
              <path
                fill="#FFF"
                fill-rule="nonzero"
                d="M26.666 13H13.334A3.333 3.333 0 0 0 10 16.333v7.193a3.447 3.447 0 0 0 2.14 3.24c1.238.5 2.656.182 3.56-.8L18.52 23h2.96l2.82 2.966a3.2 3.2 0 0 0 3.56.8 3.447 3.447 0 0 0 2.14-3.24v-7.193A3.333 3.333 0 0 0 26.666 13Zm-9.333 6H16v1.333a.667.667 0 0 1-1.333 0V19h-1.333a.667.667 0 0 1 0-1.334h1.333v-1.333a.667.667 0 1 1 1.333 0v1.333h1.333a.667.667 0 1 1 0 1.334Zm7.333 2a2.667 2.667 0 1 1 0-5.333 2.667 2.667 0 0 1 0 5.333ZM26 18.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z"
              />
            </g>
          </svg>
          <Text fontWeight={500} color={"hsl(213, 96%, 18%)"}>
            Pro
          </Text>
          <Text>$15/mo</Text>
        </Box>
      </HStack>

      <Box display={"flex"} justifyContent={"space-between"} mt={6}>
        {/* Go Back Step Button  */}
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

export default PlanForm;
