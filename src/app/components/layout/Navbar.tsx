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
  ListItemButton,
  ListItemText,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import PhoneIcon from "@mui/icons-material/Phone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { label: "HOME", path: "/" },
  { label: "SERVICES", path: "/services" },
  { label: "BOOKING", path: "/booking" },
  { label: "GALLERY", path: "/gallery" },
  { label: "ABOUT US", path: "/about-us" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const isHome = pathname === "/";
  const textColor = isHome ? "rgba(255,255,255,0.62)" : "#000";
  const navBackground = isHome ? "none" : "#FFFFFF";

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          top: 0,
          width: "100%",
          background: navBackground,
          backdropFilter: "none",
          boxShadow: "none",
          borderBottom: "none",
          px: { xs: 1.5, sm: 2, md: 4, lg: 5, xl: 6 },
        }}
      >
        <Toolbar
          sx={{
            minHeight: { xs: "64px", sm: "68px", md: "70px" },
            height: { xs: "64px", sm: "68px", md: "70px" },
            px: 0,
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr auto",
              md: "64px 1fr auto",
            },
            alignItems: "center",
            columnGap: { xs: "10px", md: "28px" },
          }}
        >
          <Box
            component={Link}
            href="/"
            sx={{
              width: { xs: "56px", md: "64px" },
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
            }}
          >
            <Box
              component="img"
              src="/images/logo.png"
              alt="logo"
              sx={{
                width: { xs: "56px", sm: "60px", md: "64px" },
                height: { xs: "28px", sm: "30px", md: "32px" },
                objectFit: "contain",
                display: "block",
              }}
            />
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              height: "44px",
              gap: {
                md: "16px",
                lg: "24px",
                xl: "30px",
              },
              overflow: "hidden",
            }}
          >
            {menuItems.map((item) => {
              const active =
                pathname === item.path ||
                (item.path !== "/" && pathname.startsWith(item.path));

              return (
                <Button
                  key={item.label}
                  component={Link}
                  href={item.path}
                  sx={{
                    minWidth: "auto",
                    height: "44px",
                    p: 0,
                    px: 0,
                    borderRadius: 0,
                    display: "flex",
                    alignItems: "center",
                    whiteSpace: "nowrap",
                    color: isHome
                      ? active
                        ? "rgba(255,255,255,0.96)"
                        : "rgba(255,255,255,0.62)"
                      : active
                      ? "rgba(0,0,0,1)"
                      : "rgba(0,0,0,0.8)",
                    fontSize: {
                      md: "12px",
                      lg: "13px",
                      xl: "14px",
                    },
                    fontWeight: 500,
                    letterSpacing: "0.6px",
                    lineHeight: 1,
                    borderBottom: active
                      ? `3px solid ${
                          isHome
                            ? "rgba(255,255,255,0.96)"
                            : "#000000"
                        }`
                      : "3px solid transparent",
                    "&:hover": {
                      background: "transparent",
                    },
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              height: "44px",
              gap: { xs: "8px", sm: "10px", md: "14px" },
            }}
          >
            <IconButton
              onClick={() => setDarkMode(!darkMode)}
              sx={{
                width: { xs: "36px", sm: "40px", md: "44px" },
                height: { xs: "36px", sm: "40px", md: "44px" },
                p: 0,
                color: textColor,
              }}
            >
              {darkMode ? (
                <DarkModeOutlinedIcon
                  sx={{
                    fontSize: { xs: 20, md: 24 },
                    color: isHome
                      ? "rgba(255,255,255,0.62)"
                      : "#000",
                  }}
                />
              ) : (
                <LightModeOutlinedIcon
                  sx={{
                    fontSize: { xs: 20, md: 24 },
                    color: isHome
                      ? "rgba(255,255,255,0.62)"
                      : "#000",
                  }}
                />
              )}
            </IconButton>

            <Button
              component={Link}
              href="/booking"
              sx={{
                width: {
                  xs: "110px",
                  sm: "130px",
                  md: "180px",
                },
                minWidth: {
                  xs: "110px",
                  sm: "130px",
                  md: "180px",
                },
                height: {
                  xs: "38px",
                  sm: "40px",
                  md: "44px",
                },
                borderRadius: "999px",
                background: isHome ? "#FFFFFF" : "#006D73",
                color: isHome ? "#006D73" : "#fff",
                fontSize: {
                  xs: "11px",
                  sm: "13px",
                  md: "16px",
                },
                fontWeight: 700,
                lineHeight: 1,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                "&:hover": {
                  background: isHome ? "#FFFFFF" : "#006D73",
                },
              }}
            >
              BOOK NOW
            </Button>

            <Box
              sx={{
                width: {
                  md: "210px",
                  lg: "222px",
                  xl: "240px",
                },
                height: "44px",
                minWidth: {
                  md: "210px",
                  lg: "222px",
                  xl: "240px",
                },
                borderRadius: "999px",
                display: { xs: "none", lg: "flex" },
                alignItems: "center",
                gap: "10px",
                px: "4px",
                background: isHome
                  ? "rgba(255,255,255,0.14)"
                  : "#FFFFFF",
                border: isHome ? "none" : "1px solid #111111",
              }}
            >
              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "#000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <PhoneIcon
                  sx={{
                    color: "#fff",
                    fontSize: 20,
                  }}
                />
              </Box>

              <Typography
                sx={{
                  flex: 1,
                  color: textColor,
                  fontSize: {
                    lg: "14px",
                    xl: "15px",
                  },
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                }}
              >
                +91 8356257169
              </Typography>

              <KeyboardArrowDownIcon
                sx={{
                  color: textColor,
                  mr: 1,
                  fontSize: 22,
                }}
              />
            </Box>

            <IconButton
              onClick={() => setOpen(true)}
              sx={{
                display: { xs: "flex", md: "none" },
                color: textColor,
                width: "36px",
                height: "36px",
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box sx={{ width: 260, pt: 3 }}>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  component={Link}
                  href={item.path}
                  onClick={() => setOpen(false)}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}