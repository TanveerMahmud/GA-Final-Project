import {
  Container,
  CssBaseline,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material'

import { useEffect, useState } from 'react'
import SearchResult from '../SearchResult/SearchResult'

const Search = () => {
  const [searchInput, setSearchInput] = useState(
    sessionStorage.getItem('searchInput') || ''
  )
  const [searchedItems, setSearchedItems] = useState(
    JSON.parse(sessionStorage.getItem('searchedItems')) || []
  )

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  })

  useEffect(() => {
    if (searchInput) {
      const libraryUrl = `https://images-api.nasa.gov/search?q=${searchInput}&media_type=image`

      fetch(libraryUrl)
        .then((resp) => resp.json())
        .then((data) => {
          setSearchedItems(data.collection.items)
          sessionStorage.setItem('searchInput', searchInput)
          sessionStorage.setItem('searchedItems', JSON.stringify(searchedItems))
        })
        .catch((error) => console.log(error))
    }
  }, [searchInput, searchedItems])

  const handleSearch = (e) => {
    setSearchInput(e.target.value)
  }

  return (
    <ThemeProvider theme={darkTheme}>
      {/* ******for Dark Theme****** */}
      <CssBaseline />
      {/* ******Search bar****** */}
      <Container
        sx={{ display: 'flex', justifyContent: 'center', m: '1rem auto' }}
      >
        <TextField
          id='outlined-basic'
          label='What do you want to know?'
          variant='outlined'
          size='large'
          sx={{ width: '40rem' }}
          value={searchInput}
          onChange={handleSearch}
        />
      </Container>

      {/* ******Searched Content Display****** */}

      <Container>
        {searchInput.length > 0 ? (
          searchedItems.length > 0 ? (
            <SearchResult searchedItems={searchedItems} />
          ) : (
            <Typography color='error' component='p' textAlign='center'>
              Not found
            </Typography>
          )
        ) : null}
      </Container>
    </ThemeProvider>
  )
}
export default Search
