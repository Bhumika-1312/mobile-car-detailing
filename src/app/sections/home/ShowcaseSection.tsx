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
  const tabs = [
    "Exterior",
    "Interior",
    "Wheels",
    "Windows",
  ];

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: {
          xs: "620px",
          sm: "720px",
          md: "820px",
          lg: "900px",
          xl: "980px",
        },
        height: {
          xs: "auto",
          md: "900px",
        },
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "rgba(0,0,0,0.22)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: {
            xs: 18,
            sm: 24,
            md: 30,
          },
          left: {
            xs: 16,
            sm: 24,
            md: 76,
          },
          right: {
            xs: 16,
            md: "auto",
          },
          display: "flex",
          gap: {
            xs: 1,
            sm: 1.5,
            md: 4,
          },
          flexWrap: "wrap",
          zIndex: 3,
        }}
      >
        {tabs.map((item) => (
          <Typography
            key={item}
            sx={{
              fontSize: {
                xs: "12px",
                sm: "13px",
                md: "14px",
              },
              px: {
                xs: 1.2,
                sm: 1.4,
                md: 1.6,
              },
              py: "4px",
              borderRadius: "999px",
              background:
                item === title
                  ? "rgba(255,255,255,0.18)"
                  : "transparent",
              backdropFilter:
                item === title
                  ? "blur(4px)"
                  : "none",
              border:
                item === title
                  ? "1px solid rgba(255,255,255,0.25)"
                  : "none",
              whiteSpace: "nowrap",
            }}
          >
            {item}
          </Typography>
        ))}
      </Box>

      <Box
        sx={{
          position: "absolute",
          left: {
            xs: 16,
            sm: 24,
            md: 56,
          },
          right: {
            xs: 16,
            md: "auto",
          },
          top: {
            xs: "42%",
            sm: "45%",
            md: "50%",
          },
          transform:
            "translateY(-50%)",
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            flexWrap: "wrap",
            rowGap: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "44px",
                sm: "58px",
                md: "78px",
                lg: "92px",
                xl: "110px",
              },
              fontWeight: 700,
              letterSpacing: {
                xs: "-1px",
                md: "-2px",
              },
              lineHeight: 1,
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              ml: {
                xs: 1,
                md: 1.2,
              },
              mb: {
                xs: 0.5,
                sm: 1,
                md: 2.2,
                lg: 3.2,
              },
              fontSize: {
                xs: "18px",
                sm: "22px",
                md: "26px",
              },
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
          top: {
            xs: "60%",
            sm: "62%",
            md: "60%",
          },
          left: {
            xs: 16,
            sm: 24,
            md: "53%",
          },
          right: {
            xs: 16,
            md: "auto",
          },
          transform:
            "translateY(-50%)",
          display: "flex",
          alignItems: "center",
          gap: {
            xs: 1,
            md: 1.5,
          },
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            width: {
              xs: 10,
              md: 12,
            },
            height: {
              xs: 10,
              md: 12,
            },
            background: "#fff",
            flexShrink: 0,
          }}
        />

        <Typography
          sx={{
            fontSize: {
              xs: "13px",
              md: "14px",
            },
            fontWeight: 500,
          }}
        >
          View Services
        </Typography>
      </Box>

      <Typography
        sx={{
          position: "absolute",
          bottom: {
            xs: 18,
            sm: 24,
            md: 30,
          },
          left: {
            xs: 16,
            sm: 24,
            md: 56,
          },
          right: {
            xs: 16,
            md: "auto",
          },
          fontSize: {
            xs: "12px",
            sm: "13px",
            md: "12px",
          },
          lineHeight: 1.6,
          opacity: 0.78,
          maxWidth: {
            xs: "100%",
            md: "520px",
          },
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}