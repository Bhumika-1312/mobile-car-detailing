"use client";

import { Box, Typography } from "@mui/material";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import EnergySavingsLeafOutlinedIcon from "@mui/icons-material/EnergySavingsLeafOutlined";

export default function WhyChooseUsSection() {
  const items = [
    {
      icon: <FmdGoodOutlinedIcon sx={{ fontSize: 20 }} />,
      title: "WELCOME TO YOU",
      sub: "NO QUEUES, NO TRAVEL",
    },
    {
      icon: <VerifiedUserOutlinedIcon sx={{ fontSize: 20 }} />,
      title: "PRO CHEMICALS",
      sub: "PH NEUTRAL STANDARDS",
    },
    {
      icon: <AccessTimeOutlinedIcon sx={{ fontSize: 20 }} />,
      title: "SAVES TIME",
      sub: "1-2 HOUR TURNAROUND",
    },
    {
      icon: <EnergySavingsLeafOutlinedIcon sx={{ fontSize: 20 }} />,
      title: "ECO-CONSCIOUS",
      sub: "WATER-SAVING TECH",
    },
  ];

  const shapes = [
    { top: 20, left: 190, size: 70 },
    { top: 36, left: 315, size: 58 },
    { top: 110, left: 210, size: 82 },
    { top: 180, left: 125, size: 72 },
    { top: 185, left: 250, size: 88 },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        background: "#fff",
        pt: {
          xs: "40px",
          sm: "55px",
          md: "70px",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          background: "#000",
          py: {
            xs: "45px",
            sm: "55px",
            md: "65px",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "1280px",
            mx: "auto",
            px: {
              xs: 2,
              sm: 3,
              md: 5,
              lg: 6,
            },
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              lg: "1.05fr 1fr",
            },
            gap: {
              xs: 5,
              sm: 6,
              md: 7,
              lg: 8,
            },
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: {
                  xs: "32px",
                  sm: "42px",
                  md: "54px",
                  lg: "58px",
                },
                fontWeight: 300,
                lineHeight: 1.05,
                color: "#fff",
                letterSpacing: "-1px",
                textAlign: {
                  xs: "center",
                  lg: "left",
                },
                mb: {
                  xs: 4,
                  md: 6,
                },
              }}
            >
              WHY YOU SHOULD
              <br />
              <Box
                component="span"
                sx={{ color: "#9C9C9C" }}
              >
                CHOOSE US
              </Box>
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "1fr 1fr",
                },
                gap: {
                  xs: 2,
                  sm: 2.5,
                  md: 4,
                },
              }}
            >
              {items.map((item, i) => (
                <Box
                  key={i}
                  sx={{
                    borderLeft:
                      "1px solid #323232",
                    borderBottom:
                      "1px solid #232323",
                    pl: 2,
                    pb: 2,
                    minHeight: {
                      xs: "95px",
                      md: "110px",
                    },
                  }}
                >
                  <Box
                    sx={{
                      color: "#fff",
                      mb: 2,
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#fff",
                      fontWeight: 500,
                      letterSpacing: "0.5px",
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "10px",
                      color: "#7A7A7A",
                      mt: 0.7,
                      letterSpacing: "0.6px",
                    }}
                  >
                    {item.sub}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: {
                  md: "360px",
                  lg: "430px",
                },
                height: {
                  md: "360px",
                  lg: "430px",
                },
              }}
            >
              {shapes.map((shape, i) => (
                <Box
                  key={i}
                  sx={{
                    position: "absolute",
                    top: {
                      md: shape.top * 0.8,
                      lg: shape.top,
                    },
                    left: {
                      md: shape.left * 0.8,
                      lg: shape.left,
                    },
                    width: {
                      md: shape.size * 0.8,
                      lg: shape.size,
                    },
                    height: {
                      md: shape.size * 0.8,
                      lg: shape.size,
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      border:
                        "1px solid #151515",
                    }}
                  />

                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: -14,
                      width: "calc(100% + 28px)",
                      height: 14,
                      transform:
                        "translateY(-50%)",
                      border:
                        "1px solid #151515",
                    }}
                  />

                  <Box
                    sx={{
                      position: "absolute",
                      left: "50%",
                      top: -14,
                      width: 14,
                      height:
                        "calc(100% + 28px)",
                      transform:
                        "translateX(-50%)",
                      border:
                        "1px solid #151515",
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}