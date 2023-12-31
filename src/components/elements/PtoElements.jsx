import { Check, Clear } from "@mui/icons-material";
import { Avatar, Divider, IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { request } from "../../tools/axiosTool/AxiosTool";

const PtoElements = (props) => {
  const pto = props.element;
  let [text, setText] = useState("");
 
  const buttons = [
    { id: 1, button: <Check /> },
    { id: 2, button: <Clear /> },
  ];

  const changeStatus = (id) => {
    if (id === 1) {
      setText("accepted");
    } else {
      setText("rejected");
    }
    
    request("PUT", `/ptos/update/${pto.id}`, {
      id: pto.id,
      fname: pto.fname,
      lname: pto.lname,
      startDate: pto.startDate,
      endDate: pto.endDate,
      status: text,
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
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
      <Typography m={5}>{pto.employeeId}</Typography>
      <Typography m={5}>{pto.fname}</Typography>
      <Typography m={5}>{pto.lname}</Typography>
      <Typography m={5}>{pto.startDate}</Typography>
      <Typography m={5}>{pto.endDate}</Typography>
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
