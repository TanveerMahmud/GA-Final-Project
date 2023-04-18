import { Card, CardMedia, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const SearchResult = ({ searchedItems }) => {
  const displaySearchedItems = searchedItems.map((item, index) => {
    const { nasa_id, title, description } = item.data[0]

    return (
      <Card
        key={nasa_id}
        sx={{ cursor: 'pointer', mb: '1rem', padding: '1rem' }}
      >
        <Link to={`/detail/${nasa_id}`} style={{ textDecoration: 'none' }}>
          {title ? (
            <Typography color='primary'>
              {index + 1}. {title}
            </Typography>
          ) : (
            ''
          )}
          {description ? (
            <Typography variant='body2' color='text.primary'>
              {description.slice(0, 150)}...
            </Typography>
          ) : (
            ''
          )}

          <CardMedia
            component='img'
            image={item.links[0].href}
            alt={title}
            sx={{ maxWidth: '5rem', maxHeight: '5rem', mt: '0.5rem' }}
          />
        </Link>
      </Card>
    )
  })

  return <>{displaySearchedItems}</>
}
export default SearchResult
