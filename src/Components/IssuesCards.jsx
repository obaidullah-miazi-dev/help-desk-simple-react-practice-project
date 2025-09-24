import React from 'react';
import Container from './Container';

const IssuesCards = ({ data, setData }) => {
    console.log(data)
    return (
        <Container>
            <div className='md:grid grid-cols-3 gap-5 px-4 md:px-0 space-y-5 md:space-y-0'>
                {
                    data.map(element => <div className='mx-auto md:mx-0  bg-sky-50 shadow-md p-5 rounded-xl max-w-[550px] space-y-3'>
                        <img className='w-20 h-20 rounded-full' src={element.userImg} alt="" />
                        <h3 className='text-xl font-bold'>User: {element.requestedBy}</h3>
                        <div className='md:flex space-y-2 md:space-y-0 justify-between items-center'>
                            <p className='text-2xl font-bold'>{element.subject}</p>
                            <div className='flex md:justify-between items-center gap-3'>
                                <p className={` py-1 px-2 rounded-lg font-semibold
                                ${element.priority == 'High' ? 'bg-red-100 text-red-500' : element.priority == 'Medium' ? 'text-yellow-500 bg-yellow-100' : 'text-green-600 bg-green-100'}
                                `}>{element.priority}</p>
                                <p className={`py-1 px-2 rounded-lg font-semibold
                                ${element.status == 'Pending' ? 'bg-red-100 text-red-500' : element.status == 'Submitted' ? 'text-yellow-500 bg-yellow-100' : 'text-green-600 bg-green-100'}
                                `}>{element.status}</p>
                            </div>
                        </div>
                        <p>{element.description}</p>
                    </div>)
                }
            </div>
        </Container>
    );
};

export default IssuesCards;