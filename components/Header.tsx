import Social from 'chungguo/components/Social';
import Avatar from 'chungguo/components/Avatar';

export default function Header() {
  return (
    <header className="w-full h-16 top-0 z-40 flex bg-white border-b">
      <Avatar />
      <Social styleNames="justify-end flex-1 hidden md:flex" />
    </header>
  )
}
