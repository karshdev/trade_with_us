'use client';
import Image from 'next/image';
import icSealCheck from "../../../public/img/icSealCheck.svg";
import icCustom from "../../../public/img/icCustom.svg";
import icCheckCircle from "../../../public/img/icCheckCircle.svg";
import icCaretRight from "../../../public/img/icCaretRight.svg";
import icStamp from "../../../public/img/icStamp.png";

const VerificationDetails = () => {
  return <div className='p-4'>
      <h1 className='text-2xl text-black font-bold'>Verification Details</h1>
    
    <div className='bg-[#E8F5E8] p-4 rounded-xl mt-3 relative overflow-hidden'>
      <div className='flex gap-1 items-center '>
        <h3 className='text-sm text-black font-bold'>Verified by GTX</h3>
        <a href="">
        <Image
          src={icSealCheck}
          alt=''
          className=""
        />
        </a>
        <a href="">
        <Image
          src={icCustom}
          alt=''
          className=""
        />
        </a>
      </div>
      <ul className='flex mt-2 flex-col gap-2'>
        <li>
          <a href="" className='flex gap-1 items-center text-xs text-black '>
            <Image
              src={icCheckCircle}
              alt=''
              className=""
            />
            Business Email
          </a>
        </li>
        <li>
          <a href="" className='flex gap-1 items-center text-xs text-black'>
            <Image
              src={icCheckCircle}
              alt=''
              className=""
            />
            Business Registration Number
          </a>
        </li>
        <li>
          <a href="" className='flex gap-1 items-center text-xs text-black'>
            <Image
              src={icCheckCircle}
              alt=''
              className=""
            />
            Representative Profile
          </a>
        </li>
      </ul>
      <a href="" className='flex gap-1 text-base font-bold text-[#12A150] mt-4'>
          View Registration Details 
          <Image
            src={icCaretRight}
            alt=''
            className=""
          />
      </a>

      <div className='absolute bottom-0 end-0'>
          <Image
            src={icStamp}
            alt=''
            className=""
          />
      </div>
    </div>  
  </div>;
};

export default VerificationDetails;
