import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Titulo"
import { GithubSecao } from "./styles"

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo tipo="secundario">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi nulla dolorum officiis quidem dolorem corrupti amet officia, ipsum sed delectus consequatur eius voluptatem veritatis optio, vero culpa non! Neque, corrupti.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats-fast.vercel.app/api?username=alderighi1979&show_icons=true&theme=onedark" />
    </GithubSecao>

  </section>
)

export default Sobre
