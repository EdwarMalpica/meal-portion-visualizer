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
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      <div className="lg:col-span-1">
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
          <TabsList className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-3 h-auto mb-4">
            {Object.entries(categoryLabels).map(([category, label]) => (
              <TabsTrigger key={category} value={category} className="flex flex-col items-center py-2 px-1 gap-1">
                <FoodCategoryIcon category={category as FoodCategory} size={20} />
                <span className="text-xs sm:text-sm">{label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.keys(categoryLabels).map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2">
                {categoryItems.map((item) => (
                  <Card
                    key={item.id}
                    className={`cursor-pointer transition-colors ${
                      selectedFoodId === item.id ? "border-primary bg-primary/5" : "hover:bg-muted/50"
                    }`}
                    onClick={() => setSelectedFoodId(item.id)}
                  >
                    <CardContent className="p-2 sm:p-3">
                      <div className="font-medium text-sm sm:text-base">{item.name}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">
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

      <div className="lg:col-span-2">{selectedFood && <PortionCard food={selectedFood} />}</div>
    </div>
  )
}

