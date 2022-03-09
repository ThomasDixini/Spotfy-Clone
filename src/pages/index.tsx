import { Header } from "../components/Header/Header"
import { MenuAside } from "../components/MenuAside/MenuAside"
import { Container } from "./home"


export default function Home() {
  return (
    <Container>
      <Header />
      <MenuAside />
    </Container>
  )
}
