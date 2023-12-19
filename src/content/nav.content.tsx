import {
  HomeIcon,
  LobbyIcon,
  ProfileIcon,
  RankingIcon
} from '@/component/icons'
import type { NavItem } from '@/interfaces'

export const NavList: NavItem[] = [
  {
    icon: <HomeIcon />,
    title: 'Home',
    href: '/'
  },
  {
    icon: <LobbyIcon />,
    title: 'Lobby',
    href: '/lobby'
  },
  {
    icon: <RankingIcon />,
    title: 'Ranking',
    href: '/ranking'
  },
  {
    icon: <ProfileIcon />,
    title: 'Profile',
    href: '/profile'
  }
]
