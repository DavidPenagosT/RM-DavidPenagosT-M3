import { useState } from "react"
import { ContainerSearchBar, Container, InputSearch, SearchButton } from "./SearchBar.js"

const SearchBar = ({onSearch}) => {
    const [state, setState] = useState('')

    const handleChange = (event) => {
        const { value } = event.target

        setState(value)
    }

    const handleClick = () => {
        onSearch(state)
        
        setState('')
    }

  

    return(
        <ContainerSearchBar>
            <Container>
                <InputSearch value={state} placeholder="Search..." onChange={handleChange}/>
                <SearchButton onClick={handleClick}>BUSCAR</SearchButton>
            </Container>
        </ContainerSearchBar>
    )
}

export default SearchBar
