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
      <CardHeader>
        <div className="flex items-center gap-2">
          <FoodCategoryIcon category={food.category} size={24} />
          <CardTitle>{food.name}</CardTitle>
        </div>
        <CardDescription>
          Serving size: {food.servingSize} ≈ {food.householdObject}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <PortionVisualizer food={food} />
        <div className="mt-4 text-muted-foreground">{food.description}</div>
      </CardContent>
    </Card>
  )
}

