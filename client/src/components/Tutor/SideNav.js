import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, withRouter,useLocation } from "react-router-dom";

const StyledSideNav = styled.div`   
    position: absolute; 
   /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
    height: 100%;
    width: 100%;     /* Set the width of the sidebar */
    z-index: 1;      /* Stay on top of everything */
      /* Stay at the top */
    background-color: black; /* Black */
    overflow-x: hidden;     /* Disable horizontal scroll */
    padding-top: 20px;
    align-content:end;
    text-decoration-line:none;
    margin-left:-15px;
    padding-right:5px;
    padding-left:5px;
`;

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.location.location.pathname)
        this.state = {
            activePath: this.props.location.location.pathname,
            items: [
                {
                  path: '/', /* path is used as id to check which NavItem is active basically */
                  name: 'Dashboard',
                  css: 'fa fa-fw fa-home',
                  key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
                },
                {
                  path: '/AddClass',
                  name: 'Add Class',
                  css: 'fa fa-fw fa-clock',
                  key: 2
                },
                {
                  path: '/MyClass',
                  name: 'My Class',
                  css: 'fas fa-hashtag',
                  key: 3
                },
              ]
        }
    }

    onItemClick = (path) => {
        this.setState({ activePath: path });
    }

    render() {
        const { items, activePath } = this.state;
        return(
            <StyledSideNav style={{}}>
                {
                    items.map((item) => {
                        return (
                            <NavItem 
                                path={item.path}
                                name={item.name}
                                css={item.css}
                                
                                onItemClick={this.onItemClick}
                                active={item.path === activePath}
                                key={item.key}
                            />
                        );
                    })
                }
            </StyledSideNav>
        );
    }
}

const RouterSideNav = withRouter(props => <SideNav location={props}/>);

const StyledNavItem = styled.div`
    height: 150px;
    width: 100%; /* width must be same size as NavBar to center */
     /* Aligns <a> inside of NavIcon div */
    margin-bottom: 0;   /* Puts space between NavItems */
    text-decoration:none;
    text-decoration-line:none;
    h1 {
        text-align: center;
      color: ${(props) => props.active ? "black" : "white"};
      background-color:${(props) => props.active ? "orange" : "black"};
      text-decoration:none;
      text-decoration-line:none;
      border-radius:10px;
      :hover {
          opacity: 0.5;
          text-decoration: none; /* Gets rid of underlining of icons */
          text-decoration-line:none;
          background-color:orange;
          color:black;
      }

`;

class NavItem extends React.Component {
    handleClick = () => {
        const { path, onItemClick } = this.props;
        onItemClick(path);
    }

    render() {
        const { active } = this.props;
        return(
            <StyledNavItem active={active}>
                <Link to={this.props.path}  onClick={this.handleClick}>
        <h1>{this.props.name}</h1>
                </Link>
            </StyledNavItem>
        );
    }
}

const NavIcon = styled.div`

`;

export default class Sidebar extends React.Component {
    constructor(props){
        super(props)
        this.location=this.props.location
        console.log(this.props.location)
    }
    
    render() {
        return (
            <RouterSideNav location={this.location}></RouterSideNav>
        );
    }
}