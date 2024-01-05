import {
  Container,
  ContainerContent,
  ContainerContentTitle,
  ContainerImage,
  ContainerText,
} from "../styles/Home";
import presentationImage from "../assets/imagem.jpg";

const Presentation = () => {
  return (
    <Container>
      <ContainerContent>
        <ContainerContentTitle> Sobre Mim</ContainerContentTitle>
        <ContainerText>
          {" "}
          Olá, meu nome é Bella Espósito, sou graduanda de Análise e
          Desenvolvimento de Sistemas pela UVA, aluna da Alura, Origamid e da
          Comunidade DEVCompleto. Além disso sou Bacharel em Educação Física
          pelo IBMR, professora de Lira Circense e Pole Dance.
        </ContainerText>
        <ContainerText>
          {" "}
          Sou mãe de 2 pets: minha calopsita Remo de 16 anos e meu cachorro
          Aslam de 9 anos.
        </ContainerText>
        <ContainerText>
          {" "}
          Sou completamente artística, apaixonada por todas as demonstrações de
          arte possíveis e agora, me aventurando do mundo da Programação.
          Comecei nesse mundo desde agosto/2023 e não poderia estar mais animada
          para aprender mais e trocar ideias, conhecimento e parceria.
        </ContainerText>
        <ContainerText>
          {" "}
          Estou me aperfeiçoando na área de Frontend e em breve terei mais
          coisas nesse portfólio para mostrar ao mundo!
        </ContainerText>
      </ContainerContent>
      <ContainerImage>
        <img src={presentationImage} alt="Foto da Bella Esposito" />
      </ContainerImage>
    </Container>
  );
};

export default Presentation;
