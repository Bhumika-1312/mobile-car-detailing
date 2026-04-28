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

  const imageCard = (
    img: string,
    title?: string,
    dim?: boolean
  ) => ({
    position: "relative",
    width: "100%",
    height: {
      xs: "260px",
      sm: "360px",
      md: "520px",
      lg: "755px",
    },
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    overflow: "hidden",
    "&::after": {
      content: '""',
      position: "absolute",
      inset: 0,
      background: dim
        ? "rgba(0,0,0,0.18)"
        : "rgba(0,0,0,0.08)",
    },
  });

  return (
    <Box
      sx={{
        width: "100%",
        background: "#fff",
        pt: {
          xs: "64px",
          sm: "72px",
          md: "78px",
        },
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
            height: {
              xs: "320px",
              sm: "460px",
              md: "620px",
              lg: "855px",
            },
            backgroundImage: `url(${images.hero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "rgba(0,0,0,0.15)",
            }}
          />

          <Typography
            sx={{
              position: "absolute",
              left: "50%",
              bottom: {
                xs: "30px",
                sm: "55px",
                md: "90px",
                lg: "200px",
              },
              transform:
                "translateX(-50%)",
              color: "#fff",
              fontSize: {
                xs: "34px",
                sm: "48px",
                md: "58px",
                lg: "72px",
              },
              fontWeight: 700,
              whiteSpace: "nowrap",
              letterSpacing: "-1px",
              textAlign: "center",
              px: 2,
            }}
          >
            CAR WASH
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },
          }}
        >
          <Box
            sx={imageCard(
              images.leftTop,
              "WHEEL ALIGNMENT"
            )}
          >
            <Typography
              sx={{
                position: "absolute",
                zIndex: 2,
                top: "50%",
                left: "50%",
                transform:
                  "translate(-50%, -50%)",
                color: "#fff",
                fontSize: {
                  xs: "24px",
                  sm: "34px",
                  md: "40px",
                  lg: "50px",
                },
                fontWeight: 700,
                lineHeight: 1,
                whiteSpace: "nowrap",
                textAlign: "center",
                px: 2,
              }}
            >
              WHEEL ALIGNMENT
            </Typography>
          </Box>

          <Box
            sx={imageCard(
              images.rightTop,
              "DEEP CLEANING"
            )}
          >
            <Typography
              sx={{
                position: "absolute",
                zIndex: 2,
                top: "50%",
                left: "50%",
                transform:
                  "translate(-50%, -50%)",
                color: "#fff",
                fontSize: {
                  xs: "24px",
                  sm: "34px",
                  md: "40px",
                  lg: "50px",
                },
                fontWeight: 700,
                lineHeight: 1,
                whiteSpace: "nowrap",
                textAlign: "center",
                px: 2,
              }}
            >
              DEEP CLEANING
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              lg: "0.7fr 1fr 0.7fr",
            },
          }}
        >
          <Box
            sx={imageCard(
              images.leftBottom,
              "WHEEL ALIGNMENT",
              true
            )}
          >
            <Typography
              sx={{
                position: "absolute",
                zIndex: 2,
                top: "50%",
                left: "50%",
                transform:
                  "translate(-50%, -50%)",
                color:
                  "rgba(255,255,255,0.55)",
                fontSize: {
                  xs: "22px",
                  sm: "28px",
                  md: "34px",
                  lg: "44px",
                },
                fontWeight: 700,
                lineHeight: 1,
                whiteSpace: "nowrap",
                textAlign: "center",
                px: 2,
              }}
            >
              WHEEL ALIGNMENT
            </Typography>
          </Box>

          <Box
            sx={{
              width: "100%",
              height: {
                xs: "260px",
                sm: "360px",
                md: "520px",
                lg: "755px",
              },
              backgroundImage: `url(${images.centerBottom})`,
              backgroundSize: "cover",
              backgroundPosition:
                "center",
            }}
          />

          <Box
            sx={imageCard(
              images.rightBottom,
              "DEEP CLEANING",
              true
            )}
          >
            <Typography
              sx={{
                position: "absolute",
                zIndex: 2,
                top: "50%",
                left: "50%",
                transform:
                  "translate(-50%, -50%)",
                color:
                  "rgba(255,255,255,0.55)",
                fontSize: {
                  xs: "22px",
                  sm: "28px",
                  md: "34px",
                  lg: "44px",
                },
                fontWeight: 700,
                lineHeight: 1,
                whiteSpace: "nowrap",
                textAlign: "center",
                px: 2,
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