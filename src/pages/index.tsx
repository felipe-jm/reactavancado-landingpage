import React from 'react'
import { GetStaticProps } from 'next'

import SectionHero from 'components/SectionHero'
import SectionAboutProject from 'components/SectionAboutProject'
import SectionTech from 'components/SectionTech'
import SectionConcepts from 'components/SectionConcepts'
import SectionModules from 'components/SectionModules'
import SectionAgenda from 'components/SectionAgenda'
import PricingBox from 'components/PricingBox'
import SectionAuthors from 'components/SectionAuthors'
import SectionReviews from 'components/SectionReviews'
import SectionFaq from 'components/SectionFaq'
import Footer from 'components/Footer'
import JsonSchema from 'components/JsonSchema'

import client from 'graphql/client'
import GET_LANDING_PAGE from 'graphql/queries/getLandingPage'
import { LandingPageProps } from 'types/api'

const Index = ({
  logo,
  header,
  sectionAboutProject,
  sectionTech,
  sectionConcepts,
  sectionModules,
  sectionAgenda,
  pricingBox,
  sectionsAuthors,
  sectionReviews,
  sectionFaq,
  footer
}: LandingPageProps) => (
  <>
    <SectionHero logo={logo} header={header} />
    <SectionAboutProject sectionAboutProject={sectionAboutProject} />
    <SectionTech sectionTech={sectionTech} />
    <SectionConcepts sectionConcepts={sectionConcepts} />
    <SectionModules sectionModules={sectionModules} />
    <SectionAgenda sectionAgenda={sectionAgenda} />
    <PricingBox pricingBox={pricingBox} />
    <SectionAuthors sectionsAuthors={sectionsAuthors} />
    <SectionReviews sectionReviews={sectionReviews} />
    <SectionFaq sectionFaq={sectionFaq} />
    <Footer footer={footer} />
    <JsonSchema />
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const { landingPage } = await client.request<{
    landingPage: LandingPageProps
  }>(GET_LANDING_PAGE)

  return {
    props: {
      logo: landingPage.logo,
      header: landingPage.header,
      sectionAboutProject: landingPage.sectionAboutProject,
      sectionTech: landingPage.sectionTech,
      sectionConcepts: landingPage.sectionConcepts,
      sectionModules: landingPage.sectionModules,
      sectionAgenda: landingPage.sectionAgenda,
      pricingBox: landingPage.pricingBox,
      sectionsAuthors: landingPage.sectionsAuthors,
      sectionReviews: landingPage.sectionReviews,
      sectionFaq: landingPage.sectionFaq,
      footer: landingPage.footer
    }
  }
}

export default Index
