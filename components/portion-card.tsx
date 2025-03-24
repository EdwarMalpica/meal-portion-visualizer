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
    <Card className="h-full tablet:flex tablet:flex-col">
      <CardHeader className="p-4 sm:p-6 tablet:p-2">
        <div className="flex items-center gap-2">
          <FoodCategoryIcon category={food.category} size={24} className="hidden sm:block tablet:hidden" />
          <FoodCategoryIcon category={food.category} size={20} className="sm:hidden tablet:hidden" />
          <FoodCategoryIcon category={food.category} size={18} className="hidden tablet:block" />
          <CardTitle className="text-lg sm:text-xl lg:text-2xl tablet:text-lg">{food.name}</CardTitle>
        </div>
        <CardDescription className="text-sm sm:text-base tablet:text-xs">
          Serving size: {food.servingSize} ≈ {food.householdObject}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 tablet:p-2 tablet:flex-1 tablet:overflow-hidden tablet:flex tablet:flex-col">
        <PortionVisualizer food={food} />
        <div className="mt-4 text-sm sm:text-base lg:text-lg text-muted-foreground text-center max-w-2xl mx-auto tablet:hidden">
          {food.description}
        </div>
        <div className="hidden tablet:block tablet:text-xs tablet:text-muted-foreground tablet:text-center tablet:mt-1 tablet:line-clamp-2">
          {food.description}
        </div>
      </CardContent>
    </Card>
  )
}

