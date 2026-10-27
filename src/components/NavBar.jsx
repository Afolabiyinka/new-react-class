import { Search, User, Heart, ShoppingBag } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center p-4 w-full shadow">
      {/* Logo */}
      <h1 className="text-3xl font-bold">Flone.</h1>

      {/* Navlinks */}
      <div className="space-x-6">
        <a href="/https://tailwindcss.com/docs/display#inline-flex">Home</a>
        <a href="/Shop">Shop</a>
        <a href="/Shop">Collection</a>
        <a href="/Shop">Pages</a>
        <a href="/Shop">Blog</a>
        <a href="/Shop">About </a>
        <a href="/Shop">Contact</a>
      </div>

      {/* NavIcons */}

      <div className="flex items-center gap-4">
        <Search />
        <User />
        <Heart />
        <ShoppingBag />
      </div>
    </nav>
  );
};

export default NavBar;
