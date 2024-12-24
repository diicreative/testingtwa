import { FiPlus } from "react-icons/fi";
import UserDataDisplay from './components/UserDataDisplay';

export default function Home() {
  return (
    <div>
      <div>
      <h1>Welcome to the Telegram Web App</h1>
      <UserDataDisplay />
    </div>

    <div className="fixed right-4 bottom-[100px]"><button className="bg-white p-4 rounded-full cursor-pointer"><FiPlus className="w-8 h-8"/></button>
    </div>

    </div>   
  );
}
