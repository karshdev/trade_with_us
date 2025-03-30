'use client';
import Image from 'next/image';
import icCustom from "../../../public/img/icCustom.svg";


const CertificationsPage = () => {
  return <div className='p-4'>
    <div className='flex gap-1 items-center'>
      <h1 className='text-2xl text-black font-bold'>Certifications</h1>
      <a href="">
        <Image
          src={icCustom}
          alt=''
          className=""
        />
      </a>

    </div>
    <p className='mt-1 text-sm text-black/[.5]'>Click on the certification to view details</p>

    <div className="grid grid-cols-2 gap-4 mt-4">
      <div className="">
        <div className="rounded-xl p-4 flex gap-2 bg-[#E8F5E8] items-start">
            <div className='border-2 border-[#12A150] text-[#12A150] bg-[#DFF2E2] rounded-full w-[18px] h-[18px] flex text-sm justify-center items-center'>
              1
            </div>
            <div>
              <h4 className='text-sm text-black'>FairTrade</h4>
              <p className='text-[10px] text-[#666666]'>1 Jan 2024 - 31 Dec 2024</p>
            </div>
        </div>
      </div>
      <div className="">
        <div className="rounded-xl p-4 flex gap-2 bg-[#E8F5E8] items-start">
            <div className='border-2 border-[#12A150] text-[#12A150] bg-[#DFF2E2] rounded-full w-[18px] h-[18px] flex text-sm justify-center items-center'>
              2
            </div>
            <div>
              <h4 className='text-sm text-black'>Organic</h4>
              <p className='text-[10px] text-[#666666]'>1 Jan 2024 - 31 Dec 2024</p>
            </div>
        </div>
      </div>
      <div className="">
        <div className="rounded-xl p-4 flex gap-2 bg-[#E8F5E8] items-start">
            <div className='border-2 border-[#12A150] text-[#12A150] bg-[#DFF2E2] rounded-full w-[18px] h-[18px] flex text-sm justify-center items-center'>
              3
            </div>
            <div>
              <h4 className='text-sm text-black'>Certificate name</h4>
              <p className='text-[10px] text-[#666666]'>1 Jan 2024 - 31 Dec 2024</p>
            </div>
        </div>
      </div>
      
    </div>

  </div>;
};

export default CertificationsPage;
