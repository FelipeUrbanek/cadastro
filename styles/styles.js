import styled from "styled-components";
/* import ".././node_modules/bootstrap/dist/css/bootstrap.min.css"; */
import font from "@next/font/google";
import { Open_Sans } from "@next/font/google";

export const Title = styled.p`
  color: white !important;
  font-size: 1rem;
  font-family: "Open Sans", sans-serif;
  margin: 16px;
`;

export const Navbg = styled.div`
  background-color: #151515;
`;

export const Navbar = styled.nav`
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: row;
  background-color: #151515;
  max-width: 1280px;
  height: 47px;
  width: 100%;
`;

export const TitleButton = styled.button`
  background-color: #565656;
  border-radius: 11px;
  font-size: 1rem;
  color: white;
  padding: 10px 20px;
  margin: 16px;
  cursor: pointer;
`;

export const NavText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerCadastro = styled.nav`
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: row;
  background-color: #1e192c;
  max-width: 1280px;
  width: 100%;
  height: 100vh;
`;

export const Esquerda = styled.div`
  background-color: transparent;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 16px;
`;

export const EsqTexto = styled.p`
  color: white;
  font-size: 2rem;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  margin: 16px;
  text-align: center;
`;

export const Direita = styled.div`
  background-color: transparent;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 16px;
`;

export const TitleInput = styled.p`
  color: white;
  font-size: 2rem;
  font-weight: bold;
  font-family: "Open Sans", sans-serif;
  text-align: flex-start;
  margin: 8px;
`;

export const TextInput = styled.p`
  color: white;
  font-size: 1rem;
  font-family: "Open Sans", sans-serif;
  text-align: flex-start;
  margin: 8px;
`;

export const DireitaButton = styled.button`
  background-color: #e4105d;
  border-radius: 24px;
  font-size: 1rem;
  color: white;
  padding: 10px 20px;
  margin: 16px;
  width: 50%;
`;

export const DireitaTexto = styled.p`
  color: white;
  font-size: 1rem;
  font-family: "Open Sans", sans-serif;
  text-align: flex-start;
  margin: 16px;
`;

export const DireitaTextoLogin = styled.p`
  color: white;
  font-size: 1rem;
  font-family: "Open Sans", sans-serif;
  text-align: flex-start;
  margin: 16px;

  cursor: pointer;
  &:after {
    content: " Fazer login";
    color: #23dd7a;
  }
`;
