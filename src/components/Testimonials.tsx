import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface TestimonialProps {
  name: string;
  position: string;
  content: string;
  rating: number;
}

const Testimonial = ({ name, position, content, rating }: TestimonialProps) => {
  return (
    <Card className="border-0 shadow-none h-full">
      <CardContent className="p-6 h-full flex flex-col">
        <div className="flex gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-muted"}`}
            />
          ))}
        </div>
        <blockquote className="flex-1 mb-4 text-base sm:text-lg">
          "{content}"
        </blockquote>
        <footer>
          <div className="font-medium">{name}</div>
          <div className="text-sm text-muted-foreground">{position}</div>
        </footer>
      </CardContent>
    </Card>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Алексей Петров",
      position: "Выпускник, сейчас работает в IT-компании",
      content: "Курс превзошел все мои ожидания. Преподаватели объясняют сложные концепции простым языком, а практические задания помогли закрепить знания и создать портфолио. Уже через месяц после окончания я получил работу мечты!",
      rating: 5
    },
    {
      name: "Мария Иванова",
      position: "Сменила профессию после курса",
      content: "До курса я работала в совершенно другой сфере. Благодаря структурированной программе и поддержке наставников я смогла освоить новую профессию с нуля. Процесс обучения был интенсивным, но очень интересным.",
      rating: 5
    },
    {
      name: "Дмитрий Сидоров",
      position: "Повысил квалификацию",
      content: "Я уже имел базовые знания, но хотел структурировать и углубить их. Этот курс идеально подошел для моих целей. Особенно ценными оказались продвинутые модули и обратная связь от экспертов индустрии.",
      rating: 4
    },
    {
      name: "Елена Смирнова",
      position: "Начала собственный проект",
      content: "После окончания курса я не только получила предложения о работе, но и решила запустить собственный проект. Знания и навыки, полученные на курсе, оказались бесценными в предпринимательской деятельности.",
      rating: 5
    },
    {
      name: "Игорь Козлов",
      position: "Работает в международной компании",
      content: "Благодаря этому курсу я смог пройти собеседование в международную компанию. Особенно полезными оказались модули по современным технологиям и практике прохождения интервью. Рекомендую всем, кто хочет развиваться!",
      rating: 5
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Истории успеха наших выпускников
          </h2>
          <p className="text-muted-foreground md:text-lg max-w-3xl mx-auto">
            Более 90% наших выпускников успешно трудоустраиваются в течение 3 месяцев после окончания курса
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 h-auto">
                <Testimonial {...testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="static transform-none mr-2" />
            <CarouselNext className="static transform-none" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
