import React from 'react';
import SealIcon from './SealIconSVG';

const Tab: React.FC = () => {
    return (
        <div className="Tab">
            <SealIcon width={24} height={24} />
            <div className="logoText">foreignSeal</div>
        </div>
    );
};

export default Tab;