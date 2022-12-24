import styled from 'styled-components/macro';

const ActionPanel = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: var(--spacing-xs) var(--spacing-xs);
    border: 1px solid var(--grey-highlight);
    border-radius: var(--border-radius-subtle);

    .heading__text__wrapper {
        text-align: center;
        line-height: var(--spacing-xs);
        margin: var(--spacing-xs) var(--spacing-xs);
        
        .panel__header__text {
            font-weight: 400;
            font-size: var(--fz-lg);
        }
        .item__name__text {
            font-weight: 900;
            font-size: var(--fz-md);
        }
    }

    .action__btn__wrapper {
        margin: var(--spacing-sm) var(--spacing-xs);
    }

    .item__property__text__wrapper {
        width: 80%;
        text-align: left;
        font-size: var(--fz-sm);
        line-height: var(--spacing-xs);
        margin: var(--spacing-xxs) var(--spacing-xs);
        
        h2 {
            font-size: var(--fz-sm);
            color: var(--grey); 
        }

        .val__text {
            color: var(--black);
            margin-left: var(--spacing-sm);
        }

        @media (max-width: 576px) {
            text-align: center;
            .val__text {
                margin-left: 0;
            }
        }
    }
`

export default ActionPanel
