import styled from 'styled-components'
export const Style = styled.div`
    .nav {
        &_list {
            ul {
                display: grid;
                width: 100%;
                grid-template-columns: repeat(3, 33%);
                justify-content: flex-end;
                list-style-type: none;
                position: fixed;
                bottom: 0;

                li {
                    text-align: center;
                    a {
                        color: var(--first-color);
                        font-size: var(--big-font-size);
                        text-decoration: none;
                    }
                }
            }
        }
    }
`
