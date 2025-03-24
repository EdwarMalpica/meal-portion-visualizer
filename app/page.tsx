import { MealPortionVisualizer } from "@/components/meal-portion-visualizer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background tablet:h-screen tablet:flex tablet:flex-col p-4 sm:p-6 md:p-8 lg:p-10 tablet:p-2">
      <div className="container mx-auto max-w-7xl tablet:flex tablet:flex-col tablet:h-full">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl tablet:text-xl font-bold text-center mb-2 tablet:mb-1">
          Meal Portion Visualizer
        </h1>
        <p className="text-sm sm:text-base lg:text-lg tablet:text-xs text-muted-foreground text-center mb-6 sm:mb-8 lg:mb-10 tablet:mb-1 max-w-3xl mx-auto">
          Understand proper serving sizes using common household objects
        </p>
        <div className="tablet:flex-1 tablet:overflow-hidden">
          <MealPortionVisualizer />
        </div>
      </div>
    </main>
  )
}

