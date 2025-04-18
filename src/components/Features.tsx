import {
  BookOpen,
  BrainCircuit,
  Calendar,
  Certificate,
  Headphones,
  LucideIcon,
  MessageSquare,
  Users2
} from "lucide-react";

interface FeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const Feature = ({ icon: Icon, title, description }: FeatureProps) => {
  return (
    <div className="flex flex-col items-center text-center p-6 space-y-4 rounded-lg border bg-card hover:shadow-md transition-all">
      <div className="p-3 rounded-full bg-primary/10">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-medium">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Структурированная программа",
      description: "Пошаговое обучение с четкой последовательностью тем и практических заданий"
    },
    {
      icon: Users2,
      title: "Опытные преподаватели",
      description: "Обучение ведут эксперты-практики с многолетним опытом работы в индустрии"
    },
    {
      icon: BrainCircuit,
      title: "Практические навыки",
      description: "80% курса составляет практика на реальных проектах с обратной связью"
    },
    {
      icon: Calendar,
      title: "Гибкий график",
      description: "Занимайтесь в удобное время, все материалы доступны в записи 24/7"
    },
    {
      icon: MessageSquare,
      title: "Сообщество студентов",
      description: "Закрытый чат для обмена опытом, нетворкинга и взаимопомощи"
    },
    {
      icon: Certificate,
      title: "Сертификат по окончании",
      description: "Подтверждение ваших навыков для работодателей и портфолио"
    },
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Преимущества нашего курса
          </h2>
          <p className="text-muted-foreground md:text-lg max-w-3xl mx-auto">
            Создан с учетом актуальных требований рынка и потребностей студентов
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
