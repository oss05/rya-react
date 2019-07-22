import React from 'react';
import Logo from '../../assets/Logo_RYA.png'
import './styles.css'

const Hero = () => {
    return(
        <section className="Hero">
            <div className="heroRect">
                <img src={Logo} alt="Logo Romero y Arenas"/>
            </div>
        </section>
    )
}

export default Hero;