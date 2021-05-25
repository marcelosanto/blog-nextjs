import styled, { css } from 'styled-components'

export const Container = styled.header`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
    margin: ${theme.spacings.medium};
    bottom: 0;
  `}
`
