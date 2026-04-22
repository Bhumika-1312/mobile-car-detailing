"use client";

import { Box, Typography } from "@mui/material";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import EnergySavingsLeafOutlinedIcon from "@mui/icons-material/EnergySavingsLeafOutlined";

export default function WhyChooseUsSection() {
  const items = [
    {
      icon: <FmdGoodOutlinedIcon sx={{ fontSize: 18 }} />,
      title: "WELCOME TO YOU",
      sub: "NO QUEUES, NO TRAVEL",
    },
    {
      icon: <VerifiedUserOutlinedIcon sx={{ fontSize: 18 }} />,
      title: "PRO CHEMICALS",
      sub: "PH NEUTRAL STANDARDS",
    },
    {
      icon: <AccessTimeOutlinedIcon sx={{ fontSize: 18 }} />,
      title: "SAVES TIME",
      sub: "1-2 HOUR TURNAROUND",
    },
    {
      icon: <EnergySavingsLeafOutlinedIcon sx={{ fontSize: 18 }} />,
      title: "ECO-CONSCIOUS",
      sub: "WATER-SAVING TECH",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        background: "#fff",
        pt: "70px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          background: "#000",
          minHeight: "540px",
          display: "flex",
          justifyContent: "center",
          py: "60px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "1280px",
            px: 6,
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            alignItems: "start",
            gap: "40px",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "56px",
                fontWeight: 300,
                lineHeight: 1.05,
                color: "#fff",
                letterSpacing: "-1px",
                mb: 7,
              }}
            >
              WHY YOU SHOULD
              <br />
              <Box component="span" sx={{ color: "#A3A3A3" }}>
                CHOOSE US
              </Box>
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                columnGap: "70px",
                rowGap: "42px",
                maxWidth: "620px",
              }}
            >
              {items.map((item, i) => (
                <Box
                  key={i}
                  sx={{
                    borderLeft: "1px solid #3A3A3A",
                    pl: 2,
                    pb: 2,
                    borderBottom: "1px solid #2B2B2B",
                  }}
                >
                  <Box sx={{ color: "#fff", mb: 3 }}>{item.icon}</Box>

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
              position: "relative",
              height: "420px",
              mt: 2,
            }}
          >
            {[
              { top: 20, left: 190, size: 70 },
              { top: 36, left: 315, size: 58 },
              { top: 110, left: 210, size: 82 },
              { top: 180, left: 125, size: 72 },
              { top: 185, left: 250, size: 88 },
            ].map((shape, i) => (
              <Box
                key={i}
                sx={{
                  position: "absolute",
                  top: shape.top,
                  left: shape.left,
                  width: shape.size,
                  height: shape.size,
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    border: "1px solid #151515",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: -18,
                    width: shape.size + 36,
                    height: 18,
                    transform: "translateY(-50%)",
                    border: "1px solid #151515",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    left: "50%",
                    top: -18,
                    width: 18,
                    height: shape.size + 36,
                    transform: "translateX(-50%)",
                    border: "1px solid #151515",
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}