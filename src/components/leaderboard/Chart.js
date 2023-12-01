import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { Paper } from "@mui/material";

export default function Chart() {
  return (
    <Paper
      sx={{
        p: 2,
        display: "flex",
        flexGrow: 1,
      }}
      elevation={3}
    >
      <BarChart
        xAxis={[{ scaleType: "band", data: ["group A", "group B", "group C"] }]}
        series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
        width={700}
        height={360}
      />
    </Paper>
  );
}
