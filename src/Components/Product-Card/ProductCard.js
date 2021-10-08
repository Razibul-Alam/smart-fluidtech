import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Fab } from '@mui/material';
import { Link } from 'react-router-dom';

export default function MediaCard({products}) {
    const{model,imageUrl,category,_id}=products;
  return (
      <div className='col-lg-4 col-md-6'>
    <Card sx={{ maxWidth:500 }}>
      <CardMedia
        component="img"
        height="220"
        image={imageUrl}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {category}
        </Typography>
      </CardContent>
      <CardActions>
      <Link to={`/product/${category}`}><Fab variant="extended" size="medium" color="dark" aria-label="add">
  Details
</Fab></Link>
        <Link to={`/stock/${category}`}><Fab variant="extended" size="medium" color="primary" aria-label="add">
  Check Stock
</Fab></Link>
      </CardActions>
    </Card>
    </div>
  );
}
