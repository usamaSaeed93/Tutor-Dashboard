import React from "react";
import { Box } from "@mui/system";
import styled from "styled-components";
import { Typography } from "@mui/material";
import { tutorpage } from "../../Routes/tutorPage";
import { payoutsColumns,payoutsRows } from "../../Assets/TableDummyData";
import Select from '../../Components/UI/Input/Select'
import TutorTable from '../../Components/Tables/TutorTable'
import Classes from "./Classes";

export default function Transactions() {
  return (
    <>
      <Box sx={{ maxWidth: "100%", height: "fit-content" }}>
        <Wrapper>
          <Type>
            <Typography>
              Money Needed for Payout <span>(excluding commision)</span>
            </Typography>
            <Typography>408.5$</Typography>
          </Type>
          <NewButton>Mark Payout</NewButton>
        </Wrapper>
<Upper >
        <h1>Payments</h1> 
        <Select />
</Upper>
<TutorTable column={payoutsColumns} row={payoutsRows}/>

      </Box>
    </>
  );
}
const Wrapper = styled(Box)`
  width: 100%;
  background-color: #e1f2f1;
  border-radius: 20px;
  height: max-content;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 30px 0px 30px 0px;
`;
const Type = styled.div`
  font-size: 24px;
  font-weight: 800;
  color: #0a0d31;
  font-family: "Poppins", sans-serif;
  > span {
    color: rgba(130, 130, 130, 1);
  }
`;
const NewButton = styled(Box)`
  width: fit-content;
  height: 46px;
  background-color: #7abbb5;
  border-radius: 10px;
  color: #fff;
  outline: none;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 30px;
  cursor: pointer;
`;
const Upper=styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 30px;
`