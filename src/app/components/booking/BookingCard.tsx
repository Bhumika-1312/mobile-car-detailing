"use client";

import { Box, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BookingCard() {
  const [selected, setSelected] = useState("doorstep");
  const router = useRouter();

  return (
    <Box
      sx={{
        position: "absolute",
        top: "20%",
        left: "50%",
        transform: "translateX(-50%)",
        width: { xs: "95%", md: "700px" },
        background: "#F8F8F8",
        borderRadius: "16px",
        px: { xs: 2.5, md: 3.5 },
        py: 6,
        boxShadow: "0px 20px 50px rgba(0,0,0,0.3)",
        zIndex: 5,
      }}
    >
      <Box sx={{ textAlign: "center", mb: 3 }}>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
          <Box
            sx={{ width: 40, height: 4, bgcolor: "#0E7C7B", borderRadius: 2 }}
          />
          <Box
            sx={{ width: 20, height: 4, bgcolor: "#D9D9D9", borderRadius: 2 }}
          />
          <Box
            sx={{ width: 20, height: 4, bgcolor: "#D9D9D9", borderRadius: 2 }}
          />
        </Box>

        <Typography sx={{ fontSize: "11px", mt: 0.5, letterSpacing: "2px" }}>
          STEP 1 OF 3
        </Typography>
      </Box>

      <Box sx={{ display: "flex", gap: 4, mb: 2.5 }}>
        <Box
          onClick={() => setSelected("doorstep")}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            cursor: "pointer",
          }}
        >
          <Box
            sx={{
              width: 18,
              height: 18,
              borderRadius: "50%",
              border: "2px solid #0E7C7B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {selected === "doorstep" && (
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  bgcolor: "#0E7C7B",
                }}
              />
            )}
          </Box>
          <Typography sx={{ fontSize: "14px", color: "#0E7C7B" }}>
            Doorstep
          </Typography>
        </Box>

        <Box
          onClick={() => setSelected("onsite")}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            cursor: "pointer",
          }}
        >
          <Box
            sx={{
              width: 18,
              height: 18,
              borderRadius: "50%",
              border: "2px solid #999",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {selected === "onsite" && (
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  bgcolor: "#0E7C7B",
                }}
              />
            )}
          </Box>
          <Typography sx={{ fontSize: "14px", color: "#555" }}>
            On-site
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", gap: 2 }}>
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ fontSize: "12px", mb: 0.5 }}>Full Name</Typography>
          <TextField
            fullWidth
            placeholder="Full Name"
            size="small"
            sx={{
              "& .MuiInputBase-root": {
                height: 38,
                fontSize: "13px",
                background: "#fff",
              },
              "& fieldset": {
                borderColor: "#D0D5DD",
              },
            }}
          />
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography sx={{ fontSize: "12px", mb: 0.5 }}>Mobile</Typography>

          <Box sx={{ display: "flex", gap: 1 }}>
            <TextField
              value="+1"
              size="small"
              sx={{
                width: "80px",
                "& .MuiInputBase-root": {
                  height: 38,
                  background: "#fff",
                },
              }}
            />
            <TextField
              fullWidth
              size="small"
              sx={{
                "& .MuiInputBase-root": {
                  height: 38,
                  background: "#fff",
                },
              }}
            />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: "-22px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Button
        onClick={() => router.push("/booking")}
          sx={{
            px: 6,
            py: 1.5,
            borderRadius: "40px",
            background: "#0E7C7B",
            color: "#fff",
            textTransform: "none",
            fontSize: "16px",
            fontWeight: 600,
            boxShadow: "0px 10px 25px rgba(14,124,123,0.5)",
            "&:hover": {
              background: "#0b6665",
            },
          }}
        >
          Start Booking →
        </Button>
      </Box>
    </Box>
  );
}
