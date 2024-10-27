import values1 from '../assets/values1.png'
import values2 from '../assets/values2.png'
import values3 from '../assets/values3.png'

function OurValues() {

    return (
        <>
            <div className='bg-tt-bg  flex flex-col gap-10 py-20 items-center text-white'>
                <div className='w-7/12 flex flex-col gap-10'>
                    <div className='text-20 font-[400] leading-8 '>Our values</div>
                    <div className='font-manrope font-[400] text-48 leading-72'>Things in we believe</div>
                    <div className='text-20 font-[400] leading-8 text-[#F1F1F1]'>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. </div>
                    <div className='flex flex-col gap-10'>
                        <div className='flex gap-10'>
                            <div>
                                <img src={values1} alt="values" srcset="" width={300} height={200} />
                            </div>
                            <div>
                                <div className='leading-48 font-manrope font-[400] text-28'>We are commited.</div>
                                <div className='text-20 font-[400] leading-8 text-[#F1F1F1]'>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. </div>
                            </div>
                        </div>
                        <div className='flex gap-10'>
                            <div>
                                <img src={values2} alt="values" srcset="" width={300} height={200} />
                            </div>
                            <div>
                                <div className='leading-48 font-manrope font-[400] text-28'>We are responsible.</div>
                                <div className='text-20 font-[400] leading-8 text-[#F1F1F1]'>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. </div>
                            </div>
                        </div>
                        <div className='flex gap-10'>
                            <div>
                                <img src={values3} alt="values" srcset="" width={300} height={200} />
                            </div>
                            <div>
                                <div className='leading-48 font-manrope font-[400] text-28'>We aim for progress.</div>
                                <div className='text-20 font-[400] leading-8 text-[#F1F1F1]'>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default OurValues
