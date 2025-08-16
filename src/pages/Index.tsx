import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const targetGroups = [
    {
      title: "Дети от 5 до 10 лет",
      tags: ["Эмоциональность", "Внимание", "Для детей эмоциональность"],
      bgColor: "bg-brand-accent1",
      textColor: "text-white"
    },
    {
      title: "Подростки",
      tags: ["Коллективная деятельность", "Беседы связаны изо взрослой жизни", "Как найти своих работу"],
      bgColor: "bg-brand-accent2", 
      textColor: "text-white"
    },
    {
      title: "Родители",
      tags: ["Правила общения с ребенком", "Собеседования для родителей", "Как учить ребят"],
      bgColor: "bg-brand-accent3",
      textColor: "text-white"
    },
    {
      title: "Семьи, которые важны добрый результат и мягкое образование",
      tags: ["Семейные встречи", "Семинары"],
      bgColor: "bg-brand-accent4",
      textColor: "text-white"
    }
  ];

  const directions = [
    {
      title: "Родительский лекторий",
      description: "Практические занятия и лекции о воспитании, детской психологии и решении семейных вопросов",
      bgColor: "bg-brand-accent1",
      mascot: "👨‍👩‍👧‍👦"
    },
    {
      title: "Семейные онлайн конструктор",
      description: "Интерактивные программы для укрепления семейных связей и развития коммуникации",
      bgColor: "bg-brand-accent2",
      mascot: "🏠"
    },
    {
      title: "Навыки для будущего",
      description: "Развитие soft skills, эмоционального интеллекта и адаптивных навыков для детей",
      bgColor: "bg-brand-accent3", 
      mascot: "🚀"
    },
    {
      title: "Умники Вместе",
      description: "Интеллектуальные игры и занятия для развития критического мышления",
      bgColor: "bg-brand-accent4",
      mascot: "🧠"
    }
  ];

  const experts = [
    {
      name: "Русская Татьяна Владимировна",
      specialization: "Детский психолог",
      experience: "Более 15 лет опыта",
      image: "/img/87700ddc-34cb-4a76-88dc-a1ff50b73370.jpg"
    },
    {
      name: "Русская Татьяна Владимировна", 
      specialization: "Семейный психолог",
      experience: "Более 15 лет опыта",
      image: "/img/8f121b78-88da-451b-8acc-4ec188b267ea.jpg"
    }
  ];

  const services = [
    {
      title: "Курсы",
      description: "Структурированные программы с видеоуроками, заданиями и поддержкой куратора. Учитесь в удобном ритме и прокачивайте нужные навыки!",
      bgColor: "bg-brand-accent2",
      icon: "BookOpen"
    },
    {
      title: "Мини-группы", 
      description: "Обучение и обсуждение в небольшом кругу — разбор тем, обмен опытом, живое общение и поддержка наставника",
      bgColor: "bg-brand-accent1",
      icon: "Users"
    },
    {
      title: "Персональное сопровождение",
      description: "Индивидуальные онлайн-сессии с экспертом — разбор сложных вопросов, настройка личного трека и дополнительная мотивация",
      bgColor: "bg-brand-accent4",
      icon: "User"
    },
    {
      title: "Библиотека знаний",
      description: "Коллекция полезных материалов, чек-листов и тренажёров для самостоятельного освоения тем — всегда под рукой",
      bgColor: "bg-brand-accent3",
      icon: "Library"
    },
    {
      title: "Родительский клуб",
      description: "Онлайн-встречи и чаты для родителей — разбор реальных кейсов, советы экспертов, поддержка друг друга и новые знакомства",
      bgColor: "bg-brand-primary",
      icon: "MessageCircle"
    },
    {
      title: "Бесплатные мастер-классы",
      description: "Открытые онлайн-вебинары для детей, подростков и родителей по самым важным темам. Быстро, просто и бесплатно!",
      bgColor: "bg-brand-accent4",
      icon: "Video"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-body">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-heading font-bold text-black">Logo</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-brand-primary transition-colors">О нас</a>
            <a href="#directions" className="text-gray-700 hover:text-brand-primary transition-colors">Направления обучения</a>
            <a href="#experts" className="text-gray-700 hover:text-brand-primary transition-colors">Наши эксперты</a>
            <a href="#contacts" className="text-gray-700 hover:text-brand-primary transition-colors">Контакты</a>
          </nav>
          <Button className="bg-brand-button hover:bg-brand-button/90 text-white px-6 py-2">
            Выбрать курс
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-primary via-brand-primary/80 to-brand-primary/60 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
              <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black mb-6">
                Учимся с добром —<br />
                растём с умом
              </h1>
              <p className="text-lg lg:text-xl text-gray-700 mb-8 max-w-2xl">
                Мы создаём пространство, где дети, подростки и родители учатся понимать себя, развивать мышление, коммуницировать, заботиться о себе и других — с любовью, лёгкостью и уважением.
              </p>
              <Button size="lg" className="bg-brand-button hover:bg-brand-button/90 text-white px-8 py-4 text-lg">
                Выбрать курс
              </Button>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <img 
                  src="https://cdn.poehali.dev/files/47d00af0-39b1-4b9d-9e28-1a6ac8f51189.png"
                  alt="Добрёнок - маскот института"
                  className="w-64 h-64 lg:w-80 lg:h-80 object-contain"
                />
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-brand-accent1 rounded-full flex items-center justify-center">
                  <Icon name="Heart" className="text-white" size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Groups Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-center text-black mb-12">
            Для кого это наши программы?
          </h2>
          <div className="space-y-6">
            {targetGroups.map((group, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-center gap-6">
                <div className="lg:w-1/4">
                  <h3 className="text-xl font-heading font-bold text-black mb-2">{group.title}</h3>
                </div>
                <div className="lg:w-3/4 flex flex-wrap gap-3">
                  {group.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-4 py-2 rounded-full ${group.bgColor} ${group.textColor} text-sm font-medium`}
                    >
                      {tag}
                    </span>
                  ))}
                  <Button size="sm" className="bg-brand-button hover:bg-brand-button/90 text-white">
                    Посмотреть всё
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Directions Section */}
      <section id="directions" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-center text-black mb-12">
            Направления обучения
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {directions.map((direction, index) => (
              <Card key={index} className={`${direction.bgColor} text-white border-none hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{direction.mascot}</div>
                  <CardTitle className="text-xl font-heading text-white">{direction.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/90 text-center mb-4">
                    {direction.description}
                  </CardDescription>
                  <Button variant="outline" className="w-full bg-white text-black hover:bg-gray-100">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experts Section */}
      <section id="experts" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-center text-black mb-12">
            Наши эксперты
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {experts.map((expert, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-all duration-300">
                <CardHeader className="flex flex-row items-center space-y-0 space-x-4">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <CardTitle className="text-lg font-heading text-black">{expert.name}</CardTitle>
                    <CardDescription className="text-brand-primary font-medium">{expert.specialization}</CardDescription>
                    <p className="text-sm text-gray-500">{expert.experience}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="bg-brand-button hover:bg-brand-button/90 text-white">
                    Записаться к эксперту
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Online Helper Section */}
      <section className="py-16 bg-gradient-to-r from-brand-primary to-brand-primary/80">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between bg-white rounded-2xl p-8 shadow-lg">
            <div className="lg:w-1/4 mb-6 lg:mb-0">
              <img 
                src="https://cdn.poehali.dev/files/47d00af0-39b1-4b9d-9e28-1a6ac8f51189.png"
                alt="Онлайн-помощник"
                className="w-32 h-32 object-contain mx-auto"
              />
            </div>
            <div className="lg:w-1/2 text-center lg:text-left mb-6 lg:mb-0">
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-black mb-4">
                Онлайн-помощник
              </h2>
              <p className="text-gray-700">
                Ответьте на несколько вопросов, и наш помощник подберёт для вас лучшие курсы и форматы. Всё просто и бесплатно!
              </p>
            </div>
            <div className="lg:w-1/4">
              <Button className="bg-brand-button hover:bg-brand-button/90 text-white px-8 py-4">
                Подобрать курс
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className={`${service.bgColor} text-white border-none hover:shadow-lg transition-all duration-300`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-heading text-white">{service.title}</CardTitle>
                    <Icon name="ArrowUpRight" className="text-white" size={24} />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/90">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-heading font-bold mb-4">Logo</h3>
              <p className="text-gray-400">
                Институт семьи для развития гармоничных отношений и личностного роста
              </p>
            </div>
            <div>
              <h4 className="text-lg font-heading font-semibold mb-4">О институте Добрёнок</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Новости</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-heading font-semibold mb-4">Направления обучения</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Родительский лекторий</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Семейные конструкторы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Навыки будущего</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Умники вместе</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-heading font-semibold mb-4">Ресурсы</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Учебный Портал</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Правила Проекта</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Элек. Библиотека</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;