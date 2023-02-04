import Link from 'next/link'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'

import { Container } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link
      className="p-1 -m-1 group"
      target="_blank"
      rel="noreferrer"
      {...props}
    >
      <Icon className="w-6 h-6 transition fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="pt-10 pb-16 border-t border-zinc-100 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:items-start sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/articles">Articles</NavLink>
                {/* <NavLink href="/speaking">Speaking</NavLink> */}
                {/* <NavLink href="/uses">Uses</NavLink> */}
              </div>
              <div className="flex flex-col">
                <p className="text-sm text-zinc-400 dark:text-zinc-500">
                  &copy; {new Date().getFullYear()} Gregory Johns. All rights
                  reserved.
                </p>
                <div className="flex justify-center gap-6 mt-6 sm:justify-end">
                  <SocialLink
                    href="https://twitter.com/gjohnsx"
                    aria-label="Follow on Twitter"
                    icon={TwitterIcon}
                  />
                  <SocialLink
                    href="https://github.com/gjohnsx"
                    aria-label="Follow on GitHub"
                    icon={GitHubIcon}
                  />
                  <SocialLink
                    href="https://linkedin.com/in/greg-johns"
                    aria-label="Follow on LinkedIn"
                    icon={LinkedInIcon}
                  />
                </div>
              </div>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
