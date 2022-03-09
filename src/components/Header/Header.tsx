import { ButtonAncor, Container } from "./styles";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'



export function Header() {
    return(
        <Container>
            <nav>
                <button>
                <AiOutlineArrowLeft />
                </button>

                <button>
                <AiOutlineArrowRight />
                </button>
                

                <ButtonAncor isActive={true}> Playlists </ButtonAncor>
                <ButtonAncor> Podcasts </ButtonAncor>
                <ButtonAncor> Artistas </ButtonAncor>
                <ButtonAncor> Álbuns </ButtonAncor>
            </nav>
        </Container>
    );
}