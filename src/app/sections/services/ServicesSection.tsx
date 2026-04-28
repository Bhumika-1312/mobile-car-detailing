"use client";

import { Box, Typography, Button } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";

export default function ServicesSection() {
  const features = [
    "Exterior car wash with air dry",
    "Exterior window cleaning",
    "Wheel cleaning",
  ];

  const PriceExpand = ({
    title,
    price,
  }: {
    title: string;
    price: string;
  }) => (
    <Box
      sx={{
        borderTop: "1px solid #E5E7EB",
        py: {
          xs: 2.5,
          md: 3,
        },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr auto",
          },
          gap: {
            xs: 2,
            md: 3,
          },
          alignItems: "start",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "#6B7280",
              fontSize: {
                xs: "22px",
                sm: "18px",
                md: "18px",
              },
            }}
          >
            - {title}
          </Typography>

          <Box
            sx={{
              mt: 2,
              display: "flex",
              flexWrap: "wrap",
              gap: {
                xs: 1.2,
                md: 2,
              },
            }}
          >
            {features.map((item, i) => (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  minWidth: {
                    xs: "100%",
                    sm: "auto",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 18,
                    height: 18,
                    borderRadius: "6px",
                    background: "#F3F4F6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "11px",
                    color: "#9CA3AF",
                    flexShrink: 0,
                  }}
                >
                  ✓
                </Box>

                <Typography
                  sx={{
                    fontSize: {
                      xs: "13px",
                      md: "14px",
                    },
                    color: "#9CA3AF",
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              mt: 2.2,
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
              width: "fit-content",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              Book now
            </Typography>

            <Typography
              sx={{
                fontSize: "18px",
              }}
            >
              →
            </Typography>
          </Box>
        </Box>

        <Typography
          sx={{
            fontWeight: 700,
            fontSize: {
              xs: "32px",
              sm: "22px",
              md: "18px",
            },
            whiteSpace: "nowrap",
          }}
        >
          {price}
        </Typography>
      </Box>
    </Box>
  );

  const PriceSimple = ({
    title,
    price,
  }: {
    title: string;
    price: string;
  }) => (
    <Box
      sx={{
        borderTop: "1px solid #E5E7EB",
        py: {
          xs: 2.5,
          md: 3,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 2,
          flexDirection: {
            xs: "column",
            sm: "row",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "22px",
              sm: "16px",
            },
            color: "#6B7280",
          }}
        >
          + {title}
        </Typography>

        <Typography
          sx={{
            fontWeight: 700,
            fontSize: {
              xs: "30px",
              sm: "18px",
            },
            whiteSpace: "nowrap",
          }}
        >
          {price}
        </Typography>
      </Box>
    </Box>
  );

  const ServiceImages = ({
    items,
  }: any) => (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "1fr 1fr",
        },
        gap: 3,
        mt: 5,
      }}
    >
      {items.map((item: any, i: number) => (
        <Box
          key={i}
          sx={{
            width: "100%",
            height: {
              xs: "220px",
              md: "200px",
            },
            backgroundImage: `url(${item.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "rgba(0,0,0,.30)",
            }}
          />

          <Box
            sx={{
              position: "relative",
              zIndex: 2,
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              color: "#fff",
              textAlign: "center",
              px: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "18px",
                  md: "20px",
                },
                fontWeight: 600,
              }}
            >
              {item.title}
            </Typography>

            <Typography
              sx={{
                fontSize: "12px",
                mt: 0.5,
              }}
            >
              {item.sub}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );

  return (
    <Box
      sx={{
        width: "100%",
        background: "#fff",
        py: {
          xs: "50px",
          md: "100px",
        },
      }}
    >
      <Box
        sx={{
          maxWidth: "1280px",
          mx: "auto",
          px: {
            xs: 2,
            sm: 3,
            md: 5,
            lg: 6,
          },
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "22px",
              md: "28px",
            },
            color: "#D1D5DB",
            mb: {
              xs: 5,
              md: 8,
            },
            maxWidth: "520px",
            ml: "auto",
            textAlign: "right",
            lineHeight: 1.15,
            fontWeight: 600,
          }}
        >
          ...Surgical precision meets
          mobile convenience.
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "180px 1fr",
              lg: "220px 1fr",
            },
            gap: {
              xs: 5,
              md: 6,
              lg: "72px",
            },
            alignItems: "start",
          }}
        >
          <Box
            sx={{
              pt: {
                xs: 0,
                lg: 1,
              },
            }}
          >
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
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  mb: 2.2,
                  fontSize: "14px",
                  lineHeight: 1.2,
                  color:
                    i === 0
                      ? "#111111"
                      : "#8D8D8D",
                  fontWeight:
                    i === 0
                      ? 500
                      : 400,
                }}
              >
                {i === 0 && (
                  <Box
                    sx={{
                      width: 10,
                      height: 10,
                      background:
                        "#000",
                      flexShrink: 0,
                    }}
                  />
                )}
                {item}
              </Typography>
            ))}
          </Box>

          <Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  lg: "1fr 470px",
                },
                gap: {
                  xs: 4,
                  lg: 6,
                },
                alignItems: "end",
                mb: 5,
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "42px",
                    sm: "52px",
                    md: "60px",
                    lg: "64px",
                  },
                  fontWeight: 700,
                  color: "#222222",
                  lineHeight: 1.04,
                  letterSpacing:
                    "-1px",
                }}
              >
                Car Services
              </Typography>

              <Box>
                <Typography
                  sx={{
                    fontSize:
                      "16px",
                    color:
                      "#222222",
                    lineHeight:
                      1.42,
                  }}
                >
                  From doorstep wash to
                  interior deep
                  cleaning,
                  exterior
                  protection, and odor
                  removal everything
                  your car needs to
                  feel like new.
                </Typography>

                <Typography
                  sx={{
                    fontSize:
                      "16px",
                    color:
                      "#222222",
                    lineHeight:
                      1.42,
                    mt: 2,
                  }}
                >
                  Whether at your
                  location or at our
                  dedicated detailing
                  facility, we deliver
                  the same level of
                  precision and care.
                </Typography>

                <Box
                  sx={{
                    mt: 3,
                    display:
                      "flex",
                    gap: 2,
                    flexWrap:
                      "wrap",
                  }}
                >
                  <Button
                    sx={{
                      minWidth:
                        "146px",
                      height:
                        "44px",
                      border:
                        "1px solid #000",
                      borderRadius:
                        "999px",
                      px: 3,
                      color:
                        "#000",
                      fontSize:
                        "14px",
                      fontWeight:
                        500,
                    }}
                  >
                    VIEW PRICING
                  </Button>

                  <Button
                    startIcon={
                      <CallIcon />
                    }
                    sx={{
                      minWidth:
                        "160px",
                      height:
                        "44px",
                      background:
                        "#000",
                      color:
                        "#fff",
                      borderRadius:
                        "999px",
                      px: 3,
                      fontSize:
                        "14px",
                      fontWeight:
                        500,
                      "&:hover":
                        {
                          background:
                            "#111",
                        },
                    }}
                  >
                    CALL NOW
                  </Button>
                </Box>
              </Box>
            </Box>

            <ServiceImages
              items={[
                {
                  title:
                    "(APC)",
                  sub: "Available",
                  img: "/images/car_service_apc.jpg",
                },
                {
                  title:
                    "Spray Wax / Sealant",
                  sub: "Available",
                  img: "/images/car_service_spray.jpg",
                },
              ]}
            />

            <Box sx={{ mt: 6 }}>
              <PriceSimple
                title="Exterior Wash"
                price="$ 50 / $ 80"
              />

              <PriceExpand
                title="Standard Interior Cleaning"
                price="$ 60 / $ 100"
              />

              <PriceSimple
                title="Exterior Water Wash + Standard Interior Cleaning"
                price="$ 200 / $ 250"
              />
            </Box>

            <Box sx={{ mt: 10 }}>
              <Typography
                sx={{
                  fontSize: {
                    xs: "34px",
                    md: "42px",
                  },
                  fontWeight: 700,
                }}
              >
                2-Wheeler Services
              </Typography>

              <Typography
                sx={{
                  fontSize:
                    "16px",
                  color:
                    "#222222",
                  mt: 2,
                  maxWidth:
                    "470px",
                  lineHeight:
                    1.42,
                }}
              >
                Deep cleaning,
                shampoo wash,
                polishing and
                detailing for a
                fresh finish.
              </Typography>

              <Box
                sx={{
                  mt: 3,
                  display:
                    "flex",
                  gap: 2,
                  flexWrap:
                    "wrap",
                }}
              >
                <Button
                  sx={{
                    minWidth:
                      "146px",
                    height:
                      "44px",
                    border:
                      "1px solid #000",
                    borderRadius:
                      "999px",
                    px: 3,
                    color:
                      "#000",
                    fontSize:
                      "14px",
                    fontWeight:
                      500,
                  }}
                >
                  VIEW PRICING
                </Button>

                <Button
                  startIcon={
                    <CallIcon />
                  }
                  sx={{
                    minWidth:
                      "160px",
                    height:
                      "44px",
                    background:
                      "#000",
                    color:
                      "#fff",
                    borderRadius:
                      "999px",
                    px: 3,
                    fontSize:
                      "14px",
                    fontWeight:
                      500,
                  }}
                >
                  CALL NOW
                </Button>
              </Box>

              <ServiceImages
                items={[
                  {
                    title:
                      "(APC)",
                    sub: "Available",
                    img: "/images/wheel_service_apc.jpg",
                  },
                  {
                    title:
                      "Pressure spray",
                    sub: "Available",
                    img: "/images/wheel_service_pressure.jpg",
                  },
                ]}
              />

              <Box sx={{ mt: 6 }}>
                <PriceSimple
                  title="Basic Clean Wash"
                  price="$ 50 / $ 80"
                />

                <PriceExpand
                  title="Premium Deep Detail"
                  price="$ 60 / $ 100"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}