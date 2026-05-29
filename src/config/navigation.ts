import { CalendarDays, Clapperboard, MonitorPlay, BookOpenText, Star, UsersRound, type LucideIcon } from 'lucide-react'

export interface NavigationItem {
	key: string // translation key, e.g. 'season' -> t('nav.season')
	path: string // URL path, e.g. '/season'
	icon: LucideIcon // Lucide icon component
	isContentType: boolean // whether it maps to content/ directory
}

export const NAVIGATION_CONFIG: NavigationItem[] = [
	{ key: 'season', path: '/season', icon: CalendarDays, isContentType: true },
	{ key: 'cast', path: '/cast', icon: Clapperboard, isContentType: true },
	{ key: 'streaming', path: '/streaming', icon: MonitorPlay, isContentType: true },
	{ key: 'guide', path: '/guide', icon: BookOpenText, isContentType: true },
	{ key: 'reviews', path: '/reviews', icon: Star, isContentType: true },
	{ key: 'characters', path: '/characters', icon: UsersRound, isContentType: true },
]

// Derive content types from config (used by routing and content loading)
export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map(
	(item) => item.path.slice(1),
)

export type ContentType = (typeof CONTENT_TYPES)[number]

export function isValidContentType(type: string): type is ContentType {
	return CONTENT_TYPES.includes(type as ContentType)
}
