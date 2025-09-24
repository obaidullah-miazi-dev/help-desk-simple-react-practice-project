import React from 'react';
import Container from './Container';

const Btns = ({toggle,setToggle}) => {
    const btns = ['All', 'Pending', 'Submitted', 'Reviewed']

    return (
        <Container>
            <div className='text-center md:text-right mb-12'>
                {
                    btns.map((btn,ind) => {
                        return (<button key={ind} className={`toggle-btn 
                        ${ind == 0 && 'rounded-l-xl'} ${ind == btns.length-1 && 'rounded-r-xl'}
                        ${toggle == btn && '!bg-purple-700 !text-white'}
                        `} 
                        onClick={() => setToggle(btn)}
                        >
                            {btn}
                        </button>)

                    })
                }

            </div>
        </Container>
    );
};

export default Btns;