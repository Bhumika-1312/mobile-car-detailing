"use client";

import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Select,
} from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import RadioButtonUncheckedRoundedIcon from "@mui/icons-material/RadioButtonUncheckedRounded";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BookingCard() {
  const router = useRouter();

  const [selected, setSelected] = useState("");
  const [name, setName] = useState("");
  const [code, setCode] = useState("+1");
  const [mobile, setMobile] = useState("");

  const canProceed =
    selected !== "" && name.trim() !== "" && mobile.trim() !== "";

  const handleNext = () => {
    if (!canProceed) return;

   router.push(`/booking?type=${selected === "doorstep" ? "location" : "onsite"}`);
  };

  const optionStyle = (active: boolean) => ({
    display: "flex",
    alignItems: "center",
    gap: 1.4,
    px: 1.5,
    py: 0.7,
    borderRadius: "999px",
    background: active ? "#BFEFF5" : "transparent",
    cursor: "pointer",
    transition: "0.2s ease",
  });

  return (
    <Box
      sx={{
        position: "absolute",
        top: { xs: "95px", sm: "110px", md: "18%" },
        left: "50%",
        transform: "translateX(-50%)",
        width: {
          xs: "94%",
          sm: "92%",
          md: "1000px",
        },
        maxWidth: "1000px",
        background: "#F7F7F7",
        borderRadius: "24px",
        px: { xs: 2.5, sm: 4, md: 5 },
        pt: { xs: 4, sm: 5, md: 6 },
        pb: { xs: 8, md: 7 },
        boxShadow: "0 18px 40px rgba(0,0,0,0.18)",
        zIndex: 5,
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "14px",
          }}
        >
          <Box
            sx={{
              width: "76px",
              height: "10px",
              borderRadius: "999px",
              background: "#006C70",
              boxShadow: "0 4px 10px rgba(0,108,112,.28)",
            }}
          />
          <Box
            sx={{
              width: "50px",
              height: "10px",
              borderRadius: "999px",
              background: "#DADADA",
            }}
          />
          <Box
            sx={{
              width: "50px",
              height: "10px",
              borderRadius: "999px",
              background: "#DADADA",
            }}
          />
        </Box>

        <Typography
          sx={{
            mt: 3,
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: 700,
            letterSpacing: "6px",
            color: "#006C70",
          }}
        >
          STEP 1 OF 3
        </Typography>
      </Box>

      <Box
        sx={{
          mt: { xs: 4, md: 6 },
          display: "flex",
          flexWrap: "wrap",
          gap: "34px",
          alignItems: "center",
        }}
      >
        <Box
          onClick={() => setSelected("doorstep")}
          sx={optionStyle(selected === "doorstep")}
        >
          {selected === "doorstep" ? (
            <Box
              sx={{
                width: 26,
                height: 26,
                borderRadius: "50%",
                bgcolor: "#2C7CF8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CheckRoundedIcon sx={{ color: "#fff", fontSize: 18 }} />
            </Box>
          ) : (
            <RadioButtonUncheckedRoundedIcon
              sx={{
                fontSize: 26,
                color: "#222",
              }}
            />
          )}

          <Typography
            sx={{
              fontSize: { xs: "18px", md: "22px" },
              fontWeight: 600,
              color: "#2D2D2D",
            }}
          >
            Doorstep
          </Typography>
        </Box>

        <Box
          onClick={() => setSelected("onsite")}
          sx={optionStyle(selected === "onsite")}
        >
          {selected === "onsite" ? (
            <Box
              sx={{
                width: 26,
                height: 26,
                borderRadius: "50%",
                bgcolor: "#2C7CF8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CheckRoundedIcon sx={{ color: "#fff", fontSize: 18 }} />
            </Box>
          ) : (
            <RadioButtonUncheckedRoundedIcon
              sx={{
                fontSize: 26,
                color: "#222",
              }}
            />
          )}

          <Typography
            sx={{
              fontSize: { xs: "18px", md: "22px" },
              fontWeight: 600,
              color: "#2D2D2D",
            }}
          >
            On-site
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          mt: { xs: 4, md: 5 },
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr 1fr",
          },
          gap: { xs: 2.2, md: 4 },
        }}
      >
        <Box>
          <Typography
            sx={{
              mb: 1.2,
              fontSize: { xs: "18px", md: "22px" },
              fontWeight: 500,
              color: "#2B2B2B",
            }}
          >
            Full Name
          </Typography>

          <TextField
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            sx={{
              "& .MuiOutlinedInput-root": {
                height: { xs: 54, md: 58 },
                borderRadius: "6px",
                background: "#F7F7F7",
                fontSize: "18px",
              },
              "& fieldset": {
                borderColor: "#BFBFBF",
              },
            }}
          />
        </Box>

        <Box>
          <Typography
            sx={{
              mb: 1.2,
              fontSize: { xs: "18px", md: "22px" },
              fontWeight: 500,
              color: "#2B2B2B",
            }}
          >
            Mobile
          </Typography>

          <Box
            sx={{
              border: "1px solid #BFBFBF",
              borderRadius: "6px",
              overflow: "hidden",
              display: "grid",
              gridTemplateColumns: "110px 1fr",
              background: "#F7F7F7",
              height: { xs: 54, md: 58 },
            }}
          >
            <Select
              value={code}
              onChange={(e) => setCode(e.target.value)}
              IconComponent={KeyboardArrowDownRoundedIcon}
              variant="standard"
              disableUnderline
              sx={{
                px: 2,
                fontSize: "18px",
                height: "100%",
                "& .MuiSelect-select": {
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                },
              }}
            >
              <MenuItem value="+1">+1</MenuItem>
              <MenuItem value="+91">+91</MenuItem>
              <MenuItem value="+44">+44</MenuItem>
            </Select>

            <TextField
              fullWidth
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              variant="standard"
              sx={{
                px: 2,
                "& .MuiInputBase-root": {
                  height: "100%",
                  fontSize: "18px",
                },
                "& .MuiInput-root:before": {
                  borderBottom: "none !important",
                },
                "& .MuiInput-root:after": {
                  borderBottom: "none !important",
                },
                "& .MuiInput-root:hover:not(.Mui-disabled):before": {
                  borderBottom: "none !important",
                },
              }}
            />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          bottom: "-44px",
          width: {
            xs: "88%",
            sm: "460px",
            md: "405px",
          },
        }}
      >
        <Button
          fullWidth
          disabled={!canProceed}
          onClick={handleNext}
          endIcon={
            <ArrowForwardRoundedIcon
              sx={{
                width: 34,
                height: 34,
                color: "#fff",
              }}
            />
          }
          sx={{
            height: { xs: 60, md: 80 },
            borderRadius: "999px",
            background: "linear-gradient(90deg,#0B8A93 0%, #13B8CC 100%)",
            color: "#fff",
            textTransform: "none",
            fontSize: {
              xs: "26px",
              md: "30px",
            },
            fontWeight: 700,
            letterSpacing: "1px",
            boxShadow: "0 18px 28px rgba(10,150,165,.35)",
            opacity: 1,
            "&:hover": {
              background: "linear-gradient(90deg,#0B8A93 0%, #13B8CC 100%)",
            },
            "&.Mui-disabled": {
              background: "linear-gradient(90deg,#0B8A93 0%, #13B8CC 100%)",
              color: "#fff",
              opacity: 1,
              boxShadow: "0 18px 28px rgba(10,150,165,.35)",
            },
            "& .MuiButton-endIcon": {
              color: "#fff",
              ml: 1.2,
            },
          }}
        >
          Start Booking
        </Button>
      </Box>
    </Box>
  );
}
