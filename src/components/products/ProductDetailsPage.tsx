'use client';
import Image from 'next/image';
import icFilePdf from "../../../public/img/icFilePdf.svg";
import icCaretRight from "../../../public/img/icCaretRight.svg";

const ProductDetailsPage = () => {
  return <div className="p-4">
    <div className='flex gap-1 items-center justify-between'>
      <h1 className='text-2xl text-black font-bold'>Product Details</h1>
      <button className='rounded-xl bg-[#E8F5E8] flex gap-1 py-2 px-3 text-base font-bold text-[#12A150]'>
        Download
        <Image
          src={icFilePdf}
          alt=''
          className=""
        />
      </button>
    </div>

    <div className="flex mt-4">
      <div className="w-2/5">
        <p className='text-[#666666] text-sm'>Name</p>
      </div>
      <div className="w-3/5">
        <p className='text-base text-blase font-medium'>Blackpepper</p>
      </div>
  </div>
    <div className="flex mt-4">
      <div className="w-2/5">
        <p className='text-[#666666] text-sm'>Product</p>
      </div>
      <div className="w-3/5">
        <p className='text-base text-blase font-medium'>Whole Black Peppercorn</p>
      </div>
  </div>
    <div className="flex mt-4">
      <div className="w-2/5">
        <p className='text-[#666666] text-sm'>Origin</p>
      </div>
      <div className="w-3/5">
        <p className='text-base text-blase font-medium'>Tanzania</p>
      </div>
  </div>
    <div className="flex mt-4">
      <div className="w-2/5">
        <p className='text-[#666666] text-sm'>Production Capacity</p>
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

export default ProductDetailsPage;
