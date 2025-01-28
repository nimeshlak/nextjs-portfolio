import { Playfair_Display } from "next/font/google";
import Card from "../Components/Card";
import BlogCard from "../Components/BlogCard";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function HomePage() {
  const websitePreviews = [
    {
      image: "/previews/sugarlicious.png", // Replace with actual image paths
      title: "Sugarlicious",
      description:
        "An e-commerce platform with a sleek and user-friendly design.",
      link: "https://sugarlicious-cake-frontend.vercel.app/",
    },
    {
      image: "/previews/personal.png",
      title: "Personal Portfolio",
      description: "A personal porfolio using React.js and Tailwind CSS",
      link: "https://nimesh-portfolio-seven.vercel.app/",
    },
  ];
  const blogsPreviews = [
    {
      title: "Machine Learning",
      description:
        "An e-commerce platform with a sleek and user-friendly design.",
      link: "https://sugarlicious-cake-frontend.vercel.app/",
    },
    {
      title: "Nextjs 15 is Here!",
      description: "A personal porfolio using React.js and Tailwind CSS",
      link: "https://nimesh-portfolio-seven.vercel.app/",
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:ml-10 py-8">
        <div className="mb-5">
          <h1 className="font-semibold text-[24px] text-gray-700">
            Nimesh Lakshitha
          </h1>
          <h2 className="text-[16px] text-gray-600 -mt-1">Undergraduate</h2>
        </div>
        <div>
          <h1
            className={`${playfair.className} text-[50px] leading-tight font-bold`}
          >
            I transform information
            <br />
            into{" "}
            <span
              className={`${playfair.className} bg-gray-100 rounded-lg px-1 text-[48px]`}
            >
              strategic
            </span>{" "}
            action and
            <br />
            persuasive interface
          </h1>
        </div>
        <div>
          <h1 className="font-semibold py-6">Recent Blogs...</h1>
          <div className="py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              {blogsPreviews.map((preview, index) => (
                <BlogCard
                  key={index}
                  title={preview.title}
                  description={preview.description}
                  link={preview.link}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="md:ml-[54px] py-32">
        <h1 className="font-semibold text-lg text-gray-600">Recent Works...</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 mt-5">
          {websitePreviews.map((preview, index) => (
            <Card
              key={index}
              image={preview.image}
              title={preview.title}
              description={preview.description}
              link={preview.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
