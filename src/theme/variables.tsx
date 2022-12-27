import { css } from 'styled-components/macro'

const variables = css`
  :root {
    --black: #343434;
    --white: #ffffff;
    --blue: #4a90ff;
    --dark-blue: #0b0f28;
    --grey: #979799;
    --grey-highlight: #e2e2ea;
    --row-highlight: #f1f1f2;

    --font: 'Mulish', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 24px;

    --spacing-xxs: 4px;
    --spacing-xs: 8px;
    --spacing-sm: 12px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    --spacing-xl: 32px;
    --spacing-xxl: 64px;

    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;

    --border-radius-subtle: 4px;
    --border-radius-pill: 30px;

    --site-max-width: 1300px;
  }
`

export default variables
