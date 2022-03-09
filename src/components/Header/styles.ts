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
            padding: 1rem 2rem;
        }

        button {

            border: none;
            list-style: none;
            background: none;

            svg {
            width: 35px;
            height: 35px;
            padding: 0.3rem;

            border-radius: 5rem;


            background-color: var(--gray-500);
            color: var(--gray-300);

            transition: background-color 0.2s;
            }

            svg:hover {
                color: var(--white);
                background-color: #000;
            }

            &:first-child {
                margin-left: 3rem;
            }
 
        }

    }

`

interface ButtonAncorProps {
    isActive: boolean;
}

export const ButtonAncor = styled.a<ButtonAncorProps>`

    background-color: ${(props) => props.isActive ? "#323435" : ""} ;

`