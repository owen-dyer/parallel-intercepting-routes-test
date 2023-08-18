import Link from "next/link"

export default function Navbar() {
    return (
        <div className="w-full">
            <Link href={'/'}>
                Home
            </Link>
            <Link href={'/login'}>
                Login
            </Link>
            <Link href={'/signup'}>
                Signup
            </Link>
        </div>
    )
}