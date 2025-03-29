import { Card, CardContent, CardLabel, CardValue } from '@/components/ui/Card';
import Image from 'next/image';

async function getProfile(id: string) {
  const res = await fetch(`http://localhost:3000/api/profiles/${id}`);
  if (!res.ok) throw new Error('Failed to fetch profile');
  return res.json();
}

export default async function ProfilePage({ params }: { params: { id: string } }) {
  const { id } = await Promise.resolve(params);

  const profile = await getProfile(id);

  return (
    <div className="pb-6">
      {/* Header with Logo */}
      <div className="relative h-48 bg-primary-500">
        <div className="absolute -bottom-16 left-4">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white bg-white">
            <Image
              src={profile.logo}
              alt={profile.businessName}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Business Name and Verification */}
      <div className="mt-20 px-4">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-gray-900">{profile.businessName}</h1>
          <svg className="w-5 h-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      {/* Overview */}
      <div className="px-4 mt-6">
        <Card title="Overview">
          <CardContent>
            <p>{profile.businessOverview}</p>
          </CardContent>
        </Card>
      </div>

      {/* About */}
      <div className="px-4">
        <Card title="About">
          <CardContent>
            <div className="grid gap-4">
              <div>
                <CardLabel>Business Type</CardLabel>
                <CardValue>{profile.businessType}</CardValue>
              </div>
              <div>
                <CardLabel>Established</CardLabel>
                <CardValue>{profile.established}</CardValue>
              </div>
              <div>
                <CardLabel>Address</CardLabel>
                <CardValue>{profile.address}</CardValue>
              </div>
              <div>
                <CardLabel>Owner</CardLabel>
                <CardValue>{profile.owner}</CardValue>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 