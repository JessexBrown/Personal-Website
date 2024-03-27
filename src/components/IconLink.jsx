import "../components-css/IconLink.css"


function IconLink(props) {


    return (
        <div className="icon-link-container">
            <a href={props.aLink}>
                <img src={props.imgSrc} alt={props.imgAlt}></img>
            </a>
        </div>
    );
}

export default IconLink;