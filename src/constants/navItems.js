import {
  LayoutDashboard,
  Users,
  GitCompare,
  Trophy,
  BarChart3,
  FileText,
  Settings,
} from "lucide-react";

export const NAV_ITEMS = [
  { label: "Dashboard", path: "/", icon: LayoutDashboard },
  { label: "Players", path: "/players", icon: Users },
  { label: "Compare", path: "/compare", icon: GitCompare },
  { label: "Rankings", path: "/rankings", icon: Trophy },
  { label: "Analytics", path: "/analytics", icon: BarChart3 },
  { label: "Reports", path: "/reports", icon: FileText },
  { label: "Settings", path: "/Settings", icon: Settings },
];
