import React from "react";
import { Box } from "@mui/system";
import styled from "styled-components";
import ImageIcon from "@mui/icons-material/Image";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
export default function () {
  return (
    <Wrapper>
      <h1>Categories</h1>
      <h4>Add New Category</h4>
      <InputWrapper
        sx={{
          maxWidth: "475px",
          height: "45px",
        }}
      >
        <input type="text" placeholder="Search" />
        <div>
          <span>Add</span>
        </div>
      </InputWrapper>
      <h4>Category Image</h4>
      <ImageWrapper>
        <div>
          <ImageIcon />
        </div>
        <span>Browse Image</span>
      </ImageWrapper>
      <h4>Add Sub Category</h4>
      <TableWrapper  
      sx={{
        maxWidth: "475px",
        height: "330px",
      }}>
        <TableWrapperInner
          sx={{
            maxWidth: "475px",
            height: "260px",
          }}
        >
          <Box1>
            <div>
              <span>Added Category</span>
            </div>
            <div>
              <p>Category Name</p>
            </div>
            <div>
              <p>Category Name</p>
            </div>
            <div>
              <p>Category Name</p>
            </div>
          </Box1>
          <Box2>
            <span>Sub Category</span>
            <div>
              <p>Lorem, ipsum.</p>
              <span>
                <NewDeleteForeverIcon />
              </span>
            </div>
            <InputWrapper
              sx={{
                maxWidth: "315px",
                height: "30px",
              }}
            >
              <input type="text" placeholder="Search" />
              <div>
                <span>Add</span>
              </div>
            </InputWrapper>
          </Box2>
        </TableWrapperInner>
        <SaveButton>
<span>Save Category</span>
        </SaveButton>
      </TableWrapper>
<SavedCategory sx={{

}}>

</SavedCategory>

    </Wrapper>
  );
}
const Wrapper=styled(Box)`
margin: 20px;
>h4{
    margin-top: 20px;
    margin-bottom:20px;
    color:#C8C8C8;

}
`
const InputWrapper = styled(Box)`
  border: 1px solid #c8c8c8;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 10px;
  padding-left: 10px;

  > input {
    border: none;
    outline: none;
    padding-left: 10px;
  }
  > div {
    width: 89px;
    height: inherit;
    border-radius: inherit;
    background-color: #c9ede9;
    color: rgba(122, 187, 181, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid;
  }
`;
const ImageWrapper = styled(Box)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  gap: 15px;
  > div {
    width: 135px;
    height: 96px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #c8c8c8;
    color:#c8c8c8;
  }
  > span {
    color: rgba(122, 187, 181, 1);
    font-weight: 800;
  }
`;
const TableWrapper = styled(Box)`
display: flex;
justify-content: flex-end;
align-items: flex-end;
flex-direction: column;
font-family: 'Poppins', sans-serif;
margin-top: 20px;
`;
const TableWrapperInner = styled(Box)`
  border: 1px solid #c8c8c8;
  display: flex;
  flex-direction: row;
 
`;
const Box1=styled(Box)`
width:30%;
display: flex;
flex-direction: column;
gap: 20px;
justify-content: flex-start;
align-items: center;
border-right: 1px solid #c8c8c8;
padding: 10px;


`
const Box2=styled(Box)`
width:70%;
display: flex;
flex-direction: column;
gap: 20px;
padding: 10px;

>div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px;

}

`
const SaveButton=styled(Box)`
width:199px;
height:46px;
border-radius: 10px;
background-color: rgba(122, 187, 181, 1);
color: #fff;
font-weight: 900;
display: flex;
justify-content: center;
align-items: center;
margin-top: 10px;
`
const SavedCategory=styled(Box)`
    

`
const NewDeleteForeverIcon =styled(DeleteForeverIcon)`
color:rgba(235, 87, 87, 1);
`
