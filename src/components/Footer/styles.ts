import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.gray};
    text-align: center;
    font-size: 1.3rem;
    line-height: ${theme.font.sizes.xlarge};
    position: relative;
    z-index: 2;
    margin-top: -${theme.spacings.medium};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.small};
      margin-top: -${theme.spacings.xxlarge};
      padding-bottom: ${theme.spacings.large};
    `}

    a {
      color: ${theme.colors.primary};
      text-decoration: none;
      border-bottom: 1px solid ${theme.colors.primary};
    }
  `}
`

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    padding: ${theme.spacings.large} calc(${theme.grid.gutter} / 2);
    margin: 0 auto;

    ${media.greaterThan('medium')`
      padding: ${theme.spacings.large} calc(${theme.grid.gutter} / 2);
    `}
  `}
`
