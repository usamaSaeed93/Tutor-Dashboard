import React from "react";
import { Box, fontSize } from "@mui/system";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import styled from "styled-components";
import Switch from "@mui/material/Switch";
export default function Account() {
  return (
    <div>
      <Wrapper>
        <Row sx={{ maxWidth: "570px" ,backgroundColor:"#fdadad"}}>
          <pre>Delete</pre>
          <span>
            <DeleteForeverIcon
              sx={{ color:"rgba(235, 87, 87, 1)" , fontSize: "24px" }}
            />
          </span>
        </Row>

        <Row sx={{ maxWidth: "570px",backgroundColor:"#ffe7c6" }}>
          <pre>DeActivate Account</pre>
         
          {/* <AntSwitch
                  defaultChecked
                  inputProps={{ "aria-label": "ant design" }}
                /> */}
        
        </Row>
      </Wrapper>
    </div>
  );
}
const Row=styled(Box)`
 
    height: 75px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
padding: 20px;
border-radius: 20px;
>pre{
   
}
>span{
    cursor: pointer;
}
`
const Wrapper=styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 30px;
& :first-child{
    color: rgba(235, 87, 87, 1);
}
&:last-child{
   color: rgba(239, 194, 130, 1)
}
`
const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor:
          theme.palette.mode === "dark" ? "#fff" : "rgba(122, 187, 181, 1)",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));
