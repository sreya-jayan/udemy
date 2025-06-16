import React from 'react';


function Footer() {
  return (
    <footer className="bg-black pt-10 pb-8 text-white">
    
        <div className="px-15  flex flex-col lg:flex-row mb-12  justify-between border-b border-gray-700">
          <h2 className="text-large font-bold mb-6 text-white">Top companies choose Udemy Business to build in-demand career skills.</h2>
          <div className="flex flex-wrap items-center gap-6 -mt-5">
            <img src="/images/nasdaq-light.svg" alt="" />
            <img src="/images/volkswagen-light.svg" alt="" />
            <img src="/images/netapp-light.svg" alt="" />
            <img src="/images/eventbrite-light.svg" alt="" />
          </div>
        </div>
     
     
       
        <h3 className='px-15 text-xl'>Explore top skills and certifications</h3>
        <div className="flex flex-wrap justify-start gap-30 px-15 mb-8 mt-10">
          <div className="">
            <h4 className="font-bold text-lg mb-4 text-white">In-demand Careers</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white">Data Scientist</a></li>
              <li><a href="#" className="text-white">Full Stack Web Developer</a></li>
              <li><a href="#" className="text-white">Cloud Engineer</a></li>
              <li><a href="#" className="text-white">Project Manager</a></li>
              <li><a href="#" className="text-white">Game Developer</a></li>
              <li><a href="#" className="text-white">See all Career Accelerators</a></li>
            </ul>
          </div>

          <div className="">
            <h4 className="font-bold text-lg mb-4 text-white">Web Development</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white">Web Development</a></li>
              <li><a href="#" className="text-white">JavaScript</a></li>
              <li><a href="#" className="text-white">React JS</a></li>
              <li><a href="#" className="text-white">Angular</a></li>
              <li><a href="#" className="text-white">Java</a></li>
            </ul>
          </div>

          <div className="">
            <h4 className="font-bold text-lg mb-4 text-white">IT Certifications</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white">Amazon AWS</a></li>
              <li><a href="#" className="text-white">AWS Certified Cloud Practitioner</a></li>
              <li><a href="#" className="text-white">AZ-900: Microsoft Azure Fundamentals</a></li>
              <li><a href="#" className="text-white">AWS Certified Solutions Architect - Associate</a></li>
              <li><a href="#" className="text-white">Kubernetes</a></li>
            </ul>
          </div>

          <div className="">
            <h4 className="font-bold text-lg mb-4 text-white">Leadership</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white">Leadership</a></li>
              <li><a href="#" className="text-white">Management Skills</a></li>
              <li><a href="#" className="text-white">Project Management</a></li>
              <li><a href="#" className="text-white">Personal Productivity</a></li>
              <li><a href="#" className="text-white">Emotional Intelligence</a></li>
            </ul>
          </div>
        </div>

       
        <div className="flex flex-wrap justify-start gap-30 px-15 mb-8 mt-10">
          <div className="">
            <h4 className="font-bold text-lg mb-4 text-white">Certifications by Skill</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white">Cybersecurity Certification</a></li>
              <li><a href="#" className="text-white">Careers</a></li>
              <li><a href="#" className="text-white">Contact us</a></li>
              <li><a href="#" className="text-white">Blog</a></li>
              <li><a href="#" className="text-white">Investors</a></li>
            </ul>
          </div>

          <div className="">
            <h4 className="font-bold text-lg mb-4 text-white">Discover Udemy</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white">Get the app</a></li>
              <li><a href="#" className="text-white">Teach on Udemy</a></li>
              <li><a href="#" className="text-white">Plans and Pricing</a></li>
              <li><a href="#" className="text-white">Affiliate</a></li>
              <li><a href="#" className="text-white">Help and Support</a></li>
            </ul>
          </div>

          <div className="">
            <h4 className="font-bold text-lg mb-4 text-white">Communication</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white">Communication Skills</a></li>
              <li><a href="#" className="text-white">Presentation Skills</a></li>
              <li><a href="#" className="text-white">Public Speaking</a></li>
              <li><a href="#" className="text-white">Writing</a></li>
              <li><a href="#" className="text-white">PowerPoint</a></li>
            </ul>
          </div>

          <div className="">
            <h4 className="font-bold text-lg mb-4 text-white">Legal & Accessibility</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white">Accessibility statement</a></li>
              <li><a href="#" className="hover:text-white">Privacy policy</a></li>
              <li><a href="#" className="hover:text-white">Sitemap</a></li>
              <li><a href="#" className="hover:text-white">Terms</a></li>
            </ul>
          </div>
        </div>
       
        
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-8 px-10">
          <div className="flex items-center mb-4 md:mb-0">
            <img src="/images/logo-udemy-inverted.svg" alt="Udemy" className="h-8 mr-4" />
            <span className="text-gray-400">© 2025 Udemy, Inc.</span>
          </div>
            <span className='block mx-auto text-center mb-4 sm:mb-0'>Cookie setting</span>
            
            <div className="flex items-center space-x-2">
                <img className='w-4 block' src="/images/language-2.webp" alt="language" />
                <button>English</button>
            </div>
            
          </div>
    </footer>
  );
}

export default Footer;