/* eslint-disable @next/next/no-img-element */
import { Open_Sans } from "@next/font/google";
import {
  Navbar,
  Navbg,
  Title,
  TitleButton,
  NavText,
  ContainerCadastro,
  Esquerda,
  EsqTexto,
  Direita,
  TitleInput,
  TextInput,
  DireitaButton,
  DireitaTexto,
  DireitaTextoLogin,
} from ".././styles/styles";

const opensans = Open_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbg>
        <Navbar>
          <img src="logo.svg" alt="" srcset="" className="img-fluid" />
          <NavText>
            <Title>Home</Title>
            <TitleButton>Entrar</TitleButton>
            <TitleButton>Cadastrar</TitleButton>
          </NavText>
        </Navbar>
      </Navbg>
      <ContainerCadastro>
        <Esquerda>
          <EsqTexto>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </EsqTexto>
        </Esquerda>
        <Direita>
          <TitleInput>Comece agora grátis</TitleInput>
          <TextInput>Crie sua conta e make the change._</TextInput>
          <input
            type="text"
            placeholder={"Nome Completo"}
            style={{
              height: "25px",
              width: "80%",
              backgroundColor: "#1e192c",
              color: "white",
              border: "none",
              borderBottom: "1px solid white",
              margin: "8px",
            }}
          />
          <input
            type="text"
            placeholder={"E-mail"}
            style={{
              height: "25px",
              width: "80%",
              backgroundColor: "#1e192c",
              color: "white",
              border: "none",
              borderBottom: "1px solid white",
              margin: "8px",
            }}
          />
          <input
            type="text"
            placeholder={"Password"}
            style={{
              height: "25px",
              width: "80%",
              backgroundColor: "#1e192c",
              color: "white",
              border: "none",
              borderBottom: "1px solid white",
              margin: "8px",
            }}
          />

          <DireitaButton>Criar minha conta</DireitaButton>
          <DireitaTexto>
            Ao clicar em "criar minha conta grátis", declaro que aceito as
            Políticas de Privacidade e os Termos de Uso da DIO.
          </DireitaTexto>
          <DireitaTextoLogin>Já tenho conta.</DireitaTextoLogin>
        </Direita>
      </ContainerCadastro>
    </>
  );
}
