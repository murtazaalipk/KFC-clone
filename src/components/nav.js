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
                <div className='px-3 py-3'><button>Delivery</button></div>
                <div className='px-3 py-3' ><button>pickup</button></div>
            </div>
            <div className="flex  justify-center items-center gap-4	" >
                <div className='px-3 py-3'> <Image src={Bucket} /></div>
                <div className='px-3 py-3'><button>login</button></div>
            </div>
        </div>
       
        </nav>

    )
}

