// Import sem chaves {} (Default Export)
import Paragrafo from "../Paragrafo";
import Titulo from "../Titulo";
// Import com chaves {} (Named Export)
import { Card, LinkBotao } from "./styles";

const Projeto = () => (
  <Card>
    <Titulo>Projeto Lista de Tarefas</Titulo>
    <Paragrafo tipo="secundario">
      Lista de Tarefas feitas com VueJS
    </Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Projeto
