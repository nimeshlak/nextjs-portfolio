import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  image: string; // Path to the preview image
  title: string; // Title of the website
  description: string; // Short description
  link: string; // Link to the website
}

const Card: React.FC<CardProps> = ({ image, title, description, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 w-[320px]">
      <div className="relative h-40">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover hover:scale-125 transition-transform duration-200 ease-in-out cursor-pointer"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Visit Website
        </Link>
      </div>
    </div>
  );
};

export default Card;