import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Exercises = () => {
  const [completedExercises, setCompletedExercises] = useState<number[]>([]);
  
  const exercises = [
    {
      id: 1,
      title: "Дневник благодарности",
      description: "Записывайте 3 вещи, за которые вы благодарны каждый день",
      category: "Позитивность",
      difficulty: "Легко",
      duration: "5 мин/день",
      frequency: "Ежедневно",
      benefits: ["Улучшает настроение", "Снижает стресс", "Развивает позитивное мышление"],
      steps: [
        "Найдите спокойное место",
        "Возьмите блокнот или телефон",
        "Запишите 3 вещи, за которые благодарны",
        "Подумайте о том, почему они важны",
        "Повторяйте каждый день"
      ],
      icon: "Heart",
      gradient: "from-pink-100 to-rose-100"
    },
    {
      id: 2,
      title: "Техника квадратного дыхания",
      description: "Дыхательное упражнение для быстрого снятия стресса",
      category: "Дыхание",
      difficulty: "Легко",
      duration: "2-5 мин",
      frequency: "По необходимости",
      benefits: ["Успокаивает нервы", "Снижает тревожность", "Улучшает концентрацию"],
      steps: [
        "Сядьте удобно, выпрямите спину",
        "Вдохните на 4 счета",
        "Задержите дыхание на 4 счета",
        "Выдохните на 4 счета",
        "Повторите 5-10 циклов"
      ],
      icon: "Wind",
      gradient: "from-blue-100 to-cyan-100"
    },
    {
      id: 3,
      title: "Практика осознанного наблюдения",
      description: "Развитие навыков mindfulness через наблюдение за окружением",
      category: "Осознанность",
      difficulty: "Средне",
      duration: "10-15 мин",
      frequency: "3-4 раза в неделю",
      benefits: ["Улучшает внимание", "Снижает стресс", "Развивает эмпатию"],
      steps: [
        "Выберите объект для наблюдения",
        "Сядьте или встаньте комфортно",
        "Сосредоточьтесь на деталях",
        "Замечайте без оценки",
        "Возвращайте внимание при отвлечении"
      ],
      icon: "Eye",
      gradient: "from-green-100 to-emerald-100"
    },
    {
      id: 4,
      title: "Журнал эмоций",
      description: "Отслеживание и анализ своих эмоциональных состояний",
      category: "Самопознание",
      difficulty: "Средне",
      duration: "10 мин/день",
      frequency: "Ежедневно",
      benefits: ["Повышает самосознание", "Помогает управлять эмоциями", "Выявляет паттерны"],
      steps: [
        "Выберите время для записи",
        "Опишите свои эмоции",
        "Найдите причины этих эмоций",
        "Оцените интенсивность (1-10)",
        "Подумайте о стратегиях управления"
      ],
      icon: "BookOpen",
      gradient: "from-purple-100 to-violet-100"
    },
    {
      id: 5,
      title: "Прогрессивная мышечная релаксация",
      description: "Поочередное напряжение и расслабление мышечных групп",
      category: "Релаксация",
      difficulty: "Средне",
      duration: "15-20 мин",
      frequency: "2-3 раза в неделю",
      benefits: ["Снимает физическое напряжение", "Улучшает сон", "Снижает стресс"],
      steps: [
        "Лягте в удобное положение",
        "Начните с пальцев ног",
        "Напрягите мышцы на 5 секунд",
        "Резко расслабьте на 10 секунд",
        "Двигайтесь вверх по телу"
      ],
      icon: "Zap",
      gradient: "from-orange-100 to-amber-100"
    },
    {
      id: 6,
      title: "Техника STOP",
      description: "Быстрый способ прервать негативные мысли и вернуться в настоящее",
      category: "Когнитивные",
      difficulty: "Легко",
      duration: "1-2 мин",
      frequency: "По необходимости",
      benefits: ["Прерывает негативные мысли", "Возвращает в настоящее", "Снижает импульсивность"],
      steps: [
        "S - Остановитесь (Stop)",
        "T - Сделайте глубокий вдох (Take a breath)",
        "O - Осознайте происходящее (Observe)",
        "P - Продолжите осознанно (Proceed)"
      ],
      icon: "StopCircle",
      gradient: "from-red-100 to-pink-100"
    }
  ];

  const toggleExercise = (exerciseId: number) => {
    setCompletedExercises(prev => 
      prev.includes(exerciseId) 
        ? prev.filter(id => id !== exerciseId)
        : [...prev, exerciseId]
    );
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Легко": return "bg-green-100 text-green-800";
      case "Средне": return "bg-yellow-100 text-yellow-800";
      case "Сложно": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const completionPercentage = (completedExercises.length / exercises.length) * 100;

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
              <h1 className="text-2xl font-bold text-gray-900">Практические упражнения</h1>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="rounded-full">
                <Icon name="Calendar" size={16} className="mr-2" />
                План
              </Button>
              <Button variant="outline" className="rounded-full">
                <Icon name="Trophy" size={16} className="mr-2" />
                Достижения
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
              Развивайте навыки ежедневно
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Структурированные упражнения для формирования здоровых привычек саморегуляции и эмоционального благополучия
            </p>
          </div>
        </section>

        {/* Progress Overview */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-primary/10 to-purple-100 border-0 shadow-lg">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl">Ваш прогресс</CardTitle>
                  <CardDescription>Выполнено упражнений: {completedExercises.length} из {exercises.length}</CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-primary">{Math.round(completionPercentage)}%</div>
                  <div className="text-sm text-gray-600">Завершено</div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Progress value={completionPercentage} className="h-3 mb-4" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl">🎯</div>
                  <div className="text-lg font-semibold text-primary">{completedExercises.length}</div>
                  <div className="text-sm text-gray-600">Выполнено</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl">🔥</div>
                  <div className="text-lg font-semibold text-primary">5</div>
                  <div className="text-sm text-gray-600">Дней подряд</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl">⭐</div>
                  <div className="text-lg font-semibold text-primary">Новичок</div>
                  <div className="text-sm text-gray-600">Уровень</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl">🏆</div>
                  <div className="text-lg font-semibold text-primary">3</div>
                  <div className="text-sm text-gray-600">Награды</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Exercises Grid */}
        <section className="grid md:grid-cols-2 gap-8">
          {exercises.map((exercise) => {
            const isCompleted = completedExercises.includes(exercise.id);
            
            return (
              <Card key={exercise.id} className={`border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-gradient-to-br ${exercise.gradient} overflow-hidden ${isCompleted ? 'ring-2 ring-green-400' : ''}`}>
                <CardHeader className="space-y-4 p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/80 rounded-xl flex items-center justify-center">
                        <Icon name={exercise.icon} size={24} className="text-primary" />
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox 
                          checked={isCompleted}
                          onCheckedChange={() => toggleExercise(exercise.id)}
                          className="w-5 h-5"
                        />
                        {isCompleted && <Icon name="CheckCircle2" size={20} className="text-green-600" />}
                      </div>
                    </div>
                    <Badge className={getDifficultyColor(exercise.difficulty)}>
                      {exercise.difficulty}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <CardTitle className={`text-xl font-semibold transition-colors duration-300 ${isCompleted ? 'text-green-700' : 'text-gray-900'}`}>
                      {exercise.title}
                    </CardTitle>
                    <CardDescription className="text-gray-700 leading-relaxed">
                      {exercise.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                
                <CardContent className="px-6 pb-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-1 text-gray-600">
                      <Icon name="Clock" size={14} />
                      {exercise.duration}
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <Icon name="Repeat" size={14} />
                      {exercise.frequency}
                    </div>
                  </div>
                  
                  <Badge variant="outline" className="text-primary border-primary/20">
                    {exercise.category}
                  </Badge>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Преимущества:</h4>
                    <div className="flex flex-wrap gap-1">
                      {exercise.benefits.map((benefit, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Шаги выполнения:</h4>
                    <div className="space-y-1">
                      {exercise.steps.slice(0, 3).map((step, index) => (
                        <div key={index} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-primary font-medium">{index + 1}.</span>
                          <span>{step}</span>
                        </div>
                      ))}
                      {exercise.steps.length > 3 && (
                        <div className="text-sm text-gray-500">
                          +{exercise.steps.length - 3} шагов...
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <Button 
                    className={`w-full rounded-full transition-all duration-300 ${
                      isCompleted 
                        ? 'bg-green-600 hover:bg-green-700 text-white' 
                        : 'hover:bg-primary hover:text-white'
                    }`}
                  >
                    {isCompleted ? (
                      <>
                        <Icon name="CheckCircle2" size={16} className="mr-2" />
                        Выполнено
                      </>
                    ) : (
                      <>
                        <Icon name="Play" size={16} className="mr-2" />
                        Начать упражнение
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </section>

        {/* Daily Challenge */}
        <section className="mt-16">
          <Card className="bg-gradient-to-r from-primary to-purple-600 border-0 text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-black/10"></div>
            <CardContent className="relative p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold">
                    Вызов дня
                  </h3>
                  <p className="text-xl text-white/90">
                    Попробуйте технику квадратного дыхания прямо сейчас. Всего 2 минуты для мгновенного расслабления!
                  </p>
                  <div className="flex gap-4">
                    <Button size="lg" variant="secondary" className="rounded-full">
                      <Icon name="Play" size={20} className="mr-2" />
                      Принять вызов
                    </Button>
                    <Button size="lg" variant="ghost" className="rounded-full text-white border-white hover:bg-white/20">
                      <Icon name="Calendar" size={20} className="mr-2" />
                      Завтра
                    </Button>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-8xl">🎯</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Exercises;