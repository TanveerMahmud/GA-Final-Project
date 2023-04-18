import {
  Typography,
  ThemeProvider,
  CssBaseline,
  createTheme,
  Card,
  CardContent,
} from '@mui/material'

const About = () => {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  })
  return (
    <ThemeProvider theme={darkTheme}>
      {/* ******for Dark Theme****** */}
      <CssBaseline />

      <Card style={{ maxWidth: 450, padding: '20px 5px', margin: '0 auto' }}>
        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>
            This is my first attempt on a space informations site. I used two
            NASA APIs - APOD: Astronomy Picture of the Day and NASA Image and
            Video Library. The homepage contains the APOD and some information
            about the picture. There is also a search option where the user can
            search about their interests about space, and more information
            including a picture are shown when the user clicks on a searched
            item. Finally, there is a contact form to let us know your comments,
            suggestions and ideas. In future. I do plan to enhance the user
            experience by adding more functionality.
          </Typography>
        </CardContent>
      </Card>
    </ThemeProvider>
  )
}
export default About
