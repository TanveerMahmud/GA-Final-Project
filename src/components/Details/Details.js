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

const Details = ({ item, setSelectedItem }) => {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  })
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        {/* ******for Dark Theme****** */}
        <CssBaseline />

        {/* ******Card - Clicked item details****** */}
        <Container
          sx={{
            width: '80%',
          }}
        >
          <Card>
            <CardHeader
              title={item.data[0].title}
              sx={{ textAlign: 'center' }}
            />
            <CardMedia
              component='img'
              image={item.links[0].href}
              alt={item.data[0].title}
            />
            <CardContent>
              <Typography>{item.data[0].description}</Typography>
            </CardContent>
            <CardActions>
              <Button size='small'>Share</Button>
              {/* ---------add functionality to share button */}
              <Button size='small' onClick={() => setSelectedItem(null)}>
                Close
              </Button>
            </CardActions>
          </Card>
        </Container>
      </ThemeProvider>
    </>
  )
}
export default Details
