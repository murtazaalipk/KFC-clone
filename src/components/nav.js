import Image from 'next/image'
import Menus from '../pics/menu.png'
import Kfc from '../pics/kfc.png'
import Bucket from '../pics/bucket.svg'
export default function Nav() {
    return (
        <nav className="bg-black text-white p-4 m-0 " >
        <div className="flex justify-between pl-20 pr-20" >
            <div className="flex  justify-center items-center gap-4	" >
                <div className='px-3 py-3' ><Image className='h-10 w-10'  src={Menus} /></div>
                <div className='px-3 py-3'><Image src={Kfc} /></div>
                <div className='px-3 py-3 bg-[#1c1816] rounded-[8px] cursor-pointer border-2 border-[#ea002a]'><button>Delivery</button></div>
                <div className='px-3 py-3 bg-[#1c1816] rounded-[8px] cursor-pointer' ><button>pickup</button></div>
            </div>
            <div className="flex  justify-center items-center gap-4	" >
                <div className='px-3 py-3'> <Image src={Bucket} /></div>
                <div className='px-3 py-3 bg-[#ea002a] rounded-[8px] cursor-pointer'><button>login</button></div>
            </div>
        </div>
       
        </nav>

    )
}

