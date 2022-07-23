import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { grey } from "@mui/material/colors";
import { useAuth } from "../context/AuthContext";
import {useRouter} from "next/router";

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export const DashboardNavbar = (props) => {
  const { onSidebarOpen, ...other } = props;
  const { logout } = useAuth();
  const router = useRouter();
  const handleLogout = () => {
    
  }

  return (
    <>
      <DashboardNavbarRoot
        sx={{
          left: {
            lg: 280,
          },
          width: {
            lg: "calc(100% - 280px)",
          },
        }}
        {...other}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2,
            background: "#2c2c2c",
          }}
          elevation={0}
          position="relative"
        >
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: "inline-flex",
                lg: "none",
              },
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          <Typography color={grey[500]}>
            <span>DASHBOARD/2022 STASTICS</span>
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Button variant="text" onClick={logout}>
            <span>LOGOUT</span>
          </Button>
        </Toolbar>
      </DashboardNavbarRoot>
    </>
  );
};

DashboardNavbar.propTypes = {
  onSidebarOpen: PropTypes.func,
};
