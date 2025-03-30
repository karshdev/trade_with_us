'use client';
import Image from 'next/image';
import icFilePdf from "../../../public/img/icFilePdf.svg";
import icCaretRight from "../../../public/img/icCaretRight.svg";

const About = () => {
  return <div className="p-4">
    <h1 className='text-2xl text-black font-bold'>About</h1>
    
    <div className="flex mt-4">
      <div className="w-2/5">
        <p className='text-[#666666] text-sm'>Business Type</p>
      </div>
      <div className="w-3/5">
        <p className='text-base text-blase font-medium'>Food manufacturing / Farming / Production / Processing / Packing</p>
      </div>
  </div>
    <div className="flex mt-4">
      <div className="w-2/5">
        <p className='text-[#666666] text-sm'>Origin</p>
      </div>
      <div className="w-3/5">
        <p className='text-base text-blase font-medium'>India</p>
      </div>
  </div>
    <div className="flex mt-4">
      <div className="w-2/5">
        <p className='text-[#666666] text-sm'>Year Established</p>
      </div>
      <div className="w-3/5">
        <p className='text-base text-blase font-medium'>1998</p>
      </div>
  </div>
    <div className="flex mt-4">
      <div className="w-2/5">
        <p className='text-[#666666] text-sm'>Number of Employees</p>
      </div>
      <div className="w-3/5">
        <p className='text-base text-blase font-medium'>1-10 Employees</p>
      </div>
  </div>
    <div className="flex mt-4">
      <div className="w-2/5">
        <p className='text-[#666666] text-sm'>Export Volume</p>
      </div>
      <div className="w-3/5">
        <p className='text-base text-blase font-medium'>50 metric ton / Annually</p>
      </div>
  </div>
    <div className="flex mt-4">
      <div className="w-2/5">
        <p className='text-[#666666] text-sm'>Company Website</p>
      </div>
      <div className="w-3/5">
        <p className='text-base text-blase font-medium'>http://www.kmgrobust.it</p>
      </div>
  </div>
    <div className="flex mt-4">
      <div className="w-2/5">
        <p className='text-[#666666] text-sm'>Company Address</p>
      </div>
      <div className="w-3/5">
        <p className='text-base text-blase font-medium'>Building no. 123, Whitefield, Bangalore</p>
      </div>
  </div>
    
  </div>;
};

export default About;
