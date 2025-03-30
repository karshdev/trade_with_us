'use client';
import Image from 'next/image';
import icSealCheck from "../../../public/img/ic-seal-check.svg";
import icCalendarStar from "../../../public/img/ic-calendar-star.svg";
import icFlag from "../../../public/img/ic-flag.png";
import icListChecks from "../../../public/img/ic-list-checks.svg";

const ImageDetails = () => {
  return <div>
  <div className='p-4 flex gap-1 justify-between'>
    <div className='flex flex-col gap-1 justify-center items-center'>
      <Image
        src={icSealCheck}
        alt=''
        className=""
      />
      <p className='text-black text-xs text-center'>Verified by <br /> GTX</p>
    </div>
    <div className='flex flex-col gap-1 justify-center items-center'>
      <Image
        src={icCalendarStar}
        alt=''
        className=""
      />
      <p className='text-black text-xs text-center'>15 Years Old <br /> Company</p>
    </div>
    <div className='flex flex-col gap-1 justify-center items-center'>
      <Image
        src={icFlag}
        alt=''
        className=""
      />
      <p className='text-black text-xs text-center'>Based in  <br />India</p>
    </div>
    <div className='flex flex-col cursor-pointer gap-1 justify-center items-center'>
      <Image
        src={icListChecks}
        alt=''
        className=""
      />
      <a className='text-[#12A150] cursor-pointer text-xs text-center'>View All <br /> Details</a>
    </div>
  </div>
</div>;
  
};

export default ImageDetails;
