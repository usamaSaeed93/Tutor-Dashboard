import React from 'react'
import styled from 'styled-components'
import TutorTable from '../../Components/Tables/TutorTable'
import UpperHeader from '../../Components/UI/UpperHeader'
import { ratingsColumns,ratingsRows } from '../../Assets/TableDummyData'
export default function RatingsLIst() {
  return (
    <div>
        <Wrapper >
        <h1>Payment Manager</h1>
            <UpperHeader header={{select:"select",searchSelect:"searchSelect"}}/>
<TutorTable column={ratingsColumns} row={ratingsRows} options={["eye","delete"]}/>
        </Wrapper>
    </div>
  )
}
const Wrapper=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
align-items: flex-start;
gap: 30px;
margin-left: 20px;


`
