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
        py: "90px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1440px",
          px: "42px",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "250px 1fr",
            columnGap: "70px",
            alignItems: "start",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "32px",
                fontWeight: 500,
                color: "#8E8E8E",
                lineHeight: 1,
                mt: "4px",
              }}
            >
              Our Mission
            </Typography>
          </Box>

          <Typography
            sx={{
              maxWidth: "560px",
              fontSize: "32px",
              fontWeight: 700,
              lineHeight: 1.2,
              color: "#2B2B2B",
            }}
          >
            To deliver professional-grade detailing that goes beyond basic cleaning combining precision, convenience, and care to maintain every vehicle at its best.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "250px 1fr",
            columnGap: "70px",
            mt: "55px",
            alignItems: "start",
          }}
        >
          <Box>
            <Box
              component="img"
              src="/images/about-mission.jpg"
              alt="Mission"
              sx={{
                width: "430px",
                height: "360px",
                objectFit: "cover",
                display: "block",
              }}
            />

            <Typography
              sx={{
                mt: "170px",
                fontSize: "44px",
                fontWeight: 600,
                color: "#CFCFCF",
                lineHeight: 1,
                letterSpacing: "-1px",
                whiteSpace: "nowrap",
              }}
            >
              ...Purpose driven.
            </Typography>
          </Box>

          <Box
            sx={{
              pt: "95px",
              pl: "210px",
              maxWidth: "760px",
            }}
          >
            {points.map((item, i) => (
              <Box
                key={i}
                sx={{
                  mb: i === points.length - 1 ? 0 : "52px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: 700,
                    color: "#222",
                    mb: "10px",
                    lineHeight: 1.15,
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "24px",
                    lineHeight: 1.55,
                    color: "#333",
                    maxWidth: "660px",
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