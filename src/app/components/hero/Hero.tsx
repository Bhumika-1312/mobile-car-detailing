"use client";

import { Box, Typography } from "@mui/material";
import BookingCard from "../booking/BookingCard";

export default function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: {
          xs: "760px",
          sm: "820px",
          md: "100vh",
          lg: "100vh",
        },
        height: {
          xs: "auto",
          md: "100vh",
        },
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.58) 0%, rgba(0,0,0,0.82) 100%)",
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: {
            xs: "flex-start",
            md: "center",
          },
          justifyContent: {
            xs: "flex-start",
            md: "flex-end",
          },
          pt: {
            xs: "110px",
            sm: "120px",
            md: 0,
          },
          px: {
            xs: 2,
            sm: 3,
            md: 5,
            lg: 7,
            xl: 10,
          },
        }}
      >
        <BookingCard />
      </Box>

      <Box
        sx={{
          position: "absolute",
          zIndex: 2,
          left: {
            xs: "16px",
            sm: "24px",
            md: "50px",
            lg: "80px",
            xl: "110px",
          },
          bottom: {
            xs: "28px",
            sm: "34px",
            md: "60px",
            lg: "80px",
          },
          maxWidth: {
            xs: "92%",
            sm: "85%",
            md: "700px",
          },
        }}
      >
        <Typography
          sx={{
            color: "#FFFFFF",
            fontWeight: 800,
            lineHeight: 1.03,
            letterSpacing: "-1px",
            fontSize: {
              xs: "34px",
              sm: "46px",
              md: "62px",
              lg: "80px",
              xl: "96px",
            },
          }}
        >
          Framing <br /> the comfort.
        </Typography>

        <Typography
          sx={{
            color: "#FFFFFF",
            mt: {
              xs: 1.5,
              sm: 2,
              md: 2.5,
            },
            fontSize: {
              xs: "11px",
              sm: "12px",
              md: "14px",
              lg: "15px",
            },
            letterSpacing: {
              xs: "1.4px",
              md: "2px",
            },
            opacity: 0.8,
            fontWeight: 500,
          }}
        >
          CALL TO BOOK
        </Typography>
      </Box>
    </Box>
  );
}