import logo from '../../assets/Logo.png'

function Header() {

  return (
    <>
    <div className="flex justify-between items-center px-10 text-white text-16 ">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className='flex gap-10 items-center font-[600] leading-7'>
        <div>Product</div>
        <div>Service</div>
        <div>About</div>
        <div><button className='bg-white px-5 text-tt-bg rounded-full py-2 font-[700]'>Log In</button></div>
      </div>
    </div>
    </>
  )
}

export default Header
