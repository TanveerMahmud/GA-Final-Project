import {
  Button,
  Typography,
  ThemeProvider,
  CssBaseline,
  createTheme,
  Card,
  CardContent,
} from '@mui/material'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
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
          <Typography variant='h5' component='p' textAlign='center' mb='2rem'>
            Sorry, page not found!
          </Typography>

          <Button variant='contained' color='primary' fullWidth>
            <Link
              to='/'
              style={{
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Back to Homepage
            </Link>
          </Button>
        </CardContent>
      </Card>
    </ThemeProvider>
  )
}
export default PageNotFound
