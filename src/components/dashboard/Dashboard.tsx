import React from "react";
import ClanLayout from "../clans/ClanLayout";
import NavBar from "./NavBar";
import { Box, Container, Grid } from "@mui/material";
import ScoreDisplay from "../scoreDisplay/ScoreDisplay";
import ActiveUserDisplay from "../activeusers/ActiveUserDisplay";

export default function Dashboard() {
  return (
    <Box>
      <NavBar></NavBar>
      <Box maxWidth="xl" sx={{ marginTop: "20px" }}>
        <Grid container width={"100%"} height={"100%"}>
          <Grid xs={2} mx={3}>
            <ClanLayout></ClanLayout>
          </Grid>
          <Grid xs={7}>
            <ScoreDisplay></ScoreDisplay>
          </Grid>
          <Grid xs={2} mx={3}>
            <ActiveUserDisplay></ActiveUserDisplay>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
