import Nav from '@/components/nav' 
export default function Header(){
    return(
        
        <div className='bg-black text-white'>
            <Nav/>
         <div className='flex justify-center items-center gap-4 p-4 pb-8' >
            <a className='px-3 py-3 bg-[#1c1816] rounded-[8px] cursor-pointer' >EveryDay Value</a>
            <a className='px-3 py-3 bg-[#1c1816] rounded-[8px] cursor-pointer' >Ala-Carte-&-Combos</a>
            <a className='px-3 py-3 bg-[#1c1816] rounded-[8px] cursor-pointer' >Signature-Boxes</a>
            <a className='px-3 py-3 bg-[#1c1816] rounded-[8px] cursor-pointer' >Sharing</a>
            <a className='px-3 py-3 bg-[#1c1816] rounded-[8px] cursor-pointer' >Snacks-&-Beverages</a>
            <a className='px-3 py-3 bg-[#1c1816] rounded-[8px] cursor-pointer' >Midnight (Start at 12 am)</a>
        </div>
        </div>
    )
}