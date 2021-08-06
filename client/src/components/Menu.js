import React from 'react'
import { useRecoilState } from 'recoil';
import AtomControls from '../atoms/AtomControls';
import MenuData from '../data/MenuData';
import { NavLink } from 'react-router-dom';
import logo from '../images/joycard-logo.png'

const Menu = () => {
    const [MenuState, setMenuState] = useRecoilState(AtomControls.MenuState);
    
    return (
        <div className={ MenuState ? "show-menu" : "hide-menu"}>
            <img src={logo} alt="Joycard logo" />
            <div className="menu-items">
                {MenuData.map((item, index) => {
                    return (
                        <NavLink
                            key={index}
                            onClick={() => setMenuState(!MenuState)}
                            to={item.path}
                            activeClassName="active-page"
                        >
                            <div>{item.icon}</div>
                            <div>{item.title}</div>
                        </NavLink>
                    )
                })}
            </div>
        </div>
    )
}

export default Menu
