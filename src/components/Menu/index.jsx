import React from 'react';
import Logo from '../../assets/img/logo.png';
// import ButtonLink from '../ButtonLink';
import {Link} from 'react-router-dom';
import ButtonLink from '../Button';
import './Menu.css';

function Menu(){
    return(
        <nav className="Menu">
            <Link to="/"><img className="Logo" src={Logo} alt="Nexflit"/></Link>
            {/* <ButtonLink href="/cadastro/video" className="ButtonLink"> */}
            <ButtonLink as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </ButtonLink>
        </nav>
    );
}

export default Menu;