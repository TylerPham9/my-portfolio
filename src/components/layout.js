import React from 'react'

import Nav from './nav'
import Head from './head'

import { GlobalStyle } from '@styles';


if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
}

const Layout = (props) => {
    return (
        <div id="root">
            <Head />
            <GlobalStyle />
            <div>
                <Nav />
                {props.children}
            </div>
        </div>
    )
}

export default Layout
