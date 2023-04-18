import { Link, useParams } from 'react-router-dom'

import { ThemeProvider } from '@emotion/react'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  CssBaseline,
  Typography,
  createTheme,
} from '@mui/material'
import { useEffect, useState } from 'react'

const Details = () => {
  let params = useParams()
  const [detail, setDetail] = useState()
  const [isSearching, setIsSearching] = useState(true)

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  })

  const url = `https://images-api.nasa.gov/search?q=${params.nasaID}`

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDetail(data.collection.items)
        setIsSearching(false)
      })
      .catch((error) => console.log(error))
  }, [url])

  useEffect(() => {
    return () => {
      sessionStorage.removeItem('searchInput')
      sessionStorage.removeItem('searchedItems')
    }
  }, [])

  if (isSearching) {
    return <Typography>loading...</Typography>
  }

  const { title, description } = detail[0].data[0]
  const { href } = detail[0].links[0]

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        {/* ******for Dark Theme****** */}
        <CssBaseline />

        {/* ******Card - Clicked item details****** */}
        <Container
          sx={{
            mb: '1rem',
          }}
        >
          <Card>
            <CardHeader title={title} sx={{ textAlign: 'center' }} />
            <CardMedia component='img' image={href} alt={title} />
            <CardContent>
              <Typography>{description}</Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button size='large'>
                <Link
                  to='/search'
                  style={{
                    color: 'inherit',
                    textDecoration: 'none',
                    padding: '0 2rem',
                  }}
                >
                  Close
                </Link>
              </Button>
            </CardActions>
          </Card>
        </Container>
      </ThemeProvider>
    </>
  )
}
export default Details
