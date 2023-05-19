import banner1 from '../../../Images/banner/Banner 1.png'
import banner2 from '../../../Images/banner/banner2.jpg'
import banner3 from '../../../Images/banner/banner3.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img className='w-full rounded-lg' src={banner1} alt="" />

    <div className="absolute flex rounded-xl items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">

<div className='text-white space-y-7 pl-20 w-1/2'>
    <h2 className='text-6xl font-bold'>Embark on a Safari of Playful Animal Toys</h2>
    <p>Create memorable moments of laughter and learning with our range of lovable animal toys</p>
    <div className="flex gap-2">

        <button className="btn btn-outline btn-secondary">Browse Our Toys</button>
        <button className="btn btn-outline btn-accent">Join Our Community</button>
    </div>
</div>

</div>

    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={banner2} className="w-full rounded-lg" />
    <div className="absolute flex rounded-xl items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
    <div className='text-white space-y-7 pl-20 w-1/2'>
    <h2 className='text-6xl font-bold'>Immerse in Animal Kingdom</h2>
    <p>Dive into a world of imagination and play with our wide range of animal-themed toys.</p>
    <div className="flex gap-2">

        <button className="btn btn-outline btn-secondary">Browse Our Toys</button>
        <button className="btn btn-outline btn-accent">Join Our Community</button>
    </div>
</div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={banner3} className="w-full rounded-lg" />
    <div className="absolute flex rounded-xl items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
    <div className='text-white space-y-7 pl-20 w-1/2'>
    <h2 className='text-6xl font-bold'>Buy Animal-themed Toys and Create  Memories</h2>
    <p>Unleash your imagination and embark on exciting journeys with our diverse collection of animal toys.</p>
    <div className="flex gap-2">

        <button className="btn btn-outline btn-secondary">Browse Our Toys</button>
        <button className="btn btn-outline btn-accent">Join Our Community</button>
    </div>
</div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 

  
    
    
  
</div>
    );
};

export default Banner;