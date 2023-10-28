import SideBar from "./components/Sidebar";
import "./App.css";

import { Box, Center } from "@chakra-ui/react";
import PersonalInfoForm from "./components/PersonalInfoForm";
import PlanForm from "./components/PlanForm";
import AddonsForm from "./components/AddonsForm";
import Summary from "./components/Summary";
import { useContext } from "react";
import { useUserContext } from "./context/UserContext";

const App = () => {
  const { user } = useUserContext();
  return (
    <Center>
      <Box
        display={"flex"}
        mt={"5vh"}
        h={"90vh"}
        w={"70vw"}
        bgColor={"white"}
        borderRadius={"2xl"}
        p={2}
      >
        <SideBar />
        {user.currentPage === 1 && <PersonalInfoForm />}
        {user.currentPage === 2 && <PlanForm />}
        {user.currentPage === 3 && <AddonsForm />}
        {user.currentPage === 4 && <Summary />}
      </Box>
    </Center>
  );
};

export default App;
