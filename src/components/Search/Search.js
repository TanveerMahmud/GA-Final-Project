import Details from '../Details/Details'
import {
  Card,
  CardMedia,
  Container,
  CssBaseline,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material'
import { useEffect, useState } from 'react'

const Search = () => {
  const [searchInput, setSearchInput] = useState('')
  const [searchedItems, setSearchedItems] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)

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
          setIsSearching(false)
        })
        .catch((error) => console.log(error))
    }
  }, [searchInput])

  if (isSearching) {
    return <Typography>searching...</Typography>
  }

  const handleSearch = (e) => {
    setSearchInput(e.target.value)
    setSelectedItem(null)
  }
  const displayMore = (item) => setSelectedItem(item)

  const displaySearchedItems = searchedItems.map((item, index) => {
    return (
      <Card
        key={item.data[0].nasa_id}
        sx={{ cursor: 'pointer' }}
        onClick={() => displayMore(item)}
      >
        <Typography>
          {index + 1}. {item.data[0].title.slice(0, 50)}
        </Typography>
        <Typography>{item.data[0].description.slice(0, 100)}...</Typography>
        <CardMedia
          component='img'
          image={item.links[0].href}
          alt={item.data[0].title}
          sx={{ maxWidth: '10rem', maxHeight: '10rem' }}
        />
      </Card>
    )
  })

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        {/* ******for Dark Theme****** */}
        <CssBaseline />
        {/* ******Search bar****** */}
        <Container
          sx={{ display: 'flex', justifyContent: 'center', mt: '1rem' }}
        >
          <TextField
            id='outlined-basic'
            label='What do you want to know?'
            variant='outlined'
            size='small'
            sx={{ width: '40rem' }}
            value={searchInput}
            onChange={handleSearch}
          />
        </Container>

        {/* ******Searched Content Display****** */}

        {selectedItem ? (
          <Details item={selectedItem} setSelectedItem={setSelectedItem} />
        ) : (
          <Container>
            {searchInput.length > 0 ? (
              searchedItems.length > 0 ? (
                displaySearchedItems
              ) : (
                <Typography>Not found</Typography>
              )
            ) : null}
          </Container>
        )}
      </ThemeProvider>
    </>
  )
}
export default Search
