"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const router = useRouter();
  
    const handleLogin = async (e) => {
        e.preventDefault();
        setErrorMsg(""); 
    
        try {
          const response = await fetch("http://localhost:8000/api/v1/auth/login/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          });
    
          const data = await response.json();
    
          if (data.status_code === 6000) {
            localStorage.setItem("access", data.access);
            localStorage.setItem("refresh", data.refresh);
            router.push("/courselist");
          } else {
            setErrorMsg(data.message || "Login failed.");
          }
        } catch (error) {
          console.error("Login error:", error);
          setErrorMsg("Something went wrong. Please try again.");
        }
      };
  
  return (
    <div className='flex flex-wrap gap-20 ml-20'>
    <div>
        <img className=' block w-160 mt-15' src="/images/illustration.webp" alt="illustration" />
    </div>
    <div className='mt-28'>
        <h2 className='text-3xl font-bold ml-15'>Log in to continue your</h2>
        <h2 className='text-3xl font-bold ml-25'>learning journey</h2>
       
        <form onSubmit={handleLogin}>
       
        <div className='pl-2 pr-4 pt-4 pb-5 mt-8 border border-gray-400 rounded-sm'>
           <input 
           className='w-100 pl-3 outline-none font-black text-sm placeholder:text-black'
           type="email"
            placeholder='email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
           />
        </div>
        <div className='pl-2 pr-4 pt-4 pb-5 mt-4 border border-gray-400 rounded-sm'>
           <input className='w-100 pl-3 outline-none font-black text-sm placeholder:text-black' 
           type="password"
           placeholder='password'
           required
           value={password}
           onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        {errorMsg && <p className="text-red-600 mt-2 font-bold">{errorMsg}</p>}
        
        <button type="submit" className='flex items-center justify-center gap-2 pr-20 pt-3 pb-3 mt-5 rounded-sm text-gray-100 bg-violet-700 font-bold w-full'>
              <img className='ml-19 pr-1 ' src="/images/message2-.png" alt="email"/>Continue with email</button>
           

        <div className='flex  justify-center mt-5'>
            <div className='border-b border-gray-300 w-35'></div>
            <p className='relative top-[6px] px-[5px] text-gray-600 text-sm'>Other sign up options</p>
           
            <div className='border-b border-gray-300 w-35'></div>
        </div>

        <div className='flex gap-[20px] justify-center mt-4'>
            <button className='border border-violet-700 w-12 h-12 rounded-sm mt-5'>
                <img className='w-7 ml-2.5' src="/images/google.svg" alt="google" />
            </button>
            <button className='border border-violet-700 w-12 h-12 rounded-sm mt-5'>
                <img className='w-6.5 ml-2.5' src="/images/facebook.svg" alt="facebook" /></button>
            <button className='border border-violet-700 w-12 h-12 rounded-sm mt-5'>
                <img className='w-5 ml-2.5' src="/images/apple.svg" alt="apple" /></button>
        </div>
        

        <div className=' pl-12 pt-4 pb-4 bg-gray-100 mt-7 border-b border-gray-300'>
            <button className='ml-12'>Don't have an account?<a href="/login" className='text-violet-700 border-b font-bold text-base'>Sign up</a></button>
        </div>
        <div className=' pl-12 pt-4 pb-4 bg-gray-100 '>
            <button className='ml-12'><a href="/login" className='text-violet-700 border-b font-bold text-base'>Log in with your organization</a></button>
        </div>
        </form>
    </div>
</div>
            
  );
}




