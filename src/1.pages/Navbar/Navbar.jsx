import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'
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
  FormGroup,
  Label,
  Input,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="c1" color="Light" light expand="md">
          <NavbarBrand href="/">A9HRU/Nn/Ltd67MW8RRxkQ==</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/auth"><NavLink>AccReq</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to="/database"><NavLink>Database</NavLink></Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Auth
                </DropdownToggle>
                <DropdownMenu right>
                  <div className="a1">
                    <FormGroup>
                      <Label for="">Idname</Label>
                      <Input type="text" name="username" id="" placeholder="" />
                    </FormGroup> 
                    <FormGroup>
                      <Label for="">Idpass</Label>
                      <Input type="text" name="password" id="" placeholder="" />
                    </FormGroup>
                  </div>
                  <DropdownItem divider />
                  <DropdownItem>
                    <h5 className="b1">Input</h5>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
