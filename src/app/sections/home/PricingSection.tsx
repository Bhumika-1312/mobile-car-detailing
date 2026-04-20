"use client";

import { Box, Typography, Button } from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function PricingSection() {
  return (
    <Box
      sx={{
        background: "#EDEDED",
        py: "60px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1280px",
          px: { xs: 2, md: 4 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            mb: 3,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "36px",
                color: "#BDBDBD",
                mb: 0.5,
              }}
            >
              Pricing
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "30px", md: "52px" },
                fontWeight: 600,
                lineHeight: 1.2,
              }}
            >
              Let’s decide <br /> your need
            </Typography>
          </Box>

          <Box
            sx={{
              width: "700px",
              height: "134px",
              display: "flex",
              background: "#F0F4F8",
              borderRadius: "28px",
              p: "4px",
              mt: { xs: 3, md: 0 },
              minWidth: "340px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: 1,
                background: "#1F2428",
                color: "#fff",
                px: 3,
                py: 2,
                borderRadius: "24px",
                flex: 1,
              }}
            >
              <DirectionsCarIcon sx={{ fontSize: 22, color: "#81ECFF" }} />
              <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
                Cars
              </Typography>
              <Typography sx={{ fontSize: "11px", opacity: 0.7 }}>
                Hatchback, Sedan or SUV
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: 1,
                px: 3,
                py: 2,
                borderRadius: "24px",
                flex: 1,
              }}
            >
              <TwoWheelerIcon sx={{ fontSize: 22, color: "#81ECFF" }} />
              <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
                Two-Wheelers
              </Typography>
              <Typography sx={{ fontSize: "11px", opacity: 0.6 }}>
                Bike or Scooter
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 3,
            justifyContent: "center",
          }}
        >
          {[1, 2, 3].map((_, i) => {
            const isActive = i === 0;

            return (
              <Box
                key={i}
                sx={{
                  width: "289px",
                  height: "386px",
                  background: isActive ? "#000" : "#fff",
                  color: isActive ? "#fff" : "#000",
                  borderRadius: "16px",
                  p: 3,
                  border: isActive ? "none" : "1px solid #E5E7EB",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
                    {i === 0
                      ? "$ 50 / $ 80"
                      : i === 1
                      ? "$ 60 / $ 100"
                      : "$ 200 / $ 250"}
                  </Typography>

                  <Typography sx={{ mt: 2, fontSize: "14px" }}>
                    {i === 0
                      ? "Exterior Wash"
                      : i === 1
                      ? "Standard Interior Cleaning"
                      : "Exterior Water Wash + Standard Interior Cleaning"}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "11px",
                      opacity: isActive ? 0.7 : 0.6,
                      mt: 1,
                    }}
                  >
                    {i === 0
                      ? "(Sedan/Hatchback ₹50 / SUV more than ₹80)"
                      : i === 1
                      ? "(Sedan/Hatchback ₹60 / SUV more than ₹100)"
                      : "(Sedan/Hatchback ₹200 / SUV more than ₹250)"}
                  </Typography>
                </Box>

                <Box>
                  <Button
                    fullWidth
                    sx={{
                      background: isActive ? "#fff" : "transparent",
                      color: "#000",
                      borderRadius: "999px",
                      textTransform: "none",
                      fontSize: "12px",
                      py: 0.8,
                      border: isActive ? "none" : "1px solid #D1D5DB",
                    }}
                  >
                    BOOK NOW
                  </Button>

                  <Box
                    sx={{
                      mt: 2,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 0.5,
                    }}
                  >
                    <Typography sx={{ fontSize: "12px" }}>
                      Know more
                    </Typography>
                    <ArrowForwardIcon sx={{ fontSize: 13 }} />
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}