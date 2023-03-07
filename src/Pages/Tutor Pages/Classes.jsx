import React from 'react'
import TutoTable from '../../Components/Tables/TutorTable'
import {tutorClassColumn,tutorClassRow} from '../../Assets/TableDummyData'
import styled from 'styled-components'
import { Box } from '@mui/system'
import Select from '../../Components/UI/Input/Select'
export default function 
() {
  return (
    <div>
       <Upper >
        <h1>Classes</h1> 
        <Select />
</Upper>
<TutoTable column={tutorClassColumn} row={tutorClassRow} />
    </div>
  )
}
const Upper=styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 30px;
`