"use client";
import React from 'react';
import Link from 'next/link';

const TrendingNow = () => {
  const categories = {
    featured: {
      title: "ChatGPT is a top skill",
      link: "See ChatGPT courses",
      learners: "4,421,595 learners"
    },
    development: {
      title: "Development",
      items: [
        {
          name: "Python",
          learners: "48,002,546 learners",
          href: "/python"
        },
        {
          name: "Web Development",
          learners: "14,052,845 learners",
          href: "/web-development"
        },
        {
          name: "Data Science",
          learners: "7,827,460 learners",
          href: "/data-science"
        }
      ]
    },
    design: {
      title: "Design",
      items: [
        {
          name: "Blender",
          learners: "2,927,443 learners",
          href: "/blender"
        },
        {
          name: "Graphic Design",
          learners: "4,509,070 learners",
          href: "/graphic-design"
        },
        {
          name: "User Experience (UX) Design",
          learners: "2,076,422 learners",
          href: "/ux-design"
        }
      ]
    },
    business: {
      title: "Business",
      items: [
        {
          name: "PMI Project Management Professional (PMP)",
          learners: "2,591,794 learners",
          href: "/pmp"
        },
        {
          name: "Microsoft Power BI",
          learners: "4,679,330 learners",
          href: "/power-bi"
        },
        {
          name: "Project Management",
          learners: "4,013,918 learners",
          href: "/project-management"
        }
      ]
    }
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 w-full sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif  mb-12">
          Trending Now
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">{categories.featured.title}</h3>
            <p className="text-gray-500">{categories.featured.learners}</p>
            <Link 
              href="/chatgpt-courses"
              className="inline-flex items-center text-purple-700 hover:text-purple-800 font-medium"
            >
              {categories.featured.link} &gt;
             
            </Link>
          </div>

         
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">{categories.development.title}</h3>
            <div className="space-y-6">
              {categories.development.items.map((item, index) => (
                <div key={index}>
                  <Link 
                    href={item.href}
                    className="group flex flex-col space-y-1"
                  >
                    <span className="text-purple-700 group-hover:text-purple-800 font-medium flex items-center">
                      {item.name}  &gt;
                    </span>
                    <span className="text-gray-500 text-sm">{item.learners}</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">{categories.design.title}</h3>
            <div className="space-y-6">
              {categories.design.items.map((item, index) => (
                <div key={index}>
                  <Link 
                    href={item.href}
                    className="group flex flex-col space-y-1"
                  >
                    <span className="text-purple-700 group-hover:text-purple-800 font-medium flex items-center">
                      {item.name}  &gt;
                    </span>
                    <span className="text-gray-500 text-sm">{item.learners}</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">{categories.business.title}</h3>
            <div className="space-y-6">
              {categories.business.items.map((item, index) => (
                <div key={index}>
                  <Link 
                    href={item.href}
                    className="group flex flex-col space-y-1"
                  >
                    <span className="text-purple-700 group-hover:text-purple-800 font-medium flex items-center">
                      {item.name}  &gt;
                    </span>
                    <span className="text-gray-500 text-sm">{item.learners}</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

       
        <div className="mt-12">
          <Link 
            href="/trending-skills"
            className="inline-flex items-center justify-center px-6 py-3 border border-purple-700 text-purple-700 hover:bg-purple-50 rounded-md font-medium transition-colors duration-150"
          >
            Show all trending skills  &gt;
           
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrendingNow; 