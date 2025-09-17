import React from 'react'
import Layout from '../components/Layout/Layout'
import {Typography,Box} from '@mui/material'
const About = () => {
  return (
    <Layout>
  <Box sx={{my:2,textAlign:'center',padding:2}}>
    <Typography variant="h3" color="initial">
    Welcome To My Resturent
    </Typography>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam omnis totam minima quaerat sint accusantium, itaque molestiae, quibusdam quisquam dolorem voluptas! Quia a exercitationem eum quae voluptatem, quod consequuntur est illo sapiente optio? Deserunt facilis quod non autem perspiciatis soluta delectus ratione! Ratione reiciendis sunt impedit fugiat laboriosam architecto quisquam.</p>
    <br />
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet cupiditate fugiat laborum fuga architecto dolor unde dolorum quam aliquid itaque! Ad eveniet, voluptas aliquam nemo itaque ex eum alias quod.</p>
  </Box>
    </Layout>
  )
}

export default About
