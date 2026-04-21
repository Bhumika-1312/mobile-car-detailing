"use client";

import { Box, Typography } from "@mui/material";

export default function OurProcess() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "750px",
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "32px", md: "56px" },
          fontWeight: 700,
          color: "#1F2428",
          mb: 8,
        }}
      >
        Our Process
      </Typography>

      <Box
        sx={{
          position: "relative",
          width: "280px",
          height: "280px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            borderRadius: "28px",
            border: "1px solid #CFCFCF",
            background: "#F5F5F5",
            transform: "rotate(-18deg) translate(-20px, 10px)",
            zIndex: 1,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            borderRadius: "28px",
            border: "1px solid #CFCFCF",
            background: "#F5F5F5",
            transform: "rotate(12deg) translate(20px, 10px)",
            zIndex: 2,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            borderRadius: "28px",
            background: "#000",
            color: "#fff",
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 30px 60px rgba(0,0,0,0.5)",
          }}
        >
          <Typography
            sx={{
              position: "absolute",
              top: 20,
              left: 24,
              fontSize: "50px",
              fontWeight: 700,
              opacity: 0.6,
            }}
          >
            03
          </Typography>

          <Typography sx={{ fontSize: "14px" }}>
            Step 3
          </Typography>

          <Typography
            sx={{
              position: "absolute",
              bottom: 20,
              right: 24,
              fontSize: "50px",
              fontWeight: 700,
              opacity: 0.4,
            }}
          >
            03
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}