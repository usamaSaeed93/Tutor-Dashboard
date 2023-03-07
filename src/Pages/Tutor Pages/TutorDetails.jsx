import React from "react";
import styled from "styled-components";
import photo from "../../Assets/images/photo-1506794778202-cad84cf45f1d.jpeg";
import StarIcon from "@mui/icons-material/Star";
import Transactions from "./Transactions";
import UpperHeader from '../../Components/UI/UpperHeader'
import { tutorRoutes } from "../../Routes/tutorPage";
import Classes from "./Classes";
import { Box } from "@mui/system";
function TutorDetails() {
  return (
    <div className="main">
      <Wrapper>
        <Photo photo></Photo>
        <h4>Ali Bashir</h4>
        <pre>Rate : 8.5$/hour</pre>
        <span>Lahore Pakistan</span>
        <div>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          voluptatibus.
        </p>
        <Response>
          <h4>Response Rate</h4>
          <pre>1 hour</pre>
        </Response>

        <span>(excluding weekend)</span>

        <span>Language</span>
        <Option>English</Option>
        <span>Service Menu</span>
        <Option>
          <pre>online</pre>
          <pre>at your home</pre>
          <pre>at tutors home</pre>
        </Option>
      </Wrapper>
      <Wrapper2 >
      <UpperHeader header={{tile:"tile"}}/>
      <Links>
      {
tutorRoutes?.map(route=>{
 return <div>
  {  route.name}
  </div>
})
}
      </Links>
      
      <Transactions />
      </Wrapper2>
   
    </div>
  );
}
export default TutorDetails;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: justify;
  flex-direction: column;
  width: 320px;
  gap: 40px;
  height: fit-content;
  > span {
  }
  > img {
    width: 203px;
    height: 168px;
    border-radius: 20px;
  }
  > div {
    color: goldenrod;
  }
  > p {
    width: 203px;
  }
`;
const Response = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
`;
const Option = styled.div`
  color: black;
  width: fit-content;
  height: 34px;
  background-color: #c8c8c833;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  gap: 20px;
`;
const Photo = styled(Box)`
  background-image: url("../../Assets/images/photo-1506794778202-cad84cf45f1d.jpeg");
  width: 150px;
  height: 120px;
  border: 1px solid black;
`;
const Wrapper2=styled(Box)`
  
`
const Links=styled(Box)`
  
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  flex-direction: row;
  gap: 30px;
  border-top: 1px solid rgba(200, 200, 200, 1);
  border-bottom: 1px solid rgba(200, 200, 200, 1);
  color: rgba(200, 200, 200, 1);
  padding-left: 20px;
  padding-right: 20px;
  >div{
    display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: fit-content;
  color: rgba(200, 200, 200, 1);
  cursor: pointer;

  }
`