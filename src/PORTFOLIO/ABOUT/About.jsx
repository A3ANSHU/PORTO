import { Grid, List, ListItem, ListItemIcon, ListItemText, Paper, Stack, Typography, useMediaQuery, useTheme } from "@mui/material"

import MaleIcon from '@mui/icons-material/Male';
import CakeIcon from '@mui/icons-material/Cake';
import BoyRoundedIcon from '@mui/icons-material/BoyRounded';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';

const About =()=>{
    const theme = useTheme();
    const isSmallerScreen = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <div id="ABOUT" style={{minHeight:'100vh',backgroundColor:'white'}}>
            <Stack spacing={2} sx={{pl:5,pr:5,pt:1.5}}>
            <Stack>
                <Typography variant="h4">ABOUT</Typography>
                <Typography variant="h6">Hello everyone !</Typography>
            </Stack>
            <Grid container sx={{gap:isSmallerScreen?1.5:5}}>
                <Paper elevation={12} sx={{ display: 'flex', borderRadius: 5, width: isSmallerScreen? '100%':'60vh', height: isSmallerScreen? '':'60vh' , aspectRatio:'1:1' }}>
                    <img 
                        style={{
                            height: '100%',
                            width: '100%',
                            objectFit: 'cover',
                            filter: 'drop-shadow(0 4px 10px 0 rgba(0,0,0,.5))',
                            borderRadius: 'inherit' // Ensure the image matches the Paper's border-radius
                        }} 
                        src="https://cdn.hero.page/pfp/6eeda429-c511-47a5-9347-e39537cbcf80-anime-boy-in-moonlight-4k-anime-boy-profile-picture-4.png" 
                        alt="dp" 
                    />
                </Paper>
                <Stack>
                    <Stack>
                        <Typography variant="h4">ABHINANDAN AMBEKAR</Typography>
                        <Typography variant="h6">Developer</Typography>
                    </Stack>
                    <Grid container>
                        <Grid item>
                        <List 
                        sx={{
                            '& .MuiListItemIcon-root':{
                                minWidth:'',pr:2
                            },
                            '& .MuiListItem-root':{
                                pl:0
                            }
                        }}>
                            <ListItem>
                                <ListItemIcon sx={{color:'blue'}}>
                                    <MaleIcon/>
                                </ListItemIcon>
                                <ListItemText>
                                    <b>Gender : </b>
                                    Male
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon sx={{color:'skyblue'}}>
                                    <CakeIcon/>
                                </ListItemIcon>
                                <ListItemText>
                                    <b>Date of Birth : </b>
                                    10 April, 2003
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon sx={{color:'black'}}>
                                    <BoyRoundedIcon/>
                                </ListItemIcon>
                                <ListItemText>
                                    <b>Marital status : </b>
                                    Single
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon sx={{color:'green'}}>
                                    <PublicRoundedIcon/>
                                </ListItemIcon>
                                <ListItemText>
                                    <b>Nationality : </b>
                                    Indian
                                </ListItemText>
                            </ListItem>
                        </List>
                        </Grid>
                        
                        <Grid item>
                        <List 
                        sx={{
                            '& .MuiListItemIcon-root':{
                                minWidth:'',pr:2
                            },
                            '& .MuiListItem-root':{
                                pl:0
                            }
                        }}>
                            <ListItem>
                                <ListItemIcon sx={{color:'black'}}>
                                    <SchoolRoundedIcon/>
                                </ListItemIcon>
                                <ListItemText>
                                    <b>Degree : </b>
                                    Engineering
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon sx={{color:'lightblue'}}>
                                    <EmailRoundedIcon/>
                                </ListItemIcon>
                                <ListItemText>
                                    <b>Email : </b>
                                    abhinandanambekar@gmail.com
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon sx={{color:'black'}}>
                                    <CallRoundedIcon/>
                                </ListItemIcon>
                                <ListItemText>
                                    <b>Mobile no : </b>
                                    +91 98501 08383
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon sx={{color:'red'}}>
                                    <LocationOnRoundedIcon/>
                                </ListItemIcon>
                                <ListItemText>
                                    <b>City : </b>
                                    Pune
                                </ListItemText>
                            </ListItem>
                        </List>
                        </Grid>
                        
                    </Grid>
                </Stack>
            </Grid>
            <Typography textAlign={'justify'}>"When I got enough confidence, 
                    the stage was gone... 
                    When I was sure of Losing,
                    I won... 
                    When I needed People the most, 
                    they Left me... 
                    When I learnt to dry my Tears, 
                    I found a shoulder to cry on... 
                    When I mastered the Skill of Hating, Someone started Loving me from the core of the Heart... 
                    And, while waiting for Light for Hours when I fell asleep, 
                    the Sun came out... 
                    That's LIFE!! 
                    No matter what you Plan, you never know what Life has Planned for you... 
                    Success introduces you to the World... 
                    But Failure introduces the World to you... 
                    Always be Happy!! Often when we lose Hope and think this is the end...
                    God smiles from above and says, "Relax Sweetheart; It's just a Bend, not the End..!"
            </Typography>
            {/* </Paper> */}
            </Stack>
        </div>
    )
}
export default About