import styled from "styled-components"
import Search from "./Search"
import SearchResults from "./SearchResults"

const MainSection = () => {
  return (
    <Section>
        <Search />
        <SearchResults />
    </Section>
  )
}

const Section = styled.div`

@media only screen and (max-width: 1199px) and (min-width: 800px) {
    padding: 1rem 6rem
}
`

export default MainSection