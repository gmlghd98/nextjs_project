import Link from "next/link";

const linkStyle = {
  marginRight: 15,
};

const Navbar = () => {
  return (
    <>
      <Link href="/">
        <button className="font-bold bg-red-200">Home</button>
      </Link>
      &emsp;
      <Link href="/about">
        <button className="font-bold bg-blue-300">About</button>
      </Link>
      &emsp;
      <Link href="/blog">
        <button className="font-bold bg-green-400">Blog</button>
      </Link>
      &emsp;
      <Link href="/posts/5">
        <button className="font-bold bg-orange-200">Post</button>
      </Link>
      &emsp;
      <Link href="/readmore">
        <button className="font-bold">Readmore</button>
      </Link>
      &emsp;
      <Link href="/pagetest">
        <button className="font-bold bg-indigo-200">Test</button>
      </Link>
    </>
  );
};

export default Navbar;
