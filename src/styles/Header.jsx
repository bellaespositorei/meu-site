import styled from "styled-components";
import { Link } from "react-router-dom";

const Headline = styled.header`
  padding: 2% 0% 0% 10%;

  @media (max-width: 500px) {
    padding: 6%;
  }
`;

const Menu = styled.nav`
  display: flex;
  gap: 80px;

  @media (max-width: 500px) {
    justify-content: center;
  }
`;

const MenuLink = styled(Link)`
  font-family: var(--fonte-secundária);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--cor-destaque);
  text-decoration: none;
  &:hover {
    color: var(--cor-hover);
  }
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export { Headline, Menu, MenuLink };
