import windowIcons from '../assets/images/Donate/player-window-icons.svg'
import bannerImage from '../assets/images/Donate/donate-banner.svg'
import decoration1 from '../assets/images/Donate/decoration-1.png'
import decoration2 from '../assets/images/Donate/decoration-2.svg'

const Donate = () => {
  return (
    <section className="container mx-auto mt-44 mb-8" id='donate'>
      <h2 className="pb-6 mb-10 font-sans text-8xl text-center text-red font-bold uppercase border-b-2 border-white">Donate</h2>
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
                {/* <img src={bannerImage}  alt="" /> */}
                <iframe className='object-cover h-full w-full' width="560" height="315" src="https://www.youtube.com/embed/36ZCHObzWeI?si=MtFVOBWtYMavVLun" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
            {/* #FREESAMOURAI */}
            <a className='font-stranger font-extralight -ms-1 text-[7rem] hover:text-red transition-color duration-300' href='https://ronindojo.io/freesamourai/' target='__blank'>#freesamourai</a>
          </div>
          {/* Banner Image */}
          <div className='relative bottom-3'>
            <img src={bannerImage} alt="" loading='lazy' />
          </div>
        </div>
        {/* Second Row */}
        <div className="flex justify-between text-4xl text-red font-bold">

          <a className='w-[16.1em] transition-colors duration-300 hover:text-white' href='https://p2prights.org/donate.html' target='__blank'>donate to official samourai legal defense fund</a>
          {/* <p>donate to official samourai legal defense fund</p> */}

          <img src={decoration1} alt="" className='w-10' />
          <div className='flex flex-col gap-6 w-[12em]'>
            <a className='transition-colors duration-300 hover:text-white' href='https://blog.ronindojo.io/samourai-defense-fund/' target='__blank'>samourai defense fund</a>
            <img src={decoration2} alt="" className='w-80' />
          </div>
          {/* <p className=''>samourai defense fund</p> */}

        </div>
      </div>
    </section>
  )
}

export default Donate