import styled, { css } from 'styled-components'

export const Container = styled.article`
  img {
    max-width: 100%;
  }

  p {
    margin: ${({ theme }) => theme.spacings.medium} 0;
  }

  ul,
  ol {
    margin: ${({ theme }) => theme.spacings.medium};
  }

  pre {
    ${({ theme }) => css`
      width: 100%;
      overflow-x: auto;
      background: ${({ theme }) => theme.colors.lightGray};
      color: ${({ theme }) => theme.colors.darkDray};
      padding: ${({ theme }) => theme.spacings.large};
      margin: ${({ theme }) => theme.spacings.large} 0;
      line-height: 1.5;
      font-size: ${({ theme }) => theme.font.sizes.medium};
    `}
  }
`
