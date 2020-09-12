import React from 'react';
import ClapButton from 'react-clap-button';

const Clap = () => {

    const onCountChange = ({ count, countTotal }) => {

    };
    // All Props are Optional
    return (
        <ClapButton
            count={0}
            countTotal={5}
            maxCount={10}
            isClicked={false}
            onCountChange={onCountChange}
            theme={{
                secondaryColor: '#037ffc'
              }}
        />
    );
}

export default Clap;