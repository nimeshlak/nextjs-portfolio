import Link from 'next/link';

interface CardProps {
  title: string; // Title of the website
  description: string; // Short description
  link: string; // Link to the website
}

const Card: React.FC<CardProps> = ({ title, description, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 w-full sm:w-[350px] md:w-[400px] lg:w-[450px]">
      <div className="p-4">
        <h3 className="text-medium font-semibold mb-1">{title}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 text-xs hover:underline"
        >
          Visit Website
        </Link>
      </div>
    </div>
  );
};

export default Card;