
import FooterImg from './FooterImg.jsx'
import MainSectionInfo from './MainSectionInfo.jsx'


const styleMainDiv = {
  display: "flex",
  alignItems: "center",
  backgroundImage: "url('./assets/discord-background.png')" 
}

function MainSection(){
  return (
    <div style={styleMainDiv}>
      <MainSectionInfo />
      <FooterImg />
    </div>
  )
}
export default MainSection