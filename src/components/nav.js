import Image from 'next/image'
import Menus from '../pics/menu.png'
import Kfc from '../pics/kfc.png'
import Bucket from '../pics/bucket.svg'
export default function Nav() {
    return (
        <nav className="bg-black text-white h-44" >
        <div className="flex justify-between pl-20 pr-20 h-24 py-2 " >
            <div className="flex  justify-center items-center gap-4	" >
                <div className='' ><Image className='h-10 w-10'  src={Menus} /></div>
                <div className=''><Image src={Kfc} /></div>
                <div className=''><button>Delivery</button></div>
                <div ><button>pickup</button></div>
            </div>
            <div className="flex  justify-center items-center gap-4	" >
                <div className=''> <Image src={Bucket} /></div>
                <div><button>login</button></div>
            </div>
        </div>
        <div className='flex justify-center items-center gap-4 h-14' >
            <a className='px-3 py-3' >EveryDay Value</a>
            <a className='px-3 py-3' >Ala-Carte-&-Combos</a>
            <a className='px-3 py-3' >Signature-Boxes</a>
            <a className='px-3 py-3' >Sharing</a>
            <a className='px-3 py-3' >Snacks-&-Beverages</a>
            <a className='px-3 py-3' >Midnight (Start at 12 am)</a>
        </div>
        </nav>

    )
}

