import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import RadarRoundedIcon from '@mui/icons-material/RadarRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';


import Home from './HOME/Home'
import About from './ABOUT/About';
import Contact from './CONTACT/Contact'
import Skills from './SKILLS/Skills';
import Education from './EDUCATION/Education';

import { Link } from 'react-scroll';
import Drawer from '@mui/material/Drawer';
import { useMediaQuery } from '@mui/material';

const drawerWidth = 250;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));



const StyledDrawer = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {

  return (
    <Box sx={{ display: 'flex' }}>
      <CustomDrawer/>
      <Box  overflow="hidden" component="main" sx={{ flexGrow: 1, p: 0 }}>
        <Home/>
        <About/>
        <Skills/>
        <Education/>
        <Contact/>
      </Box>
    </Box>
  );
}

function ListItems({open , handleDrawerClose}){
  return(
    [{icon:<HomeRoundedIcon/>,name:'HOME'},{icon:<PersonRoundedIcon/>,name:'ABOUT'},{icon:<RadarRoundedIcon/>,name:'SKILLS'},{icon:<SchoolRoundedIcon/>,name:"EDUCATION"},{icon:<MailRoundedIcon/>,name:'CONTACT'} ].map((data, index) => (
      <ListItem key={data.name} disablePadding sx={{ display: 'block' }}>
        <Link to={data.name} spy={true} smooth={true} offset={0} duration={500} >
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
          }}
          onClick={handleDrawerClose}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
            {data.icon}
          </ListItemIcon>
          <ListItemText primary={data.name} sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
        </Link>
      </ListItem>
    ))
  )
}

