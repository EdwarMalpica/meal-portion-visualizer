export type FoodCategory = "proteins" | "grains" | "fruits" | "vegetables" | "dairy" | "fats"

export interface FoodItem {
  id: string
  name: string
  category: FoodCategory
  servingSize: string
  householdObject: string
  description: string
  imageUrl?: string
  objectImageUrl?: string
}

export const foodItems: FoodItem[] = [
  {
    id: "protein-chicken",
    name: "Chicken Breast",
    category: "proteins",
    servingSize: "3 oz (85g)",
    householdObject: "Deck of Cards",
    description: "A single serving of chicken breast is about the size of a deck of playing cards.",
  },
  {
    id: "protein-fish",
    name: "Fish Fillet",
    category: "proteins",
    servingSize: "3 oz (85g)",
    householdObject: "Checkbook",
    description: "A serving of fish is approximately the size and thickness of a checkbook.",
  },
  {
    id: "protein-beef",
    name: "Ground Beef",
    category: "proteins",
    servingSize: "3 oz (85g)",
    householdObject: "Hockey Puck",
    description: "A serving of ground beef is about the size of a hockey puck.",
  },
  {
    id: "grain-pasta",
    name: "Cooked Pasta",
    category: "grains",
    servingSize: "1/2 cup (125ml)",
    householdObject: "Tennis Ball",
    description: "A serving of pasta is about the size of a tennis ball.",
  },
  {
    id: "grain-rice",
    name: "Cooked Rice",
    category: "grains",
    servingSize: "1/2 cup (125ml)",
    householdObject: "Light Bulb",
    description: "A serving of rice is about the size of a standard light bulb.",
  },
  {
    id: "grain-cereal",
    name: "Breakfast Cereal",
    category: "grains",
    servingSize: "1 cup (250ml)",
    householdObject: "Baseball",
    description: "A serving of cereal is about the size of a baseball.",
  },
  {
    id: "fruit-apple",
    name: "Apple",
    category: "fruits",
    servingSize: "1 medium (182g)",
    householdObject: "Tennis Ball",
    description: "A medium apple is about the size of a tennis ball.",
  },
  {
    id: "fruit-berries",
    name: "Berries",
    category: "fruits",
    servingSize: "1 cup (250ml)",
    householdObject: "Baseball",
    description: "A serving of berries is about the size of a baseball.",
  },
  {
    id: "vegetable-broccoli",
    name: "Broccoli",
    category: "vegetables",
    servingSize: "1 cup (250ml)",
    householdObject: "Light Bulb",
    description: "A serving of broccoli is about the size of a light bulb.",
  },
  {
    id: "vegetable-leafy-greens",
    name: "Leafy Greens",
    category: "vegetables",
    servingSize: "2 cups (500ml)",
    householdObject: "Two Baseballs",
    description: "A serving of leafy greens is about the size of two baseballs.",
  },
  {
    id: "dairy-cheese",
    name: "Cheese",
    category: "dairy",
    servingSize: "1.5 oz (42g)",
    householdObject: "3 Stacked Dice",
    description: "A serving of cheese is about the size of 3 stacked dice or a pair of dominoes.",
  },
  {
    id: "dairy-yogurt",
    name: "Yogurt",
    category: "dairy",
    servingSize: "6 oz (170g)",
    householdObject: "Tennis Ball",
    description: "A serving of yogurt is about the size of a tennis ball.",
  },
  {
    id: "fats-butter",
    name: "Butter",
    category: "fats",
    servingSize: "1 tbsp (14g)",
    householdObject: "Poker Chip",
    description: "A serving of butter is about the size of a poker chip or the tip of your thumb.",
  },
  {
    id: "fats-oil",
    name: "Cooking Oil",
    category: "fats",
    servingSize: "1 tbsp (15ml)",
    householdObject: "Poker Chip",
    description: "A serving of oil is about the size of a poker chip.",
  },
  {
    id: "fats-nuts",
    name: "Nuts",
    category: "fats",
    servingSize: "1 oz (28g)",
    householdObject: "Golf Ball",
    description: "A serving of nuts is about the size of a golf ball or fits in a small cupped hand.",
  },
]

export const categoryLabels: Record<FoodCategory, string> = {
  proteins: "Proteins",
  grains: "Grains",
  fruits: "Fruits",
  vegetables: "Vegetables",
  dairy: "Dairy",
  fats: "Fats & Oils",
}

