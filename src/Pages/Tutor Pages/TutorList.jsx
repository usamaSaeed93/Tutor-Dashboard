import React from "react";
import styled from "styled-components";
import TutorTable from '../../Components/Tables/TutorTable'
import { tutorColumn,tutorRow } from "../../Assets/TableDummyData";
import UpperHeader from "../../Components/UI/UpperHeader";
export default function TutorList() {
  return (
    <div>
   <UpperHeader header={{select:"select",searchSelect:"searchSelect",tile:"tile",hug:"hug"}}/>
      <TutorTable column={tutorColumn} row={tutorRow} options={["eye","switch","delete","edit"]} />
      
    </div>
  );
}
