"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { ListItemButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import PhoneIcon from "@mui/icons-material/Phone";
import { useState } from "react";

const menuItems = [
  "Home",
  "Services",
  "Pricing",
  "Booking",
  "Gallery",
  "About Us",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <AppBar
        position="absolute"
        elevation={0}
        sx={{
          background: "transparent",
          px: { xs: 2, md: 6 },
          backdropFilter: "blur(6px)",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box>
            <img src="/images/logo.png" alt="logo" height={30} />
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 3,
            }}
          >
            {menuItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: "#fff",
                  fontSize: "12px",
                  letterSpacing: "1px",
                }}
              >
                {item}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              <IconButton
                onClick={() => setDarkMode(!darkMode)}
                sx={{
                  color: "#fff",
                }}
              >
                {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
              </IconButton>

              <Button
                variant="contained"
                sx={{
                  width: "180px",
                  height: "44px",
                  borderRadius: "100px",
                  fontFamily: "sans-serif",
                  fontWeight: 700,
                  fontSize: "16px",
                  letterSpacing: "0.04em",
                  textTransform: "none",
                  px: 2,
                  backgroundColor: "#FFFFFF",
                  color: darkMode ? "#006565" : "#000",
                }}
              >
                Book Now
              </Button>

              <Box
                sx={{
                  width: "222px",
                  height: "44px",
                  borderRadius: "100px",
                  background: "#FFFFFF33",
                  backdropFilter: "blur(4px)",
                  display: "flex",
                  alignItems: "center",
                  px: "4px",
                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: darkMode ? "#000000" : "#006565",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <PhoneIcon sx={{ color: "#fff", fontSize: 22 }} />
                </Box>

                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontFamily: "sans-serif",
                    fontSize: "16px",
                    letterSpacing: "0.04em",
                  }}
                >
                  +91 8356257169
                </Typography>
              </Box>
            </Box>

            <Button
              variant="contained"
              sx={{
                display: { xs: "inline-flex", md: "none" },
                backgroundColor: "#fff",
                color: "#006565",
                borderRadius: "20px",
                px: 2,
                fontSize: "12px",
                textTransform: "none",
              }}
            >
              Book
            </Button>

            <IconButton
              sx={{ color: "#fff", display: { xs: "block", md: "none" } }}
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item}>
                <ListItemButton>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
