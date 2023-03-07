import React from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';
import styled from 'styled-components';
export default function Rating() {
  return (
   <>
   <Wrapper >
   <StarRateIcon />
   <StarRateIcon />
   <StarRateIcon />
   <StarRateIcon />
   <StarRateIcon />
   <span>(77)</span>
   </Wrapper>
   </>
  )
}
const Wrapper=styled.div`
    display: flex;
    gap:2px;
    flex-direction: row;
  color: rgba(239, 194, 130, 1);
   align-items: center;
    >span{
        color:black;
    }
`