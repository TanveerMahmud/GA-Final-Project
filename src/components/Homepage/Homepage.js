import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Container,
  IconButton,
  Typography,
} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { useEffect, useState } from 'react'

const NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY

const Homepage = () => {
  const [apod, setApod] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isLearnMore, setIsLearnMore] = useState(false)
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

  console.log(apod)

  const { title, url, explanation } = apod
  // ---------------change url to hdurl for high def photos

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  })

  const handleIsLearnMore = () => setIsLearnMore(!isLearnMore)

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Box
          display='flex'
          justifyContent='center'
          height='100vh'
          alignItems='center'
        >
          {/* -------------not able to change the width of the card using Box or Container */}
          <Card sx={{ maxWidth: '1000' }}>
            <CardHeader
              title={title}
              subheader={new Date().toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
              sx={{ textAlign: 'center' }}
            />
            <CardMedia component='img' height='340' image={url} alt={title} />
            <CardActions disableSpacing>
              <IconButton aria-label='add to favorites'>
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label='share'>
                <ShareIcon />
              </IconButton>
              <Button
                size='small'
                onClick={handleIsLearnMore}
                sx={{ ml: 'auto', color: 'text.primary' }}
              >
                Learn More
              </Button>
            </CardActions>
            <Collapse in={isLearnMore} timeout='auto' unmountOnExit>
              <CardContent>
                <Typography paragraphy>{explanation}</Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Box>
      </ThemeProvider>
    </>
  )
}
export default Homepage
