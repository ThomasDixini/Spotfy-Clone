import { ButtonAncor, Container } from "./styles";



export function Header() {
    return(
        <Container>
            <nav>
                <img src="\images\left-button" alt="" />
                <img src="\images\right-button" alt="" />

                <ButtonAncor isActive={true}> Playlists </ButtonAncor>
                <ButtonAncor> Podcasts </ButtonAncor>
                <ButtonAncor> Artistas </ButtonAncor>
                <ButtonAncor> Álbuns </ButtonAncor>
            </nav>
        </Container>
    );
}