import { Beef, CroissantIcon as Bread, Apple, Carrot, Milk, Droplet, type LucideIcon } from "lucide-react"
import type { FoodCategory } from "@/lib/portion-data"

interface FoodCategoryIconProps {
  category: FoodCategory
  size?: number
  className?: string
}

export function FoodCategoryIcon({ category, size = 16, className = "" }: FoodCategoryIconProps) {
  const iconMap: Record<FoodCategory, LucideIcon> = {
    proteins: Beef,
    grains: Bread,
    fruits: Apple,
    vegetables: Carrot,
    dairy: Milk,
    fats: Droplet,
  }

  const Icon = iconMap[category]

  return <Icon size={size} className={className} />
}

