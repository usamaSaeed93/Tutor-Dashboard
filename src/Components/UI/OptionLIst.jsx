import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import Switch from "@mui/material/Switch";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
export default function OptionLIst(props) {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap:"4px"
  };
  return (
    <div>
   
      <div style={style}>
        {props.options.map((item, index) => {
          switch (item) {
            case "eye":
              return <VisibilityIcon sx={{color:"rgba(10, 13, 49, 1)"}}/>
            case "switch":
              return (
                <AntSwitch
                  defaultChecked
                  inputProps={{ "aria-label": "ant design" }}
                />
              );
            case "delete":
              return <DeleteForeverIcon sx={{color:"rgba(239, 194, 130, 1)"}}/>;
            case "edit":
              return <EditIcon sx={{color:"rgba(200, 200, 200, 1)"}}/>;
          }
        })}
      </div>
     
    </div>
  );
}

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
