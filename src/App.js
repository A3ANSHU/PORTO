import './App.css';
// import video from './ASSETS/bgv.mp4'
import video from './ASSETS/coding-desk-preview.mp4'
import LineLoader from './PORTFOLIO/LineLoder';


import SideNav from './PORTFOLIO/SideNav';
function App() {
  return (
    <div className="App">
      {/* <LineLoader/> */}
      <video style={{objectFit:'cover',filter: 'blur(1px)',height:'100vh',width:'100%',position:'fixed',bottom:0,zIndex:-1}} autoPlay loop muted plays-inline="true" src={video}></video>
      <SideNav/>
    </div>
  );
}

export default App;
