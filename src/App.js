import logo from './logo.svg';
import './App.css';
import Nave from './components/Nave';
import img1 from "./images/ban_img.png";
import shoes from "./images/shoes.png";
import under from "./images/underwear.png";
import pent1 from "./images/pent.png";
import tshirt1 from "./images/t_shart.png";
import jket1 from "./images/jakit.png";
import helmit from "./images/helbet.png";
import shoe1 from "./images/shoes1.png";
import shoe2 from "./images/shoes2.png";
import shoe3 from "./images/shoes3.png";
import shoe4 from "./images/shoes4.png";
import shoe5 from "./images/shoes5.png";
import shirt1 from "./images/tisat1.png";
import shirt2 from "./images/tisat2.png";
import shirt3 from "./images/tisat3.png";
import shirt4 from "./images/tisat4.png";
import shirt5 from "./images/tisat5.png";
import mobile1 from "./images/mix1.png";
import mobile2 from "./images/mix2.png";
import mobile3 from "./images/mix3.png";
import mobile4 from "./images/mix4.png";
import mobile5 from "./images/mix5.png";
import banner from "./images/banner.jpg";


function App() {
  return (
    <section className='sec1'>
      <div className='flex justify-center gap-72 bg-gray-200 h-20'>
        <div className='flex pt-6 gap-2 '>
          <p className='text-blue-800 text-xl'><i class="fa-solid fa-phone"> </i></p>
          <p className='underline text-xl cursor-pointer'>call us 0n:03112209977</p>
        </div>
        <div className='text-4xl flex gap-5 text-blue-800 pt-5 justify-around cursor-pointer '>
          <p className=' hover:text-yellow-500'><i class="fa-brands fa-facebook"></i></p>
          <p className=' hover:text-yellow-500'><i class="fa-brands fa-twitter"></i></p>
          <p className=' hover:text-yellow-500'> <i class="fa-brands fa-linkedin"></i></p>
          <p className=' hover:text-yellow-500'><i class="fa-brands fa-youtube"></i></p>
        </div>
        <div className='flex pt-6 gap-2'>
          <button className='bg-blue-800 w-20 rounded-3xl text-white mb-5'>click</button>
          <p className='text-xl'>open hour:10,00-18:00</p>
        </div>
      </div>


      <div className='flex justify-center gap-72 h-20 mt-10'>
        <div className='flex text-xl gap-2 '>
          <p className='text-blue-800 text-1xl'>  <i class="fa-solid fa-envelope"></i></p>

          <p className='underline'>@aliyanrahmat.com</p>
        </div>
        <div className='text-6xl capitalize font-bold'>
          <h1 className='text-blue-800'>r<span className='text-yellow-300'>o</span>m<span className='text-yellow-300'>o</span >f<span className='text-yellow-300'>y</span>a</h1>
        </div>
        <div className=' flex gap-8'>
          <p className='text-5xl text-blue-800 '><i class="fa-solid fa-bag-shopping"></i></p>
          <button className='bg-blue-800 w-32 h-10 mt-3 rounded-3xl text-white'>shop now</button>
        </div>
      </div>


      <div className='flex justify-center gap-20 bg-blue-800 h-20 w-full'>
        <ul className='flex gap-10 mt-6 text-2xl text-white capitalize'>
          <li>home</li>
          <li>about</li>
          <li>products</li>
          <li>fashion</li>
          <li>news</li>
          <li>contact us</li>

        </ul>
        <input className='h-7 w-72 rounded-3xl mt-7 pl-2' placeholder='search here'></input>
      </div>

      {/* section three starts */}
      <div className='mt-10 flex justify-center gap-40 '>
        <div className='capitalize mt-10'>
          <h1 className='text-7xl font-black text-blue-800'>romofya</h1><br /><br />
          <h1 className='text-yellow-400 text-8xl font-medium'>trends 2045</h1><br /> <br />
          <h1 className='text-3xl font-medium'>a huge fashion collection for every one</h1><br/><br/>
          <button className='bg-blue-800 w-32 h-12 rounded-3xl text-white text-2xl'>shop now</button>
        </div>
        <div className=' '>
        <img src={img1} className='h-[75vh] w-96'/>

        </div>

      </div>


      <div className='flex capitalize'>
        <div className='bg-blue-800 h-40 w-[20%] '>
          <img src={shoes} className='h-32 w-32 ml-12'/>
          <p className='text-white text-center text-3xl'>shoes</p>
        </div>
        <div className='bg-yellow-400 h-40 w-[20%] '>
          <img src={under} className='h-32 w-32 ml-12'/>
          <p className='text-white text-center text-3xl'>underwear</p>
        </div>
        <div className='bg-blue-800 h-40 w-[20%] '>
          <img src={pent1} className='h-32 w-32 ml-12'/>
          <p className='text-white text-center text-3xl'>pent</p>
        </div>
        <div className='bg-yellow-400 h-40 w-[20%] '>
          <img src={tshirt1} className='h-32 w-32 ml-12'/>
          <p className='text-white text-center text-3xl'>Tshirt</p>
        </div>
        <div className='bg-blue-800 h-40 w-[20%] '>
          <img src={jket1} className='h-32 w-32 ml-12'/>
          <p className='text-white text-center text-3xl'>jakit</p>
        </div>
        <div className='bg-yellow-400 h-40 w-[20%] '>
          <img src={helmit} className='h-32 w-32 ml-12'/>
          <p className='text-white text-center text-3xl'>helmit</p>
        </div>
       
      </div>

  
  <div className='mt-10' >
          <h1 className='text-5xl capitalize ml-20 font-bold'>feature products</h1>
           <hr className='ml-20 h-2 bg-yellow-400 mt-5'/>
        
        </div>
      <div className='h-96 flex justify-center gap-10 mt-20'>
        <div className='bg-gray-300 h-60 w-52 pt-4'>
          <img src={shoe1} className='h-36 w-36 m-8'/>
          <p className='mt-14 '>short openwork cardiagon $17.500 </p>
        </div>
        <div className='bg-gray-300 h-60 w-52 pt-4'>
          <img src={shoe2} className='h-36 w-36 m-8'/>
          <p className='mt-14 '>short openwork cardiagon $18.800 </p>
        </div>
        <div className='bg-gray-300 h-60 w-52 pt-4'>
          <img src={shoe3} className='h-36 w-36 m-8'/>
          <p className='mt-14 '>short openwork cardiagon $15.600 </p>
        </div>
        <div className='bg-gray-300 h-60 w-52 pt-4'>
          <img src={shoe4} className='h-36 w-36 m-8'/>
          <p className='mt-14 '>short openwork cardiagon $18.80 </p>
        </div>
        <div className='bg-gray-300 h-60 w-52 pt-4'>
          <img src={shoe5} className='h-36 w-36 m-8'/>
          <p className='mt-14 '>short openwork cardiagon $120.800 </p>
        </div>
      </div>

      <div className='h-96 flex justify-center gap-10'>
        <div className='bg-gray-300 h-60 w-52 pt-4'>
          <img src={shirt1} className='h-36 w-36 m-8'/>
          <p className='mt-14 '>short openwork cardiagon $17.500 </p>
        </div>
        <div className='bg-gray-300 h-60 w-52 pt-4'>
          <img src={shirt2} className='h-36 w-36 m-8'/>
          <p className='mt-14 '>short openwork cardiagon $18.800 </p>
        </div>
        <div className='bg-gray-300 h-60 w-52 pt-4'>
          <img src={shirt3} className='h-36 w-36 m-8'/>
          <p className='mt-14 '>short openwork cardiagon $15.600 </p>
        </div>
        <div className='bg-gray-300 h-60 w-52 pt-4'>
          <img src={shirt4} className='h-36 w-36 m-8'/>
          <p className='mt-14 '>short openwork cardiagon $18.80 </p>
        </div>
        <div className='bg-gray-300 h-60 w-52 pt-4'>
          <img src={shirt5} className='h-36 w-36 m-8'/>
          <p className='mt-14 '>short openwork cardiagon $120.800 </p>
        </div>
      </div>

      <div className='h-96 flex justify-center gap-10'>
        <div className='bg-gray-300 h-60 w-52 pt-4'>
          <img src={mobile1} className='h-36 w-36 m-8'/>
          <p className='mt-14 '>short openwork cardiagon $17.500 </p>
        </div>
        <div className='bg-gray-300 h-60 w-52 pt-4'>
          <img src={mobile2} className='h-36 w-36 m-8'/>
          <p className='mt-14 '>short openwork cardiagon $18.800 </p>
        </div>
        <div className='bg-gray-300 h-60 w-52 pt-4'>
          <img src={mobile3} className='h-36 w-36 m-8'/>
          <p className='mt-14 '>short openwork cardiagon $15.600 </p>
        </div>
        <div className='bg-gray-300 h-60 w-52 pt-4'>
          <img src={mobile4} className='h-36 w-36 m-8'/>
          <p className='mt-14 '>short openwork cardiagon $18.80 </p>
        </div>
        <div className='bg-gray-300 h-60 w-52 pt-4'>
          <img src={mobile5} className='h-36 w-36 m-8'/>
          <p className='mt-14 '>short openwork cardiagon $120.800 </p>
        </div>

        
      </div>
      <div className='justify-center text-center'> <button className='bg-blue-800 w-32 h-10 rounded-3xl text-white mb-5'>see more</button></div>
     

      <Nave/>
    </section>
  );
}

export default App;
