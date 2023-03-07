import { Box } from "@mui/system";
import React from 'react'
import styled from "styled-components";
import Select from './Select.jsx'
export default function Input() {
  return (
    <div>
        <Box sx={
          {  maxWidth:"fit-content"}
        }>
            <Wrapper >
        <NewInput type="text" placeholder="Search"   />
<Select />
            </Wrapper>

        
      
        </Box>


    </div>
  )
}
const Wrapper=styled.div`
width: fit-content;
display:flex;
height:48px;
justify-content:space-between;
align-items: center;
border: 1px solid rgba(221, 221, 221, 1);
border-radius:10px;
padding-left:10px;
`

const NewInput=styled.input`
border: none;
outline:none;
display:flex;
justify-content:flex-start;
align-items: center;
`