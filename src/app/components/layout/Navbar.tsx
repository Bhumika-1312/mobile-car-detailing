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
import Link from "next/link";
import { usePathname } from "next/navigation";

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

  const pathname = usePathname();
  const isHome = pathname === "/";

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
            {menuItems.map((item) => {
              const routes: Record<string, string> = {
                Home: "/",
                Services: "/services",
                Pricing: "/pricing",
                Booking: "/booking",
                Gallery: "/gallery",
                "About Us": "/about",
              };

              const path = routes[item];

              return (
                <Button
                  key={item}
                  component={Link}
                  href={path}
                  sx={{
                    color: isHome ? "#fff" : "#000",
                    fontSize: "12px",
                    letterSpacing: "1px",
                  }}
                >
                  {item}
                </Button>
              );
            })}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              <IconButton
                onClick={() => setDarkMode(!darkMode)}
                sx={{
                  color: isHome ? "#fff" : "#000",
                }}
              >
                {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
              </IconButton>

              <Button
                component={Link}
                href="/booking"
                variant="contained"
                sx={{
                  width: "180px",
                  height: "44px",
                  borderRadius: "100px",
                  fontWeight: 700,
                  fontSize: "16px",
                  textTransform: "none",
                  backgroundColor: "#006565",
                  color: "#fff",
                }}
              >
                Book Now
              </Button>

              <Box
                sx={{
                  width: "222px",
                  height: "44px",
                  borderRadius: "100px",
                  background: isHome ? "#FFFFFF33" : "#fff",
                  border: isHome ? "none" : "1px solid #000",
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
                    backgroundColor: "#000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <PhoneIcon sx={{ color: "#fff", fontSize: 22 }} />
                </Box>

                <Typography
                  sx={{
                    color: isHome ? "#fff" : "#000",
                    fontSize: "14px",
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
                backgroundColor: isHome ? "#006565" : "#fff",
                color: isHome ? "#fff" : "#000",
                borderRadius: "20px",
                px: 2,
                fontSize: "12px",
                textTransform: "none",
              }}
            >
              Book
            </Button>

            <IconButton
              sx={{
                color: isHome ? "#fff" : "#000",
                display: { xs: "block", md: "none" },
              }}
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
