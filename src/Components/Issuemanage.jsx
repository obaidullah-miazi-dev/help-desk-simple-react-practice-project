import React, { use, useState } from 'react';
import CountCards from './CountCards';
import Btns from './Btns';
import IssuesCards from './IssuesCards';
import Container from './Container';

const Issuemanage = ({ fetchPromise }) => {
    const initialData = use(fetchPromise)
    const [data, setData] = useState(initialData)
    const [toggle, setToggle] = useState('All')

    const filteredData = toggle == 'All' ? data : data.filter((item) => item.status == toggle)
    return (
        <div>
            <CountCards data={data}></CountCards>
            <Btns toggle={toggle} setToggle={setToggle}></Btns>
            <Container>
                {
                    filteredData.length == 0 ? <h1 className='my-52 text-center text-4xl font-bold'>No Data Found ⚠️</h1>
                        : <div className='md:grid grid-cols-3 my-12 mt-20 gap-5 pb-5 px-3 md:px-0 space-y-5 md:space-y-0'>
                            {
                                filteredData.map((issue, ind) => {
                                    return <IssuesCards key={ind} data={data} issue={issue} setData={setData}></IssuesCards>
                                })
                            }
                        </div>
                }
            </Container>

        </div>
    );
};

export default Issuemanage;