import React from 'react'

function Logo() {
  return (
    <div className='max-w-7xl mx-auto px-4'>
        <h4 className='text-center text-gray-500'>Trusted by over 16,000 companies and millions of learners around the world</h4>
        <div  className='flex flex-wrap justify-center gap-20 mt-10'>
            <div>
                <img src="/images/volkswagen_logo.svg" alt="volkswagen" />
            </div>
            <div>
                <img src="/images/samsung_logo.svg" alt="samsung" />
            </div>
            <div>
                <img src="/images/cisco_logo.svg" alt="cisco" />
            </div>
            <div>
                <img src="/images/vimeo_logo_resized-2.svg" alt="vimeo" />
            </div>
            <div>
                <img src="/images/procter_gamble_logo.svg" alt="procter" />
            </div>
            <div>
                <img src="/images/hewlett_packard_enterprise_logo.svg" alt="hewlett" />
            </div>
            <div>
                <img src="/images/citi_logo.svg" alt="citi" />
            </div>
            <div>
                <img src="/images/ericsson_logo.svg" alt="ericsson" />
            </div>
       </div>
    </div>
  )
}

export default Logo;
