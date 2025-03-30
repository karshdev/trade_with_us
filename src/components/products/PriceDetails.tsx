'use client';
import Image from 'next/image';
import icCustom from "../../../public/img/icCustom.svg";
import icWhiteRec from "../../../public/img/icWhiteRec.svg";
import icCaretRight from "../../../public/img/icCaretRight.svg";

const PriceDetails = () => {
  return <div className='p-4'>
    <div className='flex gap-1 items-center'>
      <h1 className='text-2xl text-black font-bold'>Market Price Trend</h1>
      <a href="">
        <Image
          src={icCustom}
          alt=''
          className=""
        />
      </a>

    </div>
    <h4 className='text-lg text-black mt-3'>Prices are <strong>typical</strong> right now</h4>
    <p className='mt-3 text-sm text-black'>Currently <strong>$500/unit.</strong> This is around the usual price. The least expensive price is around $300-$600.</p>

    <div>
    <div className='mt-8 flex flex-col gap-3'>
      <div className='flex flex-col items-center '>
        <h4 className="text-[10px] text-black">Today</h4>
        <p className="text-base font-bold text-black">$500</p>
      </div>
      <div aria-hidden="true">
        <div className="overflow-hidden rounded-full bg-[#12A150] relative">
          <div className="h-[22px] rounded-l-full bg-[#43B977] w-16"></div>
          <div className='absolute top-[-35%] left-50'>
          <Image
            src={icWhiteRec}
            alt=''
            className=""
          />
          </div>
          <div className="h-[22px] rounded-r-full top-0 bg-[#0D8D44] absolute end-0 w-30"></div>
        </div>

      </div>
    </div>
    </div>
    <a href="" className='flex gap-1 text-base font-bold text-[#12A150] mt-4'>
        View Price History
          <Image
            src={icCaretRight}
            alt=''
            className=""
          />
      </a>
  </div>;
};

export default PriceDetails;
