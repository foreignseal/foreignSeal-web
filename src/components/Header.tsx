import React from 'react';
import SealIcon from './SealIconSVG';

const Header: React.FC = () => {
    return (
        <header className="site-header">
            <SealIcon width={180} height={180} />

            <div>foreignSeal</div>
            <hr style={{ border: "1px solid #000000", width: "100%" }} />
            <nav className="webNav">
                home
                projects
                contacts
            </nav>
            <hr style={{ border: "1px solid #000000", width: "100%" }} />
        </header>
    );
};

export default Header;