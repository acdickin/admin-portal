import { useState } from "react";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </Box>
  );
};

const MenuItems = (selected, setSelected) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const data = [
    { title: "Manage Team", to: "/team", icon: <PeopleOutlinedIcon /> },
    {
      title: "Contacts Information",
      to: "/contacts",
      icon: <ContactsOutlinedIcon />,
    },
    {
      title: "Invoices Balances",
      to: "/invoices",
      icon: <ReceiptOutlinedIcon />,
    },
  ];
  const pages = [
    {
      title: "Profile Form",
      to: "/form",
      icon: <PersonOutlinedIcon />,
    },
    {
      title: "Calendar",
      to: "/calendar",
      icon: <CalendarTodayOutlinedIcon />,
    },
    {
      title: "FAQ Page",
      to: "/faq",
      icon: <HelpOutlineOutlinedIcon />,
    },
  ];
  const charts = [
    {
      title: "Bar Chart",
      to: "/bar",
      icon: <BarChartOutlinedIcon />,
    },
    {
      title: "Pie Chart",
      to: "/pie",
      icon: <PieChartOutlineOutlinedIcon />,
    },
    {
      title: "Line Chart",
      to: "/line",
      icon: <TimelineOutlinedIcon />,
    },
    {
      title: "Geography Chart",
      to: "/geography",
      icon: <MapOutlinedIcon />,
    },
  ];

  return (
    <Box>
      <Item
        title="Dashboard"
        to="/"
        icon={<HomeOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />

      <Typography
        variant="h6"
        color={colors.grey[300]}
        sx={{ m: "15px 0 5px 20px" }}
      >
        Data
      </Typography>
      {data.map(({ title, to, icon }) => {
        <Item
          title={title}
          to={to}
          icon={icon}
          selected={selected}
          setSelected={setSelected}
        />;
      })}

      <Typography
        variant="h6"
        color={colors.grey[300]}
        sx={{ m: "15px 0 5px 20px" }}
      >
        Pages
      </Typography>
      {pages.map(({ title, to, icon }) => {
        <Item
          title={title}
          to={to}
          icon={icon}
          selected={selected}
          setSelected={setSelected}
        />;
      })}

      <Typography
        variant="h6"
        color={colors.grey[300]}
        sx={{ m: "15px 0 5px 20px" }}
      >
        Charts
      </Typography>

      {charts.map(({ title, to, icon }) => {
        <Item
          title={title}
          to={to}
          icon={icon}
          selected={selected}
          setSelected={setSelected}
        />;
      })}
    </Box>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          background: `transparent !important`,
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item:active": {
          color: "#6870fa !important",
        },
      }}
    >
      <Box>
        <Box>
          {/* LOGO AND MENU ICON */}
          <Box
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  Menu
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </Box>
          {isCollapsed && (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              ml="15"
            >
              <Typography variant="h3" color={colors.grey[100]}>
                Menu
              </Typography>
              <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                <MenuOutlinedIcon />
              </IconButton>
            </Box>
          )}

          {isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../asset/andrew.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>

              <Box>
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Andrew Cosmic
                </Typography>
                <Typography
                  variant="h5"
                  color={colors.greenAccent[100]}
                  fontWeight="bold"
                >
                  Full Stack Developer
                </Typography>
              </Box>
              <MenuItems selected={selected} setSelected={setSelected} />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
