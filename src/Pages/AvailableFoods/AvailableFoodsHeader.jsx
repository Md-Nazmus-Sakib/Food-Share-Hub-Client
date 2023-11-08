
import bgImg from '../../assets/images/Login/register1.jpg'
import { FaSearch } from 'react-icons/fa';

const AvailableFoodsHeader = ({ handelSearch, searchInputRef }) => {

    return (
        <div className='w-full h-[600px] flex justify-center items-center p-2' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)),url(${bgImg})`, backgroundSize: "cover" }} >
            <div className='relative md:w-1/2 lg:w-1/3'>
                <div className=' pb-14'>
                    <h1 className='text-5xl text-white font-extrabold tracking-wide'>Share More,  <span className='text-orange-500'>Waste Less</span></h1>
                    <p className='text-white my-4'>Best waste with us for finding what you need and  sharing what you don's with local people.</p>

                </div>
                <div className="absolute bottom-0 w-full ">
                    <input className='w-full rounded-xl  relative pr-10' name='search' type="text" placeholder="Search" ref={searchInputRef} />
                    <button onClick={handelSearch} className='text-green-500 absolute top-1/3 overflow-hidden right-5'><FaSearch></FaSearch></button>


                </div>
            </div>

        </div>
    );
};

export default AvailableFoodsHeader;