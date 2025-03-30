'use client';
import Image from 'next/image';
import icFilePdf from "../../../public/img/icFilePdf.svg";
import icCaretRight from "../../../public/img/icCaretRight.svg";

const ShippingDetails = () => {
  return <div className="p-4">
      <h1 className='text-2xl text-black font-bold'>Shipping Details</h1>

    <div className="flex mt-4">
      <div className="w-2/5">
        <p className='text-[#666666] text-sm'>HS Code</p>
      </div>
      <div className="w-3/5">
        <p className='text-base text-blase font-medium'>PQS-QL123</p>
      </div>
  </div>
    <div className="flex mt-4">
      <div className="w-2/5">
        <p className='text-[#666666] text-sm'>Minimum Qty</p>
      </div>
      <div className="w-3/5">
        <p className='text-base text-blase font-medium'>100 Kgs</p>
      </div>
  </div>
    <div className="flex mt-4">
      <div className="w-2/5">
        <p className='text-[#666666] text-sm'>Packaging</p>
      </div>
      <div className="w-3/5">
        <p className='text-base text-blase font-medium'>Cartons</p>
      </div>
  </div>
    <div className="flex mt-4">
      <div className="w-2/5">
        <p className='text-[#666666] text-sm'>Transport Mode</p>
      </div>
      <div className="w-3/5">
        <p className='text-base text-blase font-medium'>1,600,000 kg / Annually</p>
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
        <p className='text-[#666666] text-sm'>Form and Cut</p>
      </div>
      <div className="w-3/5">
        <p className='text-base text-blase font-medium'>Ground - Coarse Ground, Ground, Whole</p>
      </div>
  </div>
    <div className="flex mt-4">
      <div className="w-2/5">
        <p className='text-[#666666] text-sm'>Colour</p>
      </div>
      <div className="w-3/5">
        <p className='text-base text-blase font-medium'>Black</p>
      </div>
  </div>
    <div className="flex mt-4">
      <div className="w-2/5">
        <p className='text-[#666666] text-sm'>Cultivation Type</p>
      </div>
      <div className="w-3/5">
        <p className='text-base text-blase font-medium'>Organic</p>
      </div>
  </div>
  <a href="" className='flex gap-1 text-base font-bold text-[#12A150] mt-4'>
    View All Details
    <Image
      src={icCaretRight}
      alt=''
      className=""
    />
  </a>
  </div>;
};

export default ShippingDetails;
