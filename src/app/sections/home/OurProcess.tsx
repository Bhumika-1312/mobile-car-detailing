"use client";

import { Box, Typography } from "@mui/material";

export default function OurProcess() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: {
          xs: "520px",
          sm: "620px",
          md: "700px",
          lg: "750px",
          xl: "820px",
        },
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 6, sm: 8, md: 10 },
        overflow: "hidden",
      }}
    >
      <Typography
        sx={{
          fontSize: {
            xs: "28px",
            sm: "36px",
            md: "48px",
            lg: "56px",
            xl: "64px",
          },
          fontWeight: 700,
          color: "#1F2428",
          mb: {
            xs: 5,
            sm: 6,
            md: 7,
            lg: 8,
          },
          textAlign: "center",
          lineHeight: 1.15,
        }}
      >
        Our Process
      </Typography>

      <Box
        sx={{
          position: "relative",
          width: {
            xs: "220px",
            sm: "260px",
            md: "300px",
            lg: "340px",
            xl: "400px",
          },
          height: {
            xs: "220px",
            sm: "260px",
            md: "300px",
            lg: "340px",
            xl: "400px",
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            borderRadius: {
              xs: "22px",
              md: "28px",
              xl: "34px",
            },
            border: "1px solid #CFCFCF",
            background: "#F5F5F5",
            transform: {
              xs: "rotate(-16deg) translate(-12px, 8px)",
              md: "rotate(-18deg) translate(-18px, 10px)",
              xl: "rotate(-18deg) translate(-24px, 14px)",
            },
            zIndex: 1,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            borderRadius: {
              xs: "22px",
              md: "28px",
              xl: "34px",
            },
            border: "1px solid #CFCFCF",
            background: "#F5F5F5",
            transform: {
              xs: "rotate(10deg) translate(12px, 8px)",
              md: "rotate(12deg) translate(18px, 10px)",
              xl: "rotate(12deg) translate(24px, 14px)",
            },
            zIndex: 2,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            borderRadius: {
              xs: "22px",
              md: "28px",
              xl: "34px",
            },
            background: "#000",
            color: "#fff",
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: {
              xs: "0 18px 30px rgba(0,0,0,0.35)",
              md: "0 30px 60px rgba(0,0,0,0.5)",
            },
          }}
        >
          <Typography
            sx={{
              position: "absolute",
              top: { xs: 16, md: 20, xl: 26 },
              left: { xs: 18, md: 24, xl: 28 },
              fontSize: {
                xs: "38px",
                sm: "44px",
                md: "50px",
                xl: "62px",
              },
              fontWeight: 700,
              opacity: 0.6,
              lineHeight: 1,
            }}
          >
            03
          </Typography>

          <Typography
            sx={{
              fontSize: {
                xs: "12px",
                sm: "13px",
                md: "14px",
                xl: "16px",
              },
              fontWeight: 500,
              letterSpacing: "0.5px",
            }}
          >
            Step 3
          </Typography>

          <Typography
            sx={{
              position: "absolute",
              bottom: { xs: 16, md: 20, xl: 26 },
              right: { xs: 18, md: 24, xl: 28 },
              fontSize: {
                xs: "38px",
                sm: "44px",
                md: "50px",
                xl: "62px",
              },
              fontWeight: 700,
              opacity: 0.4,
              lineHeight: 1,
            }}
          >
            03
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}