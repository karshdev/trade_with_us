'use client';
import Image from 'next/image';
import icShieldCheck from "../../../public/img/ic-shield-check.svg";
import icPro from "../../../public/img/ic-pro.svg";
import icAction from "../../../public/img/ic-action.svg";
import icSealCheck from "../../../public/img/icSealCheck.svg";
import icCustom from "../../../public/img/icCustom.svg";
import icCheckCircle from "../../../public/img/icCheckCircle.svg";
import icCaretRight from "../../../public/img/icCaretRight.svg";
import icStamp from "../../../public/img/icStamp.png";

const SellerDetails = () => {
  return <div className='p-4'>
    <div className='flex gap-2'>
      <h1 className='text-2xl text-black font-bold'>Seller</h1>
      <div className='flex flex-col gap-1 flex-1'>
        <div className='flex justify-between gap-2 items-end'>
          <div className='flex gap-1 items-center '>
            <h2 className='text-lg text-black font-bold'>KMG Robust</h2>
            <a href="">
            <Image
              src={icShieldCheck}
              alt=''
              className=""
            />
            </a>
            <a href="">
            <Image
              src={icPro}
              alt=''
              className=""
            />
            </a>
          </div>
          <div>
            <a className='flex' href="">
              <Image
                src={icAction}
                alt=''
                className=""
              />

            </a>
          </div>
        </div>

        <div>
          <p className='text-sm items-center text-black/[.6] flex gap-1'>24 M Revenue <span className='flex rounded-full w-1 h-1 bg-[#D9D9D9]'></span> 1-10 Employees <span className='flex rounded-full w-1 h-1 bg-[#D9D9D9]'></span> 15 Years Old</p>
        </div>

      </div>
    </div>
    <div className='bg-[#E8F5E8] p-4 rounded-xl mt-8 relative overflow-hidden'>
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

export default SellerDetails;
