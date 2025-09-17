import React from 'react'
import {Box,Typography} from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <>
    <Box sx={{textAlign:'center',bgcolor:'#1A1A19', padding:1,color:'white',alignItems:'center' ,}}>
      <Box sx={{my:3,
      "  & svg":{
        fontSize:'40px',
        cursor:'pointer',
        mr:2,
      },
      "& svg:hover":{
        color:'goldenrod',
        transform:'translateX(5px)',
        transition: 'all 400ms'

      }
      }}>
<InstagramIcon/>
<FacebookIcon/>
<LinkedInIcon/>
<PinterestIcon/>
<YouTubeIcon/>
<XIcon/>

      </Box>
      <Typography variant="h5" color="white" sx={{
      " @media (max-width:600px)":{
        fontSize:'1rem',
      }
      }}>
        All Rights Reserved &copy; coding YT
      </Typography>
    </Box>
    </>
    
  )
}

export default Footer
