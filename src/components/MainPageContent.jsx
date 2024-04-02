import IconLink from "./IconLink";
import "../components-css/MainPageContent.css"


function MainPageContent() {
    const infoLink1 = {aLink:"https://github.com/JessexBrown",imgSrc:"/github.svg",imgAlt:"github logo"}
    const infoLink2 = {aLink:"https://www.linkedin.com/in/jessexbrown/",imgSrc:"/linkedin.svg",imgAlt:"linkedin logo"}




    return(
        <>

            <div className="main-page-content">
                
                <p> Not much here, but feel free to look around!</p>


            
            </div>
            <div className="main-page-icons">
                
                <IconLink {...infoLink1}/>
                <IconLink {...infoLink2}/>
            </div>
        </>

    );


}


export default MainPageContent;