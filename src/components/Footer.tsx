import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo-b.svg" alt="Логотип" className="h-8 w-auto" />
              <span className="font-bold text-xl">ОнлайнАкадемия</span>
            </Link>
            <p className="text-muted-foreground">
              Образовательная платформа для профессионального и личностного роста
            </p>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Курс</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  О курсе
                </Link>
              </li>
              <li>
                <Link to="/program" className="text-muted-foreground hover:text-foreground transition-colors">
                  Программа обучения
                </Link>
              </li>
              <li>
                <Link to="/teachers" className="text-muted-foreground hover:text-foreground transition-colors">
                  Преподаватели
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-muted-foreground hover:text-foreground transition-colors">
                  Отзывы выпускников
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Информация</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  Частые вопросы
                </Link>
              </li>
              <li>
                <Link to="/payment" className="text-muted-foreground hover:text-foreground transition-colors">
                  Способы оплаты
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Блог
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-muted-foreground hover:text-foreground transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="text-muted-foreground">
                Email: <a href="mailto:info@onlineacademy.ru" className="hover:text-foreground transition-colors">info@onlineacademy.ru</a>
              </li>
              <li className="text-muted-foreground">
                Телефон: <a href="tel:+74951234567" className="hover:text-foreground transition-colors">+7 (495) 123-45-67</a>
              </li>
              <li>
                <div className="flex gap-4 mt-4">
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    <span className="sr-only">ВКонтакте</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M15.684 14.348h.673c.562 0 .732-.23.732-.534a4.79 4.79 0 00-.784-1.893c-.637-.776-.918-.918.382-2.816 0 0 1.137-1.99.884-2.627-.011-.257-.23-.511-.562-.511h-.673c-.765 0-.918.167-1.072.511-.48 1.002-1.339 2.465-1.699 2.295-.459-.216-.344-1.608-.344-2.348 0-.688.09-1.377-.23-1.377h-1.056c-1.494 0-2.77.215-3.343 1.58-.83 1.97.908 3.055 1.941 4.693.765 1.204 1.47 1.808 2.435 2.404 1.056.663 1.851.612 2.549.612 0 0 .318-.46.307-.706-.011-.663.267-1.039.86-1.282zm2.053-9.848A13.04 13.04 0 0012 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-1.52-.334-2.962-.932-4.255l-.33.755A8.97 8.97 0 0121 12a9 9 0 11-9-9c1.42 0 2.76.323 3.955.903l.782-.398z" />
                    </svg>
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    <span className="sr-only">Telegram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.56-1.39-.9-2.23-1.44-.98-.65-.35-1.01.21-1.59.15-.15 2.71-2.48 2.76-2.69.01-.05.01-.23-.11-.32-.11-.1-.32-.07-.45-.04-.19.04-3.12 1.98-3.93 2.7-.24.17-.46.25-.86.25-.47 0-1.37-.24-2.04-.42-.83-.22-1.49-.34-1.43-.87.03-.24.29-.49.81-.74.96-.48 2.01-.87 2.94-1.26 2.94-1.24 3.94-1.64 4.37-1.65.1 0 .32.02.46.1.27.17.35.56.3.89z" />
                    </svg>
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    <span className="sr-only">YouTube</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M23.5 6.17a3.05 3.05 0 00-2.12-2.12C19.62 3.36 12 3.36 12 3.36s-7.62 0-9.38.69a3.05 3.05 0 00-2.12 2.12C0 7.95 0 12 0 12s0 4.05.5 5.83a3.05 3.05 0 002.12 2.12c1.76.69 9.38.69 9.38.69s7.62 0 9.38-.69a3.05 3.05 0 002.12-2.12C24 16.05 24 12 24 12s0-4.05-.5-5.83zM9.54 15.53V8.47L15.82 12l-6.28 3.53z" />
                    </svg>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2023 ОнлайнАкадемия. Все права защищены.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
