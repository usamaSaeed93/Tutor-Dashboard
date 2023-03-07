import React from "react";
import styled from "styled-components";
import Select from "../../Components/UI/Input/Select";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import TutorTable from '../../Components/Tables/TutorTable'
import UpperHeader from "../../Components/UI/UpperHeader";
import { notificationsColumns ,notificationsRows} from "../../Assets/TableDummyData";
export default function () {
  return (
    <div>
      <h1>Notifications</h1>
      <Wrapper>
        <One
          sx={{
            maxWidth: "470px",
          }}
        >
          <h4>Send Notifications</h4>
          <Row>
            <pre>Send To</pre>
            <Select
              title={"Send To"}
              icon={<ArrowDropDownIcon />}
              elements={["All", "Individuals", "Parents"]}
            />
          </Row>
          <Row>
            <Orange>
              <span>Parents </span>
              <span>
                <CloseIcon />
              </span>
            </Orange>
            <Orange>
              <span>Tutors </span>
              <span>
                <CloseIcon />
              </span>
            </Orange>
          </Row>
        </One>
        <Two
          sx={{
            maxWidth: "470px",
          }}
        >
          <Row>
            <pre>Send To</pre>
            <Select
              title={"Send To"}
              icon={<ArrowDropDownIcon />}
              elements={["All", "Individuals", "Parents"]}
            />
          </Row>
          <Row>
            <Orange>
              <span>Parents </span>
              <span>
                <CloseIcon />
              </span>
            </Orange>
            <Orange>
              <span>Tutors </span>
              <span>
                <CloseIcon />
              </span>
            </Orange>
          </Row>
        </Two>
        <span>or add Email Address</span>
        <Three
          sx={{
            maxWidth: "470px",
            height: "fit-content",
          }}
        >
          <input type="text" placeholder="email addresses separated by , " />
          <input type="text" placeholder="notification text" />

          <SaveButton>
            <span>  Send Notifications</span>
          </SaveButton>
        </Three>
      </Wrapper>
      <UpperHeader header={{searchSelect:"searchSelect",select:"select"}}/>
      <TutorTable column={notificationsColumns} row={notificationsRows} options={["eye","delete"]}/>
    </div>
  );
}
const Wrapper = styled.div`
  margin: 20px;

`;
const One = styled(Box)`
  border-bottom: 1px solid #c8c8c8; ;
`;
const Two = styled(Box)`
  border-bottom: 1px solid #c8c8c8;
  margin-bottom: 20px;
`;
const Row = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px;
  gap: 10px;
  > pre {
    font-weight: 500;
  }
`;
const Three = styled(Box)`
margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 20px;
  > input {
    width: 100%;
    height: 90px;
    border: 1px solid rgba(221, 221, 221, 1);
    border-radius: 10px;
    justify-content: flex-start;
    display: flex;
    padding: 10px;
  }
`;
const Orange = styled.div`
  width: 135px;
  height: 50px;
  background-color: #fff7eb;
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  > span {
    color: rgba(239, 194, 130, 1);
    font-weight: 800;
  }
`;
const SaveButton = styled(Box)`
  width: 199px;
  height: 46px;
  border-radius: 10px;
  background-color: rgba(122, 187, 181, 1);
  color: #fff;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
