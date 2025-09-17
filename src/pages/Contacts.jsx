import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import { Typography, Box, TextField,
   Button,
   TableContainer,
   Paper,
   Table,
   TableHead,
   TableCell,
   TableRow ,
   TableBody
  } from "@mui/material";

const Contacts = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save to localStorage
    localStorage.setItem("contactForm", JSON.stringify(formData));

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      comment: "",
    });

    alert("Form Submitted !");
  };

  return (
    <Layout>
      <Box sx={{my:5,ml:5,"& h5":{fontWeight:'bold',mb:2}}}>
        <Typography variant="h5">
          Contact My Resturent
        </Typography>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde sequi laudantium hic quis optio pariatur? Autem aliquid nulla exercitationem quod eveniet aliquam reiciendis tenetur, et alias! Ipsam, consequatur enim. Veritatis.</p>
      </Box>
      <Box sx={{m:3,width:'600px',ml:'10',
        "@media (max-width:600px)":{
          width:'300px'
        }
      }}>
        <TableContainer component={Paper}>
          <Table arial-label='contact table'>
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:'black',color:'white'}} align="center">Contact Detail</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
<SupportAgentIcon sx={{pt:1,color:'red'}}/> 042-111 10 50 20 (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                             <TableCell>
<MailIcon sx={{pt:1,color:'skyblue'}}/> bilalalim37@gmail.com 
                </TableCell>
              </TableRow>
                 <TableRow>
                             <TableCell>
<CallIcon sx={{pt:1,color:'green'}}/> +923008080246
                </TableCell>
              </TableRow>

            </TableBody>

          </Table>
        </TableContainer>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 3,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            width: "100%",
            maxWidth: "500px",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <TextField
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="comment"
            name="comment"
            type="comment"
            value={formData.comment}
            onChange={handleChange}
            fullWidth
            required
          />

          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 2, bgcolor: "black", "&:hover": { bgcolor: "goldenrod" } }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Layout>
  );
};

export default Contacts;
