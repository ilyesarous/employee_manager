import { Check, Clear } from "@mui/icons-material";
import { Avatar, Divider, IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { request } from "../../tools/axiosTool/AxiosTool";

const PtoElements = (props) => {
  const pto = props.element;
  const buttons = [
    { id: 1, button: <Check /> },
    { id: 2, button: <Clear /> },
  ];
  const headers = [
    { i: 1, head: pto.employeeId },
    { i: 2, head: pto.fname },
    { i: 3, head: pto.lname },
    { i: 4, head: pto.startDate },
    { i: 5, head: pto.endDate },
  ];
  let [text, setText] = useState(pto.status);
  let user = {
    id: pto.id,
    fname: pto.fname,
    lname: pto.lname,
    startDate: pto.startDate,
    endDate: pto.endDate,
    status: text,
  };
  //update state
  const sendNewData = () => {
    request("PUT", `/ptos/update/${pto.id}`, user)
    .then(() => console.log("done"))
    .catch((e) => console.log(e));
  };
  const changeStatus = (id) => {
    if (id === 1) {
      setText("accepted");
      user.status = "accepted";
    } else {
      setText("rejected");
      user.status = "rejected";
    }
    sendNewData();
  };

  return (
    <Stack
      direction={"row"}
      justifyContent={"space-evenly"}
      alignItems={"center"}
      flex={3}
      maxHeight={70}
      sx={{ boxShadow: "grey 1px 1px 5px", borderRadius: "10px" }}
      key={pto.id}
    >
      <Avatar></Avatar>
      {headers.map((p) => (
        <Typography key={p.i} m={5}>
          {p.head}
        </Typography>
      ))}
      <Divider orientation="vertical" variant="middle" flexItem />
      {text === "" ? (
        <Stack direction={"row"}>
          {buttons.map((b) => (
            <IconButton key={b.id} onClick={() => changeStatus(b.id)}>
              {b.button}
            </IconButton>
          ))}
        </Stack>
      ) : (
        <Typography color={"grey"}>{text}</Typography>
      )}
    </Stack>
  );
};

export default PtoElements;
