"use client";

import { Box, Typography, Button } from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/navigation";

export default function PricingSection() {
  const router = useRouter();

  const handleBooking = (index: number) => {
    const packageNames = ["exterior", "standard", "premium"];

    router.push(`/booking?type=location&package=${packageNames[index]}`);
  };

  return (
    <Box
      sx={{
        width: "100%",
        background: "#fff",
        display: "flex",
        justifyContent: "center",
        py: {
          xs: "48px",
          sm: "60px",
          md: "80px",
          lg: "100px",
          xl: "120px",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1440px",
          px: {
            xs: 2,
            sm: 3,
            md: 4,
            lg: 6,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              lg: "row",
            },
            justifyContent: "space-between",
            alignItems: {
              xs: "stretch",
              lg: "flex-start",
            },
            gap: {
              xs: 4,
              md: 5,
              lg: 6,
            },
            mb: {
              xs: 4,
              sm: 5,
              md: 6,
            },
          }}
        >
          <Box
            sx={{
              maxWidth: {
                xs: "100%",
                lg: "430px",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "26px",
                  sm: "30px",
                  md: "36px",
                },
                color: "#BDBDBD",
                mb: 0.5,
                lineHeight: 1.1,
              }}
            >
              Pricing
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: "32px",
                  sm: "42px",
                  md: "52px",
                  lg: "56px",
                  xl: "62px",
                },
                fontWeight: 600,
                lineHeight: 1.15,
                color: "#111",
              }}
            >
              Let’s decide <br />
              your need
            </Typography>
          </Box>

          <Box
            sx={{
              width: "100%",
              maxWidth: {
                xs: "100%",
                lg: "720px",
              },
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
              },
              gap: "8px",
              background: "#F0F4F8",
              borderRadius: {
                xs: "18px",
                sm: "22px",
                md: "28px",
              },
              p: "6px",
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
                px: {
                  xs: 2.5,
                  md: 3,
                },
                py: {
                  xs: 2,
                  md: 2.5,
                },
                borderRadius: {
                  xs: "16px",
                  md: "24px",
                },
              }}
            >
              <DirectionsCarIcon
                sx={{
                  fontSize: {
                    xs: 22,
                    md: 24,
                  },
                  color: "#81ECFF",
                }}
              />

              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                Cars
              </Typography>

              <Typography
                sx={{
                  fontSize: "11px",
                  opacity: 0.72,
                }}
              >
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
                px: {
                  xs: 2.5,
                  md: 3,
                },
                py: {
                  xs: 2,
                  md: 2.5,
                },
                borderRadius: {
                  xs: "16px",
                  md: "24px",
                },
              }}
            >
              <TwoWheelerIcon
                sx={{
                  fontSize: {
                    xs: 22,
                    md: 24,
                  },
                  color: "#81ECFF",
                }}
              />

              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#111",
                }}
              >
                Two-Wheelers
              </Typography>

              <Typography
                sx={{
                  fontSize: "11px",
                  opacity: 0.6,
                  color: "#111",
                }}
              >
                Bike or Scooter
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "grid",
            justifyContent: "center",
            justifyItems: "center",
            width: "100%",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 269px)",
              lg: "repeat(3, 269px)",
            },
            gap: {
              xs: 2,
              sm: 2.5,
              md: 3,
            },
          }}
        >
          {[1, 2, 3].map((_, i) => {
            const isActive = i === 0;

            return (
              <Box
                key={i}
                sx={{
                  width: {
                    xs: "100%",
                    sm: "269px",
                  },
                  maxWidth: "269px",
                  minHeight: {
                    xs: "310px",
                    sm: "350px",
                    md: "386px",
                  },
                  background: isActive ? "#000" : "#fff",
                  color: isActive ? "#fff" : "#000",
                  borderRadius: {
                    xs: "18px",
                    md: "20px",
                  },
                  p: {
                    xs: 2.5,
                    md: 3,
                  },
                  border: isActive ? "none" : "1px solid #E5E7EB",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "20px",
                        md: "28px",
                      },
                      fontWeight: 700,
                    }}
                  >
                    {i === 0
                      ? "$ 50 / $ 80"
                      : i === 1
                        ? "$ 60 / $ 100"
                        : "$ 200 / $ 250"}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 2,
                      fontSize: {
                        xs: "16px",
                        md: "20px",
                      },
                      lineHeight: 1.45,
                      fontWeight: 500,
                    }}
                  >
                    {i === 0
                      ? "Exterior Wash"
                      : i === 1
                        ? "Standard Interior Cleaning"
                        : "Exterior Water Wash + Standard Interior Cleaning"}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 1.2,
                      fontSize: {
                        xs: "11px",
                        md: "12px",
                      },
                      lineHeight: 1.55,
                      opacity: isActive ? 0.72 : 0.65,
                    }}
                  >
                    (Sedan,Hatchback or 5 seaters / SUVs or more than 5 seaters)
                  </Typography>
                </Box>

                <Box sx={{ mt: 4 }}>
                  <Button
                    fullWidth
                    onClick={() => handleBooking(i)}
                    sx={{
                      height: {
                        xs: "44px",
                        md: "48px",
                      },
                      borderRadius: "14px",
                      background: isActive ? "#fff" : "transparent",
                      color: "#000",
                      textTransform: "none",
                      fontSize: "14px",
                      fontWeight: 600,
                      border: isActive ? "none" : "1px solid #D1D5DB",
                    }}
                  >
                    BOOK NOW
                  </Button>

                  <Box
                    onClick={() => handleBooking(i)}
                    sx={{
                      mt: 2,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 0.6,
                      cursor: "pointer",
                      color: isActive ? "#fff" : "#111",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "14px",
                      }}
                    >
                      Know more
                    </Typography>

                    <ArrowForwardIcon
                      sx={{
                        fontSize: 14,
                      }}
                    />
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
