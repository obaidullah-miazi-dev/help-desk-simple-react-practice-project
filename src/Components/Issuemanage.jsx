import React, { use, useState } from 'react';
import CountCards from './CountCards';

const Issuemanage = ({ fetchPromise }) => {
    const initialData = use(fetchPromise)
    const [data, setData] = useState(initialData)
    console.log(data);
    return (
        <div>
            <CountCards data={data}></CountCards>
        </div>
    );
};

export default Issuemanage;