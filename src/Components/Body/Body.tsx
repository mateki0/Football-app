import React from 'react'
import styled from 'styled-components';

import DefaultBody from './DefaultBody';


const StyledMain = styled.main`
    margin-left:250px;
`
type BodyProps = {
    data:object,
}
const Body = () => {
    
    
        return(
            <DefaultBody />
            
        )
        
}
export default Body;