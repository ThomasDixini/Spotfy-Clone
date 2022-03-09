import styled from 'styled-components';


export const Container = styled.aside`

    width: 23rem;
    height: 100vh;
    background-color: #000;

    nav {

        display: flex;
        flex-direction: column;
        justify-content: center;
        
        gap: 1rem;

        margin-top: 4rem;

        a {
            
            width: 70%;
            margin-left: 2rem;
            padding: 0.2rem;

            display: flex;
            align-items: center;
            gap: 1rem;
            text-align: left;

            color: var(--gray-300);
            
            transition: color 0.2s;

            &:hover {
                color: var(--white);
            }

            &:nth-child(3) {
                margin-bottom: 2rem;
            }

            svg {
                width: 30px;
                height: 30px;
            }

        }

        hr {

            width: 80%;
            margin: 0 auto;
            color: var(--gray-900);

        }
        
    }




`