import styled from 'styled-components'
export const Style = styled.div`
    .set-profile {
        .title {
            color: var(--title-color);
            font-size: var(--big-font-size);
            text-align: center;
        }
        form {
            border-radius: 1rem;
            padding: 1.5rem;
            box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.4);
            .form__control {
                margin-bottom: 1.5rem;
                font-size: 1.3rem;
                label {
                    display: block;
                    margin-bottom: 0.5rem;
                }
                input,
                textarea {
                    border: 1px solid var(--first-color);
                    outline: none;
                    padding: 0.5rem;
                    font-size: 1.3rem;
                    width: 100%;
                    border-radius: 0.5rem;
                }
            }
            .form__education {
                display: grid;
                position: relative;
                gap: 1.5rem;
                grid-template-columns: repeat(4, 23%);
                svg {
                    position: absolute;
                    bottom: 1rem;
                    right: 1rem;
                    font-size: 3rem;
                    color: var(--first-color);
                    cursor: pointer;
                }
                .form__control--detail {
                    position: relative;
                    svg {
                        position: absolute;
                        top: 100%;
                        left: 50%;
                        transform: translateX(-50%);
                        font-size: 2rem;
                    }
                }
            }
        }
    }
`
