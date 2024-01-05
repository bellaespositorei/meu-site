import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.main`
  padding: 5% 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 82px;

  @media (max-width: 1200px) {
    flex-direction: column-reverse;
    padding: 3%;
  }
`;

const ContainerImage = styled.div`
  height: 100%;
  width: 50%;
  & > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const ContainerContent = styled.section`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 1200px) {
    width: auto;
  }
`;

const ContainerContentTitle = styled.h1`
  font-size: 2rem;
  font-family: var(--fonte-secundária);
  font-style: italic;
`;
const ContainerContentHighlight = styled.strong`
  color: var(--cor-destaque);
  padding: 9.5px;
  &:hover {
    color: var(--cor-hover);
  }
`;

const ContainerText = styled.p`
  font-size: 1.5rem;
  font-family: var(--fonte-secundária);
  padding-bottom: 05%;
`;

const ContainerLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
`;

const ContainerLinksSubtitle = styled.h2`
  font-family: var(--fonte-secundária);
  font-weight: 500;
  font-size: 1.5rem;
`;

const ContainerLinksLink = styled(Link)`
  display: flex;
  justify-content: center;
  gap: 12px;
  border: 2px solid var(--cor-destaque);
  width: 40%;
  text-align: center;
  border-radius: 8px;
  font-size: 1.6rem;
  font-weight: 600;
  padding: 2% 0;
  text-decoration: none;
  color: var(--cor-texto);
  font-family: var(--fonte-secundária);

  @media (max-width: 1200px) {
    width: 60%;
  }
`;

export {
  Container,
  ContainerContent,
  ContainerContentHighlight,
  ContainerContentTitle,
  ContainerImage,
  ContainerLinks,
  ContainerLinksLink,
  ContainerLinksSubtitle,
  ContainerText,
};
