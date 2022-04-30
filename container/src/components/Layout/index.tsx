import React from 'react';

import './styles.css';

const Layout = ({ children }: any) => {

    return (
        <div>
            <div className='Layout-content'>{children}</div>
        </div>
    );
};

export default Layout;
