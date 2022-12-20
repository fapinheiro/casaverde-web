import styled from "styled-components"
import styles from "./index.module.css"
import Menu from "./components/Menu"
import Newsletter from "./components/Newsletter"


const Container = styled.main`
  margin: 1em 4em;
`

export default function Casa() {
  
  
  return (
      <Container>
        <Menu/>
        <Newsletter />
        {/* <MinhaPlanta />
        <Ofertas/> */}
      </Container>
  )
}

