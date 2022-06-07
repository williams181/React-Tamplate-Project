import {useNavigate} from 'react-router-dom';

import "./button.css"

const Button = () => {

const navigate = useNavigate();

const genericButton =() =>{
  navigate("/", {state: {}})
} 

  return (
    <div className="navbar">
        <div className="navContainer">
            <div className="navItems">
                <button className="navButton" id="genericButton" onClick={genericButton}>Button</button>
            </div>
        </div>
    </div>
  )
}

export default Button