import { AccessTimeFilled, People } from "@mui/icons-material";
import {
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Stack,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const LeftMenu = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const items = [
    { id: 1, route: "/", icon: <People fontSize="small" />, text: "Employees" },
    {
      id: 2,
      route: "/interns",
      icon: <People fontSize="small" />,
      text: "Interns",
    },
    {
      id: 3,
      route: "/ptos",
      icon: <AccessTimeFilled fontSize="small" />,
      text: "PTO's requests",
    },
    {
      id: 4,
      route: "/internships",
      icon: <AccessTimeFilled fontSize="small" />,
      text: "Internships",
    },
  ];

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("selectedIndex"));
    if (items) {
      setSelectedIndex(items);
    }
  }, [selectedIndex]);

  const handleMenuItemClick = (index) => {
    setSelectedIndex(index);
    localStorage.setItem("selectedIndex", JSON.stringify(index));
  };

  return (
    <Stack flex={1}>
      <MenuList>
        {items.map((i) => (
          <Link
            key={i.id}
            to={i.route}
            style={{ textDecoration: "none", color: "black" }}
          >
            <MenuItem
              selected={selectedIndex === i.id}
              onClick={() => handleMenuItemClick(i.id)}
            >
              <ListItemIcon>{i.icon}</ListItemIcon>
              <ListItemText>{i.text}</ListItemText>
            </MenuItem>
            <Divider />
          </Link>
        ))}
      </MenuList>
    </Stack>
  );
};

export default LeftMenu;
