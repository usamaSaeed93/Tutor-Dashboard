import React from "react";

import styled from "styled-components";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { routesConfig } from "../../Routes/mainRoutes";
import { Link } from "react-router-dom";
function Sidebar() {
  const [close, setClose] = useState(false);
  return (
    <div>
      <Wrapper>
        <Handle onClick={() => setClose(!close)}>
          {close ? <ArrowForwardIcon /> : <ArrowBackIcon />}
        </Handle>
        {routesConfig?.map((item,index) => {
          return (
            <div>
              <Link to={item.path} key={index}>
                <h5 className="icon">{item.icon}</h5>
                {close ? <h4>{item.name}</h4> : ""}
              </Link>
            </div>
          );
        })}
      </Wrapper>
    </div>
  );
}

export default Sidebar;
const Handle = styled.div``;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: fit-content;
  height: 917px;
  padding: 20px;
  transition: 0.3s ease;
  flex-direction: column;
  background-color: #7abbb5;
  border-radius: 20px;

  > div {
    display: flex;
    justify-items: center;
    align-items: center;
    flex-direction: row;
    gap: 15px;
    height: 50px;
    width: fit-content;
    color: #fff;
    cursor: pointer;

    &.icon {
      color: #7abbb5;
    }

    &:nth-child(2) {
      margin-bottom: 30px;

      &::after {
        display: block;
        content: "";
        width: 70%;
        height: 1px;
        background: #fff;
        position: absolute;
        bottom: 0;
        left: 15;
        margin-top: 29px;
      }

      & {
        position: relative;
      }
    }

    &:nth-last-child(4) {
      margin-bottom: 30px;
      &::after {
        display: block;
        content: "";
        width: 70%;
        height: 1px;
        background: #fff;

        position: absolute;
        bottom: 0;
        left: 15;
      }

      & {
        position: relative;
      }
    }
  }
  > h5 {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
`;
