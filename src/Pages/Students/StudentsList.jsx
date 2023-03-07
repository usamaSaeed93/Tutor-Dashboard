import React from 'react'
import {studentColumns ,studentRows} from '../../Assets/TableDummyData'
import UpperHeader from '../../Components/UI/UpperHeader'
import TutorTable from '../../Components/Tables/TutorTable'
export default function 
() {
  return (
    <div>
<UpperHeader header={{
    searchSelect:"searchSelect",select:"select",hug:"hug",tile:"tile" }} />
<TutorTable column={studentColumns} row={studentRows} options={['eye','switch','delete']} 
/>

    </div>
  )
}
