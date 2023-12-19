import { JoinIcon, InviteIcon, EarnIcon } from '@/component/icons'
import type { ListItems } from '@/interfaces/index'

export const worksList: ListItems[] = [
  {
    image: '/step1.svg',
    title: 'Join Or Create A Contest',
    description:
      'Join existing leagues or create your own cup-style competitions. Sync seamlessly with your current Fantasy Premier League contests.',
    icon: <JoinIcon />
  },
  {
    image: '/step2.svg',
    title: 'Invite Your Group',
    description:
      "Share your contest invite link effortlessly on WhatsApp, Telegram, Facebook, and more. It's time to bring your community together.",
    icon: <InviteIcon />
  },
  {
    image: '/step3.svg',
    title: 'Earn 12x Commissions',
    description:
      'Create contests, enjoy the thrill, and cash out! Fanpool magnifies your contests by 12x, offering a payout that matches the excitement. Your commissions just got a major upgrade!',
    icon: <EarnIcon />
  }
]
