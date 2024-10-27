import logo_black from '../assets/Logo_black.png'

import bg from '../assets/bg.png'
function Footer() {

    return (
        <>
            <div className='bg-white  flex flex-col gap-10 py-20 items-center'>
                <div className='flex flex-col w-10/12 bg-tt-bg py-14 rounded-md gap-14' style={{
                    backgroundImage: `url(${bg})`,
                    backgroundPosition: 'center'
                }}>
                    <div className='font-manrope font-[400] text-48 leading-72 text-white text-center w-8/12 mx-auto'>An enterprise template to ramp up your company website</div>
                    <div className='flex justify-center gap-5'>
                        <div>
                            <input placeholder='Your email address' className='rounded-full px-10 py-2 w-full text-20 text-black leading-7' />
                        </div>
                        <div>
                            <button className='text-[#0A2640] bg-[#65E4A3] rounded-full px-5 py-2 font-[700] text-20 leading-7'>Start Now</button>
                        </div>
                    </div>
                </div>
                <div className='flex gap-11 mt-40'>
                    <div className='w-1/3 flex flex-col gap-10'>
                        <div>
                            <img src={logo_black} alt="logo" srcset="" />
                        </div>
                        <div className='leading-7 text-[#777777] font-[400] text-16'>Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</div>
                        <div className='leading-7 text-[#777777] font-[400] text-16 my-10'>All rights reserved.</div>
                    </div>
                    <div className='flex w-2/3 justify-between'>
                        <div className='flex flex-col gap-10'>
                            <div className='font-[700] leading-8 text-20 text-black'>Landings</div>
                            <div className='font-[400] leading-8 text-20 text-[#777777]'>Home</div>
                            <div className='font-[400] leading-8 text-20 text-[#777777]'>Products</div>
                            <div className='font-[400] leading-8 text-20 text-[#777777]'>Services</div>
                        </div>
                        <div className='flex flex-col gap-10'>
                            <div className='font-[700] leading-8 text-20 text-black'>Company</div>
                            <div className='font-[400] leading-8 text-20 text-[#777777]'>Home</div>
                            <div className='font-[400] leading-8 text-20 text-[#777777]'>Careers</div>
                            <div className='font-[400] leading-8 text-20 text-[#777777]'>Services</div>
                        </div>
                        <div className='flex flex-col gap-10'>
                            <div className='font-[700] leading-8 text-20 text-black'>Resources</div>
                            <div className='font-[400] leading-8 text-20 text-[#777777]'>Blog</div>
                            <div className='font-[400] leading-8 text-20 text-[#777777]'>Products</div>
                            <div className='font-[400] leading-8 text-20 text-[#777777]'>Services</div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Footer
