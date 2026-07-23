import { z } from "zod";

export const PlannerSchema = z.object({
  city: z.string(),

  weather: z.object({
    temperature: z.string(),
    humidity: z.string(),
    wind: z.string(),
    weatherCode: z.number()
  }),

  summary: z.string(),

  recommendation: z.string(),

  packingList: z.array(z.string()),

  itinerary: z.array(
    z.object({
      place: z.string(),
      description: z.string(),
      bestTime: z.string()
    })
  )
});