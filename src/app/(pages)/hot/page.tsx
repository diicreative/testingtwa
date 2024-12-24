import UsersPicture from '@/app/components/UsersPicture';
import Link from 'next/link';

export default function HotPage() {
  const currentDate = new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: 'long',
  }).format(new Date());

    return (
      <div className="flex justify-between items-start">
        <div className="text-2xl font-bold flex gap-2 items-baseline">Hot Project <div className="text-lg text-blue-400 font-medium">{currentDate}</div>
        </div>
        <div><Link href="/wallet"><UsersPicture/></Link></div>
      
      </div>
    )
  };
  