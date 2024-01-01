import { Route, Routes } from "react-router-dom";
import Employees from "./Employees";
import Interns from "./Interns";
import PTOs from "./PTOs";
import { Stack } from "@mui/material";
import Internships from "./Internships";
import Login from "../authenticate/Login";

const MainBody = () => {
// TODO : complete Login page
  return (
    <Stack
      spacing={5}
      width={"80%"}
      sx={{ paddingLeft: "20px", paddingRight: "20px" }}
    >
      <Routes>
          <Route path="/">
            <Route path="/" element={<Employees />}/> 
            <Route path="/login" element={<Login />}/>
            <Route path="/interns" element={<Interns />}/>
            <Route path="/ptos" element={<PTOs />}/>
            <Route path="/internships" element={<Internships />}/>
          </Route>
        </Routes>
    </Stack>
  );
};

export default MainBody;
