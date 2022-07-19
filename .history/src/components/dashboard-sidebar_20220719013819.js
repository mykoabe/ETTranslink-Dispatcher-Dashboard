import { useEffect } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { Box, Button, Divider, Drawer, Typography, useMediaQuery } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { ChartBar as ChartBarIcon } from "../icons/chart-bar";
import { Cog as CogIcon } from "../icons/cog";
import { Lock as LockIcon } from "../icons/lock";
import { Selector as SelectorIcon } from "../icons/selector";
import { ShoppingBag as ShoppingBagIcon } from "../icons/shopping-bag";
import { User as UserIcon } from "../icons/user";
import { UserAdd as UserAddIcon } from "../icons/user-add";
import { Users as UsersIcon } from "../icons/users";
import { XCircle as XCircleIcon } from "../icons/x-circle";
import { Logo } from "./logo";
import { NavItem } from "./nav-item";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
// icons
import { Add, CarCrash } from "@mui/icons-material";
import FilterNoneIcon from "@mui/icons-material/FilterNone";
import BuildIcon from "@mui/icons-material/Build";
import CellTowerIcon from "@mui/icons-material/CellTower";

const items = [
  {
    href: "/customers",
    icon: <Add fontSize="small" />,
    title: "Manage Customers",
  },
  {
    href: "/drivers",
    icon: <Add fontSize="small" />,
    title: "Manage Drivers",
  },
  {
    href: "/facilitators",
    icon: <Add fontSize="small" />,
    title: "Manage Facilitators",
  },
  {
    href: "/loads",
    icon: <CogIcon fontSize="small" />,
    title: "Loads",
  },
  {
    href: "/app-request-load",
    icon: <LockIcon fontSize="small" />,
    title: "Login",
  },
  {
    href: "/ecx-works",
    icon: <LockIcon fontSize="small" />,
    title: "ECX Works",
  },
  {
    href: "/free-drivers",
    icon: <UserAddIcon fontSize="small" />,
    title: "Free Drivers",
  },
  {
    href: "/moving-truckers",
    icon: <UserAddIcon fontSize="small" />,
    title: "Moving Truckers",
  },
  {
    href: "/compliants",
    icon: <UserAddIcon fontSize="small" />,
    title: "Accept Compliants",
  },
  {
    href: "/404",
    icon: <XCircleIcon fontSize="small" />,
    title: "Error",
  },
];

export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div>
          <Box sx={{ p: 3 }}>
            <NextLink href="/" passHref>
              <a>
                <Logo
                  sx={{
                    height: 42,
                    width: 42,
                  }}
                />
              </a>
            </NextLink>
          </Box>
          <Box sx={{ px: 2 }}>
            <Box
              sx={{
                alignItems: "center",
                bgcolor: "background.paper",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                px: 1,
                py: "11px",
                borderRadius: 7,
              }}
            >
              <div>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "text.danger",
                    px: 2,
                    borderRadius: 1,
                  }}
                >
                  <ViewInArIcon />
                  <Typography color= variant="subtitle1" sx={{ ml: 3 }}>
                    Dashboard
                  </Typography>
                </Box>
              </div>
            </Box>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: "#2D3748",
            my: 3,
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem key={item.title} icon={item.icon} href={item.href} title={item.title} />
          ))}
        </Box>
        <Divider sx={{ borderColor: "#2D3748" }} />
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "neutral.900",
            color: "#FFFFFF",
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.900",
          color: "#FFFFFF",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
