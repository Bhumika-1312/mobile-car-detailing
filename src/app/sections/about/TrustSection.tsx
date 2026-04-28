"use client";

import { Box, Typography, Avatar } from "@mui/material";

export default function TrustSection() {
  const cards = [
    {
      text: "I was blown away by how complete this UI Kit is. It has everything I need, from assets to components.",
      name: "Mirana Marci",
      image: "/images/user1.jpg",
      dark: false,
    },
    {
      text: "I was blown away by how complete this UI Kit is. It has everything I need, from assets to components.",
      name: "Mirana Marci",
      image: "/images/user2.jpg",
      dark: true,
    },
    {
      text: "Excellent work, communication with XYZ was always super easy and efficient. They really made our job easy!",
      name: "Mirana Marci",
      image: "/images/user3.jpg",
      dark: true,
    },
    {
      text: "I was blown away by how complete this UI Kit is. It has everything I need, from assets to components.",
      name: "Mirana Marci",
      image: "/images/user4.jpg",
      dark: false,
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
        <Typography
          sx={{
            textAlign: "center",
            fontSize: {
              xs: "28px",
              sm: "32px",
              md: "36px",
            },
            fontWeight: 700,
            color: "#222",
            mb: {
              xs: "40px",
              sm: "55px",
              md: "70px",
            },
            lineHeight: 1.1,
          }}
        >
          We build{" "}
          <Box
            component="span"
            sx={{
              color: "#00AFC4",
            }}
          >
            trust
          </Box>
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr",
              md: "1fr 1fr",
              lg: "1fr 1fr 1fr",
            },
            gap: {
              xs: 2,
              sm: 3,
              md: 3,
              lg: "28px",
            },
            alignItems: "stretch",
          }}
        >
          <Box>
            <Box
              sx={{
                border: "1px solid #E8E8E8",
                background: "#fff",
                px: {
                  xs: 2.5,
                  sm: 3,
                  md: "26px",
                },
                py: {
                  xs: 3,
                  md: "28px",
                },
                minHeight: {
                  xs: "280px",
                  sm: "300px",
                  lg: "330px",
                },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "15px",
                    md: "16px",
                  },
                  lineHeight: 1.8,
                  color: "#333",
                }}
              >
                {cards[0].text}
              </Typography>

              <Box>
                <Box
                  sx={{
                    borderTop:
                      "1px solid #E8E8E8",
                    mb: 3,
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Avatar
                    src={cards[0].image}
                    sx={{
                      width: 48,
                      height: 48,
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "18px",
                        md: "20px",
                      },
                      fontWeight: 700,
                    }}
                  >
                    {cards[0].name}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: {
                xs: 2,
                md: "18px",
              },
            }}
          >
            {[cards[1], cards[2]].map(
              (item, i) => (
                <Box
                  key={i}
                  sx={{
                    background: "#000",
                    color: "#fff",
                    px: {
                      xs: 2.5,
                      sm: 3,
                      md: "26px",
                    },
                    py: {
                      xs: 3,
                      md: "28px",
                    },
                    minHeight: {
                      xs: "260px",
                      sm: "280px",
                      lg: "300px",
                    },
                    display: "flex",
                    flexDirection:
                      "column",
                    justifyContent:
                      "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "15px",
                        md: "16px",
                      },
                      lineHeight: 1.8,
                    }}
                  >
                    {item.text}
                  </Typography>

                  <Box>
                    <Box
                      sx={{
                        borderTop:
                          "1px solid rgba(255,255,255,0.25)",
                        mb: 3,
                      }}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        alignItems:
                          "center",
                        gap: 2,
                      }}
                    >
                      <Avatar
                        src={item.image}
                        sx={{
                          width: 48,
                          height: 48,
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "18px",
                            md: "20px",
                          },
                          fontWeight: 700,
                        }}
                      >
                        {item.name}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              )
            )}
          </Box>

          <Box
            sx={{
              gridColumn: {
                xs: "auto",
                md: "span 2",
                lg: "auto",
              },
            }}
          >
            <Box
              sx={{
                border: "1px solid #E8E8E8",
                background: "#fff",
                px: {
                  xs: 2.5,
                  sm: 3,
                  md: "26px",
                },
                py: {
                  xs: 3,
                  md: "28px",
                },
                minHeight: {
                  xs: "280px",
                  sm: "300px",
                  lg: "330px",
                },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "15px",
                    md: "16px",
                  },
                  lineHeight: 1.8,
                  color: "#333",
                }}
              >
                {cards[3].text}
              </Typography>

              <Box>
                <Box
                  sx={{
                    borderTop:
                      "1px solid #E8E8E8",
                    mb: 3,
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Avatar
                    src={cards[3].image}
                    sx={{
                      width: 48,
                      height: 48,
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "18px",
                        md: "20px",
                      },
                      fontWeight: 700,
                    }}
                  >
                    {cards[3].name}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}