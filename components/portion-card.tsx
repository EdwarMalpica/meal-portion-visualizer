"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { FoodItem } from "@/lib/portion-data"
import { FoodCategoryIcon } from "@/components/food-category-icon"
import { PortionVisualizer } from "@/components/portion-visualizer"

interface PortionCardProps {
  food: FoodItem
}

export function PortionCard({ food }: PortionCardProps) {
  return (
    <Card className="h-full">
      <CardHeader className="p-4 sm:p-6">
        <div className="flex items-center gap-2">
          <FoodCategoryIcon category={food.category} size={24} className="hidden sm:block" />
          <FoodCategoryIcon category={food.category} size={20} className="sm:hidden" />
          <CardTitle className="text-lg sm:text-xl lg:text-2xl">{food.name}</CardTitle>
        </div>
        <CardDescription className="text-sm sm:text-base">
          Serving size: {food.servingSize} ≈ {food.householdObject}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <PortionVisualizer food={food} />
        <div className="mt-4 text-sm sm:text-base lg:text-lg text-muted-foreground text-center max-w-2xl mx-auto">
          {food.description}
        </div>
      </CardContent>
    </Card>
  )
}

