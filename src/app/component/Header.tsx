import Link from "next/link";

export default function Header() {
  return (
    <div className="w-auto h-16 bg-red-500 flex justify-start pl-20 items-center text-xl font-mono">
      <ul className="flex gap-16 font-bold">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
}
