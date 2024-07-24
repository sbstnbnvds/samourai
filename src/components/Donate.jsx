import windowIcons from '../assets/images/Donate/player-window-icons.svg'
import bannerImage from '../assets/images/Donate/donate-banner.svg'
import decoration1 from '../assets/images/Donate/decoration-1.png'
import decoration2 from '../assets/images/Donate/decoration-2.svg'

const Donate = () => {
  return (
    <section className="container mx-auto mt-44 mb-8" id='donate'>
      <h2 className="pb-6 mb-10 font-sans text-8xl text-center text-red uppercase border-b-2 border-white">Donate</h2>
      {/* Content container */}
      <div className='px-4'>
        {/* First Row */}
        <div className="flex gap-11 mb-2">
          {/* Player Col */}
          <div className="basis-11/12">
            {/* Player */}
            <div className='px-2 py-2 mb-0 text-black bg-white'>
              {/* https://freesamourai.com/ */}
              <div className="flex justify-between mb-1">
                <p className="font-mono text-3xl basis-auto">https://freesamourai.com/</p>
                <div className='basis-2/12 block self-center' alt="" >
                  <img src={windowIcons} alt="" />
                </div>
              </div>
              {/* Video */}
              <div className='aspect-video'>
                <img src={bannerImage} className='object-cover h-full w-full' alt="" />
              </div>
            </div>
            {/* #FREESAMOURAI */}
            <strong className='font-stranger font-extralight -ms-1 text-[7rem]'>#freesamourai</strong>
          </div>
          {/* Banner Image */}
          <div className='relative bottom-3'>
            <img src={bannerImage} alt="" loading='lazy' />
          </div>
        </div>
        {/* Second Row */}
        <div className="flex justify-between text-4xl text-red">

          <p className='w-[16.1em]'>donate to official samourai legal defense fund</p>
          {/* <p>donate to official samourai legal defense fund</p> */}

          <img src={decoration1} alt="" className='w-10' />
          <div className='flex flex-col gap-6 w-[12em]'>
            <p>samourai defense fund</p>
            <img src={decoration2} alt="" className='w-80' />
          </div>
          {/* <p className=''>samourai defense fund</p> */}

        </div>
      </div>
    </section>
  )
}

export default Donate