import { MealPortionVisualizer } from "@/components/meal-portion-visualizer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-2">
          Meal Portion Visualizer
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-muted-foreground text-center mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto">
          Understand proper serving sizes using common household objects
        </p>
        <MealPortionVisualizer />
      </div>
    </main>
  )
}

