import React from 'react';

import './Result.css';

const Result = props => {
    return (
        <React.Fragment>
            <div className="result">
                {props.children}
            </div>
        </React.Fragment>
    );
};

export default Result;