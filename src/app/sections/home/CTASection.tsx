"use client";

import { Box, Typography, Button } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";

export default function CTASection() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: {
          xs: "520px",
          sm: "580px",
          md: "680px",
          lg: "750px",
          xl: "820px",
        },
        background: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 6, sm: 8, md: 10 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: {
            xs: "100%",
            sm: "620px",
            md: "750px",
            lg: "820px",
            xl: "980px",
          },
          textAlign: "center",
          mx: "auto",
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: {
              xs: "28px",
              sm: "36px",
              md: "48px",
              lg: "56px",
              xl: "64px",
            },
            lineHeight: {
              xs: 1.25,
              sm: 1.3,
              md: 1.35,
              lg: 1.4,
            },
            letterSpacing: {
              xs: "0.5px",
              md: "1px",
            },
            color: "#fff",
          }}
        >
          PROFESSIONAL CAR <br />
          DETAILING{" "}
          <Box
            component="span"
            sx={{ color: "#00A3AF" }}
          >
            AT YOUR
          </Box>
          <br />
          <Box
            component="span"
            sx={{ color: "#00A3AF" }}
          >
            DOORSTEP
          </Box>
        </Typography>

        <Box
          sx={{
            mt: {
              xs: 4,
              sm: 5,
              md: 6,
            },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: {
              xs: 1.5,
              sm: 2,
              md: 2.5,
            },
            flexWrap: "wrap",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
          }}
        >
          <Button
            variant="outlined"
            fullWidth={false}
            sx={{
              minWidth: {
                xs: "220px",
                sm: "190px",
                md: "210px",
              },
              height: {
                xs: "48px",
                sm: "50px",
                md: "54px",
              },
              borderRadius: "999px",
              textTransform: "none",
              px: {
                xs: 3,
                md: 4,
              },
              fontSize: {
                xs: "14px",
                md: "15px",
              },
              fontWeight: 500,
              borderColor: "#05B4C0",
              color: "#05B4C0",
              "&:hover": {
                background:
                  "rgba(14,124,123,0.10)",
                borderColor: "#05B4C0",
              },
            }}
          >
            Explore Services
          </Button>

          <Button
            startIcon={
              <PhoneIcon
                sx={{
                  fontSize: {
                    xs: 18,
                    md: 20,
                  },
                }}
              />
            }
            sx={{
              minWidth: {
                xs: "220px",
                sm: "170px",
                md: "190px",
              },
              height: {
                xs: "48px",
                sm: "50px",
                md: "54px",
              },
              borderRadius: "999px",
              textTransform: "none",
              px: {
                xs: 3,
                md: 4,
              },
              fontSize: {
                xs: "14px",
                md: "15px",
              },
              fontWeight: 500,
              background: "#02848D",
              color: "#fff",
              "&:hover": {
                background: "#0b6665",
              },
            }}
          >
            Call Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
}