"use client";

import { Box, Typography } from "@mui/material";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";

export default function StandardsSection() {
  const items = [
    {
      icon: <VerifiedOutlinedIcon sx={{ fontSize: 22, color: "#00AFC4" }} />,
      title: "Eco-Conscious Chemistry",
      text: "pH-neutral cleaners that are tough on dirt but gentle on the planet and your driveway.",
    },
    {
      icon: <ShieldOutlinedIcon sx={{ fontSize: 22, color: "#00AFC4" }} />,
      title: "Paint-Safe Techniques",
      text: "Using cross-hatch strokes and fresh microfiber for every panel to prevent marring.",
    },
    {
      icon: <BuildOutlinedIcon sx={{ fontSize: 22, color: "#00AFC4" }} />,
      title: "Professional Apparatus",
      text: "Industrial steam extractors and Rupes polishers for a level of clean no hand-wash can match.",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        background: "#fff",
        py: "110px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1440px",
          px: "80px",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 520px",
            gap: "80px",
            alignItems: "center",
          }}
        >
          <Box sx={{ maxWidth: "560px", ml: "70px" }}>
            <Typography
              sx={{
                fontSize: "36px",
                fontWeight: 700,
                color: "#222",
                lineHeight: 1.08,
                mb: "55px",
              }}
            >
              Uncompromising
              <br />
              Standards
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: "38px" }}>
              {items.map((item, i) => (
                <Box key={i} sx={{ display: "flex", gap: "16px" }}>
                  <Box sx={{ mt: "4px" }}>{item.icon}</Box>

                  <Box>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 700,
                        color: "#222",
                        mb: "6px",
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "14px",
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
            component="img"
            src="/images/about-standard.jpg"
            alt="Standards"
            sx={{
              width: "522px",
              height: "512px",
              objectFit: "cover",
              display: "block",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}