// Sparkle
import sparkle from '../assets/images/Donate/decoration-1.png'
// Window Icons
import windowIcons from '../assets/images/Donate/player-window-icons.svg'
// Decoration
import decoration1 from '../assets/images/Resources/decoration-1.svg';
import decoration2 from '../assets/images/Resources/decoration-2.svg';
import decoration3 from '../assets/images/Resources/decoration-3.svg';
import decoration4 from '../assets/images/Resources/decoration-4.svg';

const Resources = () => {
  return (
    <section className="container mx-auto pb-28" id='resources'>
      {/* Title */}
      <div className="flex justify-center items-center gap-x-2 mb-6">
        <img src={sparkle} alt="" className='h-32' />
        <h2 className="font-sans text-8xl text-red font-bold uppercase">resources</h2>
        <img src={sparkle} alt="" className='h-32' />
      </div>

      <div className='px-12'>

        {/* First Row */}
        <div className='flex items-center mb-16'>
          <div className="basis-8/12 me-20">
            {/* Content Box */}
            <div className='px-0.5 py-0.5 2 mb-0 text-black bg-white'>
              {/* Samourai Wallet */}
              <div className="flex justify-between mb-1 px-2">
                <p className="font-mono text-3xl basis-auto font-black">Samourai Wallet</p>
                <div className='basis-2/12 block self-center' alt="" >
                  <img src={windowIcons} alt="" />
                </div>
              </div>
              {/* Content */}
              <div className='bg-black text-white'>
                <ul className='ms-4 pe-2 h-[28rem] text-3xl font-mono overflow-y-scroll'>
                  <li className='py-6 pt-2'>
                    <a className='block' href="">
                      Samurai Indictment & FBI Notice are an Assault on Bitcoin and Privacy
                    </a>
                  </li>
                  <li className='py-6 border-t-2'>
                    <a className='block' href="">
                      Samurai Indictment & FBI Notice are an Assault on Bitcoin and Privacy
                    </a>
                  </li>
                  <li className='py-6 border-t-2'>
                    <a className='block' href="">
                      Samurai Indictment & FBI Notice are an Assault on Bitcoin and Privacy
                    </a>
                  </li>
                  <li className='py-8 border-t-2'>
                    <a className='block' href="">
                      Samurai Indictment & FBI Notice are an Assault on Bitcoin and Privacy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='basis-auto'>
            <img src={decoration1} alt="" className='w-52' loading='lazy' />
          </div>
        </div>
        {/* Second Row */}
        <div className='flex items-center justify-end mb-16'>
          <div className='basis-auto'>
            <img src={decoration2} alt="" className='w-64' loading='lazy' />
          </div>

          <div className="basis-8/12 ms-20">
            {/* Content Box */}
            <div className='px-0.5 py-0.5 2 mb-0 text-black bg-white'>
              {/* Sentinel */}
              <div className="flex justify-between mb-1 px-2">
                <p className="font-mono font-black text-3xl basis-auto">Sentinel</p>
                <div className='basis-2/12 block self-center' alt="" >
                  <img src={windowIcons} alt="" />
                </div>
              </div>
              {/* Content */}
              <div className='bg-black text-white'>
                <ul className='ms-4 pe-2 h-[28rem] text-3xl font-mono overflow-y-scroll'>
                  <li className='py-6 pt-2'>
                    <a className='block' href="">
                      Samurai Indictment & FBI Notice are an Assault on Bitcoin and Privacy
                    </a>
                  </li>
                  <li className='py-6 border-t-2'>
                    <a className='block' href="">
                      Samurai Indictment & FBI Notice are an Assault on Bitcoin and Privacy
                    </a>
                  </li>
                  <li className='py-6 border-t-2'>
                    <a className='block' href="">
                      Samurai Indictment & FBI Notice are an Assault on Bitcoin and Privacy
                    </a>
                  </li>
                  <li className='py-8 border-t-2'>
                    <a className='block' href="">
                      Samurai Indictment & FBI Notice are an Assault on Bitcoin and Privacy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>


        </div>
        {/* Third Row */}
        <div className='flex items-center mb-16'>
          <div className="basis-8/12 me-20">
            {/* Content Box */}
            <div className='px-0.5 py-0.5 2 mb-0 text-black bg-white'>
              {/* Dojo */}
              <div className="flex justify-between mb-1 px-2">
                <p className="font-mono text-3xl basis-auto font-black">Dojo</p>
                <div className='basis-2/12 block self-center' alt="" >
                  <img src={windowIcons} alt="" />
                </div>
              </div>
              {/* Content */}
              <div className='bg-black text-white'>
                <ul className='ms-4 pe-2 h-[28rem] text-3xl font-mono overflow-y-scroll'>
                  <li className='py-6 pt-2'>
                    <a className='block' href="">
                      Samurai Indictment & FBI Notice are an Assault on Bitcoin and Privacy
                    </a>
                  </li>
                  <li className='py-6 border-t-2'>
                    <a className='block' href="">
                      Samurai Indictment & FBI Notice are an Assault on Bitcoin and Privacy
                    </a>
                  </li>
                  <li className='py-6 border-t-2'>
                    <a className='block' href="">
                      Samurai Indictment & FBI Notice are an Assault on Bitcoin and Privacy
                    </a>
                  </li>
                  <li className='py-8 border-t-2'>
                    <a className='block' href="">
                      Samurai Indictment & FBI Notice are an Assault on Bitcoin and Privacy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='basis-auto'>
            <img src={decoration3} alt="" className='w-64' loading='lazy' />
          </div>
        </div>
        {/* Fourth Row */}
        <div className='flex items-center justify-end mb-16'>
          <div className='basis-auto'>
            <a className='font-stranger font-extralight text-7xl text-red ease-out hover:text-white transition-color duration-300 rotate-180' href='https://ronindojo.io/freesamourai/' target='__blank' 
            style={{"writingMode":"vertical-lr"}}>#freesamourai</a>
          </div>
          <div className="basis-8/12 ms-20">
            {/* Content Box */}
            <div className='px-0.5 py-0.5 2 mb-0 text-black bg-white'>
              {/* RoninDojo */}
              <div className="flex justify-between mb-1 px-2">
                <p className="font-mono text-3xl basis-auto font-black">RoninDojo</p>
                <div className='basis-2/12 block self-center' alt="" >
                  <img src={windowIcons} alt="" />
                </div>
              </div>
              {/* Content */}
              <div className='bg-black text-white'>
                <ul className='ms-4 pe-2 text-3xl font-mono overflow-y-scroll'>
                  <li className='py-6 pt-2'>
                    <a className='block' href="">
                      Samurai Indictment & FBI Notice are an Assault on Bitcoin and Privacy
                    </a>
                  </li>
                  <li className='py-6 border-t-2'>
                    <a className='block' href="">
                      Samurai Indictment & FBI Notice are an Assault on Bitcoin and Privacy
                    </a>
                  </li>
                  <li className='py-6 border-t-2'>
                    <a className='block' href="">
                      Samurai Indictment & FBI Notice are an Assault on Bitcoin and Privacy
                    </a>
                  </li>
                  <li className='py-8 border-t-2'>
                    <a className='block' href="">
                      Samurai Indictment & FBI Notice are an Assault on Bitcoin and Privacy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Fifth Row */}
        <div className='flex items-center mb-16'>
          <div className="basis-8/12">
            {/* Content Box */}
            <div className='px-0.5 py-0.5 2 mb-0 text-black bg-white'>
              {/* PayNyms */}
              <div className="flex justify-between mb-1 px-2">
                <p className="font-mono text-3xl basis-auto font-black">PayNyms</p>
                <div className='basis-2/12 block self-center' alt="" >
                  <img src={windowIcons} alt="" />
                </div>
              </div>
              {/* Content */}
              <div className='bg-black text-white'>
                <ul className='ms-4 pe-2 h-[28rem] text-3xl font-mono overflow-y-scroll'>
                  <li className='py-6 pt-2'>
                    <a className='block' href="">
                      Samurai Indictment & FBI Notice are an Assault on Bitcoin and Privacy
                    </a>
                  </li>
                  <li className='py-6 border-t-2'>
                    <a className='block' href="">
                      Samurai Indictment & FBI Notice are an Assault on Bitcoin and Privacy
                    </a>
                  </li>
                  <li className='py-6 border-t-2'>
                    <a className='block' href="">
                      Samurai Indictment & FBI Notice are an Assault on Bitcoin and Privacy
                    </a>
                  </li>
                  <li className='py-8 border-t-2'>
                    <a className='block' href="">
                      Samurai Indictment & FBI Notice are an Assault on Bitcoin and Privacy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='basis-auto relative -left-16 -z-50'>
            <img src={decoration4} alt="" className='w-80' loading='lazy' />
          </div>
        </div>  
      </div>

    </section>
  )
}

export default Resources