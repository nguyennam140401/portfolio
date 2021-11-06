import styled from 'styled-components'
export const Style = styled.div`
    .home {
        display: flex;
        padding: 5rem 2rem;
        align-items: center;
        &__img {
            flex: 1;
            overflow: hidden;

            img {
                width: 100%;
                aspect-ratio: 1;
                border-radius: 50%;
            }
        }
        &__content {
            flex: 1;
            padding-left: 1.5rem;
            p {
                font-size: var(--h3-font-size);
            }
            &--title {
                color: var(--title-color);
                font-size: var(--h1-font-size);
            }
            &--job {
                margin: 1.5rem 0;
            }
            &--link {
                margin-top: 1.5rem;
                font-size: var(--h1-font-size);
                a {
                    margin-right: 1.5rem;
                }
            }
            button {
                display: flex;
                background-color: var(--first-color);
                padding: 1rem;
                border-radius: 0.5rem;
                outline: none;
                color: #fff;
                font-size: var(--h3-font-size);
                border: none;
                box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.2);
                margin-top: 1.5rem;
                transition: 0.4s ease-in-out;
                border: 2px solid var(--first-color);
                svg {
                    margin-left: 0.5rem;
                }
                &:hover {
                    background-color: transparent;
                    color: var(--first-color);
                    /* font-weight: 600; */
                    /* border: 2px solid var(--first-color); */
                }
            }
        }
        @media (min-width: 768px) {
            &__img {
                flex: 2;
            }
            &__content {
                flex: 3;
                margin-left: 3rem;
            }
        }
    }
`
