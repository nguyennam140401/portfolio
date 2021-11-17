import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Style = styled.div`
    .hit-the-floor {
        color: #fff;
        font-size: 12em;
        font-weight: bold;
        font-family: Helvetica;
        text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb,
            0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1),
            0 0 5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3),
            0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.25),
            0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.15);
    }

    .hit-the-floor {
        text-align: center;
    }

    body {
        background-color: #f1f1f1;
    }
`
const Page404 = () => {
    return (
        <Style>
            <div class="hit-the-floor">404</div>

            <div class="alternative-versions absolute bottom-0 w-full flex justify-center underline space-x-4 p-12">
                <Link to="/">Go Home</Link>
            </div>
        </Style>
    )
}

export default Page404
