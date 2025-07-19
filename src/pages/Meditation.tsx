import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Meditation = () => {
  const [sessionDuration, setSessionDuration] = useState([10]);
  
  const meditations = [
    {
      title: "Дыхательная медитация",
      description: "Фокусировка на естественном дыхании для успокоения ума",
      duration: "5-20 мин",
      type: "Дыхание",
      level: "Начинающий",
      audio: true,
      image: "🌬️",
      plays: "12.5k"
    },
    {
      title: "Сканирование тела",
      description: "Последовательная концентрация внимания на разных частях тела",
      duration: "10-30 мин",
      type: "Осознанность",
      level: "Средний",
      audio: true,
      image: "🧘‍♀️",
      plays: "8.2k"
    },
    {
      title: "Медитация любящей доброты",
      description: "Культивирование сочувствия к себе и другим",
      duration: "8-15 мин",
      type: "Сердечные",
      level: "Любой",
      audio: true,
      image: "💕",
      plays: "9.8k"
    },
    {
      title: "Визуализация спокойного места",
      description: "Мысленное путешествие в умиротворяющую обстановку",
      duration: "12-25 мин",
      type: "Визуализация",
      level: "Средний",
      audio: true,
      image: "🏞️",
      plays: "6.7k"
    },
    {
      title: "Медитация ходьбы",
      description: "Осознанное движение как форма медитативной практики",
      duration: "10-40 мин",
      type: "Движение",
      level: "Начинающий",
      audio: false,
      image: "🚶‍♀️",
      plays: "4.1k"
    },
    {
      title: "Звуковая медитация",
      description: "Концентрация на звуках тибетских чаш и природы",
      duration: "15-60 мин",
      type: "Звуковые",
      level: "Любой",
      audio: true,
      image: "🎵",
      plays: "15.3k"
    }
  ];

  const quickSessions = [
    { name: "Утреннее пробуждение", duration: "5 мин", icon: "Sunrise" },
    { name: "Рабочий перерыв", duration: "3 мин", icon: "Coffee" },
    { name: "Вечернее расслабление", duration: "15 мин", icon: "Moon" },
    { name: "Перед сном", duration: "20 мин", icon: "Bed" }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Начинающий": return "bg-green-100 text-green-800";
      case "Средний": return "bg-yellow-100 text-yellow-800";
      case "Продвинутый": return "bg-red-100 text-red-800";
      case "Любой": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Icon name="ArrowLeft" size={20} />
              </Button>
              <h1 className="text-2xl font-bold text-gray-900">Медитации и релаксация</h1>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="rounded-full">
                <Icon name="Headphones" size={16} className="mr-2" />
                Аудио
              </Button>
              <Button variant="outline" className="rounded-full">
                <Icon name="Timer" size={16} className="mr-2" />
                Таймер
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Найдите свой покой
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Управляемые медитации и релаксационные практики для снижения стресса и обретения внутренней гармонии
            </p>
          </div>
        </section>

        {/* Quick Session Builder */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-primary/10 to-purple-100 border-0 shadow-lg">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl">Быстрая сессия</CardTitle>
              <CardDescription>Настройте медитацию под ваши потребности</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium">Длительность: {sessionDuration[0]} минут</span>
                  <Button variant="outline" size="sm">
                    <Icon name="Settings" size={16} className="mr-2" />
                    Настроить
                  </Button>
                </div>
                <Slider
                  value={sessionDuration}
                  onValueChange={setSessionDuration}
                  max={60}
                  min={1}
                  step={1}
                  className="w-full"
                />
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {quickSessions.map((session, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="p-4 h-auto flex-col gap-2 hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <Icon name={session.icon} size={24} />
                    <div className="text-center">
                      <div className="font-medium">{session.name}</div>
                      <div className="text-sm opacity-70">{session.duration}</div>
                    </div>
                  </Button>
                ))}
              </div>
              
              <Button size="lg" className="w-full rounded-full">
                <Icon name="Play" size={20} className="mr-2" />
                Начать медитацию
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Meditation Library */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900">Библиотека медитаций</h3>
            <Button variant="outline" className="rounded-full">
              <Icon name="Filter" size={16} className="mr-2" />
              Фильтр
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {meditations.map((meditation, index) => (
              <Card key={index} className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-3 bg-white/80 backdrop-blur-sm overflow-hidden">
                <CardHeader className="space-y-4 p-6">
                  <div className="flex items-start justify-between">
                    <div className="text-4xl">{meditation.image}</div>
                    <div className="flex gap-2">
                      {meditation.audio && (
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                          <Icon name="Volume2" size={12} className="mr-1" />
                          Аудио
                        </Badge>
                      )}
                      <Badge className={getLevelColor(meditation.level)}>
                        {meditation.level}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                      {meditation.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {meditation.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                
                <CardContent className="px-6 pb-6 space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-gray-600">
                      <Icon name="Clock" size={14} />
                      {meditation.duration}
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <Icon name="Play" size={14} />
                      {meditation.plays}
                    </div>
                  </div>
                  
                  <Badge variant="outline" className="text-primary border-primary/20">
                    {meditation.type}
                  </Badge>
                  
                  <div className="flex gap-2">
                    <Button className="flex-1 rounded-full group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Icon name="Play" size={16} className="mr-2" />
                      Слушать
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Icon name="Heart" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Progress Tracking */}
        <section className="mb-12">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Ваш прогресс</CardTitle>
              <CardDescription>Отслеживайте свою медитативную практику</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center space-y-2">
                  <div className="text-3xl">🔥</div>
                  <div className="text-2xl font-bold text-primary">7</div>
                  <div className="text-sm text-gray-600">Дней подряд</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl">⏰</div>
                  <div className="text-2xl font-bold text-primary">145</div>
                  <div className="text-sm text-gray-600">Минут всего</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl">🧘</div>
                  <div className="text-2xl font-bold text-primary">23</div>
                  <div className="text-sm text-gray-600">Сессий</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl">📈</div>
                  <div className="text-2xl font-bold text-primary">Новичок</div>
                  <div className="text-sm text-gray-600">Уровень</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Community Section */}
        <section>
          <Card className="bg-gradient-to-r from-primary to-purple-600 border-0 text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-black/10"></div>
            <CardContent className="relative p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold">
                    Присоединяйтесь к сообществу
                  </h3>
                  <p className="text-xl text-white/90">
                    Более 10,000 практикующих делятся опытом и поддерживают друг друга в медитативном путешествии
                  </p>
                  <div className="flex gap-4">
                    <Button size="lg" variant="secondary" className="rounded-full">
                      <Icon name="Users" size={20} className="mr-2" />
                      Сообщество
                    </Button>
                    <Button size="lg" variant="ghost" className="rounded-full text-white border-white hover:bg-white/20">
                      <Icon name="MessageCircle" size={20} className="mr-2" />
                      Форум
                    </Button>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-8xl">🤝</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Meditation;