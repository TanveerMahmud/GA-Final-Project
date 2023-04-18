import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Container,
  Typography,
} from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { useEffect, useState } from 'react'

const NASA_API_KEY = process.env.REACT_APP_API_KEY

const Homepage = () => {
  const [apod, setApod] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isLearnMore, setIsLearnMore] = useState(false)

  // NASA Image and Video Library Api (no API key required)

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
    return (
      <Typography variant='h5' component='p' textAlign='center'>
        Loading...
      </Typography>
    )
  }

  const { title, hdurl, explanation } = apod
  // ---------------hdurl = high def picture, url = standard def picture

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  })

  const handleIsLearnMore = () => setIsLearnMore(!isLearnMore)

  return (
    <ThemeProvider theme={darkTheme}>
      {/* ******for Dark Theme****** */}
      <CssBaseline />

      {/* ******Card - Astronomy Image of the Day****** */}
      <Container
        sx={{
          mb: '1rem',
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
          <CardMedia component='img' image={hdurl} alt={title} />
          <CardContent>
            <Typography
              variant='h5'
              component='div'
              textAlign='center'
              color='text.secondary'
            >
              {title}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'center' }}>
            <Button
              size='large'
              onClick={handleIsLearnMore}
              sx={{ ml: '0.2rem' }}
            >
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
  )
}
export default Homepage
