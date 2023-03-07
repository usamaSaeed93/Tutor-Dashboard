import React from "react";
import TutorTable from '../../Components/Tables/TutorTable'
import { classesColumns,classesRows } from "../../Assets/TableDummyData";
import UpperHeader from "../../Components/UI/UpperHeader";

export default function TutorList() {
  return (
    <div>
 <UpperHeader header={{
    searchSelect:"searchSelect",select:"select",hug:"hug",tile:"tile" }}/>
      <TutorTable column={classesColumns} row={classesRows}  />
    </div>
  );
}
