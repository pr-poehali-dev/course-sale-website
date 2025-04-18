import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full py-4 bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo-b.svg" alt="Логотип" className="h-8 w-auto" />
          <span className="font-bold text-xl hidden sm:inline">ОнлайнАкадемия</span>
        </Link>

        {/* Десктопное меню */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="font-medium hover:text-primary transition-colors">
            Главная
          </Link>
          <Link to="/about" className="font-medium hover:text-primary transition-colors">
            О курсе
          </Link>
          <Link to="/program" className="font-medium hover:text-primary transition-colors">
            Программа
          </Link>
          <Link to="/reviews" className="font-medium hover:text-primary transition-colors">
            Отзывы
          </Link>
          <Button asChild>
            <Link to="/signup">Начать обучение</Link>
          </Button>
        </nav>

        {/* Мобильное меню */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu />
        </Button>
      </div>

      {/* Выпадающее мобильное меню */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[4.5rem] left-0 right-0 bg-background border-b shadow-lg z-50">
          <nav className="container flex flex-col py-4 gap-4">
            <Link 
              to="/"
              className="px-4 py-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/about"
              className="px-4 py-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              О курсе
            </Link>
            <Link 
              to="/program"
              className="px-4 py-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Программа
            </Link>
            <Link 
              to="/reviews"
              className="px-4 py-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Отзывы
            </Link>
            <Button asChild className="mt-2">
              <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                Начать обучение
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
