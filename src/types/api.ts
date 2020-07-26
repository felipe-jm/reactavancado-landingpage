export type Media = {
  alternativeText: string
  url: string
}

export type Button = {
  label: string
  url: string
}

export type LogoProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: Button
  image: Media
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  media: Media
}

export type TechIcon = {
  title: string
  icon: Media
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type Concept = {
  id: number
  title: string
}

export type SectionConceptsProps = {
  title: string
  concepts: Concept[]
}

export type Module = {
  title: string
  subtitle: string
  description: string
}

export type SectionModulesProps = {
  title: string
  modules: Module[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  discountPrice: number
  priceInstallment: number
  numberInstallments: number
  benefits: string
  button: Button
}

export type SocialLink = {
  title: string
  url: string
}

export type Author = {
  name: string
  role: string
  description: string
  socialLinks: SocialLink[]
  photo: Media
}

export type SectionAuthorsProps = {
  title: string
  authors: Author[]
}

export type Review = {
  name: string
  text: string
  photo: Media
}

export type SectionReviewsProps = {
  title: string
  reviews: Review[]
}

export type Question = {
  question: string
  answer: string
}

export type SectionFaqProps = {
  title: string
  questions: Question[]
}

export type FooterProps = {
  text: string
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionsAuthors: SectionAuthorsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
  footer: FooterProps
}
