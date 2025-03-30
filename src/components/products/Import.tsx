'use client';

import Image from 'next/image';
import icBoat from "../../../public/img/icBoat.svg";
import icFactory from "../../../public/img/icFactory.svg";
import icShippingContainer from "../../../public/img/icShippingContainer.svg";

const Import = () => {
  return <div className="flex gap-4 flex-col">
    <div className="flex gap-2 items-start">
      <div>
      <Image
          src={icBoat}
          alt=''
          className=""
        />
      </div>
      <div>
        <p className='text-sm text-[#666666]'>Shipments</p>
        <h4 className='text-sm text-black font-medium'>425</h4>
      </div>
  </div>
    <div className="flex gap-2 items-start">
      <div>
      <Image
          src={icFactory}
          alt=''
          className=""
        />
      </div>
      <div>
        <p className='text-sm text-[#666666]'>Suppliers</p>
        <h4 className='text-sm text-black font-medium'>41</h4>
      </div>
  </div>
    <div className="flex gap-2 items-start">
      <div>
      <Image
          src={icShippingContainer}
          alt=''
          className=""
        />
      </div>
      <div>
        <p className='text-sm text-[#666666]'>Volume</p>
        <h4 className='text-sm text-black font-medium'>50 metric ton / Annually</h4>
      </div>
  </div>


  </div>;
};

export default Import;
