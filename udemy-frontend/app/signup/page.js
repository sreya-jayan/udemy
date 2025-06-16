"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

     try {
      const res = await fetch("http://localhost:8000/api/v1/auth/create/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (data.status_code === 6000) {
        setFeedback("Signup successful! Redirecting to login...");
        setTimeout(() => router.push("/login"), 1500);
      } else {
        setFeedback(data.message || "Signup failed.");
      }
    } catch (error) {
      setFeedback("Server error. Please try again.");
    }
  };


  return (
    <div className='flex flex-wrap gap-20 ml-20 mb-10'>
        <div>
            <img className=' block w-160 mt-15' src="/images/illustration.webp" alt="illustration" />
        </div>
        <div className='mt-28'>
            <h2 className='text-3xl font-bold ml-20'>Sign up with email</h2>
           
            <form  onSubmit={handleSubmit}>
            {feedback && <p className="text-sm font-medium">{feedback}</p>}
            <div className='pl-2 pr-4 pt-4 pb-5 mt-8 border border-gray-400 rounded-sm'>
               <input 
               className='w-100 pl-3 outline-none font-black text-sm placeholder:text-black'
               type="text" 
               id="name"
               name="name"
               value={name}
               onChange={(e) => setName(e.target.value)}
               placeholder='Fullname'
               required
               />
            </div>
            <div className='pl-2 pr-4 pt-4 pb-5 mt-4 border border-gray-400 rounded-sm'>
               <input className='w-100 pl-3 outline-none font-black text-sm placeholder:text-black' 
               type="email" placeholder='Email'
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </div>

            <div className='pl-2 pr-4 pt-4 pb-5 mt-4 border border-gray-400 rounded-sm'>
            <input
            className='w-100 pl-3 outline-none font-black text-sm placeholder:text-black'
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
          </div>
  

            <div className='flex'>
                <input className='accent-violet-700'
                 type="checkbox"
                />
                <p className='text-sm mt-5 ml-2'>Send me special offers, personalized recommendations and <br /> learning tips.</p>
            </div>
            
            
                
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
            
            <div className='text-xs text-center mt-8'>
            <span>By signing up, you agree to our</span>
            <a className='border-b border-violet-700 text-violet-700' href="">Terms of Use</a>
            <span className='ml-1'>and </span>
            <a className='border-b border-violet-700 text-violet-700' href="">Privacy Policy.</a>
            </div>

            <div className=' pl-12 pt-4 pb-4 bg-gray-100 mt-7'>
                <button className='ml-12'>Already have an account?<a href="/login" className='text-violet-700 border-b font-bold'>Log in</a></button>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Page;
