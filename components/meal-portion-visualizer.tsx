"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { type FoodCategory, categoryLabels, foodItems } from "@/lib/portion-data"
import { PortionCard } from "@/components/portion-card"
import { FoodCategoryIcon } from "@/components/food-category-icon"

export function MealPortionVisualizer() {
  const [selectedCategory, setSelectedCategory] = useState<FoodCategory>("proteins")
  const [selectedFoodId, setSelectedFoodId] = useState<string>(
    foodItems.find((item) => item.category === "proteins")?.id || "",
  )

  const selectedFood = foodItems.find((item) => item.id === selectedFoodId)
  const categoryItems = foodItems.filter((item) => item.category === selectedCategory)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-1">
        <Tabs
          defaultValue={selectedCategory}
          onValueChange={(value) => {
            setSelectedCategory(value as FoodCategory)
            const firstItemInCategory = foodItems.find((item) => item.category === value)
            if (firstItemInCategory) {
              setSelectedFoodId(firstItemInCategory.id)
            }
          }}
          className="w-full"
        >
          <TabsList className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 h-auto mb-4">
            {Object.entries(categoryLabels).map(([category, label]) => (
              <TabsTrigger key={category} value={category} className="flex flex-col items-center py-2 px-1 gap-1">
                <FoodCategoryIcon category={category as FoodCategory} />
                <span className="text-xs">{label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.keys(categoryLabels).map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 gap-2">
                {categoryItems.map((item) => (
                  <Card
                    key={item.id}
                    className={`cursor-pointer transition-colors ${
                      selectedFoodId === item.id ? "border-primary bg-primary/5" : "hover:bg-muted/50"
                    }`}
                    onClick={() => setSelectedFoodId(item.id)}
                  >
                    <CardContent className="p-3">
                      <div className="font-medium">{item.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {item.servingSize} ≈ {item.householdObject}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <div className="md:col-span-2">{selectedFood && <PortionCard food={selectedFood} />}</div>
    </div>
  )
}

