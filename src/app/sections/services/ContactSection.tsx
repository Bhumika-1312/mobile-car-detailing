"use client";

import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function ContactSection() {
  return (
    <Box
      sx={{
        width: "100%",
        background: "#fff",
        display: "flex",
        justifyContent: "center",
        pt: {
          xs: "40px",
          sm: "55px",
          md: "60px",
          lg: "70px",
        },
        pb: {
          xs: "40px",
          sm: "50px",
          md: "60px",
        },
        px: {
          xs: 2,
          sm: 3,
          md: 4,
          lg: 5,
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1280px",
          mx: "auto",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            lg: "1fr 1fr",
          },
          borderRadius: {
            xs: "0px",
            lg: "0px",
          },
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            background: "#F0F4F8",
            px: {
              xs: 3,
              sm: 5,
              md: 6,
              lg: 7,
              xl: 8,
            },
            py: {
              xs: 5,
              sm: 6,
              md: 7,
              lg: 8,
            },
            minHeight: {
              xs: "auto",
              lg: "620px",
            },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "28px",
                sm: "34px",
                md: "40px",
                lg: "44px",
                xl: "50px",
              },
              fontWeight: 700,
              color: "#1F2428",
              lineHeight: 1.15,
              maxWidth: "520px",
              textAlign: {
                xs: "center",
                lg: "left",
              },
              mx: {
                xs: "auto",
                lg: 0,
              },
            }}
          >
            Contact us for the
            <br />
            doorstep service
          </Typography>

          <Typography
            sx={{
              mt: 2,
              fontSize: {
                xs: "16px",
                sm: "18px",
                md: "20px",
              },
              color: "#667085",
              lineHeight: 1.5,
              maxWidth: "520px",
              textAlign: {
                xs: "center",
                lg: "left",
              },
              mx: {
                xs: "auto",
                lg: 0,
              },
            }}
          >
            Fill the form to hear from us.
            Expect a call from us.
          </Typography>

          <Button
            startIcon={<PhoneIcon />}
            sx={{
              mt: 4,
              width: {
                xs: "100%",
                sm: "260px",
                md: "280px",
                lg: "fit-content",
              },
              alignSelf: {
                xs: "center",
                lg: "flex-start",
              },
              px: 4,
              py: 1.3,
              borderRadius: "999px",
              background: "#17A2A0",
              color: "#fff",
              textTransform: "none",
              fontWeight: 600,
              fontSize: "14px",
              boxShadow:
                "0px 8px 20px rgba(23,162,160,0.35)",
              "&:hover": {
                background: "#138a88",
              },
            }}
          >
            CALL TO INQUIRE
          </Button>
        </Box>

        <Box
          sx={{
            background: "#fff",
            border: "1px solid #E8E3E3",
            px: {
              xs: 3,
              sm: 5,
              md: 6,
              lg: 7,
              xl: 8,
            },
            py: {
              xs: 5,
              sm: 6,
              md: 7,
              lg: 8,
            },
            display: "flex",
            flexDirection: "column",
            gap: 3,
            minHeight: {
              xs: "auto",
              lg: "620px",
            },
            justifyContent: "center",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                mb: 0.5,
              }}
            >
              First name{" "}
              <Box
                component="span"
                sx={{ color: "#A20500" }}
              >
                *
              </Box>
            </Typography>

            <TextField
              variant="standard"
              placeholder="First name"
              fullWidth
              sx={{
                width: {
                  xs: "100%",
                  lg: "72%",
                  xl: "70%",
                },
                "& .MuiInputBase-input": {
                  px: 1,
                  py: 0.8,
                  fontSize: "14px",
                },
                "& input::placeholder": {
                  color: "#737373",
                  opacity: 1,
                },
                "& .MuiInput-underline:before":
                  {
                    borderBottom:
                      "1px solid #CECECE",
                  },
                "& .MuiInput-underline:hover:not(.Mui-disabled):before":
                  {
                    borderBottom:
                      "1px solid #CECECE",
                  },
                "& .MuiInput-underline:after":
                  {
                    borderBottom:
                      "1px solid #CECECE",
                  },
              }}
            />
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                mb: 0.5,
              }}
            >
              Mobile{" "}
              <Box
                component="span"
                sx={{ color: "#A20500" }}
              >
                *
              </Box>
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: {
                  xs: "100%",
                  lg: "72%",
                  xl: "70%",
                },
                borderBottom:
                  "1px solid #CECECE",
              }}
            >
              <TextField
                variant="standard"
                select
                defaultValue="+1"
                sx={{
                  width: "78px",
                  "& .MuiInputBase-root":
                    {
                      height: "38px",
                    },
                  "& .MuiInput-underline:before, & .MuiInput-underline:after":
                    {
                      display: "none",
                    },
                  "& .MuiSelect-icon":
                    {
                      fontSize:
                        "28px",
                      color:
                        "#767272",
                    },
                }}
                slotProps={{
                  select: {
                    IconComponent:
                      KeyboardArrowDownIcon,
                  },
                }}
              >
                <MenuItem value="+1">
                  +1
                </MenuItem>
                <MenuItem value="+91">
                  +91
                </MenuItem>
                <MenuItem value="+44">
                  +44
                </MenuItem>
              </TextField>

              <TextField
                variant="standard"
                fullWidth
                sx={{
                  "& .MuiInputBase-root":
                    {
                      height: "38px",
                    },
                  "& .MuiInputBase-input":
                    {
                      px: 1,
                    },
                  "& .MuiInput-underline:before, & .MuiInput-underline:after":
                    {
                      display: "none",
                    },
                }}
              />
            </Box>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                mb: 0.5,
              }}
            >
              Vehicle type{" "}
              <Box
                component="span"
                sx={{ color: "#A20500" }}
              >
                *
              </Box>
            </Typography>

            <TextField
              variant="standard"
              select
              defaultValue="Car"
              fullWidth
              sx={{
                width: {
                  xs: "100%",
                  lg: "72%",
                  xl: "70%",
                },
                "& .MuiInputBase-input": {
                  px: 1,
                  fontSize: "14px",
                  color: "#737373",
                },
                "& .MuiInput-underline:before":
                  {
                    borderBottom:
                      "1px solid #CECECE",
                  },
                "& .MuiInput-underline:hover:not(.Mui-disabled):before":
                  {
                    borderBottom:
                      "1px solid #CECECE",
                  },
                "& .MuiInput-underline:after":
                  {
                    borderBottom:
                      "1px solid #CECECE",
                  },
                "& .MuiSelect-icon":
                  {
                    fontSize:
                      "28px",
                    color:
                      "#767272",
                  },
              }}
              slotProps={{
                select: {
                  IconComponent:
                    KeyboardArrowDownIcon,
                },
              }}
            >
              <MenuItem value="Car">
                Car
              </MenuItem>
              <MenuItem value="Bike">
                Bike
              </MenuItem>
            </TextField>
          </Box>

          <Button
            sx={{
              mt: 2,
              width: {
                xs: "100%",
                sm: "180px",
              },
              py: 1.2,
              borderRadius: "999px",
              background: "#000",
              color: "#fff",
              textTransform: "none",
              fontWeight: 500,
              "&:hover": {
                background: "#222",
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
}