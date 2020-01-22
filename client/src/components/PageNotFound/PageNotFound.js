import React from 'react';

const pageNotFound = () => {

    const styles = {
        textAlign: 'center',
        textTransform: 'uppercase'
    };

    return (
        <div style={styles}>
            Ooops... Couldn't find such path, sorry <span role="img" aria-label="sad">😞</span>
        </div>
    )
};

export default pageNotFound;