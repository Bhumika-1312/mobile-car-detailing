"use client";

import { Box, Typography, Button } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/navigation";

export default function ResultsSection() {
  const router = useRouter();

  const images = [
    "/images/result1.jpg",
    "/images/result2.jpg",
  ];

  return (
    <Box
      sx={{
        width: "100%",
        background: "#F7F7F7",
        py: {
          xs: "50px",
          sm: "70px",
          md: "100px",
        },
      }}
    >
      <Box
        sx={{
          maxWidth: "1280px",
          mx: "auto",
          px: {
            xs: 2,
            sm: 3,
            md: 5,
            lg: 6,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: {
              xs: "flex-start",
              sm: "center",
            },
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            gap: {
              xs: 2,
              sm: 0,
            },
            mb: {
              xs: 4,
              md: 5,
            },
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "18px",
                sm: "20px",
              },
              fontWeight: 700,
              letterSpacing: "0.5px",
              color: "#000",
            }}
          >
            RESULTS SPEAK
          </Typography>

          <Box
            onClick={() =>
              router.push("/gallery")
            }
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              cursor: "pointer",
              color: "#000",
              transition: "0.2s",
              "&:hover": {
                opacity: 0.7,
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
              }}
            >
              View Gallery
            </Typography>

            <ArrowForwardIcon
              sx={{
                fontSize: 16,
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
            },
            gap: {
              xs: 2,
              sm: 3,
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
                  sm: "280px",
                  md: "335px",
                },
                borderRadius: "8px",
                overflow: "hidden",
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundRepeat:
                  "no-repeat",
                backgroundPosition:
                  "center",
              }}
            />
          ))}
        </Box>

        <Box
          sx={{
            mt: {
              xs: 4,
              md: 6,
            },
            display: "flex",
            justifyContent: "center",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <Button
            startIcon={<CallIcon />}
            sx={{
              background: "#000",
              color: "#fff",
              borderRadius: "999px",
              px: {
                xs: 3,
                md: 4,
              },
              py: 1,
              minWidth: {
                xs: "180px",
                sm: "auto",
              },
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
              px: {
                xs: 3,
                md: 4,
              },
              py: 1,
              minWidth: {
                xs: "180px",
                sm: "auto",
              },
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