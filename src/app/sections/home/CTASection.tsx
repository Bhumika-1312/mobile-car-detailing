"use client";

import { Box, Typography, Button } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";

export default function CTASection() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "750px",
        background: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "750px",
          textAlign: "center",
          px: 2,
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xs: "24px", md: "40px" },
            lineHeight: 1.4,
            letterSpacing: "1px",
            color: "#fff",
          }}
        >
          PROFESSIONAL CAR <br />
          DETAILING{" "}
          <Box component="span" sx={{ color: "#00A3AF" }}>
            AT YOUR
          </Box>
          <br />
          <Box component="span" sx={{ color: "#00A3AF" }}>
            DOORSTEP
          </Box>
        </Typography>

        <Box
          sx={{
            mt: 5,
            display: "flex",
            justifyContent: "center",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              borderRadius: "30px",
              textTransform: "none",
              px: 3,
              py: 1,
              fontSize: "13px",
              borderColor: "#05B4C0",
              color: "#05B4C0",
              "&:hover": {
                background: "rgba(14,124,123,0.1)",
                borderColor: "#0E7C7B",
              },
            }}
          >
            Explore Services
          </Button>

          <Button
            startIcon={<PhoneIcon />}
            sx={{
              borderRadius: "30px",
              textTransform: "none",
              px: 3,
              py: 1,
              fontSize: "13px",
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
