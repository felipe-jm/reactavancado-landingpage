import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import ProfileCard from 'components/ProfileCard'

import * as S from './styles'
import { SectionAuthorsProps } from 'types/api'

type SectionAuthors = {
  sectionsAuthors: SectionAuthorsProps
}

const SectionAuthors: React.FC<SectionAuthors> = ({ sectionsAuthors }) => (
  <Container>
    <Heading reverseColor>{sectionsAuthors.title}</Heading>

    <S.Content>
      {sectionsAuthors.authors.map((author) => (
        <ProfileCard
          key={author.name}
          name={author.name}
          role={author.role}
          photo={author.photo}
          socialLinks={author.socialLinks}
          description={author.description}
        />
      ))}
    </S.Content>
  </Container>
)

export default SectionAuthors
