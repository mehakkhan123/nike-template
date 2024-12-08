import Image from "next/image"
import Link from "next/link"

export default function Header(){
    return (
      <>
      <header className="w-full h-[36px] bg-[#F5F5F5] flex justify-between items-center px-6">
<Image src={"/images/Frame.png"} alt="logo" width={24} height={24} className="cursor-pointer"/>

<ul className="flex gap-6">
    <li className="border-r border-black pr-4"><Link href="">Find a Store</Link></li>
    <li className="border-r border-black pr-4"><Link href="">Help</Link></li>
    <li className="border-r border-black pr-4"><Link href="">Join Us</Link></li>
    <li className="pr-4"><Link href="">Sign In</Link></li>
</ul>
      </header>

      <nav className="w-full h-[60px] flex justify-between items-center">
        <Image src={"/images/logo.png"} alt="logo" width={78.74} height={78.74}/>

        <ul className="flex gap-6">
    <li className=""><Link href="">New & Featured</Link></li>
    <li className=""><Link href="">Men</Link></li>
    <li className=""><Link href="">Women</Link></li>
    <li className=""><Link href="">Kid</Link></li>
    <li className=""><Link href="">Sale</Link></li>
    <li className=""><Link href="">SNKRS</Link></li>

</ul>

<input type="search" placeholder="Search" />


      </nav>

      
      </>
    )
  }