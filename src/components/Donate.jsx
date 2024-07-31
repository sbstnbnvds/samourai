import windowIcons from '../assets/images/Donate/player-window-icons.svg'
import bannerImage from '../assets/images/Donate/donate-banner.svg'
import decoration1 from '../assets/images/Donate/decoration-1.png'
import decoration2 from '../assets/images/Donate/decoration-2.svg'

const Donate = () => {
  return (
    // mt-44
    <section className="container mx-auto mt-14 mb-8" id='donate'>
      <a
        href='https://p2prights.org/donate.html'
        target='__blank'
        className="block pb-6 mb-10 font-sans text-4xl sm:text-7xl md:text-8xl text-center text-red font-bold uppercase border-b-2 border-white ease-out hover:text-white transition-color duration-300">Donate</a>
      {/* Content container */}
      <div className='px-4'>
        {/* First Row */}
        <div className="grid gap-4 grid-cols-6 lg:grid-cols-11 gap-x-8 xl:gap-x-14 mb-2 w-full">
          {/* Player Col */}
          <div className="max-w-full col-span-6 lg:col-span-7 xl:col-span-7">
            {/* Player */}
            <div className='px-2 py-2 mb-6 2xl:mb-12 text-black bg-white'>
              {/* https://freesamourai.com/ */}
              <div className="hidden sm:flex justify-between mb-1">
                <p className="font-mono lg:text-3xl basis-auto">https://freesamourai.com/</p>
                <div className='basis-2/12 block self-center' alt="" >
                  <img src={windowIcons} alt="" loading='lazy' />
                </div>
              </div>
              {/* Video */}
              <div className='aspect-video'>
                <iframe className='object-cover h-full w-full' width="" height="" src="https://www.youtube.com/embed/36ZCHObzWeI?si=MtFVOBWtYMavVLun" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </div>
            {/* #FREESAMOURAI */}
            <a className='block font-stranger font-extralight text-4xl sm:text-7xl xl:text-[7rem] text-right ease-out hover:text-red transition-color duration-300' href='https://ronindojo.io/freesamourai/' target='__blank'>#freesamourai</a>
          </div>
          {/* Banner Image */}
          <div className='hidden lg:block relative bottom-3 col-span-3 lg:col-span-4 xl:col-span-4 flex justify-center'>
            <img className='' src={bannerImage} alt="" loading='lazy' />
          </div>
        </div>
        {/* Second Row */}
        <div className="flex flex-wrap items-center space-y-8 lg:space-y-0 justify-between text-3xl xl:text-4xl text-red font-bold">

          <a className='basis-12/12 lg:w-[16.1em] transition-colors duration-300 ease-out hover:text-white' href='https://p2prights.org/donate.html' target='__blank'>donate to official samourai legal defense fund</a>


          <img src={decoration1} alt="" className='hidden xl:block w-10' loading='lazy' />
          <div className='flex flex-col gap-6 lg:w-[12em]'>
            <a className='transition-colors duration-300 ease-out hover:text-white' href='https://blog.ronindojo.io/samourai-defense-fund/' target='__blank'>samourai defense fund</a>
            <img src={decoration2} alt="" className='w-60 sm:w-80' loading='lazy' />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Donate