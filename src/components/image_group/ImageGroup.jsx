import image1 from '../../assets/img1.png'
import image2 from '../../assets/img2.png'
import image3 from '../../assets/img3.png'
import image4 from '../../assets/img4.png'
import image5 from '../../assets/img5.png'



function ImageGroup() {

  return (
    <>
    <div className="flex justify-center gap-10 items-center">
      <div className='flex flex-col gap-10'>
        <div>
            <img src={image1} alt='image1' />
        </div>
        <div>
        <img src={image2} alt='image1' />

        </div>
      </div>
      <div>
      <img src={image3} alt='image1' />

      </div>
      <div className='flex flex-col gap-10'>
        <div className=''>
        <img src={image4} alt='image1' />

        </div>
        <div>
        <img src={image5} alt='image1' />

        </div>
      </div>
    </div>
    </>
  )
}

export default ImageGroup
