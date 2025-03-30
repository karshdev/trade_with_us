import Image from 'next/image';
import ImageDetails from '@/components/products/ImageDetails';
import SellerDetails from '@/components/products/SellerDetails';
import PriceDetails from '@/components/products/PriceDetails';
import ProductDetailsPage from '@/components/products/ProductDetailsPage';
import CertificationsPage from '@/components/products/CertificationsPage';

import backIcon from "../../../../public/img/ic-left-arrow.svg";
import shareFat from "../../../../public/img/ic-share-fat.svg";
import icHeart from "../../../../public/img/icHeart.svg";
import icListPlus from "../../../../public/img/icListPlus.svg";
import ShippingDetails from '@/components/products/ShippingDetails';

import icShieldCheck from "../../../../public/img/ic-shield-check.svg";
import icPro from "../../../../public/img/ic-pro.svg";
import icUserImg from "../../../../public/img/icUserImg.png";
import Overview from '@/components/products/Overview';
import About from '@/components/products/About';
import VerificationDetails from '@/components/products/VerificationDetails';
import ImportExportData from '@/components/products/ImportExportData';
import { Tabs } from '@/components/ui/Tabs';
async function getProfile(id: string) {
  const res = await fetch(`http://localhost:3000/api/profiles/${id}`);
  if (!res.ok) throw new Error('Failed to fetch profile');
  return res.json();
}

export default async function ProfilePage({ params }: { params: { id: string } }) {
  const { id } = await Promise.resolve(params);
  const profile = await getProfile(id);
console.log("Profile", profile);

 return (
    <div className="pb-6">

      <div className='flex gap-2 justify-between py-3'>
          <div className='flex gap-2 '>
            <a href="">
            <Image
              src={backIcon}
              alt=''
              className=""
            />
            </a>
           
          </div>
          <div>
            <h1 className='text-base font-bold text-center'>KMG Robust</h1>
          </div>
          <div className='flex gap-2'>
          <a href="">
            <Image
              src={shareFat}
              alt=''
              className=""
            />
            </a>
          
          </div>
      </div>

      



      {/* Product Image */}
      <div className="relative h-44 bg-gray-100">
        <Image
          src={profile?.logo ?? ""}
          alt={""}
          fill
          className="object-cover"
        />
      </div>
      <div className='px-4 mt-[-2.5rem] relative z-20'>
        <div className='border-4 border-[#E8F5E8] rounded-xl w-[80px] h-[80px] '>
        <Image
              src={icUserImg}
              alt=''
              className="rounded-lg"
            />

        </div>
        <div className='flex gap-1 items-center mt-3'>
            <h2 className='text-2xl text-black font-bold'>KMG Robust</h2>
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
          <p className='text-sm items-center text-black/[.6] flex gap-1'>24 M Revenue <span className='flex rounded-full w-1 h-1 bg-[#D9D9D9]'></span> 1-10 Employees <span className='flex rounded-full w-1 h-1 bg-[#D9D9D9]'></span> 15 Years Old</p>
      </div>

      <div className='mt-6'>
        <Tabs
          tabs={[
            {
              id: 'overview',
              label: 'Overview',
              content: <Overview />
            },
            {
              id: 'seller',
              label: 'Seller',
              content: <SellerDetails />
            },
            {
              id: 'price',
              label: 'Price',
              content: <PriceDetails />
            },
            {
              id: 'productDetails',
              label: 'Product Details',
              content: <ProductDetailsPage />
            },
            {
              id: 'certifications',
              label: 'Certifications',
              content: <CertificationsPage />
            }
          ]}
        />
      </div>

      <div className='mt-4 border-t-[12px] border-[#F7F7F7]'>
        <About />
      </div>
      <div className='mt-4 border-t-[12px] border-[#F7F7F7]'>
        <VerificationDetails />
      </div>
      <div className='mt-4 border-t-[12px] border-[#F7F7F7]'>
        <CertificationsPage />
      </div>
      <div className='mt-4 border-t-[12px] border-[#F7F7F7]'>
        <ImportExportData />
      </div>

      <div className='mt-4 border-t-[6px] border-[#F7F7F7]'>
        <div className='' style={{ boxShadow: '0px -10px 15px -3px #0000001A' }}>
          <div className="p-4 flex gap-2 justify-between">
            <div className='flex gap-2'>
              <button className='rounded-xl bg-[#E8F5E8] p-2.5 cursor-pointer'>
                <Image
                  src={icHeart}
                  alt=''
                />
              </button>
             
            </div>
            <div className='flex gap-2'>
              <button className='rounded-xl bg-[#E8F5E8] py-2 px-3 text-base font-bold text-[#12A150] cursor-pointer'>
                Contact
              </button>
        
            </div>

          </div>
        </div>
      </div>


     
    </div>
  );
} 