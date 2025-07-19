import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Techniques = () => {
  const techniques = [
    {
      title: "Дыхание 4-7-8",
      description: "Техника глубокого дыхания для быстрого успокоения нервной системы",
      duration: "5 мин",
      difficulty: "Легко",
      category: "Дыхание",
      steps: 4,
      icon: "Wind",
      gradient: "from-blue-100 to-cyan-100"
    },
    {
      title: "Прогрессивная мышечная релаксация",
      description: "Последовательное напряжение и расслабление мышц для снятия стресса",
      duration: "15 мин",
      difficulty: "Средне",
      category: "Релаксация",
      steps: 8,
      icon: "Zap",
      gradient: "from-green-100 to-emerald-100"
    },
    {
      title: "Техника заземления 5-4-3-2-1",
      description: "Сенсорная техника для возвращения в настоящий момент при тревоге",
      duration: "3 мин",
      difficulty: "Легко",
      category: "Тревожность",
      steps: 5,
      icon: "Anchor",
      gradient: "from-purple-100 to-violet-100"
    },
    {
      title: "Визуализация безопасного места",
      description: "Создание мысленного убежища для эмоционального восстановления",
      duration: "10 мин",
      difficulty: "Средне",
      category: "Визуализация",
      steps: 6,
      icon: "Home",
      gradient: "from-orange-100 to-amber-100"
    },
    {
      title: "STOP-техника",
      description: "Быстрый способ прервать негативные мысли и эмоции",
      duration: "2 мин",
      difficulty: "Легко",
      category: "Когнитивные",
      steps: 4,
      icon: "StopCircle",
      gradient: "from-red-100 to-pink-100"
    },
    {
      title: "Дневник эмоций",
      description: "Структурированный подход к отслеживанию и анализу эмоций",
      duration: "10 мин",
      difficulty: "Средне",
      category: "Рефлексия",
      steps: 7,
      icon: "BookOpen",
      gradient: "from-indigo-100 to-blue-100"
    }
  ];

  const categories = ["Все", "Дыхание", "Релаксация", "Тревожность", "Визуализация", "Когнитивные", "Рефлексия"];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Легко": return "bg-green-100 text-green-800";
      case "Средне": return "bg-yellow-100 text-yellow-800";
      case "Сложно": return "bg-red-100 text-red-800";
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
              <h1 className="text-2xl font-bold text-gray-900">Техники саморегуляции</h1>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="rounded-full">
                <Icon name="Filter" size={16} className="mr-2" />
                Фильтр
              </Button>
              <Button variant="outline" className="rounded-full">
                <Icon name="Heart" size={16} className="mr-2" />
                Избранное
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
              Практические техники
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Пошаговые инструкции проверенных методов саморегуляции для управления эмоциями и стрессом
            </p>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <div className="text-3xl mb-2">🎯</div>
            <div className="text-2xl font-bold text-primary">15+</div>
            <div className="text-sm text-gray-600">Техник</div>
          </Card>
          <Card className="text-center p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <div className="text-3xl mb-2">⏱️</div>
            <div className="text-2xl font-bold text-primary">2-15</div>
            <div className="text-sm text-gray-600">Минут</div>
          </Card>
          <Card className="text-center p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <div className="text-3xl mb-2">📊</div>
            <div className="text-2xl font-bold text-primary">95%</div>
            <div className="text-sm text-gray-600">Эффективность</div>
          </Card>
          <Card className="text-center p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <div className="text-3xl mb-2">⭐</div>
            <div className="text-2xl font-bold text-primary">4.8</div>
            <div className="text-sm text-gray-600">Рейтинг</div>
          </Card>
        </section>

        {/* Filter Categories */}
        <section className="mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className="rounded-full hover:scale-105 transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </section>

        {/* Techniques Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techniques.map((technique, index) => (
            <Card key={index} className={`group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br ${technique.gradient} overflow-hidden`}>
              <CardHeader className="space-y-4 p-6">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 bg-white/80 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name={technique.icon} size={24} className="text-primary" />
                  </div>
                  <Badge className={getDifficultyColor(technique.difficulty)}>
                    {technique.difficulty}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                    {technique.title}
                  </CardTitle>
                  <CardDescription className="text-gray-700 leading-relaxed">
                    {technique.description}
                  </CardDescription>
                </div>
              </CardHeader>
              
              <CardContent className="px-6 pb-6 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 text-gray-600">
                    <Icon name="Clock" size={14} />
                    {technique.duration}
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <Icon name="List" size={14} />
                    {technique.steps} шагов
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Прогресс изучения</span>
                    <span className="text-primary font-medium">0%</span>
                  </div>
                  <Progress value={0} className="h-2" />
                </div>
                
                <Badge variant="outline" className="text-primary border-primary/20">
                  {technique.category}
                </Badge>
                
                <Button className="w-full rounded-full group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  Изучить технику
                  <Icon name="Play" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Interactive Demo Section */}
        <section className="mt-16">
          <Card className="bg-gradient-to-r from-primary to-purple-600 border-0 text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-black/10"></div>
            <CardContent className="relative p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold">
                    Попробуйте прямо сейчас
                  </h3>
                  <p className="text-xl text-white/90">
                    Начните с простой дыхательной техники 4-7-8 — всего 2 минуты для заметного эффекта
                  </p>
                  <div className="flex gap-4">
                    <Button size="lg" variant="secondary" className="rounded-full">
                      <Icon name="Play" size={20} className="mr-2" />
                      Начать сейчас
                    </Button>
                    <Button size="lg" variant="ghost" className="rounded-full text-white border-white hover:bg-white/20">
                      <Icon name="Info" size={20} className="mr-2" />
                      Узнать больше
                    </Button>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-8xl">🧘‍♀️</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Techniques;