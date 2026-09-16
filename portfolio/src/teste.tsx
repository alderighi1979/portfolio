import styled from "styled-components";

type BotaoProps = {
  Principal?: boolean;
  fontSize?: string;
}

const Botao = styled.button<BotaoProps>`
  background-color: ${({ Principal }) => (Principal ? "green" : "blue")};
  font-size: ${({ fontSize }) => (fontSize || "16px")};
`;

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;

  span{
    text-decorat: line-through;
  }
`

function Teste() {
  return (
  <>
  <Botao Principal>Enviar</Botao>;
  <Botao Principal={false}>Cancelar Aqui</Botao>;
  <BotaoPerigo Principal as="a">
    <span>Não clique aqui</span>
  </BotaoPerigo>

  </>
  )
}

export default Teste;
