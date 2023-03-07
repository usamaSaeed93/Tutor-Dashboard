import React from 'react'
import Styled from 'styled-components'
import photo from '../../Assets/images/photo-1506794778202-cad84cf45f1d.jpeg'
export default function Nameslab() {
  return (
   <>
   <Wrapper >
    <img src={photo} alt="none" />
    <span>Usama M Saeed</span>
   </Wrapper>
   </>

  )
}
const Wrapper=Styled.div`
    display:flex;
    width:fit-content;
    height:fit-content;
    align-itmes:center;
    justify-content:center;
    gap:5px;
    >img{
        width:25px;
        border-radius: 10px;
    }
`