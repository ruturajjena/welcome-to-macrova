import type { ScreenKey } from "@/config/theme";
import { GoalScreen } from "./GoalScreen";
import { HomeScreen } from "./HomeScreen";
import { ScannerScreen } from "./ScannerScreen";
import { PlanScreen } from "./PlanScreen";
import { LabScreen } from "./LabScreen";
import { SuccessScreen } from "./SuccessScreen";

/** Maps a ScreenKey from config/theme.ts to its rendered app screen. */
export const SCREENS: Record<ScreenKey, React.ComponentType> = {
  goal: GoalScreen,
  home: HomeScreen,
  scanner: ScannerScreen,
  plan: PlanScreen,
  lab: LabScreen,
  success: SuccessScreen,
};

export function Screen({ name }: { name: ScreenKey }) {
  const Cmp = SCREENS[name];
  return <Cmp />;
}
