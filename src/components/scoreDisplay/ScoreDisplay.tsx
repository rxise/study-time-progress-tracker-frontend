import { Box, Grid, Paper, styled } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import ScoreCard from "./ScoreCard";

export default function ScoreDisplay() {
  return (
    <>
      <Grid container spacing={2} mx={3} mt={0}>
        <Grid xs={6}>
          <ScoreCard></ScoreCard>
        </Grid>
        <Grid xs={6}>
          <ScoreCard></ScoreCard>
        </Grid>
        <Grid xs={6}>
          <ScoreCard></ScoreCard>
        </Grid>
        <Grid xs={6}>
          <ScoreCard></ScoreCard>
        </Grid>
      </Grid>
    </>
  );
}
