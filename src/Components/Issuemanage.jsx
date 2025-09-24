import React, { use, useState } from 'react';
import CountCards from './CountCards';
import Btns from './Btns';
import IssuesCards from './IssuesCards';

const Issuemanage = ({ fetchPromise }) => {
    const initialData = use(fetchPromise)
    const [data, setData] = useState(initialData)
    const [toggle, setToggle] = useState('All')
    
    return (
        <div>
            <CountCards data={data}></CountCards>
            <Btns toggle={toggle} setToggle={setToggle}></Btns>
            <IssuesCards data={data} setData={setData}></IssuesCards>
        </div>
    );
};

export default Issuemanage;