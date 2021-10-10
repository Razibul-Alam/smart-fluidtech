import React from 'react';
import { useParams } from 'react-router';
import useBannerProduct from '../../Custom-Hooks/useBannerProduct';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const SingleProduct = () => {
    const[product]=useBannerProduct()
    const{id}=useParams()
    const singleItem=product?.find(item=>item.category==id)
    return (
        <>
              <div className='d-flex justify-content-center text-center row mt-5 mx-2'>
                <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            Smart
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Smart Fluid tech"
        subheader={new Date().toLocaleDateString()}
      />
      <CardMedia
        component="img"
        height="194"
        image={singleItem?.imageUrl}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h5" gutterBottom color="text.secondary">
          {singleItem?.category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      </CardActions>
    </Card>
    </div>
               
</>
    );
};

    
    


export default SingleProduct;