function CustomDrawer() {
  const theme = useTheme();
  const isSmallerScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawer = () => {
    setOpen(!open);
  };
  return (
    <>
      {isSmallerScreen ? (
      <>
      <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawer}
            edge="start"
            sx={{
              backgroundColor:'black',
              padding:0.5,
              position:'fixed',
              right:0,
              marginRight: 3,
              marginTop: 2,
              zIndex:9999,
              '&:hover':{
                backgroundColor:'black'
              }
            }}
          >
            {open?<CloseRoundedIcon sx={{color:'white' , fontSize:25}} />:<MenuRoundedIcon sx={{color:'white' , fontSize:25}} />}
          </IconButton>

        <Drawer onClose={handleDrawerClose} open={open}>
          <DrawerHeader sx={{p:0 ,}}>
            <ListItem disablePadding sx={{
                  minHeight: 48,
                  px: 2.5,
                  pl:1.5,
                  gap:open?2:''
                }}>
                <Avatar alt="Remy Sharp" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAaVBMVEX///8AAAD7+/vz8/P39/fLy8vg4ODv7+/ExMR0dHTa2trm5uahoaEWFhaVlZWzs7MtLS2KiopBQUGEhIRhYWFISEg3NzdPT09nZ2e+vr6bm5tvb29bW1vS0tJWVlaqqqogICAODg58fHxXTvcSAAADIklEQVRoge2Y6dKqMAyGbdn3fRNk8f4v8kMUmgJCC3XOzBnyS2t5qGnyJu3tdtlll/1HJks/Q2PPiO0fsaUE9fYbeuG82Mg3f8D23myEGvFspfuwUSyLZqspmswSDY8JW7hfGsBGmVi26kN4K5SNn4gyXSS8oNnIFQlPZ3BDIDuYsVGqCmPTuzmYIgxuLNjixOuxZIuL9HwFjgSxPYAk73kIYUs1gJuj6gqKdLhwV8rGj5UINnYI27dIxKciZNcGCw/A1644z4Ylou1r56Mdv93Pw12w8LL/jqeXxacbGA2G9qAn1eSX006Hif9WQrIHZzXdhIr1hqmzlx03KLU5HobkKTSdkwvvANx7j+FyGjnXeFFSOw6SNuBUMKqQPbUqpPH6OOqYwYrvT4FnJeNYesIvJBkRJYLEWScUgFo4WOSdDkYsS/y5akGPx+AHUvWc6FnmVVXXcRnwtQOw8UTwUYxWrPV5ShPl8ZoMN8G8pKaGXegPiyd0qD5o2DmsNXna0uDMNTWJOyJNUIBQJd8s3Q1XvHEsXqiFu56RrJDRUJv4TV5nDdZV5E3+EVF3v6LTuw4b6gN+Uect82ix8jrIgca03mUt7L5KDgNdVQq9x4M+idsv8rJl7tMxcKMYObaJqe3m1l17ie4yow/x8FM3gTTUnMKClx5v/T7uE286OZO/1nEeA7wFG/XottHIFOAXvlCX1vrxNqKSXAE/ad9Aa7Z2kAhnmqcCLeA6q8cLdOcutAlUkpCDbS3Y7UpvBa8CPHb44syZrdVhCUwwmDV3kfnGeiDDwwxzEWpm7OeXWyF4G/BkZEsz4Q6+/WUL1iTGaFRm7K8TccS/dDoOnxtbBfOY7TKQag+3MxtnYGbEAqeEPN+eS1Urhp5IqyB7Z5uoOhtvz30ZlJVsNwSope8XU1gl9veIuuOpd9dCZjssNYAS/l1dJ1PZLiWoC8E9ESAzmdg3qQTwZKcRmFKatdfBMHbL7cvpcf+3MnNmOsil7VTS3uWTXaBfppRh96EbmyGj2VVicFSWz1NFc+8PMHkZ7cSYpB07XWK5t0NPXnbZZf/G/gBH5SEJNbGJEAAAAABJRU5ErkJggg==" />
                <ListItemText primary={"A3ANSHU"} secondary='Developer' sx={{ opacity: open ? 1 : 0 }} />
            </ListItem>
            </DrawerHeader>
            <Divider />
            <List>
              <ListItems open={open} handleDrawerClose={handleDrawerClose}/>
            </List>
            <Divider />
        </Drawer></>
      ) : (
        // Your JSX for larger screens here
        <StyledDrawer variant='permanent' open={open}>
        <DrawerHeader sx={{p:0 ,}}>
            <ListItem disablePadding sx={{
                  minHeight: 48,
                  px: 2.5,
                  pl:1.5,
                  gap:open?2:''
                }}>
                <Avatar alt="Remy Sharp" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAaVBMVEX///8AAAD7+/vz8/P39/fLy8vg4ODv7+/ExMR0dHTa2trm5uahoaEWFhaVlZWzs7MtLS2KiopBQUGEhIRhYWFISEg3NzdPT09nZ2e+vr6bm5tvb29bW1vS0tJWVlaqqqogICAODg58fHxXTvcSAAADIklEQVRoge2Y6dKqMAyGbdn3fRNk8f4v8kMUmgJCC3XOzBnyS2t5qGnyJu3tdtlll/1HJks/Q2PPiO0fsaUE9fYbeuG82Mg3f8D23myEGvFspfuwUSyLZqspmswSDY8JW7hfGsBGmVi26kN4K5SNn4gyXSS8oNnIFQlPZ3BDIDuYsVGqCmPTuzmYIgxuLNjixOuxZIuL9HwFjgSxPYAk73kIYUs1gJuj6gqKdLhwV8rGj5UINnYI27dIxKciZNcGCw/A1644z4Ylou1r56Mdv93Pw12w8LL/jqeXxacbGA2G9qAn1eSX006Hif9WQrIHZzXdhIr1hqmzlx03KLU5HobkKTSdkwvvANx7j+FyGjnXeFFSOw6SNuBUMKqQPbUqpPH6OOqYwYrvT4FnJeNYesIvJBkRJYLEWScUgFo4WOSdDkYsS/y5akGPx+AHUvWc6FnmVVXXcRnwtQOw8UTwUYxWrPV5ShPl8ZoMN8G8pKaGXegPiyd0qD5o2DmsNXna0uDMNTWJOyJNUIBQJd8s3Q1XvHEsXqiFu56RrJDRUJv4TV5nDdZV5E3+EVF3v6LTuw4b6gN+Uect82ix8jrIgca03mUt7L5KDgNdVQq9x4M+idsv8rJl7tMxcKMYObaJqe3m1l17ie4yow/x8FM3gTTUnMKClx5v/T7uE286OZO/1nEeA7wFG/XottHIFOAXvlCX1vrxNqKSXAE/ad9Aa7Z2kAhnmqcCLeA6q8cLdOcutAlUkpCDbS3Y7UpvBa8CPHb44syZrdVhCUwwmDV3kfnGeiDDwwxzEWpm7OeXWyF4G/BkZEsz4Q6+/WUL1iTGaFRm7K8TccS/dDoOnxtbBfOY7TKQag+3MxtnYGbEAqeEPN+eS1Urhp5IqyB7Z5uoOhtvz30ZlJVsNwSope8XU1gl9veIuuOpd9dCZjssNYAS/l1dJ1PZLiWoC8E9ESAzmdg3qQTwZKcRmFKatdfBMHbL7cvpcf+3MnNmOsil7VTS3uWTXaBfppRh96EbmyGj2VVicFSWz1NFc+8PMHkZ7cSYpB07XWK5t0NPXnbZZf/G/gBH5SEJNbGJEAAAAABJRU5ErkJggg==" />
                <ListItemText primary={"A3ANSHU"} secondary='Developer' sx={{ opacity: open ? 1 : 0 }} />
            </ListItem>
          

          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerClose}
            edge="start"
            sx={{
              backgroundColor:'white',
              padding:0,
              alignItems:'center',
              position:'fixed',
              marginRight: -1.5,
              display:'none',
              ...(open && { display: '' }),
              '&:hover':{
                backgroundColor:'white'
              }
            }}
          >
            <ArrowCircleLeftRoundedIcon />
          </IconButton>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              backgroundColor:'white',
              padding:0,
              position:'fixed',
              marginRight: -1.5,
              ...(open && { display: 'none' }),
              '&:hover':{
                backgroundColor:'white'
              }
            }}
          >
            <ArrowCircleRightRoundedIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItems open={open}/>
        </List>
        <Divider />
      </StyledDrawer>
      )}
    </>
  );
}