import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const sections = [
    {
      title: "Статьи о саморегуляции",
      description: "Изучите основы эмоциональной регуляции и найдите подходящие техники",
      icon: "BookOpen",
      gradient: "from-blue-100 to-purple-100"
    },
    {
      title: "Техники саморегуляции", 
      description: "Практические методы управления стрессом и эмоциями",
      icon: "Brain",
      gradient: "from-purple-100 to-pink-100"
    },
    {
      title: "Медитации и релаксация",
      description: "Управляемые медитации для глубокого расслабления",
      icon: "Heart",
      gradient: "from-green-100 to-blue-100"
    },
    {
      title: "Практические упражнения",
      description: "Пошаговые инструкции для ежедневной практики",
      icon: "Target",
      gradient: "from-orange-100 to-yellow-100"
    }
  ];

  const benefits = [
    {
      icon: "Smile",
      title: "Эмоциональный баланс",
      description: "Научитесь управлять своими эмоциями"
    },
    {
      icon: "Zap",
      title: "Снижение стресса",
      description: "Эффективные техники борьбы со стрессом"
    },
    {
      icon: "Sun",
      title: "Внутренний покой",
      description: "Обретите гармонию и спокойствие"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Путь к 
                <span className="text-primary block">саморегуляции</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Откройте для себя искусство управления эмоциями и достижения внутреннего равновесия через проверенные техники и практики
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6 rounded-full hover:scale-105 transition-all duration-300">
                Начать изучение
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-full hover:scale-105 transition-all duration-300">
                Посмотреть техники
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-300/20 rounded-3xl blur-3xl"></div>
            <img 
              src="/img/a97aa649-2505-4158-8e08-7b7cb6c7e3ad.jpg" 
              alt="Медитация и спокойствие"
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="lg:text-4xl font-bold text-gray-900 mb-4 text-5xl">
            Что вы получите
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Разрушение ваши и их стереотипов, прадигм</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardContent className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name={benefit.icon} size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Main Sections */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Разделы платформы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выберите подходящий раздел для начала вашего путешествия к эмоциональному благополучию
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <Card key={index} className={`group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br ${section.gradient} overflow-hidden`} onClick={() => {
              const routes = ['/articles', '/techniques', '/meditation', '/exercises'];
              window.location.href = routes[index];
            }}>
              <CardHeader className="space-y-4 p-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-white/80 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name={section.icon} size={28} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                      {section.title}
                    </CardTitle>
                  </div>
                </div>
                <CardDescription className="text-gray-700 text-base leading-relaxed">
                  {section.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <Button variant="ghost" className="text-primary hover:bg-white/50 transition-all duration-300 group-hover:translate-x-2">
                  Перейти к разделу
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-to-r from-primary to-purple-600 border-0 text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-black/10"></div>
          <CardContent className="relative p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Готовы начать свой путь?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Присоединяйтесь к тысячам людей, которые уже изменили свою жизнь с помощью техник саморегуляции
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 rounded-full hover:scale-105 transition-all duration-300">
              Начать практику сегодня
              <Icon name="Sparkles" size={20} className="ml-2" />
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Саморегуляция</h3>
              <p className="text-gray-400">Путь к эмоциональному равновесию и внутреннему покою</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Разделы</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Статьи</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Техники</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Медитации</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Упражнения</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Сообщество</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Следите за нами</h4>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Icon name="Mail" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Icon name="Phone" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Саморегуляция. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;