import React, { use, useState } from 'react';
import CountCards from './CountCards';
import Btns from './Btns';

const Issuemanage = ({ fetchPromise }) => {
    const initialData = use(fetchPromise)
    const [data, setData] = useState(initialData)
    const [toggle, setToggle] = useState('All')
    
    return (
        <div>
            <CountCards data={data}></CountCards>
            <Btns toggle={toggle} setToggle={setToggle}></Btns>
        </div>
    );
};

export default Issuemanage;