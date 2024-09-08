import { Card, CardContent, CardMedia, Paper, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';


// import bag from '../../ASSETS/school-bag.png'
import bag from '../../ASSETS/school-bag (outline).png'
import college from '../../ASSETS/college.png'
import degree from '../../ASSETS/graduation.png'
import chhsch from '../../ASSETS/2021-08-08.jpg'
import bhsch from '../../ASSETS/hqdefault.jpg'
import zeal from '../../ASSETS/IMG-20200401-WA0018_8.jpg'

const Education = ()=>{
    return(
        <div id="EDUCATION" style={{minHeight:'100vh',backgroundColor:'white'}}>
            <Stack spacing={2} sx={{pl:5,pr:5,pt:1.5}}>
            <Stack>
                <Typography variant="h4">Education</Typography>
                <Typography variant="h6">my qualifications</Typography>
            </Stack>
            <Stack>
                <CustomizedSteppers/>
            </Stack>
            </Stack>
        </div>
    )
}


const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 25,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
      'linear-gradient( 136deg, #ffa200 0%,  50%, #ff0000 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
      'linear-gradient( 136deg, #ffde59 0%, #ffde59 50%, #ff9000 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  border:'2px solid #ff9000',
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    padding:'1px',
    backgroundImage:
      'linear-gradient( 136deg, #ffde59 0%, #ffa200 50%, #ff0000 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.5)',
  }),
  ...(ownerState.completed && {
    backgroundImage: 
      'linear-gradient( 136deg, white 0%, #ffde59 50%, #ffde00 100%)',
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;
  const icons = {
    1: <img  src={bag} alt="bag" height={30} style={{filter:'drop-shadow(4px 3.5px 4px black)'}}/>,
    2: <img  src={college} alt="college" height={30} style={{filter:'drop-shadow(4px 3.5px 4px black)'}}/>,
    3: <img  src={degree} alt="college" height={30} style={{filter:'drop-shadow(4px 3.5px 4px gray)'}}/>,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const steps = [
  {
    img:chhsch,
    education:'State Secondary Certificate (SSC)',
    name:'Chattrapati Shivaji Maharaj High school, Dharashiv, Maharashtra',
    year:'2017 - 2018',
    grade:'87.80 %',
  },
  {
    img:bhsch,
    education:'Higher Secondary Certificate (HSC)',
    name:'Shripatrao Bhosale highschool, Dharashiv, Maharashtra',
    year:'2019 - 2020',
    grade:'66.00 %',
  },
  {
    img:zeal,
    education:'Bachelor of Engineering (BE)',
    name:'Zeal College of Engineering and Research, Narhe, Pune',
    year:'2020 - 2024',
    grade:'8.5 CGPA',
  }
];

function CustomizedSteppers() {
  const theme = useTheme();
  const isSmallerScreen = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Stack sx={{ width: '100%'}} spacing={4}>
      {
        isSmallerScreen ?
      <Stepper orientation="vertical" activeStep={2} sx={{'& .MuiStepConnector-line	':{borderLeft:'none'}}}>
        {steps.map((details, index) => (
          <Step key={index}>
            <StepLabel
              StepIconComponent={ColorlibStepIcon}
            >
            </StepLabel>
            <Paper sx={{transition: 'all 0.5s',height:'fit-cointent','&:hover':{transform: 'scale(1.015)'}}} elevation={10}>
                <Card> 
                  <CardMedia
                      component="img"
                      image={details.img}
                      alt="green iguana"
                      sx={{objectFit:'cover',height:"20vh"}}
                    />
                    <CardContent sx={{pl:5,pr:5, textAlign:'left'}}>
                      <Typography gutterBottom variant="h5" sx={{fontWeight:'900'}} component="div">{details.education}</Typography>
                      <Typography variant="body2"sx={{fontWeight:'700'}} color="text.secondary">{details.name}</Typography>
                      <Stack direction='row' justifyContent='space-between'>
                        <Typography variant="body2" sx={{fontWeight:'700'}} color="text.secondary">{details.year}</Typography>
                        <Typography variant="body2" sx={{fontWeight:'700'}} color="text.secondary" >{details.grade}</Typography>
                      </Stack>
                    </CardContent>
                </Card>
              </Paper>
          </Step>
        ))}
      </Stepper> :
      
      <Stepper alternativeLabel activeStep={2} connector={<ColorlibConnector />}>
        {steps.map((details,index) => (
          <Step key={index}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>
              <Paper sx={{m:2,transition: 'all 0.5s',height:'fit-cointent','&:hover':{transform: 'scale(1.015)'}}} elevation={10}>
                <Card sx={{mb:-2.5}}> 
                  <CardMedia
                      component="img"
                      image={details.img}
                      alt="green iguana"
                      sx={{objectFit:'cover',height:"40vh"}}
                    />
                    <CardContent sx={{pl:5,pr:5, textAlign:'left'}}>
                      <Typography gutterBottom variant="h5" sx={{fontWeight:'900'}} component="div">{details.education}</Typography>
                      <Typography variant="body2"sx={{fontWeight:'700'}} color="text.secondary">{details.name}</Typography>
                      <Stack direction='row' justifyContent='space-between'>
                        <Typography variant="body2" sx={{fontWeight:'700'}} color="text.secondary">{details.year}</Typography>
                        <Typography variant="body2" sx={{fontWeight:'700'}} color="text.secondary" >{details.grade}</Typography>
                      </Stack>
                    </CardContent>
                </Card>
              </Paper>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
            }

    </Stack>
  );
}

export default Education;