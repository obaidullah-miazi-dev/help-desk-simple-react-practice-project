import React from 'react';
import Container from './Container';

const IssuesCards = ({ issue, data, setData }) => {
    // console.log(issue)
    const handleClick = () => {
        const currentData = data.find((elm) => elm.ticketId == issue.ticketId)
        const restData = data.filter((elm) => elm.ticketId !== issue.ticketId)
        
        if(currentData.status == 'Pending'){
            currentData.status = 'Submitted'
        } else if(currentData.status == 'Submitted'){
            currentData.status = 'Reviewed'
        }
        
        setData([currentData, ...restData])
    }
    return (
        <Container>


           
             <div onClick={handleClick} className='mx-auto h-full md:mx-0 cursor-pointer bg-sky-50 shadow-md p-5 rounded-xl max-w-[550px] space-y-3'>
                <img className='w-20 h-20 rounded-full' src={issue.userImg} alt="" />
                <h3 className='text-xl font-bold'>User: {issue.requestedBy}</h3>
                <div className='md:flex space-y-2 md:space-y-0 justify-between items-center'>
                    <p className='text-2xl font-bold'>{issue.subject}</p>
                    <div className='flex md:justify-between items-center gap-3'>
                        <p className={` py-1 px-2 rounded-lg font-semibold
                                ${issue.priority == 'High' ? 'bg-red-100 text-red-500' : issue.priority == 'Medium' ? 'text-yellow-500 bg-yellow-100' : 'text-green-600 bg-green-100'}
                                `}>{issue.priority}</p>
                        <p className={`py-1 px-2 rounded-lg font-semibold
                                ${issue.status == 'Pending' ? 'bg-red-100 text-red-500' : issue.status == 'Submitted' ? 'text-yellow-500 bg-yellow-100' : 'text-green-600 bg-green-100'}
                                `}>{issue.status}</p>
                    </div>
                </div>
                <p>{issue.description}</p>
            </div>
           


        </Container>
    );
};

export default IssuesCards;