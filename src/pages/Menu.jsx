import React from 'react'
import Layout from '../components/Layout/Layout'
import {MenuList} from '../data/DataFile'
import {Box,Card,CardActionArea,CardMedia,CardContent,Typography} from "@mui/material"
const Menu = () => {
  return (
    <Layout>
     <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
{
  MenuList.map(menu =>(
<Card sx={{maxWidth:'320px', m:2}}>
<CardActionArea>
  <CardMedia sx={{minHeight:'400px'}} component={'img'} src={menu.image} alt={menu.name}/>
  <CardContent>
    <Typography varient='h5' gutterBottom component={'div'}>
{menu.name}
    </Typography>
    <Typography variant='body2'>
      {menu.description}
    </Typography>
  </CardContent>
</CardActionArea>
</Card>
  ))
}
     </Box>
    </Layout>
  )
}

export default Menu
