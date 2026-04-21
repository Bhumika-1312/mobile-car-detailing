"use client";

import { Box, Typography, TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import InstagramIcon from "@mui/icons-material/Instagram";
import PublicIcon from "@mui/icons-material/Public";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        background: "#000",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        py: "80px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1440px",
          px: { xs: 3, md: 6 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {[
              "HOME",
              "SERVICES",
              "PRICING",
              "BOOKING",
              "ABOUT US",
              "CONTACT US",
            ].map((item, i) => (
              <Typography
                key={i}
                sx={{
                  fontSize: "14px",
                  letterSpacing: "1px",
                  opacity: item === "HOME" ? 0.6 : 1,
                  cursor: "pointer",
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              width: "360px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                Stay up to date
              </Typography>

              <Box sx={{ display: "flex", gap: 3 }}>
                {" "}
                <InstagramIcon sx={{ fontSize: 18, cursor: "pointer" }} />
                <PublicIcon sx={{ fontSize: 18, cursor: "pointer" }} />
                <TwitterIcon sx={{ fontSize: 18, cursor: "pointer" }} />
                <YouTubeIcon sx={{ fontSize: 18, cursor: "pointer" }} />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                background: "#2F2F2F", 
                borderRadius: "14px", 
                px: 2,
                height: "44px",
                width: "100%",
              }}
            >
              <TextField
                placeholder="Your email address"
                variant="standard"
                fullWidth
                slotProps={{
                  input: {
                    disableUnderline: true,
                  },
                }}
                sx={{
                  "& .MuiInputBase-input": {
                    color: "#fff",
                    fontSize: "13px",
                  },
                  "& input::placeholder": {
                    color: "#9CA3AF",
                    opacity: 1,
                  },
                }}
              />

              <IconButton
                sx={{
                  color: "#9CA3AF",
                  ml: 1,
                }}
              >
                <SendIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>
        </Box>

        <Typography
          sx={{
            fontSize: "120px",
            fontWeight: 700,
            mt: 10,
            letterSpacing: "4px",
          }}
        >
          XYZ
        </Typography>
      </Box>
    </Box>
  );
}
