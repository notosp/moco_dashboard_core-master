import React, { Component } from 'react';
import { UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import langAction from '../../stores/actions/lang';

import { AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from './img/brand/logo.png';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { lang: 'en', ddlLanguageOpen: false }
    this.changeLanguage = this.changeLanguage.bind(this);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }

  changeLanguage = (lang) => {
    langAction.changeLanguage(lang);
    this.setState((state) => ({ ...state, lang }))
  }

  handleLanguageChange = () => {
    this.setState((state) => ({ ...state, ddlLanguageOpen: !this.state.ddlLanguageOpen }))
  }

  render() {
    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand style={{ marginLeft: '20px' }}
          full={{ src: logo, height: 60, alt: 'Company Logo' }}
          minimized={{ src: logo, height: 30, alt: 'Company Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
          </NavItem>
        </Nav>
        <Nav className="ml-auto mr-2" navbar>
          {
            this.state.lang === 'en' ? (
              <NavItem className="d-md-down-none">
                <NavLink to="#" onClick={() => this.changeLanguage('id')} className="nav-link">
                  <div>EN</div>
                </NavLink>
              </NavItem>
            ) : (
                <NavItem className="d-md-down-none">
                  <NavLink to="#" onClick={() => this.changeLanguage('en')} className="nav-link">
                    <div>ID</div>
                  </NavLink>
                </NavItem>
              )
          }

          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <img src={'../../assets/img/avatars/1.jpg'} className="img-avatar" alt="admin@dashboard.com" />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>
              <DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
              <DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>
              <DropdownItem><i className="fa fa-shield"></i> Lock Account</DropdownItem>
              <DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i> Logout</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
