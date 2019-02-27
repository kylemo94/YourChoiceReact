import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import {Container,Menu,Dropdown, Icon, Image } from 'semantic-ui-react';

class TopImage extends React.Component {
  render() {
    return (
        <Container Align = "center">
          <img  src ='https://upload.wikimedia.org/wikipedia/en/3/3c/H%C3%A4agen-Dazs_Logo.svg' alt = "Haagen-Daz"/>
        </Container>
    )
  }
}

class HaagenDazMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topMenu">
          <Container textAlign = 'center'>
            <Dropdown item text="PRODUCTS">
              <Dropdown.Menu>
                <Dropdown.Item >ALL PRODUCTS</Dropdown.Item>
                <Dropdown.Item >ICE CREAM</Dropdown.Item>
                <Dropdown.Item >TRIO</Dropdown.Item>
                <Dropdown.Item >BARS</Dropdown.Item>
                <Dropdown.Item >NON-DAIRY</Dropdown.Item>
                <Dropdown.Item >SORBET</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item >SHOP</Menu.Item>

            <Dropdown item text = 'ABOUT US'>
              <Dropdown.Menu>
              <Dropdown.Item >NEWS</Dropdown.Item>
              <Dropdown.Item >HONEY BEES</Dropdown.Item>
              <Dropdown.Item >CONTACT US</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item >LOCATOR</Menu.Item>

            <Menu.Item >RECIPES</Menu.Item>

            <Menu.Item fitted position={'right'}><Icon name = "search"/></Menu.Item>

          </Container>
        </Menu>
    )
  }
}

class FullWidthImage extends React.Component {
  render() {
    return (
        <Image  src='https://ae01.alicdn.com/kf/HTB10JD2gDJYBeNjy1zeq6yhzVXaf/Umedolly-1-12-Cute-Dollhouse-Miniature-Food-4PCS-Mini-HAAGEN-DAZS-Ice-Cream-Model-Plastic-Food.jpg' alt={"Haagen-Daz Image"} fluid/>

    )
  }
}



class FooterMenu extends React.Component {
  render() {
    return (
        <Menu className = "footerMenu">
          <Container>
          <Menu.Item fitted position='left'>
            JOIN US
          </Menu.Item>
        <Menu.Item fitted><Icon name = 'twitter'/></Menu.Item>
            <Menu.Item fitted><Icon name = 'facebook'/></Menu.Item>
            <Menu.Item fitted><Icon name = 'instagram'/></Menu.Item>
          </Container>
        </Menu>
    )
  }
}

class IslandSnow extends React.Component {

  render() {
    return (
        <div>
          <TopImage/>
          <HaagenDazMenu/>
          <FullWidthImage/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<IslandSnow/>, document.getElementById('root'));