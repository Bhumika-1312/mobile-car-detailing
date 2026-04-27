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
        display: "flex",
        justifyContent: "center",
        background: "#fff",
        pt: {
          xs: "50px",
          sm: "60px",
          md: "80px",
          lg: "80px",
          xl: "80px",
        },
        pb: {
          xs: "50px",
          sm: "60px",
          md: "80px",
          lg: "80px",
          xl: "80px",
        },
        px: {
          xs: 2,
          sm: 3,
          md: 4,
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1280px",
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
        }}
      >
        <Box
          sx={{
            flex: 1,
            background: "#F0F4F8",
            p: {
              xs: 4,
              sm: 5,
              md: 8,
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
                md: "44px",
              },
              fontWeight: 700,
              color: "#1F2428",
              lineHeight: 1.2,
            }}
          >
            Contact us for the <br /> doorstep service
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
                sm: "fit-content",
              },
              px: 4,
              py: 1.2,
              borderRadius: "999px",
              background: "#17A2A0",
              color: "#fff",
              textTransform: "none",
              fontWeight: 600,
              boxShadow:
                "0px 8px 20px rgba(23,162,160,0.4)",
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
            flex: 1,
            background: "#FFF",
            p: {
              xs: 4,
              sm: 5,
              md: 8,
            },
            display: "flex",
            flexDirection: "column",
            gap: 3,
            border: "1px solid #E8E3E3",
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
                sx={{
                  color: "#A20500",
                }}
              >
                *
              </Box>
            </Typography>

            <TextField
              variant="standard"
              placeholder="First name"
              sx={{
                width: {
                  xs: "100%",
                  md: "70%",
                },
                "& .MuiInputBase-input": {
                  px: 2,
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
                sx={{
                  color: "#A20500",
                }}
              >
                *
              </Box>
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                borderBottom:
                  "1px solid #CECECE",
                width: {
                  xs: "100%",
                  md: "70%",
                },
              }}
            >
              <TextField
                variant="standard"
                select
                defaultValue="+1"
                sx={{
                  width: "70px",
                  "& .MuiInputBase-root":
                    {
                      height: "36px",
                    },
                  "& .MuiInput-underline:before, & .MuiInput-underline:after":
                    {
                      display: "none",
                    },
                  "& .MuiSelect-icon":
                    {
                      color: "#767272",
                      fontSize:
                        "30px",
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

              <Box sx={{ width: "4px" }} />

              <TextField
                variant="standard"
                fullWidth
                placeholder=""
                sx={{
                  "& .MuiInputBase-root":
                    {
                      height: "36px",
                    },
                  "& input::placeholder":
                    {
                      color: "#737373",
                      opacity: 1,
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
                sx={{
                  color: "#A20500",
                }}
              >
                *
              </Box>
            </Typography>

            <TextField
              variant="standard"
              select
              fullWidth
              defaultValue="Car"
              sx={{
                width: {
                  xs: "100%",
                  md: "70%",
                },
                "& .MuiInputBase-input": {
                  color: "#737373",
                  fontSize: "14px",
                  mx: 2,
                },
                "& .MuiInput-underline:before":
                  {
                    borderBottom:
                      "1px solid #CECECE",
                  },
                "& .MuiSelect-icon":
                  {
                    color: "#767272",
                    fontSize:
                      "30px",
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
                sm: "170px",
              },
              borderRadius: "999px",
              background: "#000",
              color: "#fff",
              textTransform: "none",
              py: 1,
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