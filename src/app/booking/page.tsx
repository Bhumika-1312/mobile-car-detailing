"use client";

import { Box, Typography, Button } from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import CheckIcon from "@mui/icons-material/Check";

export default function BookingPage() {
  return (
    <Box sx={{ pt: "100px", pb: "120px", background: "#F5F7F9" }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
          <Box sx={{ width: 40, height: 6, bgcolor: "#0F766E", borderRadius: 3 }} />
          <Box sx={{ width: 40, height: 6, bgcolor: "#0F766E", borderRadius: 3 }} />
          <Box sx={{ width: 40, height: 6, bgcolor: "#D1D5DB", borderRadius: 3 }} />
        </Box>

        <Typography sx={{ mt: 1, fontSize: "12px", color: "#0F766E" }}>
          STEP 2 OF 3
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", mb: 5 }}>
        <Box
          sx={{
            display: "flex",
            background: "#fff",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              px: 4,
              py: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#0F766E",
            }}
          >
            <DirectionsCarIcon />
            <Typography sx={{ fontSize: "14px", mt: 1 }}>CAR</Typography>
          </Box>

          <Box
            sx={{
              px: 4,
              py: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              bgcolor: "#F3F4F6",
            }}
          >
            <TwoWheelerIcon />
            <Typography sx={{ fontSize: "14px", mt: 1 }}>
              2-WHEELER
            </Typography>
          </Box>
        </Box>
      </Box>

      <Typography
        sx={{
          textAlign: "center",
          fontWeight: 600,
          mb: 4,
          color: "#374151",
        }}
      >
        ― Available Packages for Cars ―
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 4,
        }}
      >
        {[0, 1, 2].map((i) => {
          const active = i === 1;

          return (
            <Box
              key={i}
              sx={{
                width: 300,
                borderRadius: "20px",
                p: 3,
                bgcolor: active ? "#0F766E" : "#fff",
                color: active ? "#fff" : "#000",
                boxShadow: "0 6px 30px rgba(0,0,0,0.08)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
                  {i === 0
                    ? "Exterior Wash"
                    : i === 1
                    ? "Standard Interior Cleaning"
                    : "Exterior Water Wash + Standard Interior Cleaning"}
                </Typography>

                <Typography sx={{ mt: 2, fontSize: "22px", fontWeight: 700 }}>
                  {i === 0
                    ? "$ 50 / $ 80"
                    : i === 1
                    ? "$ 60 / $ 100"
                    : "$ 200 / $ 250"}
                </Typography>

                <Typography sx={{ fontSize: "11px", opacity: 0.7, mt: 1 }}>
                  (Sedan/Hatchback or 5 seaters / SUVs or more than 5 seaters)
                </Typography>

                <Box sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 1 }}>
                  {[
                    "Exterior wash",
                    "Window cleaning",
                    "Interior vacuum",
                    "Dust cleaning",
                  ].map((item, idx) => (
                    <Box key={idx} sx={{ display: "flex", gap: 1 }}>
                      <CheckIcon sx={{ fontSize: 16 }} />
                      <Typography sx={{ fontSize: "12px" }}>{item}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              <Box sx={{ mt: 3 }}>
                <Button
                  fullWidth
                  sx={{
                    borderRadius: "999px",
                    bgcolor: active ? "#fff" : "transparent",
                    color: active ? "#000" : "#000",
                    border: active ? "none" : "1px solid #D1D5DB",
                    fontSize: "12px",
                  }}
                >
                  SELECT & CONTINUE
                </Button>

                <Typography
                  sx={{
                    mt: 2,
                    textAlign: "center",
                    fontSize: "12px",
                  }}
                >
                  Customize →
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}