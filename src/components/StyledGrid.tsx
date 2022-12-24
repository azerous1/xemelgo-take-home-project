
import styled from 'styled-components/macro';

const StyledGrid = styled.div`
    display: grid;
    width: 100%;
    max-width: 1000px;
    grid-template-columns: 1fr 2fr;
    gap: var(--spacing-lg);

    @media (max-width: 576px) {
        grid-template-columns: 80vw;
        gap: 0;
        justify-content: center;
        align-items: center;
    }
`

export default StyledGrid
