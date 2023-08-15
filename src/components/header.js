import Nav from '@/components/nav' 
export default function Header(){
    return(
        
        <div className='bg-black text-white'>
            <Nav/>
         <div className='flex justify-center items-center gap-4 p-4 pb-8' >
            <a className='px-3 py-3' >EveryDay Value</a>
            <a className='px-3 py-3' >Ala-Carte-&-Combos</a>
            <a className='px-3 py-3' >Signature-Boxes</a>
            <a className='px-3 py-3' >Sharing</a>
            <a className='px-3 py-3' >Snacks-&-Beverages</a>
            <a className='px-3 py-3' >Midnight (Start at 12 am)</a>
        </div>
        </div>
    )
}