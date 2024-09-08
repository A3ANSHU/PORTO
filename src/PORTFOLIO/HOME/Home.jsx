import { useTheme } from '@mui/material/styles';
import { Stack, Typography, useMediaQuery } from "@mui/material"
import { useEffect, useMemo, useState } from "react";

const TypingEffect = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
  
    const texts = useMemo(() => ["Developer", "Artist", "Tech Tactician"], []);

    useEffect(() => {
      let currentText = texts[currentIndex];
      let charIndex = 0;
  
      const typingInterval = setInterval(() => {
        if (charIndex <= currentText.length) {
          setDisplayedText(currentText.substring(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            setCurrentIndex((currentIndex + 1) % texts.length);
          }, 1500); // Delay before displaying next text
        }
      }, 100);
  
      return () => clearInterval(typingInterval);
    }, [currentIndex , texts]);
   
    return  <span style={{color:'orange',textShadow:"3px 3px 3px #000000", borderRight:'3px solid white', paddingRight:"10px"}}>{displayedText}</span>;
  };
  

const Home =()=>{
  const theme = useTheme();
  const isSmallerScreen = useMediaQuery(theme.breakpoints.down('md'));
    return (
      <div id="HOME">
        <Stack justifyContent="center" alignItems="center" sx={{height:'100vh'}}>
            <Stack sx={{p:5}}>
                <Typography 
                variant={!isSmallerScreen ? "h1" : "h4"}
                sx={{
                    wordSpacing:10,
                    letterSpacing:8,
                    fontWeight:'1000',
                    color:"white",
                    textShadow:"10px 5px 10px #100000",
                    pointerEvents:"none",
                }}
                >ABHINANDAN AMBEKAR</Typography>
                <Typography variant={!isSmallerScreen ? "h3":''} sx={{color:'white'}}>
                    I am a <TypingEffect/>
                </Typography>
            </Stack>
        </Stack>
      </div>
    )
}
export default Home