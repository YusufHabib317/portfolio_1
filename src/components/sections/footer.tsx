import Link from 'next/link';
import ArrowUpRight from '@/assets/icons/arrow-up-right.svg';

export function Footer() {
  return (
    <footer className="relative overflow-x-clip -z-10  pointer-events-none">
      <div className="absolute h-[1400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2
      [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]
      bg-emerald-300/30 -z-10"
      />
      <div className="container">
        <div className="border-t border-white/15 py-6 flex gap-8 text-sm flex-col md:flex-row md:justify-between">
          <div className="text-white/40 text-center">&copy; 2025 All Right Not Reserved</div>
          <nav className="flex flex-col items-center gap-8 md:flex-row justify-between">
            <Link href="/" className="inline-flex items-center gap-1.5">
              <span className="font-semibold">Youtube</span>
              <ArrowUpRight className="size-4" />
            </Link>
            <Link href="/" className="inline-flex items-center gap-1.5">
              <span className="font-semibold">Twitter</span>
              <ArrowUpRight className="size-4" />
            </Link>
            <Link href="/" className="inline-flex items-center gap-1.5">
              <span className="font-semibold">Instagram</span>
              <ArrowUpRight className="size-4" />
            </Link>
            <Link href="/" className="inline-flex items-center gap-1.5">
              <span className="font-semibold">LinkedIn</span>
              <ArrowUpRight className="size-4" />
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
