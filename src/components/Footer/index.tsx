import React from 'react'

import * as S from './styles'
import { FooterProps } from 'types/api'

type Footer = {
  footer: FooterProps
}

const Footer: React.FC<Footer> = ({ footer }) => (
  <S.Wrapper>
    <S.Container dangerouslySetInnerHTML={{ __html: footer.text }} />
  </S.Wrapper>
)

export default Footer
