import Header from "../header/Header"


function Hero() {

  return (
    <>
    <div className="bg-tt-bg relative min-h-screen py-10 text-white">
      <Header />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h3 className="leading-8 text-20 text-center font-[400]">About</h3>
        <h2 className="font-manrope font-[400] text-56 text-center leading-84 w-full">We love to make great things, things that matter.</h2>
        <p className="font-[400] text-16 leading-7 text-[#F1F1F1] text-center">Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.</p>
      </div>
    </div>
    </>
  )
}

export default Hero
