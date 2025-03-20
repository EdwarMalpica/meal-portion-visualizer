"use client"

import { useState } from "react"
import type { FoodItem } from "@/lib/portion-data"
import { Button } from "@/components/ui/button"
import { Utensils, Home, RotateCcw, RotateCw, Maximize, Minimize } from "lucide-react"

interface PortionVisualizerProps {
  food: FoodItem
}

export function PortionVisualizer({ food }: PortionVisualizerProps) {
  const [showObject, setShowObject] = useState(true)
  const [rotation, setRotation] = useState(0)
  const [scale, setScale] = useState(1)

  // Map food items to visual representations
  const getFoodImage = (food: FoodItem) => {
    // Use placeholder SVGs with different colors based on category
    const colors: Record<string, string> = {
      proteins: "#F87171", // red
      grains: "#FBBF24", // yellow
      fruits: "#34D399", // green
      vegetables: "#60A5FA", // blue
      dairy: "#A78BFA", // purple
      fats: "#FCD34D", // amber
    }

    return `/placeholder.svg?height=150&width=150&text=${food.name}&bg=${colors[food.category].replace("#", "")}`
  }

  const getObjectImage = (food: FoodItem) => {
    // Use placeholder SVGs for household objects
    return `/placeholder.svg?height=150&width=150&text=${food.householdObject}&bg=CCCCCC`
  }

  const handleRotate = (direction: "left" | "right") => {
    setRotation((prev) => (direction === "left" ? prev - 90 : prev + 90))
  }

  const handleScale = (direction: "up" | "down") => {
    setScale((prev) => {
      const newScale = direction === "up" ? prev + 0.1 : prev - 0.1
      return Math.max(0.5, Math.min(1.5, newScale))
    })
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-center gap-4 mb-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowObject(!showObject)}
          className="flex items-center gap-1"
        >
          {showObject ? <Utensils size={16} /> : <Home size={16} />}
          <span>Show {showObject ? "Food" : "Object"}</span>
        </Button>
        <Button variant="outline" size="sm" onClick={() => handleRotate("left")}>
          <RotateCcw size={16} />
        </Button>
        <Button variant="outline" size="sm" onClick={() => handleRotate("right")}>
          <RotateCw size={16} />
        </Button>
        <Button variant="outline" size="sm" onClick={() => handleScale("up")} disabled={scale >= 1.5}>
          <Maximize size={16} />
        </Button>
        <Button variant="outline" size="sm" onClick={() => handleScale("down")} disabled={scale <= 0.5}>
          <Minimize size={16} />
        </Button>
      </div>

      <div className="h-64 bg-muted/30 rounded-lg p-4 flex items-center justify-center overflow-hidden">
        <div
          style={{
            transform: `rotate(${rotation}deg) scale(${scale})`,
            width: "150px",
            height: "150px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 300ms ease-in-out",
          }}
        >
          <img
            src={showObject ? getObjectImage(food) : getFoodImage(food)}
            alt={showObject ? food.householdObject : food.name}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      </div>

      <div className="text-center font-medium">
        {showObject ? food.householdObject : `${food.name} (${food.servingSize})`}
      </div>
    </div>
  )
}

