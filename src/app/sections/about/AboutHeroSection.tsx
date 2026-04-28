"use client";

import { Box } from "@mui/material";

export default function AboutHeroSection() {
  return (
    <Box
      sx={{
        width: "100%",
        background: "#fff",
        display: "flex",
        justifyContent: "center",
        pt: {
          xs: "64px",
          sm: "72px",
          md: "78px",
          lg: "82px",
        },
        pb: {
          xs: "24px",
          sm: "30px",
          md: "36px",
          lg: "40px",
        },
        px: {
          xs: 2,
          sm: 3,
          md: 4,
          lg: 5,
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1441px",
          mx: "auto",
        }}
      >
        <Box
          sx={{
            width: "100%",
            overflow: "hidden",
            height: {
              xs: "260px",
              sm: "360px",
              md: "520px",
              lg: "700px",
              xl: "934px",
            },
          }}
        >
          <Box
            component="img"
            src="/images/about-hero.jpg"
            alt="About Hero"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}