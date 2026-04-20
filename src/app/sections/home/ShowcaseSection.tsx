"use client";

import { Box, Typography } from "@mui/material";

type Props = {
  image: string;
  title: string;
  step: string;
  description: string;
};

export default function ShowcaseSection({
  image,
  title,
  step,
  description,
}: Props) {
  const tabs = ["Exterior", "Interior", "Wheels", "Windows"];

  return (
    <Box
      sx={{
        position: "relative",
        height: "900px",
        width: "100%",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.18)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 30,
          left: { xs: 20, md: 76 },
          display: "flex",
          gap: 4,
          zIndex: 3,
        }}
      >
        {tabs.map((item) => (
          <Typography
            key={item}
            sx={{
              fontSize: "14px",
              px: 1.6,
              py: 0.3,
              borderRadius: "18px",
              background:
                item === title
                  ? "rgba(255,255,255,0.18)"
                  : "transparent",
              backdropFilter:
                item === title ? "blur(4px)" : "none",
              border:
                item === title
                  ? "1px solid rgba(255,255,255,0.25)"
                  : "none",
            }}
          >
            {item}
          </Typography>
        ))}
      </Box>

      <Box
        sx={{
          position: "absolute",
          left: { xs: 20, md: 56 },
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <Typography
            sx={{
              fontSize: { xs: "44px", md: "92px" },
              fontWeight: 700,
              letterSpacing: "-2px",
              lineHeight: 1,
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              ml: 1,
              mb: 6,
              fontSize: { xs: "18px", md: "26px" },
              fontWeight: 600,
            }}
          >
            ({step})
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "60%",
          left: { xs: 20, md: "53%" },
          transform: "translateY(-50%)",
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            width: 12,
            height: 12,
            background: "#fff",
          }}
        />

        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          View Services
        </Typography>
      </Box>
      
      <Typography
        sx={{
          position: "absolute",
          bottom: 30,
          left: { xs: 20, md: 56 },
          fontSize: "12px",
          opacity: 0.75,
          maxWidth: "520px",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}