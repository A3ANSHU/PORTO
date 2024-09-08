import { Box, List, ListItem,Button, Paper, Stack, TextField, Typography, Divider, Grid, useMediaQuery, useTheme, Alert } from "@mui/material"

import * as React from 'react';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import emailjs from "emailjs-com";

import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';

const About =()=>{
  const theme = useTheme();
  const isSmallerScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [sendMail , setSendMail] = React.useState({
    type: '',
    message:''
  })

  const [errors, setErrors] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const validate = () => {
    let tempErrors = {};

    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required';
    }

    if (!formData.email) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is not valid';
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
    }

    setErrors(tempErrors);

    // Return whether there are any errors
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id.toLowerCase()]: value
    });
  };

  const sendEmail = (e) => {
    if (validate()) {
      e.preventDefault();
      emailjs
      .send(
        "service_41llyle",        // Replace with your EmailJS service ID
        "template_q5l5jcx",       // Replace with your EmailJS template ID
        {
          from: formData.email,
          name: formData.name ,
          subject: formData.subject,
          message: formData.message,
        },
        "NmFW7n0vynlPzAFlH"       // Replace with your EmailJS user ID
      )
      .then(
        () => {
          setSendMail({
            type: 'success',
            message:"Email sent successfully!"
          })
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          })
          setTimeout(() => {
            setSendMail({type: '',message:''})
          }, 5000);
        },
        (error) => {
          setSendMail({
            type: 'error',
            message: `Error in sending email : ${error.text}`
          })
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          })
          setTimeout(() => {
            setSendMail({type: '',message:''})
          }, 5000);
        }
      );
    }else {
      setTimeout(() => {
        setErrors({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 5000);
    }
  };

    return (
        <div id="CONTACT" style={{minHeight:'100vh', backgroundColor:'white',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
            <Stack spacing={2} sx={{pl:5,pr:5,pt:1.5}}>
            <Stack>
                <Typography variant="h4">CONTACT</Typography>
                <Typography variant="h6">I'll be available here</Typography>
            </Stack>
            <Grid container>
              <Grid item xs={12} md={5.9}>
                <Paper elevation={12} >
                    <Box sx={{p:2}}>
                    <FolderList/>
                    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7580.56462568697!2d76.041022!3d18.196946!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDExJzQ3LjIiTiA3NsKwMDInMzEuNSJF!5e0!3m2!1sen!2sin!4v1690657171898!5m2!1sen!2sin" width="100%" height="250px" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </Box>
                </Paper>
              </Grid>
              <Grid item xs={0.2} ><Box sx={{height:15}}></Box></Grid>
              <Grid item xs={12} md={5.9}>
                <Paper elevation={12} sx={{height:'100%'}}>
                    <Stack spacing={2} sx={{p:2}}>
                      <Stack spacing={2} direction={isSmallerScreen?'column':'row'} >
                      <TextField
                        id="Name"
                        label="Name"
                        variant="outlined"
                        fullWidth
                        value={formData.name}
                        onChange={handleChange}
                        error={!!errors.name}
                        helperText={errors.name}
                      />
                      <TextField
                        id="Email"
                        label="Email"
                        variant="outlined"
                        fullWidth
                        value={formData.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                      />
                      </Stack>
                      <TextField
                        id="Subject"
                        label="Subject"
                        variant="outlined"
                        fullWidth
                        value={formData.subject}
                        onChange={handleChange}
                        error={!!errors.subject}
                        helperText={errors.subject}
                      />
                      <TextField
                        id="Message"
                        label="Message"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        error={!!errors.message}
                        helperText={errors.message}
                      />
                      <Button variant="contained" fullWidth onClick={sendEmail}>Submit</Button>
                      {sendMail.type && sendMail.message &&
                        <Alert onClose={() => {setSendMail({type: '',message:''})}} severity={sendMail.type}>
                          {sendMail.message}
                        </Alert>
                      }
                      
                    </Stack>
                </Paper>
              </Grid>
                
            </Grid>
            </Stack>
            <Divider variant="middle" flexItem  sx={{backgroundColor:'white'}}/>
            <Stack sx={{pl:5,pr:5,pt:1.5,pb:1.5}}>
              <Paper elevation={12} sx={{width:'100%',textAlign:'center',pb:1}}>
              
              <Stack direction='row' sx={{m:2}}>
                <Box  sx={{display:'flex',flexDirection:'column',justifyContent:'center',width: isSmallerScreen?'':'100%'}}><Divider variant="middle" flexItem  sx={{backgroundColor:'white'}}/></Box>
                  <Grid container sx={{display:'flex', alignItems:'center' , justifyContent:'space-between'}}>
                  <a href="https://twitter.com/ambekaranshu" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="me" height="30" width="40" /></a>
                  <a href="https://linkedin.com/in/abhinandan-ambekar" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="me" height="30" width="40" /></a>
                  <a href="https://fb.com/abhinandan%20ambekar" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg" alt="me" height="30" width="40" /></a>
                  <a href="https://instagram.com/abhinandan_ambekar" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="me" height="30" width="40" /></a>
                  <a href="https://www.youtube.com/c/abhinandan%20ambekar" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/youtube.svg" alt="me" height="30" width="40" /></a>
                  <a href="https://leetcode.com/abhinandan_ambekar" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg" alt="me" height="30" width="40" /></a>
                  </Grid>
                <Box  sx={{display:'flex',flexDirection:'column',justifyContent:'center',width:isSmallerScreen?'':'100%'}}><Divider variant="middle" flexItem  sx={{backgroundColor:'white'}}/></Box>
              </Stack>


              <Typography variant='h6'>ABHINANDAN AMBEKAR</Typography>
              <Typography variant='subtitle2'>A template by <span style={{color:'orange'}}>ABHINANDAN AMBEKAR</span></Typography>
              </Paper>
            </Stack>
        </div>
    )
}



function FolderList() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',pt:0}}>
      <ListItem sx={{pl:0,pr:0,pt:0}}>
        <ListItemAvatar>
          <Avatar>
            <LocationOnRoundedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Location" secondary="new sangavi, pimpari chinchwad(pune), 411027" />
      </ListItem>
      <ListItem sx={{pl:0,pr:0}}>
        <ListItemAvatar>
          <Avatar>
            <EmailRoundedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Email" secondary="abhinandanambekar@gmail.com" />
      </ListItem>
      <ListItem sx={{pl:0,pr:0}}>
        <ListItemAvatar>
          <Avatar>
            <PhoneRoundedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Call" secondary="+91 98501 08383" />
      </ListItem>
    </List>
  );
}

export default About