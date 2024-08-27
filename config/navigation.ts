import { siteConfig } from "~/config/site";

export const navigationItems: { title: string, href: string }[] = [
    {
        title: 'Experience',
        href: '#features',
    },
    {
        title: 'FAQ',
        href: '#faq',
    }
]

export const footerSections: { title: string, items: { title: string, href: string }[] }[] = [
]

export type NavigationItems = typeof navigationItems
export type FooterSections = typeof footerSections