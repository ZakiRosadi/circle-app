import Footer from "@/components/Footer";
import Profile from "@/components/Profile";
import SideBar from "@/components/SideBar";
import Suggestion from "@/components/suggestion";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <Grid
      gridTemplateColumns="270px 1.5fr 1fr"
      minH={"100vh"}
      position={"static"}
    >
      <GridItem px={10} py={4} borderRight={"1px solid #eaeaea"}>
        <SideBar />
      </GridItem>

      {/* <SideBar /> */}

      <GridItem px={5} py={4} overflow={"auto"}>
        <Outlet />
      </GridItem>

      <GridItem
        px={6}
        py={4}
        position={"relative"}
        borderLeft={"1px solid #eaeaea"}
      >
        <Box>
          <Profile />
          <Suggestion />
          <Footer />
        </Box>
      </GridItem>
    </Grid>
  );
}
