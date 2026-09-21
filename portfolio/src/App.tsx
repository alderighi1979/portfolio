import { ThemeProvider} from 'styled-components'
import Projetos from "./container/projetos"
import Sidebar from "./container/Sidebar"
import Sobre from "./container/Sobre"
import EstiloGlobal, { Container } from "./style"
import TemaLight from './themes/ligth'
import TemaDark from './themes/dark'
import { useState } from 'react'

function App() {
  const [estaUsandoTemadark, setEstaUsandoTemaDark] = useState(false)

  function trocaTema(){
    setEstaUsandoTemaDark(!estaUsandoTemadark)
  }
  return (
    <ThemeProvider theme={estaUsandoTemadark ? TemaDark : TemaLight}>
      <EstiloGlobal />
      <Container>

        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>

      </Container>

    </ThemeProvider>
  )
}

export default App
