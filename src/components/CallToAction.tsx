import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Готовы начать свой путь к новой профессии?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Запишитесь на курс сегодня и получите скидку 20% и бонусный модуль по актуальным инструментам
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" variant="secondary" className="gap-2">
              <Link to="/signup">
                Записаться на курс <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/demo">Попробовать бесплатно</Link>
            </Button>
          </div>
          <p className="text-sm opacity-80 pt-4">
            Старт ближайшего потока 15 сентября · Осталось 12 мест из 30
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
