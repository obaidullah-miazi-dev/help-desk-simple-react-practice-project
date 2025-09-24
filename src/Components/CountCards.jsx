import React from 'react';
import Container from './Container';

const CountCards = ({data}) => {

    const pendingData = data.filter((element) => element.status == "Pending");
    const submittedData = data.filter((element) => element.status =="Submitted");
    const reviewedData = data.filter((element) => element.status == "Reviewed");

    return (
         <Container>
      <div className="md:grid px-4 md:px-0 space-y-4 md:space-y-0 grid-cols-3 gap-[20px] my-[50px]">
        <div className="rounded-md p-7 text-white h-[250px] bg-gray-600 flex flex-col items-center justify-center">
          <h2 className="font-bold text-[35px]">Pending</h2>
          <p className="font-semibold text-[26px]">{pendingData.length}</p>
        </div>
        <div className="rounded-md p-7 text-white h-[250px] bg-purple-500 flex flex-col items-center justify-center">
          {" "}
          <h2 className="font-bold text-[35px]">Submitted</h2>
          <p className="font-semibold text-[26px]">{submittedData.length}</p>
        </div>
        <div className="rounded-md p-7 text-white h-[250px] bg-teal-500 flex flex-col items-center justify-center">
          {" "}
          <h2 className="font-bold text-[35px]">Reviewed</h2>
          <p className="font-semibold text-[26px]">{reviewedData.length}</p>
        </div>
      </div>
    </Container>
    );
};

export default CountCards;