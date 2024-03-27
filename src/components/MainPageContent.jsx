import IconLink from "./IconLink";
import "../components-css/MainPageContent.css"


function MainPageContent() {
    const infoLink1 = {aLink:"https://github.com/JessexBrown",imgSrc:"/src/assets/github.svg",imgAlt:"github logo"}
    const infoLink2 = {aLink:"https://www.linkedin.com/in/jessexbrown/",imgSrc:"/src/assets/linkedin.svg",imgAlt:"linkedin logo"}




    return(
        <>

            <div className="main-paige-content">
                
            </div>
            <div className="main-paige-icons">
                <IconLink {...infoLink1}/>
                <IconLink {...infoLink2}/>
            </div>
        </>

    );


}


export default MainPageContent;