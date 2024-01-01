import { InputBase, InputLabel, Stack } from "@mui/material"

const Login = () =>{
    return(
        <Stack>
            <InputLabel>email</InputLabel>
            <InputBase/>
            <InputLabel>password</InputLabel>
            <InputBase/>
        </Stack>
    )
}

export default Login