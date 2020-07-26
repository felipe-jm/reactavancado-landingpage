import React from 'react'

import Button from 'components/Button'
import { gaEvent } from 'utils/ga'

import * as S from './styles'
import { PricingBoxProps } from 'types/api'
import formatValue from 'utils/formatValue'

type PricingBox = {
  pricingBox: PricingBoxProps
}

const onClick = () =>
  gaEvent({ action: 'click', category: 'buy', label: 'pricing box button' })

const PricingBox: React.FC<PricingBox> = ({ pricingBox }) => (
  <S.Box>
    <S.Prices>
      <S.FullPrice>
        De <span>{formatValue(pricingBox.totalPrice)}</span> por apenas
      </S.FullPrice>
      <S.DiscountPrice>
        <span>{pricingBox.numberInstallments}x de</span>{' '}
        {formatValue(pricingBox.priceInstallment)}
      </S.DiscountPrice>
    </S.Prices>
    <S.BenefitsList dangerouslySetInnerHTML={{ __html: pricingBox.benefits }} />

    <Button href={pricingBox.button.url} onClick={onClick} withPrice>
      <p>{pricingBox.button.label}</p>
      <div>
        <S.ButtonFullPrice>
          {formatValue(pricingBox.totalPrice)}
        </S.ButtonFullPrice>
        <S.ButtonDiscountPrice>
          {formatValue(pricingBox.discountPrice)}
        </S.ButtonDiscountPrice>
      </div>
    </Button>
  </S.Box>
)

export default PricingBox
