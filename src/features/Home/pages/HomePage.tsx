import { useRouterManager } from '@/router';

const HomePage: React.FC = () => {
  const { to } = useRouterManager();
  return (
    <div>
      <h1 className="text-3xl text-gray-600 underline">Home Page</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={() => to('ABOUT')}
      >
        Go to About
      </button>
    </div>
  );
};

export default HomePage;
