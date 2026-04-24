"use client";

import { Suspense, useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";

import MyLocationIcon from "@mui/icons-material/MyLocation";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import { useSearchParams } from "next/navigation";

function ScheduleContent() {
  const searchParams = useSearchParams();

  const [address, setAddress] = useState("");
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const type = searchParams.get("type") || "location";
  const packageName = searchParams.get("package") || "standard";

  const packageDetails = {
    exterior: {
      title: "Exterior Wash",
      price: "$50.00",
    },
    standard: {
      title: "Standard Interior Cleaning",
      price: "$65.00",
    },
    premium: {
      title: "Exterior Wash + Standard Interior Cleaning",
      price: "$200.00",
    },
  };

  const currentPackage =
    packageDetails[
      packageName as keyof typeof packageDetails
    ] || packageDetails.standard;

  const isLocation = type === "location";

  const handleUseCurrent = () => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition((position) => {
      const lat =
        position.coords.latitude.toFixed(5);
      const lng =
        position.coords.longitude.toFixed(5);

      setAddress(
        `Current Location (${lat}, ${lng})`
      );
    });
  };

  const dates = [
    { day: "MON", num: 18 },
    { day: "TUE", num: 19 },
    { day: "WED", num: 20 },
    { day: "THU", num: 21 },
    { day: "FRI", num: 22 },
  ];

  const slots = [
    "08:00 AM",
    "09:30 AM",
    "11:00 AM",
    "12:30 PM",
    "02:00 PM",
    "03:30 PM",
  ];

  return (
    <Box
      sx={{
        pt: "95px",
        pb: "120px",
        background: "#fff",
      }}
    >
      <Box
        sx={{
          maxWidth: "1280px",
          mx: "auto",
          px: 4,
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            mb: 6,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <Box
              sx={{
                width: 34,
                height: 6,
                bgcolor: "#0F766E",
                borderRadius: 5,
              }}
            />
            <Box
              sx={{
                width: 34,
                height: 6,
                bgcolor: "#0F766E",
                borderRadius: 5,
              }}
            />
            <Box
              sx={{
                width: 34,
                height: 6,
                bgcolor: "#0F766E",
                borderRadius: 5,
              }}
            />
          </Box>

          <Typography
            sx={{
              mt: 1,
              fontSize: "11px",
              color: "#0F766E",
            }}
          >
            STEP 3 OF 3
          </Typography>
        </Box>

        <Box sx={{ mb: 5 }}>
          <Typography
            sx={{
              color: "#8B8B8B",
              mb: 1.2,
              fontSize: "18px",
            }}
          >
            Packages
            <Box
              component="span"
              sx={{ mx: 1.5 }}
            >
              ›
            </Box>
            Schedule & Confirm
          </Typography>

          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: 700,
            }}
          >
            Schedule & Confirm
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns:
              "minmax(0,1fr) 430px",
            gap: "40px",
            alignItems: "start",
          }}
        >
          <Box>
            <Typography
              sx={{
                mb: 2,
                fontWeight: 600,
              }}
            >
              <LocationOnOutlinedIcon
                sx={{
                  fontSize: 18,
                  mr: 1,
                  color: "#006565",
                }}
              />
              Service Location
            </Typography>

            {isLocation ? (
              <TextField
                fullWidth
                placeholder="Enter your street address"
                value={address}
                onChange={(e) =>
                  setAddress(e.target.value)
                }
                sx={{
                  mb: 5,
                  "& .MuiOutlinedInput-root":
                    {
                      borderRadius:
                        "999px",
                      height: "54px",
                      border:
                        "1px solid #D8D8D8",
                      pr: 1,
                    },
                  "& fieldset": {
                    border: "none",
                  },
                }}
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button
                          onClick={
                            handleUseCurrent
                          }
                          sx={{
                            minWidth:
                              "auto",
                            px: 2,
                            height:
                              "38px",
                            borderRadius:
                              "999px",
                            background:
                              "#DFF7F7",
                            color:
                              "#0F766E",
                            fontSize:
                              "12px",
                            textTransform:
                              "none",
                          }}
                        >
                          <MyLocationIcon
                            sx={{
                              fontSize: 14,
                              mr: 0.5,
                            }}
                          />
                          Use current
                        </Button>
                      </InputAdornment>
                    ),
                  },
                }}
              />
            ) : (
              <Box
                sx={{
                  display: "flex",
                  gap: 3,
                  mb: 5,
                }}
              >
                {[1, 2].map((i) => (
                  <Box
                    key={i}
                    sx={{
                      width: "342px",
                    }}
                  >
                    <Box
                      component="img"
                      src={`/images/location${i}.jpg`}
                      sx={{
                        width: "100%",
                        height:
                          "270px",
                        objectFit:
                          "cover",
                      }}
                    />

                    <Typography sx={{ mt: 1 }}>
                      Near RK Bazaar
                      behind Jain
                      Mandir, Thane
                      West
                    </Typography>
                  </Box>
                ))}
              </Box>
            )}

            <Box
              sx={{
                display: "flex",
                justifyContent:
                  "space-between",
                mb: 2,
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                }}
              >
                <CalendarMonthIcon
                  sx={{
                    fontSize: 18,
                    mr: 1,
                    color:
                      "#006565",
                  }}
                />
                Select Date
              </Typography>

              <Typography
                sx={{
                  color: "#0F766E",
                  fontSize:
                    "14px",
                }}
              >
                April 2026
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                mb: 5,
              }}
            >
              {dates.map((item) => {
                const active =
                  selectedDate ===
                  item.num;

                return (
                  <Box
                    key={item.num}
                    onClick={() =>
                      setSelectedDate(
                        item.num
                      )
                    }
                    sx={{
                      width:
                        "72px",
                      height:
                        "92px",
                      borderRadius:
                        "16px",
                      background:
                        active
                          ? "linear-gradient(90deg,#04B0BC 0%,#0FE6F5 100%)"
                          : "#fff",
                      color: active
                        ? "#fff"
                        : "#3A3A3A",
                      boxShadow:
                        active
                          ? "0 4px 10px rgba(0,0,0,.18)"
                          : "none",
                      display:
                        "flex",
                      flexDirection:
                        "column",
                      alignItems:
                        "center",
                      justifyContent:
                        "center",
                      cursor:
                        "pointer",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize:
                          "12px",
                      }}
                    >
                      {
                        item.day
                      }
                    </Typography>

                    <Typography
                      sx={{
                        fontSize:
                          "24px",
                        fontWeight: 700,
                      }}
                    >
                      {
                        item.num
                      }
                    </Typography>
                  </Box>
                );
              })}
            </Box>

            <Typography
              sx={{
                fontWeight: 600,
                mb: 2,
              }}
            >
              <AccessTimeIcon
                sx={{
                  fontSize: 18,
                  mr: 1,
                  color: "#006565",
                }}
              />
              Available Slots
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(4,160px)",
                gap: "14px",
              }}
            >
              {slots.map((slot) => {
                const active =
                  selectedTime ===
                  slot;

                return (
                  <Box
                    key={slot}
                    onClick={() =>
                      setSelectedTime(
                        slot
                      )
                    }
                    sx={{
                      width:
                        "120px",
                      height:
                        "44px",
                      borderRadius:
                        "999px",
                      border: active
                        ? "none"
                        : "1px solid #C0C0C0",
                      background:
                        active
                          ? "linear-gradient(90deg,#04B0BC 0%,#0FE6F5 100%)"
                          : "#fff",
                      color: active
                        ? "#fff"
                        : "#000",
                      display:
                        "flex",
                      alignItems:
                        "center",
                      justifyContent:
                        "center",
                      cursor:
                        "pointer",
                    }}
                  >
                    {slot}
                  </Box>
                );
              })}
            </Box>
          </Box>

          <Box
            sx={{
              background:
                "#FFFFFF",
              borderRadius:
                "24px",
              p: "30px",
              boxShadow:
                "0 0 0 1px rgba(0,0,0,0.04)",
            }}
          >
            <Typography
              sx={{
                fontSize:
                  "20px",
                fontWeight: 600,
                mb: 3,
              }}
            >
              Booking Summary
            </Typography>

            <Box
              sx={{
                background:
                  "#F3F4F5",
                borderRadius:
                  "16px",
                p: "18px",
                display:
                  "flex",
                gap: 2,
                mb: 3,
              }}
            >
              <Box
                sx={{
                  width:
                    "64px",
                  height:
                    "64px",
                  borderRadius:
                    "50%",
                  background:
                    "#fff",
                  display:
                    "flex",
                  alignItems:
                    "center",
                  justifyContent:
                    "center",
                }}
              >
                <Box
                  component="img"
                  src="/images/car-icon.png"
                  sx={{
                    width:
                      "44px",
                    height:
                      "44px",
                  }}
                />
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize:
                      "12px",
                    fontWeight: 700,
                    color:
                      "#0F766E",
                  }}
                >
                  PACKAGE
                </Typography>

                <Typography
                  sx={{
                    fontSize:
                      "16px",
                  }}
                >
                  {
                    currentPackage.title
                  }
                </Typography>
              </Box>
            </Box>

            <Box sx={{ mb: 3 }}>
              {[
                [
                  <CalendarTodayOutlinedIcon />,
                  "Date",
                  selectedDate
                    ? `Nov ${selectedDate}, 2024`
                    : "-",
                ],
                [
                  <AccessTimeOutlinedIcon />,
                  "Time",
                  selectedTime ||
                    "-",
                ],
                [
                  <RoomOutlinedIcon />,
                  "Location",
                  isLocation
                    ? "Mobile / On-site"
                    : "On-site",
                ],
                [
                  <PersonOutlineOutlinedIcon />,
                  "Professional visit",
                  "$5.00",
                ],
              ].map(
                (
                  [
                    icon,
                    label,
                    value,
                  ],
                  i
                ) => (
                  <Box
                    key={i}
                    sx={{
                      display:
                        "flex",
                      justifyContent:
                        "space-between",
                      mb: 1.5,
                    }}
                  >
                    <Box
                      sx={{
                        display:
                          "flex",
                        gap: 1,
                      }}
                    >
                      {icon}
                      <Typography>
                        {
                          label
                        }
                      </Typography>
                    </Box>

                    <Typography>
                      {
                        value
                      }
                    </Typography>
                  </Box>
                )
              )}
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent:
                  "space-between",
                mb: 3,
              }}
            >
              <Typography>
                Total Amount
              </Typography>

              <Typography
                sx={{
                  fontSize:
                    "30px",
                  color:
                    "#006565",
                }}
              >
                {
                  currentPackage.price
                }
              </Typography>
            </Box>

            <Button
              fullWidth
              sx={{
                height:
                  "52px",
                borderRadius:
                  "999px",
                background:
                  "#39A7B0",
                color:
                  "#fff",
                mb: 2,
                boxShadow:
                  "8px 8px 0 #047481",
              }}
            >
              Confirm Booking
            </Button>

            <Button
              fullWidth
              sx={{
                height:
                  "52px",
                borderRadius:
                  "999px",
                background:
                  "#B8EAFF",
                color:
                  "#004D61",
                mb: 3,
              }}
            >
              Call to Book
            </Button>

            <Typography
              sx={{
                fontSize:
                  "10px",
                textAlign:
                  "center",
              }}
            >
              By confirming, you agree
              to our terms of service
              and cancellation policy.
              No payment required
              today.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default function Page() {
  return (
    <Suspense fallback={null}>
      <ScheduleContent />
    </Suspense>
  );
}