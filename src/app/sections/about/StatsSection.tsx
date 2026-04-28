"use client";

import { Box, Typography } from "@mui/material";

export default function StatsSection() {
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
          maxWidth: "1280px",
          mx: "auto",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: {
              xs: "22px",
              sm: "26px",
              md: "30px",
              lg: "32px",
            },
            fontWeight: 500,
            lineHeight: 1.35,
            color: "#00AFC4",
            maxWidth: "1280px",
            mx: "auto",
            mb: {
              xs: "45px",
              sm: "60px",
              md: "75px",
              lg: "85px",
            },
          }}
        >
          If you don’t have enough hours in the day to visit the car wash,
          <br />
          we can bring mobile detailing services to your doorstep.
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              lg: "1.4fr 1fr",
            },
            gap: {
              xs: 4,
              md: 5,
              lg: "30px",
            },
            alignItems: "center",
            mb: {
              xs: "60px",
              sm: "80px",
              md: "100px",
              lg: "130px",
            },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: {
                  xs: "18px",
                  sm: "20px",
                  md: "22px",
                  lg: "24px",
                },
                lineHeight: 1.7,
                color: "#2B2B2B",
                mb: {
                  xs: "24px",
                  md: "32px",
                  lg: "42px",
                },
                textAlign: {
                  xs: "center",
                  lg: "left",
                },
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
                fontSize: {
                  xs: "18px",
                  sm: "20px",
                  md: "22px",
                  lg: "24px",
                },
                lineHeight: 1.7,
                color: "#2B2B2B",
                textAlign: {
                  xs: "center",
                  lg: "left",
                },
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
              width: "100%",
              height: {
                xs: "260px",
                sm: "340px",
                md: "380px",
                lg: "385px",
              },
              objectFit: "cover",
              display: "block",
              mt: {
                xs: 0,
                lg: 5,
              },
            }}
          />
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
            },
            gap: {
              xs: 4,
              sm: 5,
              md: "60px",
            },
            textAlign: "center",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: {
                  xs: "34px",
                  sm: "40px",
                  md: "44px",
                },
                fontWeight: 700,
                color: "#222",
                lineHeight: 1,
                mb: "14px",
              }}
            >
              1000+
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: "24px",
                  sm: "32px",
                  md: "44px",
                },
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
                fontSize: {
                  xs: "34px",
                  sm: "40px",
                  md: "44px",
                },
                fontWeight: 700,
                color: "#222",
                lineHeight: 1,
                mb: "14px",
              }}
            >
              3+
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: "24px",
                  sm: "32px",
                  md: "44px",
                },
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