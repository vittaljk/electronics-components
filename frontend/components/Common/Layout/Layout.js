import React from 'react'
import LayoutStyles from './layout.module.scss';
import Header from '../Header'
import Footer from '../Footer'

function Layout(props) {
    const { children } = props;

    return (
        <div className={LayoutStyles.layout_container}>
            <div className={LayoutStyles.layout_header_container}>
                {/* <Header /> */}
                <div className={LayoutStyles.layout_content_container}>
                    {children}
                </div>
                {/* <Footer /> */}
            </div>
        </div>
    )
}

export default Layout