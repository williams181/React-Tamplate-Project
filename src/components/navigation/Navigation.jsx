import {useNavigate} from 'react-router-dom';

import "./navigation.css"

const Navigation = () => {

const navigate = useNavigate();

const genericButton =() =>{
  navigate("/", {state: {}})
} 

  return (
    <div className="navbar">
        <div className="navContainer">
            <div className="navItems">
                <button className="navButton" id="navigationButton" onClick={genericButton}>Button</button>
            </div>
        </div>
    </div>
  )
}

export default Navigation