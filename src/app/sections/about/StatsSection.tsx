"use client";

import { Box, Typography } from "@mui/material";

export default function StatsSection() {
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
          maxWidth: "1280px",
          px: "36px",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "32px",
            fontWeight: 500,
            lineHeight: 1.35,
            color: "#00AFC4",
            maxWidth: "1280px",
            mx: "auto",
            mb: "85px",
          }}
        >
          If you don’t have enough hours in the day to visit the car wash,
          <br />
          we can bring mobile detailing services to your doorstep.
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr",
            gap: "10px",
            alignItems: "stretch",
            mb: "130px",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "24px",
                lineHeight: 1.65,
                color: "#2B2B2B",
                mb: "42px",
              }}
            >
              Imagine never having to go to the car wash again. Instead,
              picture someone cleaning your car while you work, run errands
              or relax at home. Our technicians operate from fully equipped
              vans that come to you. It’s the ultimate convenience!
              Automobile owners trust us with their vehicles because we’ve
              been successfully steam cleaning cars, 2-wheelers and more
              since 2002.
            </Typography>

            <Typography
              sx={{
                fontSize: "24px",
                lineHeight: 1.65,
                color: "#2B2B2B",
              }}
            >
              We don’t work with harsh detergents or pollutants. Instead, we
              use non-toxic steam cleaning methods, eco-friendly cleaning
              products, and specially formulated wiping cloths to maintain
              your vehicle’s showroom finish.
            </Typography>
          </Box>

          <Box
            component="img"
            src="/images/about-stats.jpg"
            alt="Stats"
            sx={{
                mt: 5,
              width: "100%",
              height: "385px",
              objectFit: "cover",
              display: "block",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            textAlign: "center",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "44px",
                fontWeight: 700,
                color: "#222",
                lineHeight: 1,
                mb: "18px",
              }}
            >
              1000+
            </Typography>

            <Typography
              sx={{
                fontSize: "44px",
                fontWeight: 700,
                color: "#222",
                lineHeight: 1.15,
              }}
            >
              VEHICLES SERVICED
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "44px",
                fontWeight: 700,
                color: "#222",
                lineHeight: 1,
                mb: "18px",
              }}
            >
              3+
            </Typography>

            <Typography
              sx={{
                fontSize: "44px",
                fontWeight: 700,
                color: "#222",
                lineHeight: 1.15,
              }}
            >
              YEARS OF EXPERIENCE
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}