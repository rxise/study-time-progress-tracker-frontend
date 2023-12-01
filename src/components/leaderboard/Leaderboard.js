import { Grid, Paper } from "@mui/material";
import * as React from "react";
import Chart from "./Chart";
import LeaderboardTable from "./LeaderboardTable";

function Leaderboard() {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item sm={12} md={8} display={"flex"} justifyContent={"center"}>
          <Chart></Chart>
        </Grid>

        <Grid item sm={12} md={4} display={"flex"} justifyContent={"center"}>
          <Paper sx={{ display: "flex", flexGrow: 1, p: 2 }} elevation={3}>
            Hello
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <LeaderboardTable></LeaderboardTable>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Leaderboard;
