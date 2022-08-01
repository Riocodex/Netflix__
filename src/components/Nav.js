import React , {useEffect , useState} from 'react'
import '../Nav.css'
import NetflixLogo from '../netflixlogo.png'

function Nav() {
    const [show, handleShow] = useState([]);
    useEffect(() => {
       window.addEventListener("scroll" , () =>{
        if(window.scrollY > 100){
            handleShow(true);
        }else handleShow(false);
       });
       return()=>{
        window.removeEventListener("scroll" , null);
       };
    }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img 
        className='nav__logo'
        src={NetflixLogo}
        alt="Netflix Logo" />

        <img 
        className='nav__avatar'
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix Logo" />
    </div>
  )
}

export default Nav