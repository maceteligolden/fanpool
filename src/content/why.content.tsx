import ListItems from "@/interfaces/config.interface";
import SpreedsheetIcon from "@/component/icons/spreedsheet";
import TrophyIcon from "@/component/icons/trophy";
import WalletIcon from "@/component/icons/wallet";

export const whyLists: ListItems[] = [
  {
    icon: <SpreedsheetIcon />,
    title: "Spend Less Time on Spreadsheets and Bank Receipts:",
    description:
      "Let Fanpool handle the nitty-gritty while you focus on growing your community and maximizing your commissions.",
  },
  {
    icon: <TrophyIcon />,
    title: "Create contests and join contests across multiple leagues: ",
    description: "Manage your fantasy leagues all in one place.",
  },
  {
    icon: <WalletIcon />,
    title: "In-app USDC wallet for fast, safe deposits and cashouts: ",
    description: "Easily manage your funds without leaving the app.",
  },
];

export const contestsList: ListItems[] = [
  {
    title: "Last Man Standing",
  },
  {
    title: "TagTeam Matchups",
  },
  {
    title: "Intense 1V1 Showdowns",
  },
];
