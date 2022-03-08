import styled from 'styled-components'


export const Container = styled.header`

    margin-top: 1rem;
    max-width: 1020px;
    width: 100%;
    
    nav {
        
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1.5rem;

        a {
            padding: 1rem;
        }
        
    }


`


interface ButtonAncorProps {
    isActive: boolean;
}

export const ButtonAncor = styled.a<ButtonAncorProps>`

    background-color: ${(props) => props.isActive ? "#323435" : ""} ;

`