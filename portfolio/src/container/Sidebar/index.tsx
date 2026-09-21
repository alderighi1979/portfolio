import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Titulo"
import { Descricao, BotaoTema, SidebarContainer } from "./styles"

type Props = {
  trocaTema: () => Void;
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar/>
      <Titulo fontSize={20}>Alderighi</Titulo>
      <Paragrafo tipo="secundario">alderighi1979</Paragrafo>
      <Descricao tipo="principal" fontSize={12}>Engenheiro front-end</Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
