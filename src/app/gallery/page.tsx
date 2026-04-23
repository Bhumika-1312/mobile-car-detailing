"use client";

import { Box, Typography } from "@mui/material";

export default function Page() {
  const images = {
    hero: "/images/gallery1.jpg",
    leftTop: "/images/gallery2.jpg",
    rightTop: "/images/gallery3.jpg",
    leftBottom: "/images/gallery4.jpg",
    centerBottom: "/images/gallery5.jpg",
    rightBottom: "/images/gallery6.jpg",
  };

  return (
    <Box
      sx={{
        width: "100%",
        background: "#fff",
        pt: "78px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1440px",
          mx: "auto",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "855px",
            backgroundImage: `url(${images.hero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Typography
            sx={{
              position: "absolute",
              bottom: "200px",
              left: "50%",
              transform: "translateX(-50%)",
              color: "#fff",
              fontSize: "72px",
              fontWeight: 700,
              whiteSpace: "nowrap",
            }}
          >
            CAR WASH
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <Box
            sx={{
              position: "relative",
              height: "755px",
              backgroundImage: `url(${images.leftTop})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              overflow: "hidden",
            }}
          >
            <Typography
              sx={{
                position: "absolute",
                top: "50%",
                left: "10%",
                transform: "translateX(-50%, -50%)",
                color: "#fff",
                fontSize: "50px",
                fontWeight: 700,
                lineHeight: 1,
                whiteSpace: "nowrap",
                textAlign: "center",
              }}
            >
              WHEEL ALIGNMENT
            </Typography>
          </Box>

          <Box
            sx={{
              position: "relative",
              height: "755px",
              backgroundImage: `url(${images.rightTop})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              overflow: "hidden",
            }}
          >
            <Typography
              sx={{
                position: "absolute",
                top: "50%",
                left: "20%",
                transform: "translateX(-50%, -50%)",
                color: "#fff",
                fontSize: "50px",
                fontWeight: 700,
                lineHeight: 1,
                whiteSpace: "nowrap",
                textAlign: "center",
              }}
            >
              DEEP CLEANING
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "0.7fr 1fr 0.7fr",
          }}
        >
          <Box
            sx={{
              position: "relative",
              height: "755px",
              backgroundImage: `url(${images.leftBottom})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              overflow: "hidden",
            }}
          >
            <Typography
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateX(-50%, -50%)",
                color: "rgba(255,255,255,0.5)",
                fontSize: "44px",
                fontWeight: 700,
                lineHeight: 1,
                whiteSpace: "nowrap",
                textAlign: "center",
              }}
            >
              WHEEL ALIGNMENT
            </Typography>
          </Box>

          <Box
            sx={{
              height: "755px",
              backgroundImage: `url(${images.centerBottom})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <Box
            sx={{
              position: "relative",
              height: "755px",
              backgroundImage: `url(${images.rightBottom})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              overflow: "hidden",
            }}
          >
            <Typography
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateX(-50%, -50%)",
                color: "rgba(255,255,255,0.5)",
                fontSize: "44px",
                fontWeight: 700,
                lineHeight: 1,
                whiteSpace: "nowrap",
                textAlign: "center",
              }}
            >
              DEEP CLEANING
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
