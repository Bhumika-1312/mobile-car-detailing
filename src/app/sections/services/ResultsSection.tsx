"use client";

import { Box, Typography, Button } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function ResultsSection() {
  const images = [
    "/images/result1.jpg",
    "/images/result2.jpg",
  ];

  return (
    <Box sx={{ width: "100%", background: "#F7F7F7", py: "100px" }}>
      <Box sx={{ maxWidth: "1280px", mx: "auto", px: 6 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 5,
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: 700,
              letterSpacing: "0.5px",
              color: "#000",
            }}
          >
            RESULTS SPEAK
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              cursor: "pointer",
              color: "#000",
            }}
          >
            <Typography sx={{ fontSize: "14px" }}>
              View Gallery
            </Typography>
            <ArrowForwardIcon sx={{ fontSize: 16 }} />
          </Box>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px",
          }}
        >
          {images.map((img, i) => (
            <Box
              key={i}
              sx={{
                width: "100%",
                height: "335px",
                borderRadius: "8px",
                overflow: "hidden",
                backgroundImage: `url(${img})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
          ))}
        </Box>

        <Box
          sx={{
            mt: 6,
            display: "flex",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Button
            startIcon={<CallIcon />}
            sx={{
              background: "#000",
              color: "#fff",
              borderRadius: "999px",
              px: 4,
              py: 1,
              fontSize: "12px",
              textTransform: "none",
              "&:hover": {
                background: "#111",
              },
            }}
          >
            CALL TO BOOK
          </Button>

          <Button
            sx={{
              border: "1px solid #000",
              borderRadius: "999px",
              px: 4,
              py: 1,
              fontSize: "12px",
              textTransform: "none",
              color: "#000",
            }}
          >
            CONTACT US
          </Button>
        </Box>
      </Box>
    </Box>
  );
}