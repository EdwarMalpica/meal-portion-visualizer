import { MealPortionVisualizer } from "@/components/meal-portion-visualizer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-4 md:p-8">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold text-center mb-2">Meal Portion Visualizer</h1>
        <p className="text-muted-foreground text-center mb-8">
          Understand proper serving sizes using common household objects
        </p>
        <MealPortionVisualizer />
      </div>
    </main>
  )
}

