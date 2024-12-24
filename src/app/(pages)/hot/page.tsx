import UsersPicture from '@/app/components/UsersPicture';

export default function HotPage() {
  const currentDate = new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: 'long',
  }).format(new Date());

    return (
      <div className="mt-10 w-full flex justify-between px-4 items-center">
        <div className="text-2xl font-bold flex gap-2 items-baseline">Hot Project <div className="text-lg text-blue-400 font-medium">{currentDate}</div>
        </div>
        <div><UsersPicture/></div>
      
      </div>
    )
  };
  