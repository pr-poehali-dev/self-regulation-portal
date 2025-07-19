import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Articles = () => {
  const articles = [
    {
      title: "Основы эмоциональной саморегуляции",
      description: "Понимание механизмов работы эмоций и первые шаги к их управлению",
      readTime: "8 мин",
      category: "Основы",
      difficulty: "Начинающий",
      image: "📚"
    },
    {
      title: "Как справляться со стрессом на работе",
      description: "Практические советы по управлению стрессом в профессиональной среде",
      readTime: "12 мин",
      category: "Стресс",
      difficulty: "Средний",
      image: "💼"
    },
    {
      title: "Техники дыхания для успокоения",
      description: "Научные основы дыхательных практик и их влияние на нервную систему",
      readTime: "6 мин",
      category: "Дыхание",
      difficulty: "Начинающий",
      image: "🌬️"
    },
    {
      title: "Работа с тревожностью и беспокойством",
      description: "Понимание природы тревоги и методы её преодоления",
      readTime: "15 мин",
      category: "Тревожность",
      difficulty: "Продвинутый",
      image: "🧠"
    },
    {
      title: "Эмоциональный интеллект: развитие навыков",
      description: "Как развить способность понимать и управлять своими эмоциями",
      readTime: "10 мин",
      category: "EQ",
      difficulty: "Средний",
      image: "💡"
    },
    {
      title: "Mindfulness в повседневной жизни",
      description: "Интеграция практик осознанности в ежедневную рутину",
      readTime: "9 мин",
      category: "Осознанность",
      difficulty: "Средний",
      image: "🌸"
    }
  ];

  const categories = ["Все", "Основы", "Стресс", "Дыхание", "Тревожность", "EQ", "Осознанность"];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Начинающий": return "bg-green-100 text-green-800";
      case "Средний": return "bg-yellow-100 text-yellow-800";
      case "Продвинутый": return "bg-red-100 text-red-800";
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
              <Button variant="ghost" size="icon" className="hover:bg-primary/10" onClick={() => window.location.href = '/'}>
                <Icon name="ArrowLeft" size={20} />
              </Button>
              <h1 className="text-2xl font-bold text-gray-900">Статьи о саморегуляции</h1>
            </div>
            <Button variant="outline" className="rounded-full">
              <Icon name="Search" size={16} className="mr-2" />
              Поиск
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Изучайте саморегуляцию
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Научно обоснованные статьи и практические руководства для развития эмоционального интеллекта и навыков саморегуляции
            </p>
          </div>
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

        {/* Articles Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-3 bg-white/80 backdrop-blur-sm overflow-hidden">
              <CardHeader className="space-y-4 p-6">
                <div className="flex items-start justify-between">
                  <div className="text-4xl">{article.image}</div>
                  <Badge variant="secondary" className={getDifficultyColor(article.difficulty)}>
                    {article.difficulty}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed line-clamp-3">
                    {article.description}
                  </CardDescription>
                </div>
              </CardHeader>
              
              <CardContent className="px-6 pb-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="text-primary border-primary/20">
                    {article.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Icon name="Clock" size={14} />
                    {article.readTime}
                  </div>
                </div>
                
                <Button className="w-full rounded-full group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  Читать статью
                  <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Featured Section */}
        <section className="mt-16">
          <Card className="bg-gradient-to-r from-primary to-purple-600 border-0 text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-black/10"></div>
            <CardContent className="relative p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold">
                    Еженедельная рассылка
                  </h3>
                  <p className="text-xl text-white/90">
                    Получайте новые статьи и практические советы прямо на почту
                  </p>
                  <Button size="lg" variant="secondary" className="rounded-full">
                    Подписаться
                    <Icon name="Mail" size={20} className="ml-2" />
                  </Button>
                </div>
                <div className="text-center">
                  <div className="text-8xl">📧</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Articles;