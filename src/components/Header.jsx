import { Link } from "react-router-dom";
import { Headline, Menu, MenuLink } from "../styles/Header";

const Header = () => {
  return (
    <Headline>
      <Menu>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/about">Sobre Mim</MenuLink>
        <MenuLink to="https://editor.p5js.org/Bellaesp/full/6p_Jgpvun">
          Meu jogo Freeway
        </MenuLink>
      </Menu>
    </Headline>
  );
};

export default Header;
