import { Card as ShadCard, CardContent as ShadCardContent } from "@shadcn/ui/card"; // Ensure correct import

export function Card(props) {
  return <ShadCard {...props} />;
}

export function CardContent(props) {
  return <ShadCardContent {...props} />;
}
