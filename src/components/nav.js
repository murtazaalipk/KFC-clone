import Image from 'next/image'
import Menus from '../pics/menu.png'
import Kfc from '../pics/kfc.png'
import Bucket from '../pics/bucket.svg'
export default function Nav() {
    return (
        <nav className="flex justify-between h-24 bg-black text-white " >
            <div className="flex pl-20 justify-center items-center	" >
                <div className='pr-6 ' ><Image className='h-10 w-10'  src={Menus} /></div>
                <div className='pr-6'><Image src={Kfc} /></div>
                <div className='pr-6'><button>Delivery</button></div>
                <div ><button>pickup</button></div>
            </div>
            <div className="flex pr-20 justify-center items-center	" >
                <div className='pr-6'> <Image src={Bucket} /></div>
                <div><button>login</button></div>
            </div>

        </nav>

    )
}

