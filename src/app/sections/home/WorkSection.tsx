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
        py: {
          xs: "50px",
          sm: "70px",
          md: "100px",
          lg: "100px",
        },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1280px",
          px: {
            xs: 2,
            sm: 3,
            md: 4,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: {
              xs: "flex-start",
              sm: "flex-end",
            },
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            gap: {
              xs: 3,
              sm: 2,
            },
            mb: {
              xs: 4,
              md: 6,
            },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: {
                  xs: "28px",
                  sm: "34px",
                  md: "40px",
                },
                fontWeight: 500,
                color: "#2B2B2B",
                lineHeight: 1.2,
              }}
            >
              Take a look at some <br />
              of our work
            </Typography>

            <Typography
              sx={{
                mt: 2,
                fontSize: {
                  xs: "13px",
                  md: "14px",
                },
                color: "#6B7280",
              }}
            >
              01/05
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: {
                  xs: 38,
                  md: 40,
                },
                height: {
                  xs: 38,
                  md: 40,
                },
                border: "1px solid #9CA3AF",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#6B7280",
                cursor: "pointer",
                flexShrink: 0,
              }}
            >
              <ArrowBackIcon
                fontSize="small"
              />
            </Box>

            <Box
              sx={{
                width: {
                  xs: 38,
                  md: 40,
                },
                height: {
                  xs: 38,
                  md: 40,
                },
                border: "1px solid #9CA3AF",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#6B7280",
                cursor: "pointer",
                flexShrink: 0,
              }}
            >
              <ArrowForwardIcon
                fontSize="small"
              />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2,1fr)",
              lg: "repeat(4,1fr)",
            },
            gap: {
              xs: 2,
              sm: 2.5,
              md: 3,
            },
          }}
        >
          {images.map((img, i) => (
            <Box
              key={i}
              sx={{
                width: "100%",
                height: {
                  xs: "220px",
                  sm: "230px",
                  md: "244px",
                },
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition:
                  "center",
                borderRadius: "6px",
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}