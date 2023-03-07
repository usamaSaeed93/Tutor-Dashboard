import React from 'react'
import UpperHeader from '../../Components/UI/UpperHeader'
import TutorTable from '../../Components/Tables/TutorTable'
import { workshopsColumns,workshopsRows } from '../../Assets/TableDummyData'
export default function () {
  return (
    <div>
      <br />
      <h1>WorkShops</h1>
      <br />
      <UpperHeader header={{searchSelect:"searchSelect",select:"select"}}/>
      <TutorTable column={workshopsColumns} row={workshopsRows}/>
    </div>
  )
}
