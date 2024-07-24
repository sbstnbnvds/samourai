import decoration1 from '../assets//images/Merch/decoration-1.svg'
import decoration2 from '../assets//images/Merch/decoration-2.svg'

const Merch = () => {
  return (
    <section className="container mx-auto mb-8">
      {/* Title */}
      <div className="flex mb-8">
        <img src={decoration1} alt="" className='me-10 w-56' />
        <div className='relative grow self-center'>
          <h2 className="pt-3 pb-10 ps-4 font-sans text-8xl text-red uppercase border-b-2 border-t-2 border-white">Merch</h2>
          <img src={decoration2} alt="" className='absolute bottom-1 end-4 h-36' />
        </div>
      </div>
      {/* Merch Row */}
      <div className="flex items-center gap-x-4">

        <div className='aspect-square basis-6/12 relative p-1'>
          <div className='border-2 h-full'>
            <img src={decoration1} className='w-full h-full' alt="" />
          </div>
          {/* Frame Decorations */}
          <div className='w-14 h-2.5 bg-white absolute top-0 left-0' />
          <div className='w-14 h-2.5 bg-white absolute top-0 right-0' />
          <div className='w-14 h-2.5 bg-white absolute bottom-0 left-0' />
          <div className='w-14 h-2.5 bg-white absolute bottom-0 right-0' />


          <div className='h-14 w-2.5 bg-white absolute top-0 left-0' />
          <div className='h-14 w-2.5 bg-white absolute top-0 right-0' />
          <div className='h-14 w-2.5 bg-white absolute bottom-0 left-0' />
          <div className='h-14 w-2.5 bg-white absolute bottom-0 right-0' />


        </div>
        <div className='aspect-video basis-6/12 relative p-1'>
          <div className='border-2 h-full'>
            <img src={decoration1} className='w-full h-full' alt="" />
          </div>
          {/* Frame Decorations */}
          <div className='w-14 h-2.5 bg-white absolute top-0 left-0' />
          <div className='w-14 h-2.5 bg-white absolute top-0 right-0' />
          <div className='w-14 h-2.5 bg-white absolute bottom-0 left-0' />
          <div className='w-14 h-2.5 bg-white absolute bottom-0 right-0' />


          <div className='h-14 w-2.5 bg-white absolute top-0 left-0' />
          <div className='h-14 w-2.5 bg-white absolute top-0 right-0' />
          <div className='h-14 w-2.5 bg-white absolute bottom-0 left-0' />
          <div className='h-14 w-2.5 bg-white absolute bottom-0 right-0' />


        </div>
      </div>


    </section>
  )
}

export default Merch