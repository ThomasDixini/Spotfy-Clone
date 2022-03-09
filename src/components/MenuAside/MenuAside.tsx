import { Container } from "./styles";

import { AiOutlineHome, AiOutlineSearch } from 'react-icons/ai'
import {  BiLibrary } from 'react-icons/bi'
import { MdPlaylistAdd, MdFavorite } from 'react-icons/md'



export function MenuAside() {
    return(
        <Container>
            <img src="" alt="Spotfy Logo" />
            <nav>
                <a>
                    <AiOutlineHome />
                    Início
                </a>
                <a>
                    <AiOutlineSearch />
                    Buscar
                </a>
                <a>
                    <BiLibrary />
                    Sua Biblioteca
                </a>
                <a>
                    <MdPlaylistAdd />
                    Criar Playlist
                </a>
                <a>
                    <MdFavorite />
                    Músicas Curtidas
                </a>

                <hr />

                <a>
                    Mix sertanejo
                </a>
                <a>
                    Alterna Vibes
                </a>
                <a>
                    Podcasts
                </a>
                <a>
                    Pops anos 80
                </a>
            </nav>
        </Container>
    );
}