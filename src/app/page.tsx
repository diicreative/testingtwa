import { FiPlus } from "react-icons/fi";

export default function Home() {
  return (
    <div>
      <div className="text-xl text-center">My Apps</div>
    <div className="fixed right-4 bottom-[100px]"><button className="bg-white p-4 rounded-full cursor-pointer"><FiPlus className="w-8 h-8"/></button>
    </div>
    </div>   
  );
}
