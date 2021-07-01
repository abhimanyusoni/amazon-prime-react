import Logo from './images/logo.svg';
import './header.css';
import loginImg from './images/login.png';

const Header = () => {
    
    const toggleLoginMenu = () => {
        let menuClick = document.querySelector('.whos_login');
        menuClick.classList.toggle('show');
    }

    window.addEventListener('click', function(e){   
        let menuClick2 = document.getElementById('loginToggler');
        let menuClickParent = document.querySelector('.overlay');
        let removeFrom = document.querySelector('.whos_login');

        if ((e.target == menuClickParent) && (e.target != menuClick2 )){
            removeFrom.classList.remove('show');
        }
    });
    
    
    return(
        <header className="site_header d-flex align-items-center justify-content-between">
            <div className="left_aside d-flex align-items-center">
                <div className="logo_wrapper">
                    <a href="/amazon-prime-react">
                        <img src={Logo} />
                    </a>
                </div>
                <div className="header_nav">
                    <ul className="d-flex mb-0">
                        <li><a className="active" href="JavaScript:void(0)">Home</a></li>
                        <li><a href="JavaScript:void(0)">TV Shows</a></li>
                        <li><a href="JavaScript:void(0)">Movies</a></li>
                        <li><a href="JavaScript:void(0)">Kids</a></li>
                    </ul>
                </div>
            </div>
            <div className="right_aside d-flex align-items-center">
                <input type="text" placeholder="Search"></input>
                <div className="whos_login">
                    <a href="javascript:void(0)" onClick={toggleLoginMenu} className="login_toggler d-flex align-items-center">
                        <img src={loginImg} width="32px"/>
                        <p className="mb-0">Abhimanyu Soni</p>
                    </a>
                    <div className="overlay">
                        <ul className="loggedinmenu" id="loginToggler">
                            <li><a href="javascript:void(0)">Your Wishlist</a></li>
                            <li><a href="javascript:void(0)">Account & Settings</a></li>
                            <li><a href="javascript:void(0)">Watch Anywhere</a></li>
                            <li><a href="javascript:void(0)">Help</a></li>
                            <li><a href="javascript:void(0)">Not Abhimanyu? Sign Out</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )

}

export default Header;