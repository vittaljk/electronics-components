import React from 'react'
import LayoutStyles from './Layout.module.scss';
import Header from '../Header'
import Footer from '../Footer'

function Layout(props) {
    const { children } = props;

    return (
        <div className={`${LayoutStyles.layout_container} grid grid-rows-[5rem_1fr_10rem]`}>
            <div className={`${LayoutStyles.layout_header_container} h-20 bg-sky-100 sticky top-0 z-10 shadow-[0_10px_10px_-15px_rgba(0,0,0,0.3)]`}> 
                <Header />
            </div>
            <div className={`${LayoutStyles.layout_content_container} min-h-[calc(100vh-15rem)]`}>
                {children}
            </div>
            <div className={`${LayoutStyles.layout_footer_container} h-40 bg-slate-900`}>
                <Footer />
            </div>
        </div>
    )
}

export default Layout