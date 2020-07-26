import React from 'react'
import * as S from './styles'
import { LogoProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const Logo: React.FC<LogoProps> = ({ url, alternativeText }) => (
  <S.LogoWrapper src={getImageUrl(url)} alt={alternativeText} />
)

export default Logo
