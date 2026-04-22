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
        pb: "40px",
        pt: "70px"
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1441px",
          px: { xs: 2, md: 0 },
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: { xs: "320px", sm: "420px", md: "934px" },
            borderRadius: "0px",
            overflow: "hidden",
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
              display: "block",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}