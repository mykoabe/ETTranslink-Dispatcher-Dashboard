import React from "react";
import { Paper, Typography, Button, Box } from "@mui/material";
import 
import { grey } from "@mui/material/colors";

export default function CustomPaper({ title }) {
  return (
    <>
      <Paper
        elevation={0}
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          height: 150,
          background: "linear-gradient(#080704, #9198e5)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            p: 1,
            m: 1,
            borderRadius: 1,
            color: grey[400],
          }}
        >
          <Typography
            sx={{
              m: 1,
            }}
          >
            CREAT NEW {title}
          </Typography>
          <Button onClick={logout}>Logout</Button>
        </Box>
      </Paper>
    </>
  );
}
