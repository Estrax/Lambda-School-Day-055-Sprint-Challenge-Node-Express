import React, { Component } from 'react';

import {
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';

import {
    NavbarBrandStyled,
    NavbarStyled,
    LinkStyled
} from '../styles';

class NavbarComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            ...this.state,
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <NavbarStyled light expand="md">
                <NavbarBrandStyled href="/">
                    Day55 Sprint Challenge
                </NavbarBrandStyled>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <LinkStyled to='/' className='nav-link'>
                                All projects
                            </LinkStyled>
                        </NavItem>
                        <NavItem>
                            <LinkStyled to='/projects/new' className='nav-link'>
                                New project
                            </LinkStyled>
                        </NavItem>
                        <NavItem>
                            <LinkStyled to='/actions' className='nav-link'>
                                All actions
                            </LinkStyled>
                        </NavItem>
                        <NavItem>
                            <LinkStyled to='/actions/new' className='nav-link'>
                                New action
                            </LinkStyled>
                        </NavItem>
                    </Nav>
                </Collapse>
            </NavbarStyled>
        );
    }
}

export default NavbarComponent;