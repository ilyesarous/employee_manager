import { Divider, Stack } from "@mui/material";
import "./App.css";
import LeftMenu from "./components/leftSide/LeftMenu";
import MainBody from "./components/body/MainBody";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Stack direction={"row"} mt={3} minHeight={"100%"}>
        <LeftMenu />
        <Divider orientation="vertical" flexItem />
        <MainBody/>
      </Stack>
    </div>
  );
}

export default App;
