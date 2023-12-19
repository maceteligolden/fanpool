import {
  CompetitionIcon,
  SettingsIcon,
  SupportIcon,
  TeamsIcon
} from '@/component/icons'
import EditProfileIcon from '@/component/icons/edit-profile.icon'
import type { SettingsItem } from '@/interfaces'

export const SettingsList: SettingsItem[] = [
  {
    title: 'Edit Profile',
    href: '/edit-profile',
    icon: <EditProfileIcon />
  },
  {
    title: 'My Competitions',
    href: '/my-competitions',
    icon: <CompetitionIcon />
  },
  {
    title: 'My Teams',
    href: '/my-teams',
    icon: <TeamsIcon />
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: <SettingsIcon />
  },
  {
    title: 'Support',
    href: '/support',
    icon: <SupportIcon />
  }
]
