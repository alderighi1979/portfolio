import Projetos from "./container/projetos"
import Sidebar from "./container/Sidebar"
import Sobre from "./container/Sobre"
import EstiloGlobal, { Container } from "./style"

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>

        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>

      </Container>

    </>
  )
}

export default App
