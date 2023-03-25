import { Container, FilterContainer, FilterInput, FilterLabel } from "./search-filed-container.styles"
const SearchFiled = () => {
    const arrows = ["&#8593", "&#8595;"]
    return (
        <Container>
            <FilterContainer>
                <FilterLabel htmlFor={"filter-name"}>name</FilterLabel>
                <FilterInput id="filter-name" />
            </FilterContainer>
            <FilterContainer>
                <FilterLabel >urgency</FilterLabel>
            </FilterContainer>
            <FilterContainer>
                <FilterLabel>date</FilterLabel>
            </FilterContainer>


        </Container>
    )
}
export default SearchFiled;