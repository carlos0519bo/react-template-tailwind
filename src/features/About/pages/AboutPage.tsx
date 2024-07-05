import { useRouterManager } from '@/router';

const AboutPage: React.FC = () => {
  const { back } = useRouterManager();
  return (
    <div>
      <h1 className="text-3xl text-gray-600 underline">About Page</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={() => back()}
      >
        Back
      </button>
    </div>
  );
};

export default AboutPage;
