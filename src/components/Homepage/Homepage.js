import {
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Container,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { useEffect, useState } from 'react'

const NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY

const Homepage = () => {
  const [apod, setApod] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isLearnMore, setIsLearnMore] = useState(false)

  // NASA Image and Video Library Api (no API key required)

  // if(isSearching) {
  //   return <Typography>Searching...</Typography>
  // }

  // apod = Astronomy Picture of the Day
  const apodUrl = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`

  useEffect(() => {
    fetch(apodUrl)
      .then((resp) => resp.json())
      .then((data) => {
        setApod(data)
        setIsLoading(false)
      })
      .catch((error) => console.log(error))
  }, [apodUrl])

  if (isLoading) {
    return <Typography>Loading...</Typography>
  }
  // -------------need to style the loading

  const { title, url, explanation } = apod
  // ---------------change url to hdurl for high def photos

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  })

  const pages = ['Home', 'Explore', 'About', 'Contact']
  const handleIsLearnMore = () => setIsLearnMore(!isLearnMore)

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        {/* ******for Dark Theme****** */}
        <CssBaseline />
        {/* ******NAVBAR****** */}
        <AppBar position='static'>
          <Container maxWidth='xl'>
            <Toolbar disableGutters>
              <Typography
                variant='h6'
                compoenent='div'
                sx={{ flexGrow: 1, textTransform: 'uppercase' }}
              >
                Space Explorer
              </Typography>
              {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    // onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>
                ))}
              </Box> */}
              <Stack direction='row' spacing={2}>
                {pages.map((page) => (
                  <Button key={page} color='inherit'>
                    {page}
                  </Button>
                ))}
              </Stack>
            </Toolbar>
          </Container>
        </AppBar>

        {/* ******Card - Astronomy Image of the Day****** */}
        <Container
          sx={{
            width: '50%',
          }}
        >
          <Card>
            <CardHeader
              title='Astronomy Picture of the Day'
              subheader={new Date().toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
              sx={{ textAlign: 'center' }}
            />
            <CardMedia component='img' height='400' image={url} alt={title} />
            <CardContent>
              <Typography variant='h5' component='div'>
                {title}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='small'>Share</Button>
              {/* ---------add functionality to share button */}
              <Button size='small' onClick={handleIsLearnMore}>
                Learn More
              </Button>
            </CardActions>
            <Collapse in={isLearnMore} timeout='auto' unmountOnExit>
              <CardContent>
                <Typography>{explanation}</Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Container>
      </ThemeProvider>
    </>
  )
}
export default Homepage
