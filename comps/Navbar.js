import Link from "next/link"
import Image from 'next/Image'

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/next-js.svg" width={128} height={77}/>
            </div>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/demo/"><a>Users</a></Link>

        </nav>
     );
}
 
export default Navbar;