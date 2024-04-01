import { useNavigate } from 'react-router-dom';
import '../components-css/MainPageNavbar.css'


function MainPageNavbar() {

    // const navigate = useNavigate()


    const navigate = useNavigate();
    const handleClick = () => navigate('/resume'); 

    return (
        <div className="navbar">
            <div className="logo">
                <img src="/circle-j.svg" alt="site logo"></img>
                <img src="/circle-e.svg" alt="site logo"></img>
                <img src="/circle-s.svg" alt="site logo"></img>
                <img src="/circle-s.svg" alt="site logo"></img>
                <img src="/circle-e.svg" alt="site logo"></img>

            </div>
            
            <div className='nav-buttons'>
                <button className="nav-button" onClick={handleClick}> Resume </button>
                {/* <button className="nav-button"> About </button> */}
            </div>

        </div>

    );
}   



export default MainPageNavbar;