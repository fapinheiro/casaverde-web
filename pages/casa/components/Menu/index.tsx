import styled from "styled-components"
import styles from './index.module.css'

const Header = styled.header`
    display: flex;
    justify-content: space-between;
`

const Logo = styled.div`

`

const Nav = styled.nav`

`

const NavItem = styled.a`
    margin: 1em;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-size: 16px;
    line-height: 20px;
    color: #202020;
    opacity: 0.8;
`

export default function Menu() {
    return (
        <Header>
            <Logo><span className={styles.logo}>🌿</span><span className={styles.casa}>Casa</span><span className={styles.verde}>Verde</span></Logo>
            <Nav>
                <NavItem href="#">Como Fazer</NavItem>
                /
                <NavItem href="#">Ofertas</NavItem>
                /
                <NavItem href="#">Depoimentos</NavItem>    
                /
                <NavItem href="#">Videos</NavItem>
                /
                <NavItem href="#">Meu carrinho</NavItem>
            </Nav>
        </Header>
    )
}