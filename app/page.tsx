import { MealPortionVisualizer } from "@/components/meal-portion-visualizer"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="min-h-screen bg-background tablet:h-screen tablet:flex tablet:flex-col p-4 sm:p-6 md:p-8 lg:p-10 tablet:p-2">
      <div className="container mx-auto max-w-7xl tablet:flex tablet:flex-col tablet:h-full">
        <div className="flex justify-between items-center mb-2 tablet:mb-1">
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl tablet:text-xl font-bold text-center">
              Meal Portion Visualizer
            </h1>
            <p className="text-sm sm:text-base lg:text-lg tablet:text-xs text-muted-foreground text-center mb-6 sm:mb-8 lg:mb-10 tablet:mb-1 max-w-3xl mx-auto">
              Understand proper serving sizes using common household objects
            </p>
          </div>
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 lg:top-10 lg:right-10 tablet:top-2 tablet:right-2">
            <ThemeToggle />
          </div>
        </div>
        <div className="tablet:flex-1 tablet:overflow-hidden">
          <MealPortionVisualizer />
        </div>
      </div>
    </main>
  )
}

