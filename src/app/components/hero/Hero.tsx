"use client";

import { Box, Typography } from "@mui/material";
import BookingCard from "../booking/BookingCard";

export default function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: "100%",
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
        }}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.8) 100%)",
        }}
      />

      <BookingCard />

      <Box
        sx={{
          position: "absolute",
          bottom: { xs: 40, md: 80 },
          left: { xs: 20, md: 80 },
          zIndex: 2,
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontWeight: 800,
            lineHeight: 1.05,
            fontSize: {
              xs: "40px",
              md: "80px",
            },
            letterSpacing: "-1px",
          }}
        >
          Framing <br /> the comfort.
        </Typography>

        <Typography
          sx={{
            color: "#fff",
            mt: 2,
            fontSize: "14px",
            letterSpacing: "2px",
            opacity: 0.8,
          }}
        >
          CALL TO BOOK
        </Typography>
      </Box>
    </Box>
  );
}
