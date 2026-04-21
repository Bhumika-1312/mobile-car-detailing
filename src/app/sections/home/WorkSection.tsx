"use client";

import { Box, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function WorkSection() {
  const images = [
    "/images/work1.jpg",
    "/images/work2.jpg",
    "/images/work3.jpg",
    "/images/work4.jpg",
  ];

  return (
    <Box
      sx={{
        width: "100%",
        background: "#fff",
        py: "100px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1280px",
          px: { xs: 3, md: 4 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            mb: 6,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "40px",
                fontWeight: 500,
                color: "#2B2B2B",
                lineHeight: 1.2,
              }}
            >
              Take a look at some <br /> of our work
            </Typography>

            <Typography
              sx={{
                mt: 2,
                fontSize: "14px",
                color: "#6B7280",
              }}
            >
              01/05
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Box
              sx={{
                width: 40,
                height: 40,
                border: "1px solid #9CA3AF",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#6B7280",
                cursor: "pointer",
              }}
            >
              <ArrowBackIcon fontSize="small" />
            </Box>

            <Box
              sx={{
                width: 40,
                height: 40,
                border: "1px solid #9CA3AF",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#6B7280",
                cursor: "pointer",
              }}
            >
              <ArrowForwardIcon fontSize="small" />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 3,
          }}
        >
          {images.map((img, i) => (
            <Box
              key={i}
              sx={{
                flex: 1,
                height: "244px",
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "6px",
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
