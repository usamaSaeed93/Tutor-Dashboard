import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import styled from 'styled-components'
import { Box } from '@mui/system';
export default function BasicMenu(Prop) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Wrapper>
      <NewButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        // aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
     sx={{color:Prop.fill? "#C8C8C8;" :"#000" }} >
     Search By <ArrowDropDownIcon />
      </NewButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Category</MenuItem>
        <MenuItem onClick={handleClose}>Tutor Name</MenuItem>
        <MenuItem onClick={handleClose}>Venue</MenuItem>
        <MenuItem onClick={handleClose}>Created On</MenuItem>
      </Menu>
    </Wrapper>
  );
}
const NewButton=styled(Button)`
color: black;
`
const Wrapper=styled(Box)`
  box-shadow: rgba(0, 0, 0, 0.012);
`