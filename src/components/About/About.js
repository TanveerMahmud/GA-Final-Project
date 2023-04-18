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

      <Card style={{ maxWidth: 800, padding: '20px 5px', margin: '0 auto' }}>
        <CardContent>
          <Typography color='textSecondary' component='p'>
            This is my first attempt at creating a space information site. I
            used two NASA APIs, APOD: Astronomy Picture of the Day, and NASA
            Image and Video Library. The homepage displays the APOD, along with
            some information about the picture. Additionally, there is a search
            option that allows users to search for their interests in space, and
            more information, including a picture, is displayed when the user
            clicks on a searched item. Finally, there is a contact form that you
            can use to share your comments, suggestions, and ideas with us. In
            the future, I plan to enhance the user experience by adding more
            functionality.
          </Typography>
        </CardContent>
      </Card>
    </ThemeProvider>
  )
}
export default About
