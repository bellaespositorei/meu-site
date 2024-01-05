import {
  Container,
  ContainerContent,
  ContainerContentHighlight,
  ContainerContentTitle,
  ContainerImage,
  ContainerLinks,
  ContainerLinksLink,
  ContainerLinksSubtitle,
  ContainerText,
} from "../styles/Home";
import github from "../assets/github.png";
import presentationImage from "../assets/imagem.jpg";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";

const Presentation = () => {
  return (
    <Container>
      <ContainerContent>
        <ContainerContentTitle>
          {" "}
          Eleve seu negócio digital a outro nível
          <ContainerContentHighlight>
            {" "}
            com um Front-End de qualidade.
          </ContainerContentHighlight>
        </ContainerContentTitle>
        <ContainerText>
          {" "}
          Olá! Sou Bella Espósito, desenvolvedora com especialidade em Front end.
          Tenho conhecimentos em HTML, CSS, JS e estou estudando React, sem contar
          os conhecimentos em Git/Github, Scrum e UX/UI. Vamos conversar?
        </ContainerText>
        <ContainerLinks>
          <ContainerLinksSubtitle> Acesse minhas redes:</ContainerLinksSubtitle>
          <ContainerLinksLink to="https://www.instagram.com/bellaespdance">
            <img src={instagram} alt="Instagram" /> Instagram
          </ContainerLinksLink>
          <ContainerLinksLink to="https://www.linkedin.com/in/bella-esposito-rei">
            <img src={linkedin} alt="Linkedin" /> Linkedin
          </ContainerLinksLink>
          <ContainerLinksLink to="https://github.com/bellaespositorei">
            <img src={github} alt="Github" /> Github
          </ContainerLinksLink>
        </ContainerLinks>
      </ContainerContent>
      <ContainerImage>
        <img src={presentationImage} alt="Foto da Bella Esposito" />
      </ContainerImage>
    </Container>
  );
};

export default Presentation;
