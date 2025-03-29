import { Card, CardContent, CardLabel, CardValue } from '@/components/ui/Card';
import Image from 'next/image';

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

  return (
    <div className="pb-6">
      {/* Product Image */}
      <div className="relative h-64 bg-gray-100">
        <Image
          src={product.image}
          alt={product.productName}
          fill
          className="object-cover"
        />
      </div>

      {/* Product Name */}
      <div className="px-4 mt-4">
        <h1 className="text-2xl font-bold text-gray-900">{product.productName}</h1>
      </div>

      {/* Product Details */}
      <div className="px-4 mt-6">
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
      </div>
    </div>
  );
} 