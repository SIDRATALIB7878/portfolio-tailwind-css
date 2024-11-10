import Link from 'next/link'
// import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-white text-xl font-semibold">
          </Link>
          <div className="flex gap-8">
            <Link href="/" className="text-white hover:text-gray-300 transition">
              HOME
            </Link>
            <Link href="/about" className="text-white hover:text-gray-300 transition">
              ABOUT
            </Link>
            <Link href="/portfolio" className="text-white hover:text-gray-300 transition">
              PORTFOLIO
            </Link>
            <Link href="/contact" className="text-white hover:text-gray-300 transition">
              CONTACT
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div 
        className="min-h-screen relative flex items-center"
        style={{
          backgroundImage: "url('https://i.pinimg.com/originals/cd/6f/f9/cd6ff971a520f616465c6d066e645203.jpg?height=1080&width=1920')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl space-y-6">
            <p className="text-gray-300 text-xl">Hello,</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Portfolio
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
              Software Engineer
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl">
            Governor House IT Program
Currently pursuing a comprehensive Software Engineering course, with a focus on practical application and industry-relevant skills.

GIAIC (Global Institute of Artificial Intelligence and Computing)
Engaged in Web 3.0, Artificial Intelligence, and Metaverse courses, expanding my knowledge of cutting-edge technologies.
Frontend Development: HTML, CSS, JavaScript, TypeScript, Next.js
            </p>
          
          </div>
        </div>
      </div>
    </div>
  )
}