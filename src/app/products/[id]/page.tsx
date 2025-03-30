import { Card, CardContent, CardLabel, CardValue } from '@/components/ui/Card';
import { Tabs } from '@/components/ui/Tabs';
import Image from 'next/image';
import ImageDetails from '@/components/products/ImageDetails';
import SellerDetails from '@/components/products/SellerDetails';
import PriceDetails from '@/components/products/PriceDetails';
import ProductDetailsPage from '@/components/products/ProductDetailsPage';
import CertificationsPage from '@/components/products/CertificationsPage';

import backIcon from "../../../../public/img/ic-left-arrow.svg";
import shareFat from "../../../../public/img/ic-share-fat.svg";
import whatsappIcon from "../../../../public/img/ic-whatsapp.svg";
import icHeart from "../../../../public/img/icHeart.svg";
import icListPlus from "../../../../public/img/icListPlus.svg";
import ShippingDetails from '@/components/products/ShippingDetails';


async function getProduct(id: string) {
    const res = await fetch(`http://localhost:3000/api/products/${id}`);

    if (!res.ok) {

    throw new Error(`Failed to fetch product: ${res.status} ${res.statusText}`);
    }
    const response = await res.json();
    console.log('Fetched Product:', response);
    return response;
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);
console.log("product",product);

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
            <div className='w-5 '>

            </div>
          </div>
          <div>
            <h1 className='text-base font-bold text-center'>Black Pepper</h1>
            <p className='text-sm text-gray3c text-center'>KMG Robust</p>
          </div>
          <div className='flex gap-2'>
          <a href="">
            <Image
              src={shareFat}
              alt=''
              className=""
            />
            </a>
            <a href="">
            <Image
              src={whatsappIcon}
              alt=''
              className=""
            />
            </a>
          </div>
      </div>

      



      {/* Product Image */}
      <div className="relative h-64 bg-gray-100">
        <Image
          src={product.image}
          alt={product.productName}
          fill
          className="object-cover"
        />
        
        <div className='absolute bottom-0 bg-custom-gradient w-full h-[72px] z-10' style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)' }}>
          <ul className='flex items-center justify-center gap-2 mt-12'>
            <li><a href="" className='flex w-6 h-2 rounded-full bg-white'></a></li>
            <li><a href="" className='flex w-2 h-2 rounded-full bg-white'></a></li>
            <li><a href="" className='flex w-2 h-2 rounded-full bg-white'></a></li>
            <li><a href="" className='flex w-2 h-2 rounded-full bg-white'></a></li>
            <li><a href="" className='flex w-2 h-2 rounded-full bg-white'></a></li>
            <li><a href="" className='flex w-2 h-2 rounded-full bg-white'></a></li>
          </ul>
          <div className='bg-black rounded-md px-4 py-2 text-base text-white absolute end-2 bottom-2'>
            <strong>1/16</strong> Photos
          </div>
        </div>
      </div>

      <div>
        <Tabs
          tabs={[
            {
              id: 'images',
              label: 'Images',
              content: <ImageDetails />
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
        <SellerDetails />
      </div>
      <div className='mt-4 border-t-[12px] border-[#F7F7F7]'>
        <PriceDetails />
      </div>
      <div className='mt-4 border-t-[12px] border-[#F7F7F7]'>
        <ProductDetailsPage />
      </div>
      <div className='mt-4 border-t-[12px] border-[#F7F7F7]'>
        <CertificationsPage />
      </div>
      <div className='mt-4 border-t-[12px] border-[#F7F7F7]'>
        <ShippingDetails />
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
              <button className='rounded-xl bg-[#E8F5E8] p-2.5 cursor-pointer'>
                <Image
                  src={icListPlus}
                  alt=''
                />
              </button>
            </div>
            <div className='flex gap-2'>
              <button className='rounded-xl bg-[#E8F5E8] py-2 px-3 text-base font-bold text-[#12A150] cursor-pointer'>
                Contact
              </button>
              <button className='rounded-xl bg-[#12A150] py-2 px-3 text-base font-bold text-white cursor-pointer'>
                Request Quote
              </button>
            </div>

          </div>
        </div>
      </div>


      {/* Product Name */}
      {/* <div className="px-4 mt-4">
        <h1 className="text-2xl font-bold text-gray-900">{product.productName}</h1>
      </div> */}

      {/* Product Details */}
      {/* <div className="px-4 mt-6">
        <Card title="Product Details">
          <CardContent>
            <div className="grid gap-4">
              <div>
                <CardLabel>Origin</CardLabel>
                <CardValue>{product.origin}</CardValue>
              </div>
              <div>
                <CardLabel>Packing Details</CardLabel>
                <CardValue>{product.packingDetails}</CardValue>
              </div>
              <div>
                <CardLabel>Forecast</CardLabel>
                <CardValue>{product.forecast}</CardValue>
              </div>
              <div>
                <CardLabel>Colour</CardLabel>
                <CardValue>{product.colour}</CardValue>
              </div>
              <div>
                <CardLabel>Cultivation Type</CardLabel>
                <CardValue>{product.cultivationType}</CardValue>
              </div>
              <div>
                <CardLabel>Moisture</CardLabel>
                <CardValue>{product.moisture}</CardValue>
              </div>
              <div>
                <CardLabel>Form and Cut</CardLabel>
                <CardValue>{product.formAndCut}</CardValue>
              </div>
            </div>
          </CardContent>
        </Card>
      </div> */}
    </div>
  );
} 