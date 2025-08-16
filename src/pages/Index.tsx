import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const directions = [
    {
      title: "Дети",
      description: "Помогаем детям понимать свои эмоции, развивать творческое мышление и строить здоровые отношения с окружающим миром",
      icon: "Heart",
      color: "bg-warm-cream border-warm-orange"
    },
    {
      title: "Подростки", 
      description: "Поддерживаем подростков в поиске себя, развитии самостоятельности и формировании здоровой самооценки",
      icon: "Users",
      color: "bg-warm-sage/20 border-warm-teal"
    },
    {
      title: "Родители",
      description: "Обучаем родителей эффективному общению с детьми, пониманию их потребностей и созданию гармоничной семейной атмосферы",
      icon: "Home",
      color: "bg-warm-yellow/20 border-warm-yellow"
    },
    {
      title: "Семья",
      description: "Укрепляем семейные связи, учим решать конфликты конструктивно и создавать пространство любви и взаимопонимания",
      icon: "UsersRound",
      color: "bg-warm-coral/20 border-warm-coral"
    }
  ];

  const teachers = [
    {
      name: "Анна Петрова",
      position: "Семейный психолог",
      experience: "15 лет опыта",
      description: "Специалист по детской психологии и семейным отношениям"
    },
    {
      name: "Михаил Соколов", 
      position: "Подростковый психолог",
      experience: "12 лет опыта",
      description: "Эксперт по работе с подростками и их развитием"
    },
    {
      name: "Елена Кузнецова",
      position: "Детский психолог",
      experience: "10 лет опыта", 
      description: "Специалист по развитию эмоционального интеллекта детей"
    }
  ];

  const benefits = [
    {
      title: "Лицензированные программы ДПО",
      description: "Все наши курсы имеют официальную лицензию дополнительного профессионального образования",
      icon: "Award"
    },
    {
      title: "Интерактивные вебинары",
      description: "Живое общение с экспертами, возможность задать вопросы и получить персональные рекомендации",
      icon: "Video"
    },
    {
      title: "Практические навыки",
      description: "Конкретные инструменты и техники, которые можно применить сразу после обучения",
      icon: "Target"
    },
    {
      title: "Сообщество единомышленников",
      description: "Поддержка и обмен опытом с другими участниками программ",
      icon: "MessageCircle"
    }
  ];

  return (
    <div className="min-h-screen bg-warm-cream font-body">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Heart" className="text-warm-orange" size={32} />
            <h1 className="text-2xl font-heading font-bold text-warm-teal">Добрый кампус</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#directions" className="text-gray-700 hover:text-warm-orange transition-colors">Направления</a>
            <a href="#teachers" className="text-gray-700 hover:text-warm-orange transition-colors">Преподаватели</a>
            <a href="#benefits" className="text-gray-700 hover:text-warm-orange transition-colors">О нас</a>
          </nav>
          <Button className="bg-warm-orange hover:bg-warm-coral text-white">
            Записаться на курс
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-warm-cream to-warm-sage/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-warm-teal mb-6 animate-fade-in">
            Институт семьи<br />
            <span className="text-warm-orange">Добрый кампус</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in">
            Лицензированное дополнительное профессиональное образование для укрепления семейных связей и развития личности
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button size="lg" className="bg-warm-orange hover:bg-warm-coral text-white px-8 py-4 text-lg">
              <Icon name="Play" className="mr-2" size={20} />
              Смотреть вебинары
            </Button>
            <Button size="lg" variant="outline" className="border-warm-teal text-warm-teal hover:bg-warm-teal hover:text-white px-8 py-4 text-lg">
              <Icon name="BookOpen" className="mr-2" size={20} />
              Выбрать курс
            </Button>
          </div>
        </div>
      </section>

      {/* Directions Section */}
      <section id="directions" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center text-warm-teal mb-4">
            Наши направления
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Мы помогаем детям, подросткам и родителям учиться понимать себя, развивать мышление, 
            коммуницировать, заботиться о себе и других — с любовью, легкостью и уважением
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {directions.map((direction, index) => (
              <Card key={index} className={`${direction.color} border-2 hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-white rounded-full w-fit">
                    <Icon name={direction.icon} size={32} className="text-warm-teal" />
                  </div>
                  <CardTitle className="text-xl font-heading text-warm-teal">{direction.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center">
                    {direction.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section id="teachers" className="py-20 bg-warm-sage/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center text-warm-teal mb-4">
            Наши преподаватели
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Опытные специалисты с многолетней практикой в области семейной психологии и развития личности
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-24 h-24 bg-warm-orange/20 rounded-full flex items-center justify-center">
                    <Icon name="User" size={40} className="text-warm-orange" />
                  </div>
                  <CardTitle className="text-xl font-heading text-warm-teal">{teacher.name}</CardTitle>
                  <CardDescription className="text-warm-orange font-medium">{teacher.position}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-gray-500 mb-2">{teacher.experience}</p>
                  <p className="text-gray-600">{teacher.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center text-warm-teal mb-4">
            Что вас ждет в институте
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Качественное образование, практические навыки и поддержка на пути к гармоничным семейным отношениям
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border-warm-orange/20">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-warm-orange/10 rounded-full w-fit">
                    <Icon name={benefit.icon} size={32} className="text-warm-orange" />
                  </div>
                  <CardTitle className="text-lg font-heading text-warm-teal">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-warm-orange to-warm-coral">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold text-white mb-6">
            Начните свой путь к гармоничной семье уже сегодня
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к нашему сообществу и откройте для себя новые возможности семейного счастья
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-warm-orange hover:bg-gray-100 px-8 py-4 text-lg">
              <Icon name="Calendar" className="mr-2" size={20} />
              Записаться на консультацию
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-warm-orange px-8 py-4 text-lg">
              <Icon name="Download" className="mr-2" size={20} />
              Скачать программы
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-warm-teal text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Heart" size={24} />
                <h3 className="text-xl font-heading font-bold">Добрый кампус</h3>
              </div>
              <p className="text-warm-sage">
                Институт семьи для развития гармоничных отношений и личностного роста
              </p>
            </div>
            <div>
              <h4 className="text-lg font-heading font-semibold mb-4">Направления</h4>
              <ul className="space-y-2 text-warm-sage">
                <li><a href="#" className="hover:text-white transition-colors">Дети</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Подростки</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Родители</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Семья</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-heading font-semibold mb-4">Обучение</h4>
              <ul className="space-y-2 text-warm-sage">
                <li><a href="#" className="hover:text-white transition-colors">Вебинары</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Мини-курсы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Консультации</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Программы ДПО</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-heading font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-warm-sage">
                <li className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@dobry-kampus.ru
                </li>
                <li className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  Москва, ул. Примерная, д. 1
                </li>
              </ul>
            </div>
          </div>
          <hr className="border-warm-sage my-8" />
          <div className="text-center text-warm-sage">
            <p>&copy; 2024 Добрый кампус. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;