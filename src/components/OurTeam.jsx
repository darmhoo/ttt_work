import leader1 from '../assets/leader1.png'
import leader2 from '../assets/leader2.png'
import leader3 from '../assets/leader3.png'
function OurTeam() {

    return (
        <>
            <div className='bg-white  flex flex-col gap-10 py-20 items-center'>
                <div className='flex flex-col w-7/12'>
                    <div className='text-20 font-[400] leading-8 text-[#777777]'>Our team</div>
                    <div className='font-manrope font-[400] text-48 leading-72 text-black'>The leadership team</div>
                    <div className='text-20 font-[400] leading-8 text-[#777777]'>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. </div>
                </div>
                <div className='flex justify-center gap-10'>
                    <div className='flex flex-col gap-5'>
                        <div>
                            <img src={leader1} alt="leader" srcset="" />
                        </div>
                        <div className='font-manrope font-[400] text-28 leading-48 text-black'>Michael Scott</div>
                        <div className='text-20 font-[400] leading-8 text-[#777777]'>General Manager</div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div>
                            <img src={leader2} alt="leader" srcset="" />
                        </div>
                        <div className='font-manrope font-[400] text-28 leading-48 text-black'>Dwight Schrute</div>
                        <div className='text-20 font-[400] leading-8 text-[#777777]'>General Manager</div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div>
                            <img src={leader3} alt="leader" srcset="" />
                        </div>
                        <div className='font-manrope font-[400] text-28 leading-48 text-black'>Pam Beetsley</div>
                        <div className='text-20 font-[400] leading-8 text-[#777777]'>General Manager</div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default OurTeam
