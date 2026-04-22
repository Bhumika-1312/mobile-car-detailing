"use client";

import { Box, Typography, Button } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";

export default function ServicesSection() {
  return (
    <Box sx={{ width: "100%", background: "#fff", py: "100px" }}>
      <Box sx={{ maxWidth: "1280px", mx: "auto", px: 6 }}>
        <Typography
          sx={{
            fontSize: "28px",
            color: "#D1D5DB",
            mb: "60px",
            maxWidth: "520px",
            ml: "auto",
            textAlign: "right",
            pr: "40px",
          }}
        >
          ...Surgical precision meets mobile convenience.
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "220px 1fr",
            columnGap: "80px",
            alignItems: "start",
          }}
        >
          <Box>
            {[
              "Car services",
              "2-Wheelers services",
              "Benefits of our services",
              "Results speaks",
            ].map((item, i) => (
              <Typography
                key={i}
                component="div"
                sx={{
                  fontSize: "14px",
                  mb: 2,
                  color: i === 0 ? "#000" : "#9CA3AF",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                {i === 0 && (
                  <Box sx={{ width: 6, height: 6, background: "#000" }} />
                )}
                {item}
              </Typography>
            ))}
          </Box>

          <Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 420px",
                alignItems: "start",
                mb: "40px",
              }}
            >
              <Typography sx={{ fontSize: "28px", fontWeight: 600 }}>
                Car Services
              </Typography>

              <Box>
                <Typography sx={{ fontSize: "13px", color: "#6B7280" }}>
                  From doorstep wash to interior deep cleaning, exterior
                  protection, and odor removal everything your car needs to feel
                  like new.
                </Typography>

                <Typography sx={{ fontSize: "13px", color: "#6B7280", mt: 2 }}>
                  Whether at your location or at our dedicated detailing
                  facility, we deliver the same level of precision and care.
                </Typography>

                <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
                  <Button
                    sx={{
                      border: "1px solid #000",
                      borderRadius: "999px",
                      px: 3,
                      py: 0.8,
                      fontSize: "12px",
                    }}
                  >
                    VIEW PRICING
                  </Button>

                  <Button
                    startIcon={<CallIcon />}
                    sx={{
                      background: "#000",
                      color: "#fff",
                      borderRadius: "999px",
                      px: 3,
                      py: 0.8,
                      fontSize: "12px",
                    }}
                  >
                    CALL NOW
                  </Button>
                </Box>
              </Box>
            </Box>

            <Box sx={{ display: "flex", gap: "24px", mt: "40px" }}>
              {[
                { title: "(APC)", sub: "Available", img: "/images/car_service_apc.jpg" },
                {
                  title: "Spray Wax / Sealant",
                  sub: "Available",
                  img: "/images/car_service_spray.jpg",
                },
              ].map((item, i) => (
                <Box
                  key={i}
                  sx={{
                    width: "360px",
                    height: "200px",
                    backgroundImage: `url(${item.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(0,0,0,0.3)",
                    }}
                  />
                  <Box sx={{ position: "relative", textAlign: "center" }}>
                    <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ fontSize: "12px" }}>
                      {item.sub}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            <Box sx={{ mt: 6, maxWidth: "760px" }}>
              <Box sx={{ borderTop: "1px solid #E5E7EB", py: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography>+ Exterior Wash</Typography>
                  <Typography sx={{ fontWeight: 600 }}>
                    $ 50 / $ 80
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ borderTop: "1px solid #E5E7EB", py: 2 }}>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    alignItems: "start",
                  }}
                >
                  <Box>
                    <Typography sx={{ color: "#6B7280" }}>
                      - Standard Interior Cleaning
                    </Typography>

                    <Box sx={{ mt: 1 }}>
                      <Typography sx={{ fontSize: "12px", color: "#9CA3AF" }}>
                        ✓ Exterior car wash with air dry
                      </Typography>
                      <Typography sx={{ fontSize: "12px", color: "#9CA3AF" }}>
                        ✓ Exterior window cleaning
                      </Typography>
                      <Typography sx={{ fontSize: "12px", color: "#9CA3AF" }}>
                        ✓ Wheel cleaning
                      </Typography>
                    </Box>

                    <Typography sx={{ fontSize: "12px", mt: 1.5 }}>
                      Book now →
                    </Typography>
                  </Box>

                  <Typography sx={{ fontWeight: 600, fontSize: "16px" }}>
                    $ 60 / $ 100
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ borderTop: "1px solid #E5E7EB", py: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography>
                    + Exterior Water Wash + Standard Interior Cleaning
                  </Typography>
                  <Typography sx={{ fontWeight: 600 }}>
                    $ 200 / $ 250
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "220px 1fr",
            columnGap: "80px",
            mt: "100px",
          }}
        >
          <Box />

          <Box>
            <Typography sx={{ fontSize: "28px", fontWeight: 600 }}>
              2-Wheeler Services
            </Typography>

            <Typography
              sx={{
                fontSize: "13px",
                color: "#6B7280",
                mt: 2,
                maxWidth: "400px",
              }}
            >
              Comprehensive 2-wheeler detailing with deep cleaning, shampoo wash,
              chain cleaning and lubrication, and precision polishing for a
              refined, like-new finish.
            </Typography>

            <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
              <Button
                sx={{
                  border: "1px solid #000",
                  borderRadius: "999px",
                  px: 3,
                  py: 0.8,
                  fontSize: "12px",
                }}
              >
                VIEW PRICING
              </Button>

              <Button
                startIcon={<CallIcon />}
                sx={{
                  background: "#000",
                  color: "#fff",
                  borderRadius: "999px",
                  px: 3,
                  py: 0.8,
                  fontSize: "12px",
                }}
              >
                CALL NOW
              </Button>
            </Box>

            <Box sx={{ display: "flex", gap: "24px", mt: "40px" }}>
              {[
                { title: "(APC)", sub: "Available", img: "/images/wheel_service_apc.jpg" },
                {
                  title: "Pressure spray",
                  sub: "Available",
                  img: "/images/wheel_service_pressure.jpg",
                },
              ].map((item, i) => (
                <Box
                  key={i}
                  sx={{
                    width: "360px",
                    height: "200px",
                    backgroundImage: `url(${item.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(0,0,0,0.3)",
                    }}
                  />
                  <Box sx={{ position: "relative", textAlign: "center" }}>
                    <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ fontSize: "12px" }}>
                      {item.sub}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            <Box sx={{ mt: 6, maxWidth: "760px" }}>
              <Box sx={{ borderTop: "1px solid #E5E7EB", py: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography>+ Basic Clean Wash</Typography>
                  <Typography sx={{ fontWeight: 600 }}>
                    $ 50 / $ 80
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ borderTop: "1px solid #E5E7EB", py: 2 }}>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    alignItems: "start",
                  }}
                >
                  <Box>
                    <Typography sx={{ color: "#6B7280" }}>
                      - Premium Deep Detail
                    </Typography>

                    <Box sx={{ mt: 1 }}>
                      <Typography sx={{ fontSize: "12px", color: "#9CA3AF" }}>
                        ✓ Exterior car wash with air dry
                      </Typography>
                      <Typography sx={{ fontSize: "12px", color: "#9CA3AF" }}>
                        ✓ Exterior window cleaning
                      </Typography>
                      <Typography sx={{ fontSize: "12px", color: "#9CA3AF" }}>
                        ✓ Wheel cleaning
                      </Typography>
                    </Box>

                    <Typography sx={{ fontSize: "12px", mt: 1.5 }}>
                      Book now →
                    </Typography>
                  </Box>

                  <Typography sx={{ fontWeight: 600, fontSize: "16px" }}>
                    $ 60 / $ 100
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}