import ScoreBoard from "./ScoreBoard"

function OurNumbers() {

    return (
        <>
            <div className='bg-tt-bg  flex flex-col gap-20 py-10 items-center'>
                <div>
                    <div><h3 className='text-20 font-[400] leading-8 text-[#F1F1F1]'>Our numbers</h3></div>
                    <div>
                    </div>
                </div>
                <h2 className='font-manrope font-[400] text-48 leading-72 w-3/5 text-center text-white'>Handshake infographic mass market crowdfunding iteration.</h2>

                <div className="flex items-center gap-40">
                    <ScoreBoard score={'120m'} />
                    <ScoreBoard score={'10.000'} />
                    <ScoreBoard score={'240'} />

                </div>
            </div>

        </>
    )
}

export default OurNumbers
