import React from 'react';

const pageNotFound = () => {

    const styles = {
        textAlign: 'center',
        textTransform: 'uppercase'
    };

    return (
        <div style={styles}>
            Ooops... Couldn't find such path, sorry 😞
        </div>
    )
};

export default pageNotFound;