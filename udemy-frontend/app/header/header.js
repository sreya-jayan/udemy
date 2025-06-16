"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname  } from "next/navigation";
import Link from "next/link";
import axios from "axios"; 

function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [name, setName] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");
 
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("access");
    setIsAuthenticated(!!token); 

    if (token) {
      
      axios.get("http://localhost:8000/api/v1/auth/user/", {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => {
        setName(response.data.name || response.data.username || "");
      })
      .catch(err => {
        console.error("Error fetching user info:", err);
        setName("");
      });
    } else {
      setName("");
    }

  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setIsAuthenticated(false);
    router.push("/");
   
  };

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      router.push(`/courselist?q=${searchQuery}`);
    }
  };

  return (
    <header className='pb-3 shadow-md'>
        <div className="max-w-[1400px] mx-auto hidden lg:flex items-center justify-between px-5 xl:px-0">

          <div className="flex items-center gap-4">
          <img className="w-30 block pt-4" src="/images/logo-udemy.svg" alt="logo" />
          <span className='inline-block  pt-3 text-sm text-gray-600 cursor-pointer'>Explore</span>  
          </div>
         
           

          {isAuthenticated ?(
            <>
              <div className='flex w-full lg:w-90 xl:w-160 pl-2 pr-4 pt-3 pb-3 mt-4 border border-gray-400 rounded-full'>
                <img className="mt-2 w-3 h-3" src="/images/search.svg" alt="search" />
                <input className='flex-grow  ml-4 outline-none placeholder:text-sm placeholder:text-gray-600'
                 type="text" placeholder='Search for anything'
                 value={searchQuery} 
                 onChange={(e) => setSearchQuery(e.target.value)}
                 onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}/>
              </div>
              
              
              <ul className="flex gap-5 pt-3 text-sm text-gray-600 cursor-pointer">
                 <li className="hidden xl:block"><a href="#">Udemy Business</a></li>
                  <li><a href="#">Teach on Udemy</a></li>
                  <li><Link href="/my-learnings">My Learnings</Link></li>
              </ul>
             
            
              <div className="flex items-center gap-5">
                <img className="w-5 mt-3 cursor-pointer" src="/images/whishlisted-2.png" alt="wishlist" />
                <img className="w-5 h-5 mt-3 cursor-pointer" src="/images/shopping-cart.png" alt="cart" />
                <img className="w-5 mt-3 cursor-pointer" src="/images/notification.svg" alt="notification" />

                <div className="relative">
                  <div  onClick={() => setShowDropdown(!showDropdown)} className="w-8 h-8 mt-3 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm cursor-pointer">
                  {name ? name.charAt(0).toUpperCase() : "U"}</div>

                  {showDropdown && (
                      <div className="absolute right-0 mt-2 bg-white shadow-md rounded px-4 py-2  hover:bg-black">
                        <button onClick={handleLogout} className="text-red-600  text-sm cursor-pointer">Logout</button>
                      </div>
                  )}
                </div>
             </div>
            </>
            ) : (
            <>
              <div className='flex w-70 xl:w-130 pl-2 pr-4 pt-3 pb-3 mt-4 border border-gray-400 rounded-full'>
                <img className="mt-2 w-3 h-3" src="/images/search.svg" alt="search" />
                <input className='flex-grow ml-4 outline-none placeholder:text-sm placeholder:text-gray-500'
                 type="text" placeholder='Search for anything' 
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
                 onKeyDown={(e) => {
                 if (e.key === "Enter") {
                  alert("Please login to search"); 
                  }
                
                 }}
                 />
                
              </div>

              <ul className='flex gap-5 pt-3 text-sm text-gray-600 cursor-pointer'>
                <li><a>Plans & Pricing</a></li>
                <li><a>Udemy Business</a></li>
                <li className="hidden xl:block"><a>Teach on Udemy</a></li>
              </ul>

              <img className="w-5 h-5 mt-3 cursor-pointer" src="/images/shopping-cart.png" alt="cart" />

              <div className='flex gap-2 mt-5'>
              <Link href="/login">
                <button className='py-2 px-5 border border-violet-700 rounded-sm text-sm font-semibold text-violet-700 cursor-pointer hover:bg-purple-100'>Login</button>
              </Link>

              <Link href="/signup">
                <button className='py-2 px-4 border border-violet-700 rounded-sm text-sm bg-violet-700 text-gray-100 font-semibold cursor-pointer'>Signup</button>
              </Link>
                <button className='border border-violet-700 w-10 h-10 rounded-sm text-sm'>
                  <img className='w-4 block ml-2.5 cursor-pointer' src="/images/language.svg" alt="language" />
                </button>
              </div>
              </>
            )}   
           </div>   
        
             
            
      <div className="lg:hidden flex items-center justify-between px-4 py-3 border-b border-gray-200">
              
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <img src="/images/i.svg" alt="Menu" className="w-5 h-5" />
        </button>

        <img className="w-20 block" src="/images/logo-udemy.svg" alt="logo" />

       <div className="flex items-center gap-4">
          <img className="w-4 h-4" src="/images/search.svg" alt="search" />
          <img className="w-5 h-5 cursor-pointer" src="/images/shopping-cart.png" alt="cart" />
        </div>
      </div>

      {menuOpen && (
          <div className="lg:hidden flex flex-col space-y-2 px-4">
            <Link href="/login" className="text-violet-600 text-sm">Login</Link>
            <Link href="/signup" className="text-violet-600 text-sm">Signup</Link>
            <Link href="" className="text-violet-600 text-sm">Plans & Pricing</Link>
          </div>
      )}
   
   </header>
  );
}

export default Header;
