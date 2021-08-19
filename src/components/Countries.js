import React, { useState } from 'react';

const Countries = () => {
    const [data, setData] = useState('Hello')


    return (
        <div>{data}</div>
    );
};

export default Countries;