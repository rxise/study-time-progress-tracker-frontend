import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function ScoreCard() {
  return (
    <Card sx={{ maxWidth: 400, maxHeight: 400, margin: "5px" }}>
      <CardContent>
        <Typography
          sx={{ fontSize: 16 }}
          textAlign={"center"}
          color="text.secondary"
          gutterBottom
        >
          EDGERUNNER
        </Typography>

        <Typography
          sx={{ fontSize: 20 }}
          textAlign={"center"}
          color="text.secondary"
          gutterBottom
          fontFamily={"monospace"}
        >
          Score : 10
        </Typography>
      </CardContent>
    </Card>
  );
}
