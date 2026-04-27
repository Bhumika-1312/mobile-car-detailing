"use client";

import { Suspense } from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckIcon from "@mui/icons-material/Check";
import { useRouter, useSearchParams } from "next/navigation";

function BookingContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const type = searchParams.get("type") || "location";

  const handleContinue = (index: number) => {
    const packageNames = ["exterior", "standard", "premium"];

    router.push(
      `/booking/schedule?type=${type}&package=${packageNames[index]}`
    );
  };

  return (
    <Box sx={{ pt: "100px", pb: "120px", background: "#fff" }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
          <Box
            sx={{ width: 40, height: 6, bgcolor: "#0F766E", borderRadius: 3 }}
          />
          <Box
            sx={{ width: 40, height: 6, bgcolor: "#0F766E", borderRadius: 3 }}
          />
          <Box
            sx={{ width: 40, height: 6, bgcolor: "#D1D5DB", borderRadius: 3 }}
          />
        </Box>

        <Typography sx={{ mt: 1, fontSize: "12px", color: "#0F766E" }}>
          STEP 2 OF 3
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", mb: 5 }}>
        <Box
          sx={{
            width: "278px",
            height: "120px",
            background: "#FFFFFF",
            borderRadius: "12px",
            boxShadow: "0px 6px 18px rgba(0,0,0,0.10)",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <Box
              component="img"
              src="/images/car.png"
              sx={{
                width: "60px",
                height: "60px",
                objectFit: "contain",
                mb: 0.8,
              }}
            />

            <Typography
              sx={{
                fontSize: "28px",
                lineHeight: 1,
                color: "#00767B",
                fontWeight: 600,
                transform: "scale(0.5)",
                transformOrigin: "center top",
              }}
            >
              CAR
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <Box
              component="img"
              src="/images/bike.png"
              sx={{
                width: "60px",
                height: "60px",
                objectFit: "contain",
                mb: 0.8,
              }}
            />

            <Typography
              sx={{
                fontSize: "28px",
                lineHeight: 1,
                color: "#222222",
                fontWeight: 600,
                transform: "scale(0.5)",
                transformOrigin: "center top",
                whiteSpace: "nowrap",
              }}
            >
              2-WHEELER
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "14px",
          mb: 4,
        }}
      >
        <Box
          sx={{
            width: "32px",
            height: "2px",
            background: "#006971",
            borderRadius: "2px",
          }}
        />

        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: 600,
            color: "#3D494A",
            lineHeight: 1,
          }}
        >
          Available Packages for Cars
        </Typography>

        <Box
          sx={{
            width: "32px",
            height: "2px",
            background: "#006971",
            borderRadius: "2px",
          }}
        />
      </Box>

      <Box
        sx={{
          width: "876px",
          height: "642px",
          mx: "auto",
          borderRadius: "24px",
          display: "flex",
          alignItems: "flex-start",
          gap: "30px",
          justifyContent: "center",
          px: "8px",
          pt: "0px",
          pb: "0px",
          mt: 1,
        }}
      >
        {[0, 1, 2].map((i) => {
          const active = i === 1;

          const titles = [
            "Exterior Wash",
            "Standard Interior\nCleaning",
            "Exterior Water Wash +\nStandard Interior\nCleaning",
          ];

          const prices = ["$ 50 / $ 80", "$ 60 / $ 100", "$ 200 / $ 250"];

          const features = [
            [
              "Exterior car wash with air dry",
              "Exterior window cleaning",
              "Wheel cleaning",
            ],
            [
              "Clean interior windows",
              "Wipe down dash, console & all hard surfaces",
              "Empty trash",
              "Interior Vacuum",
              "Sweep out loose dust",
            ],
            [
              "Exterior car wash with air dry",
              "Wheel cleaning",
              "Exterior window cleaning",
              "Interior vacuum",
              "Wipe down of all hard surfaces",
              "Trash removal",
              "Sweep out loose dirt of cargo area",
            ],
          ];

          const widths = ["256px", "272px", "307px"];
          const heights = ["466px", "554px", "642px"];

          return (
            <Box
              key={i}
              sx={{
                width: widths[i],
                height: heights[i],
                borderRadius: "24px",
                px: i === 2 ? "24px" : "20px",
                pt: "24px",
                pb: "22px",

                background: active
                  ? "linear-gradient(180deg,#005E66 0%, #08B9C8 100%)"
                  : "#FFFFFF",

                color: active ? "#fff" : "#222",
                border: active ? "none" : "1px solid #E3E8EC",

                boxShadow: active
                  ? "0 12px 24px rgba(0,0,0,0.10)"
                  : "0 4px 12px rgba(0,0,0,0.04)",

                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 500,
                      lineHeight: 1.35,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {titles[i]}
                  </Typography>

                  {active && (
                    <Box
                      sx={{
                        px: "4px",
                        height: "22px",
                        borderRadius: "999px",
                        bgcolor: "#FF7B45",
                        color: "#fff",
                        fontSize: "12px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      🔥Popular
                    </Box>
                  )}
                </Box>

                <Typography
                  sx={{
                    mt: 4,
                    fontSize: "28px",
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                >
                  {prices[i]}
                </Typography>

                <Typography
                  sx={{
                    mt: 2,
                    fontSize: "12px",
                    lineHeight: 1.45,
                    color: active ? "rgba(255,255,255,0.75)" : "#7B8794",
                  }}
                >
                  (Sedan,Hatchback or 5 seaters /
                  <br />
                  SUVs or more than 5 seaters)
                </Typography>

                <Box
                  sx={{
                    mt: 4,
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  {features[i].map((item, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        display: "flex",
                        gap: 1.4,
                        alignItems: "flex-start",
                      }}
                    >
                      <Box
                        sx={{
                          width: "18px",
                          height: "18px",
                          borderRadius: "5px",
                          background: active ? "#fff" : "#F2F4F6",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mt: "2px",
                          flexShrink: 0,
                        }}
                      >
                        <CheckIcon
                          sx={{
                            fontSize: "13px",
                            color: "#6F7988",
                          }}
                        />
                      </Box>

                      <Typography
                        sx={{
                          fontSize: "14px",
                          lineHeight: 1.45,
                          color: active ? "rgba(255,255,255,0.70)" : "#505967",
                        }}
                      >
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              <Box>
                <Button
                  fullWidth
                  onClick={() => handleContinue(i)}
                  sx={{
                    height: "42px",
                    borderRadius: "999px",
                    background: active ? "#fff" : "transparent",
                    color: "#2E3238",
                    border: active ? "none" : "1px solid #CDD5DF",
                    fontSize: "14px",
                    fontWeight: 500,
                    textTransform: "none",
                  }}
                >
                  SELECT & CONTINUE
                </Button>

                <Button
                  fullWidth
                  sx={{
                    mt: 1.5,
                    height: "34px",
                    color: active ? "#fff" : "#111",
                    fontSize: "14px",
                    textTransform: "none",
                    display: "flex",
                    gap: 1,
                  }}
                >
                  Customize
                  <ArrowForwardIcon sx={{ fontSize: "16px" }} />
                </Button>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={null}>
      <BookingContent />
    </Suspense>
  );
}