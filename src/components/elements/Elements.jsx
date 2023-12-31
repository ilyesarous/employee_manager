import { Avatar, Box, Divider, Stack, Typography } from "@mui/material";

const Elements = (props) => {
  const element = props.element;
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-evenly"}
      alignItems={"center"}
      flex={3}
      maxHeight={70}
      sx={{ boxShadow: "grey 1px 1px 5px", borderRadius: "10px" }}
      key={element.id}
    >
      <Avatar></Avatar>
      <Typography m={5}>{element.fname}</Typography>
      <Typography m={5}>{element.lname}</Typography>
      <Typography m={5}>{element.role}</Typography>
      <Typography m={5}>{element.employmentDate}</Typography>
      <Typography m={5}>{element.salary}$</Typography>
      <Divider orientation="vertical" variant="middle" flexItem />
      {element.status === "actif"? (
        <Box
          width={20}
          height={20}
          bgcolor={"#A8DF8E"}
          sx={{ borderRadius: "50px" }}
        />
      ) : (
        <Box
          width={20}
          height={20}
          bgcolor={"red"}
          sx={{ borderRadius: "50px" }}
        />
      )}
    </Stack>
  );
};

export default Elements;
