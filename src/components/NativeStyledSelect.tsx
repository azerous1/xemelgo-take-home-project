
import styled from 'styled-components/macro';

const StyledSelect = styled.select`
    cursor: pointer;
    font-size: var(--fz-md);
    color: var(--black);
    border: 1px solid var(--blue);
    border-radius: var--border-radius-subtle();
    width: 220px;
    height: 40px;

    option {
        display: none; 
        margin: 0;
        padding: 0;
        list-style: none;
    }
`
export default StyledSelect
