import { Button } from "@/components/ui/button";
import { ArrowRight, Award, CheckCircle, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Онлайн-обучение для всех
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Мастер-класс <span className="gradient-text">«Профессия будущего»</span>
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Станьте востребованным специалистом всего за 8 недель обучения с гарантией трудоустройства
            </p>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Button asChild size="lg" className="gap-2">
                <Link to="/signup">
                  Записаться на курс <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/program">Узнать подробнее</Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((id) => (
                  <div
                    key={id}
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-background overflow-hidden"
                  >
                    <img
                      src={`/placeholder.svg`}
                      alt="Аватар пользователя"
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">500+</span> выпускников уже работают в профессии
              </div>
            </div>
          </div>
          <div className="relative lg:pl-6">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src="/placeholder.svg"
                alt="Онлайн обучение"
                className="object-cover w-full h-[350px] sm:h-[450px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-background/90 backdrop-blur-sm p-3 rounded-lg">
                    <Users className="h-6 w-6 text-primary mb-2" />
                    <div className="text-sm font-medium">Живая поддержка</div>
                  </div>
                  <div className="bg-background/90 backdrop-blur-sm p-3 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-primary mb-2" />
                    <div className="text-sm font-medium">Гарантия результата</div>
                  </div>
                  <div className="bg-background/90 backdrop-blur-sm p-3 rounded-lg">
                    <Award className="h-6 w-6 text-primary mb-2" />
                    <div className="text-sm font-medium">Сертификат</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
