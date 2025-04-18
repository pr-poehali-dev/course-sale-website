import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Curriculum = () => {
  const modules = [
    {
      title: "Модуль 1: Основы профессии",
      duration: "2 недели",
      lessons: [
        "Введение в специальность",
        "Инструменты и технологии",
        "Основы теории и методологии",
        "Практический кейс: первые шаги"
      ]
    },
    {
      title: "Модуль 2: Углубленное изучение",
      duration: "2 недели",
      lessons: [
        "Продвинутые техники и подходы",
        "Работа с профессиональными инструментами",
        "Оптимизация рабочих процессов",
        "Практический кейс: комплексная задача"
      ]
    },
    {
      title: "Модуль 3: Профессиональная практика",
      duration: "3 недели",
      lessons: [
        "Работа над реальными проектами",
        "Совместная работа в команде",
        "Решение типовых задач индустрии",
        "Практический кейс: полноценный проект"
      ]
    },
    {
      title: "Модуль 4: Карьера и трудоустройство",
      duration: "1 неделя",
      lessons: [
        "Создание профессионального портфолио",
        "Стратегии поиска работы",
        "Прохождение собеседований",
        "Финальный проект и защита"
      ]
    }
  ];

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Программа обучения
          </h2>
          <p className="text-muted-foreground md:text-lg max-w-3xl mx-auto">
            Интенсивный 8-недельный курс, который подготовит вас к работе в профессии
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-5">
            <Accordion type="single" collapsible className="w-full">
              {modules.map((module, index) => (
                <AccordionItem key={index} value={`module-${index}`}>
                  <AccordionTrigger className="text-left">
                    <div className="flex flex-col items-start">
                      <div className="font-medium text-lg">{module.title}</div>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <Clock className="h-4 w-4 mr-1" />
                        {module.duration}
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 py-2">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <li key={lessonIndex} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="bg-muted p-5 rounded-lg">
              <h3 className="font-medium text-lg mb-2">По окончании курса вы сможете:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Самостоятельно выполнять профессиональные задачи</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Работать с современными инструментами и технологиями</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Имеете портфолио из реальных проектов</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Успешно проходить собеседования и начать карьеру</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-card p-6 rounded-xl border shadow-sm">
            <div className="space-y-5">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Запишитесь на курс</h3>
                <p className="text-muted-foreground">
                  Начало ближайшего потока: 15 сентября
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b">
                  <span>Стоимость обучения</span>
                  <span className="font-medium">39 900 ₽</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span>Длительность</span>
                  <span className="font-medium">8 недель</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span>Формат</span>
                  <span className="font-medium">Онлайн</span>
                </div>
                <div className="flex justify-between py-3">
                  <span>Доступ к материалам</span>
                  <span className="font-medium">12 месяцев</span>
                </div>
              </div>

              <div className="space-y-3 pt-3">
                <Button asChild className="w-full py-6 text-base">
                  <Link to="/signup">Записаться на курс</Link>
                </Button>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/demo">Пробный урок бесплатно</Link>
                </Button>
              </div>

              <div className="text-sm text-muted-foreground text-center">
                Возможна оплата в рассрочку без переплаты
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
