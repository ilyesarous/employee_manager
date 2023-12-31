import { Pagination, Stack } from "@mui/material";
import Elements from "../elements/Elements";
import { useEffect, useState } from "react";
import { request } from "../../tools/axiosTool/AxiosTool";
import usePagination from "../../tools/pagination/Pagination";

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  let [page, setPage] = useState(1);
  const PER_PAGE = 5;

  const count = Math.ceil(employees.length / PER_PAGE);
  const data = usePagination(employees, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    data.jump(p);
  };

  const getData = async () => {
    await request("GET", "/employee")
      .then((res) => {
        setEmployees(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Stack
      spacing={5}
      width={"80%"}
      sx={{ paddingLeft: "20px", paddingRight: "20px" }}
    >
      {data.currentData().map((e) => (
        <Elements element={e} key={e.id} />
      ))}
      <Stack alignItems={"center"}>
        <Pagination
          count={count}
          color="primary"
          onChange={handleChange}
          page={page}
        />
      </Stack>
    </Stack>
  );
};

export default Employees;
