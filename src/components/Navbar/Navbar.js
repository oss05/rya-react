import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../../assets/Logo_RYA.png'
import brochure from '../../assets/brochure.pdf'
import './styles.css'

const imagesPath = {
    mx: 'https://cdn.icon-icons.com/icons2/1531/PNG/512/3253493-flag-mexico-icon_106775.png',
    us: 'https://cdn.countryflags.com/thumbs/united-states-of-america/flag-round-250.png'
}

export default class NavbarCustom extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            collapsed: true
        };
    }
    toggle() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    handleClick = (e) => {
        this.setState({
            collapsed: true
        });
    }

    toggleImage = () => {
        this.setState(state => ({ open: !state.open }))
        this.props.handleChangeIdioma()
    }

    getImageName = () => this.state.open ? 'mx' : 'us'

    render() {
        const imageName = this.getImageName();
        return (
            <div>
                <Navbar className="navbar" color="light" light expand="md">
                    <Link to="/" className="logoNav">
                        <img src={Logo} alt="logo rya" />
                    </Link>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse className="collapseC" isOpen={!this.state.collapsed} navbar>
                        <Nav className="ml-auto navList" navbar>
                            <NavItem>
                                <Link to="/" onClick={this.handleClick}>
                                    <NavLink>
                                    {this.props.data.secciones.nosotros.nombre}
                                    </NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/areas-de-servicio" onClick={this.handleClick}>
                                    <NavLink>
                                    {this.props.data.secciones.areas.nombre}
                                </NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/equipo" onClick={this.handleClick}>
                                    <NavLink>
                                    {this.props.data.secciones.equipo.nombre}
                                </NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/boletines" onClick={this.handleClick}>
                                    <NavLink>
                                    {this.props.data.secciones.boletines.nombre}
                                </NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <NavLink href={brochure} onClick={this.handleClick} download>
                                    Brochure
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <Link to="/contacto" onClick={this.handleClick}>
                                    <NavLink>
                                    {this.props.data.secciones.contacto.nombre}
                                </NavLink>
                                </Link>
                            </NavItem>
                            <NavItem onClick={this.handleClick} className="navItem">
                                <img style={{ width: 25, marginBottom: 8, cursor: "pointer" }} onChange={this.props.handleChangeIdioma} src={imagesPath[imageName]} onClick={this.toggleImage} />
                            </NavItem>
                            <NavItem>
                                <NavLink className="fa-2x navIco" href="https://mx.linkedin.com/in/liliana-arenas-3347462b" target="_blank" onClick={this.handleClick}>
                                <FontAwesomeIcon style={{color: "#8A0736"}} icon={['fab', 'linkedin']} />
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}