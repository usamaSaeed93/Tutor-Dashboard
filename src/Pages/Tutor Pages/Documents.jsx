import React from 'react'
import { Box, fontSize } from '@mui/system'
import { Typography } from '@mui/material'
import styled from 'styled-components'
import EditIcon from "@mui/icons-material/Edit";
export default function Documents() {
  return (
    <div>

<Wrapper >
{
    documents.map(item=>{
        return <Row sx={{maxWidth:"570px"}}>
            <pre>{item}</pre>
            <span><EditIcon sx={{color:"rgba(122, 187, 181, 1)", fontSize:"24px"}}/></span>
        </Row>
    })
}
</Wrapper>
    </div>
  )
}
const Wrapper=styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 30px;
padding: 30px;
`
const Row=styled(Box)`
 
    height: 75px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
background-color: #dcfffb;
padding: 20px;
border-radius: 20px;
>pre{
    color: rgba(122, 187, 181, 1);
}
>span{
    cursor: pointer;
}
`
const documents=[
    "Iqama.pdf",
    "Iqama.pdf",
    "Iqama.pdf",
    "Iqama.pdf",
    "Iqama.pdf",


]