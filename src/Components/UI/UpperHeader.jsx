import React from "react";
import styled from "styled-components";
import Input from "./Input/Input";
import Select from "../UI/Input/Select";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
export default function UpperHeader(props) {

  const { select, searchSelect, hug, tile } = props.header;

  return (
    <div>
      <Wrapper>
        {select && (
          <Inner1>
            <div>
              <Input />
              <Select prop="fill" />
            </div>
            {hug && (
              <div>
                <Hug>
                  <Typography> All Tutors </Typography>
                </Hug>
                <Hug>
                  <Typography> Pending Tutors </Typography>
                </Hug>
                <Hug>
                  <Typography> Blocked Tutors </Typography>
                </Hug>
                <Hug>
                  <Typography> Rejected Tutors </Typography>
                </Hug>
              </div>
            )}
          </Inner1>
        )}
        {tile && (
          <Inner2>
            <TileBox>
              <Tile>
                <p>
                 <ArrowDropDownIcon />  <span>964</span> 
                </p>
                <span>Active Tutors</span>
              </Tile>
            </TileBox>
            <TileBox>
              <Tile>
                <p>
                  <ArrowDropDownIcon /> 64
                </p>
                <span>Inactive Tutors</span>
              </Tile>
            </TileBox>
            <TileBox>
              <Tile>
                <p>
                  <ArrowDropDownIcon /> 781
                </p>
                <span>Pending</span>
              </Tile>
            </TileBox>
            <TileBox>
              <Tile>
                <p>
                  <ArrowDropDownIcon /> 781
                </p>
                <span>Rejected</span>
              </Tile>
            </TileBox>
          </Inner2>
        )}
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: row;
  height: fit-content;
  margin-bottom: 30px;
  @media screen and (max-width: 820px) {
    flex-direction: column;
    gap: 20px;
  }
  @media screen and (max-width: 820px) {
    flex-direction: column;
    gap: 50px;
  }
`;
const Inner1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  > div {
    flex-direction: row;
    display: flex;
    gap: 30px;
   
    align-items: center;
  }
`;
const Inner2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
const Hug = styled.div`
  width: fit-content;
 height: max-content;
 padding:8px 12px 8px 12px;
  border-radius: 20px;

  border: 10px;
  border: 1px solid rgba(200, 200, 200, 0.3);
 
    color: rgba(130, 130, 130, 1);
  
`;
const Tile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 138px;
  height: 102px;
  border-radius: 20px;
  flex-direction: column;

  gap: 10px;
  box-shadow: 0px 10px 89px rgba(0, 0, 0, 0.04), 0px 6.48148px 52.1227px rgba(0, 0, 0, 0.0303704), 0px 3.85185px 28.3481px rgba(0, 0, 0, 0.0242963), 0px 2px 14.4625px rgba(0, 0, 0, 0.02), 0px 0.814815px 7.25185px rgba(0, 0, 0, 0.0157037), 0px 0.185185px 3.50231px rgba(0, 0, 0, 0.00962963);
  >p{
  color:rgba(122, 187, 181, 1);
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
}
>span{
  font-weight: 500;
  color: rgba(130, 130, 130, 1);
}
`;
const TileBox = styled(Box)`

`
