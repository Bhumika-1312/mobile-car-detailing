"use client";

import { Box, Typography } from "@mui/material";

export default function MissionSection() {
  const points = [
    {
      title: "The Busy Executive",
      text: "On-site mobile service means your vehicle is detailed while you lead your business, saving you 4+ hours of travel and wait time.",
    },
    {
      title: "Resale Maximizers",
      text: "Engineered detailing that adds immediate perceived value and physical appeal for private sales or trade-ins.",
    },
    {
      title: "Quality Conscious Owners",
      text: "For those who view their vehicle as an investment that deserves laboratory-level care.",
    },
    {
      title: "Long-Term Care",
      text: "Preventative detailing that stops UV damage and oxidation before they start, ensuring your paint lasts a lifetime.",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        background: "#fff",
        display: "flex",
        justifyContent: "center",
        py: {
          xs: "50px",
          sm: "65px",
          md: "80px",
          lg: "90px",
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
          maxWidth: "1440px",
          mx: "auto",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              lg: "260px 1fr",
            },
            gap: {
              xs: 3,
              md: 4,
              lg: "70px",
            },
            alignItems: "start",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: {
                  xs: "26px",
                  sm: "30px",
                  md: "32px",
                },
                fontWeight: 500,
                color: "#8E8E8E",
                lineHeight: 1,
                textAlign: {
                  xs: "center",
                  lg: "left",
                },
              }}
            >
              Our Mission
            </Typography>
          </Box>

          <Typography
            sx={{
              maxWidth: {
                xs: "100%",
                lg: "560px",
              },
              fontSize: {
                xs: "24px",
                sm: "28px",
                md: "32px",
              },
              fontWeight: 700,
              lineHeight: 1.25,
              color: "#2B2B2B",
              textAlign: {
                xs: "center",
                lg: "left",
              },
              mx: {
                xs: "auto",
                lg: 0,
              },
            }}
          >
            To deliver professional-grade detailing that goes beyond basic cleaning combining precision, convenience, and care to maintain every vehicle at its best.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              xl: "520px 1fr",
            },
            gap: {
              xs: 5,
              md: 6,
              xl: "70px",
            },
            mt: {
              xs: "45px",
              md: "55px",
            },
            alignItems: "start",
          }}
        >
          <Box>
            <Box
              component="img"
              src="/images/about-mission.jpg"
              alt="Mission"
              sx={{
                width: "100%",
                maxWidth: {
                  xs: "100%",
                  sm: "520px",
                },
                height: {
                  xs: "260px",
                  sm: "340px",
                  md: "420px",
                },
                objectFit: "cover",
                display: "block",
                mx: {
                  xs: "auto",
                  xl: 0,
                },
              }}
            />

            <Typography
              sx={{
                mt: {
                  xs: 3,
                  md: 4,
                  lg: 5,
                },
                fontSize: {
                  xs: "30px",
                  sm: "36px",
                  md: "44px",
                },
                fontWeight: 600,
                color: "#CFCFCF",
                lineHeight: 1,
                letterSpacing: "-1px",
                textAlign: {
                  xs: "center",
                  xl: "left",
                },
              }}
            >
              ...Purpose driven.
            </Typography>
          </Box>

          <Box
            sx={{
              pt: {
                xs: 0,
                xl: "95px",
              },
              pl: {
                xs: 0,
                lg: 2,
                xl: "40px",
              },
              maxWidth: {
                xs: "100%",
                xl: "760px",
              },
            }}
          >
            {points.map((item, i) => (
              <Box
                key={i}
                sx={{
                  mb:
                    i === points.length - 1
                      ? 0
                      : {
                          xs: "32px",
                          md: "42px",
                          lg: "52px",
                        },
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "24px",
                      sm: "28px",
                      md: "30px",
                    },
                    fontWeight: 700,
                    color: "#222",
                    mb: "10px",
                    lineHeight: 1.15,
                    textAlign: {
                      xs: "center",
                      xl: "left",
                    },
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: {
                      xs: "18px",
                      sm: "20px",
                      md: "24px",
                    },
                    lineHeight: 1.55,
                    color: "#333",
                    maxWidth: "660px",
                    textAlign: {
                      xs: "center",
                      xl: "left",
                    },
                    mx: {
                      xs: "auto",
                      xl: 0,
                    },
                  }}
                >
                  {item.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}