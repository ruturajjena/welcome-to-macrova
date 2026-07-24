import {
  Activity,
  Apple,
  Camera,
  CheckCircle2,
  ChevronDown,
  Dumbbell,
  Flame,
  FlaskConical,
  Home,
  Instagram,
  Leaf,
  Minus,
  Play,
  ScanLine,
  Sparkles,
  Star,
  Target,
  TrendingDown,
  TrendingUp,
  Twitter,
  Utensils,
  Wand2,
  type LucideIcon,
  type LucideProps,
} from "lucide-react";

/**
 * Central icon registry. theme.ts references icons by string name; this maps
 * those names to lucide-react components so config stays free of imports.
 * Add a new icon here, then reference it by name in config/theme.ts.
 */
const registry: Record<string, LucideIcon> = {
  Activity,
  Apple,
  Camera,
  CheckCircle2,
  ChevronDown,
  Dumbbell,
  Flame,
  FlaskConical,
  Home,
  Instagram,
  Leaf,
  Minus,
  Play,
  ScanLine,
  Sparkles,
  Star,
  Target,
  TrendingDown,
  TrendingUp,
  Twitter,
  Utensils,
  Wand2,
};

export function Icon({
  name,
  ...props
}: { name: string } & LucideProps) {
  const Cmp = registry[name] ?? Sparkles;
  return <Cmp {...props} />;
}
