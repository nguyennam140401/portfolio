import styled from 'styled-components'
export const Style = styled.div`
    height: 100vh;
    .skill {
        &__title {
            font-size: var(--big-font-size);
            text-align: center;
            margin: 4rem 0;
            color: var(--title-color);
            font-weight: var(--font-semi-bold);
        }
        &__container {
            display: grid;
            grid-template-columns: repeat(2, 50%);
            gap: 1.5rem;
            &--item {
                display: flex;
                cursor: pointer;
                /* align-items: center; */
                svg {
                    font-size: 2rem;
                    /* flex-basis: content; */
                }
                .icon {
                    font-size: 2.5rem;
                    margin-right: 1rem;
                    color: var(--first-color-alt);
                }

                .infor {
                    &__detail {
                        display: none;
                        &--item {
                            color: var(--first-color);
                            font-weight: var(--font-semi-bold);
                            padding-top: 20px;
                        }
                    }
                }
                &.active {
                    .infor {
                        &__detail {
                            display: block;
                        }
                    }
                }
            }
        }
    }
`
