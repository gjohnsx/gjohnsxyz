import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.webp'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="flex text-sm font-medium transition group text-zinc-800 hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
        target="_blank"
        rel="noreferrer"
      >
        <Icon className="flex-none w-6 h-6 transition fill-zinc-500 group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Gregory Johns</title>
        <meta
          name="description"
          content="I’m Gregory Johns. I&apos;m building the future built on cryptographic truth."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="object-cover aspect-square rotate-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I&apos;m Gregory Johns, and I&apos;m building bridges to the Network State future.

            </h1>
            <div className="mt-6 text-base space-y-7 text-zinc-600 dark:text-zinc-400">
              <p>
                I&apos;m Gregory Johns, a digital marketer and fullstack engineer with a passion for building the future based on cryptographic truth.
                My background in digital marketing has honed my skills in user experience, lead generation, and traffic acquisition.
                I&apos;ve always been drawn to the creative aspects of marketing and the ability to connect people with products and services in meaningful ways.
              </p>
              <p>
                In addition to marketing, I&apos;ve discovered a love for software development.
                The craftsmanship of building software appeals to me, as it allows me to turn complex problems into elegant, user-friendly solutions.
                Whether I&apos;m coding an app or designing a website, I take pride in my ability to turn ideas into reality and make an impact in people&apos;s lives.
              </p>
              <p>
                As a fullstack engineer and digital marketer, I&apos;m excited about the potential of the network state to revolutionize the way we live and work.
                I believe that with the power of cryptography and blockchain technology, we can build a future where our money can&apos;t be inflated or stolen,
                our speech can&apos;t be censored, and our truth can be verified.
                These are the core principles that drive my work, and I&apos;m dedicated to using my skills to help build a better world.
              </p>
              <p>
                I&apos;m always striving to push the boundaries of what&apos;s possible.
                Whether I&apos;m developing tools for network states or creating marketing campaigns, I&apos;m driven by the challenge of making an impact and shaping the future. My goal is to be a leader in this exciting new world and help build a brighter future for all of us.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/gjohnsx" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="https://github.com/gjohnsx" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://linkedin.com/in/greg-johns" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:greg@gjohns.xyz"
                icon={MailIcon}
                className="pt-8 mt-8 border-t border-zinc-100 dark:border-zinc-700/40"
              >
                greg@gjohns.xyz
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
