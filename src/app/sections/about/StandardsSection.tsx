"use client";

import { Box, Typography } from "@mui/material";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";

export default function StandardsSection() {
  const items = [
    {
      icon: (
        <VerifiedOutlinedIcon
          sx={{
            fontSize: {
              xs: 20,
              md: 22,
            },
            color: "#00AFC4",
          }}
        />
      ),
      title: "Eco-Conscious Chemistry",
      text: "pH-neutral cleaners that are tough on dirt but gentle on the planet and your driveway.",
    },
    {
      icon: (
        <ShieldOutlinedIcon
          sx={{
            fontSize: {
              xs: 20,
              md: 22,
            },
            color: "#00AFC4",
          }}
        />
      ),
      title: "Paint-Safe Techniques",
      text: "Using cross-hatch strokes and fresh microfiber for every panel to prevent marring.",
    },
    {
      icon: (
        <BuildOutlinedIcon
          sx={{
            fontSize: {
              xs: 20,
              md: 22,
            },
            color: "#00AFC4",
          }}
        />
      ),
      title: "Professional Apparatus",
      text: "Industrial steam extractors and Rupes polishers for a level of clean no hand-wash can match.",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        background: "#fff",
        py: {
          xs: "55px",
          sm: "70px",
          md: "90px",
          lg: "110px",
        },
        display: "flex",
        justifyContent: "center",
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
          maxWidth: "1440px",
          mx: "auto",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              lg: "1fr 520px",
              xl: "1fr 560px",
            },
            gap: {
              xs: 5,
              md: 6,
              lg: "70px",
              xl: "80px",
            },
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              maxWidth: {
                xs: "100%",
                lg: "560px",
              },
              ml: {
                xs: 0,
                lg: "40px",
                xl: "70px",
              },
              order: {
                xs: 2,
                lg: 1,
              },
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "30px",
                  sm: "34px",
                  md: "36px",
                  lg: "36px",
                  xl: "42px",
                },
                fontWeight: 700,
                color: "#222",
                lineHeight: 1.08,
                mb: {
                  xs: 4,
                  md: 5,
                  lg: "55px",
                },
                textAlign: {
                  xs: "center",
                  lg: "left",
                },
              }}
            >
              Uncompromising
              <br />
              Standards
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: {
                  xs: 3,
                  md: 4,
                  lg: "38px",
                },
              }}
            >
              {items.map((item, i) => (
                <Box
                  key={i}
                  sx={{
                    display: "flex",
                    gap: {
                      xs: 1.5,
                      md: 2,
                    },
                    alignItems: "flex-start",
                  }}
                >
                  <Box
                    sx={{
                      mt: "3px",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "15px",
                          md: "16px",
                        },
                        fontWeight: 700,
                        color: "#222",
                        mb: "6px",
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: {
                          xs: "14px",
                          md: "14px",
                        },
                        lineHeight: 1.6,
                        color: "#5C5C5C",
                        maxWidth: "470px",
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          <Box
            sx={{
              order: {
                xs: 1,
                lg: 2,
              },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src="/images/about-standard.jpg"
              alt="Standards"
              sx={{
                width: "100%",
                maxWidth: {
                  xs: "100%",
                  sm: "520px",
                  lg: "522px",
                  xl: "560px",
                },
                height: {
                  xs: "260px",
                  sm: "360px",
                  md: "460px",
                  lg: "512px",
                  xl: "560px",
                },
                objectFit: "cover",
                display: "block",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}