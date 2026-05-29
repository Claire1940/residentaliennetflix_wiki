import Link from 'next/link'
import type { Metadata } from 'next'
import { buildLanguageAlternates } from '@/lib/i18n-utils'
import { type Locale } from '@/i18n/routing'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://residentaliennetflix.wiki'
  const path = '/about'

  return {
    title: 'About Resident Alien Netflix Wiki - Your Episode, Cast, and Ending Resource',
    description: 'Learn about Resident Alien Netflix Wiki, a community-driven resource hub providing episode guides, cast references, ending explainers, and streaming links for Resident Alien.',
    robots: {
      index: false,
      follow: true,
      googleBot: {
        index: false,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale,
      url: locale === 'en' ? `${siteUrl}${path}` : `${siteUrl}/${locale}${path}`,
      siteName: 'Resident Alien Netflix Wiki',
      title: 'About Resident Alien Netflix Wiki',
      description: 'Learn about our mission to provide the best Resident Alien episode, cast, and ending resources.',
      images: [
        {
          url: `${siteUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'Resident Alien Netflix Wiki',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About Resident Alien Netflix Wiki',
      description: 'Learn about our mission to provide the best Resident Alien viewing resources.',
      images: [`${siteUrl}/og-image.jpg`],
    },
    alternates: buildLanguageAlternates(path, locale as Locale, siteUrl),
  }
}

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 border-b border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Resident Alien Netflix Wiki
          </h1>
          <p className="text-slate-300 text-lg mb-2">
            Your community-driven resource center for Resident Alien viewers
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>Welcome to Resident Alien Netflix Wiki</h2>
            <p>
              Resident Alien Netflix Wiki is an <strong>unofficial, fan-made resource website</strong> dedicated to helping viewers follow the TV series "Resident Alien". We are a community-driven platform that provides comprehensive episode guides,
              cast and character references, ending explainers, streaming links, and story context.
            </p>
            <p>
              Whether you're a new viewer starting Season 1 or catching up on the Season 4 finale,
              Resident Alien Netflix Wiki is here to support you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 px-4 bg-slate-900/30">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>Our Mission</h2>
            <p>
              Our mission is simple: <strong>to empower Resident Alien Netflix viewers with accurate, up-to-date information and easy navigation</strong>. We strive to:
            </p>
            <ul>
              <li><strong>Provide reliable information:</strong> Keep our content updated with the latest episode and platform availability updates</li>
              <li><strong>Build useful tools:</strong> Develop guides, episode lists, cast references, and ending explainers that help viewers make informed decisions</li>
              <li><strong>Foster community:</strong> Create a welcoming space where viewers can learn, share insights, and grow together</li>
              <li><strong>Stay accessible:</strong> Keep all resources free and easy to use for fans of all levels</li>
            </ul>

            <h2>Our Vision</h2>
            <p>
              We envision Resident Alien Netflix Wiki as the <strong>go-to destination</strong> for every Resident Alien viewer seeking clear episode and character context. We want to be the resource that fans trust and rely on, whether they need
              episode recaps, cast details, streaming options, or ending explanations.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Feature Card 1 */}
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="text-2xl mb-3">🔨</div>
              <h3 className="text-xl font-semibold text-white mb-2">Episode Guides</h3>
              <p className="text-slate-300">
                Season-by-season episode breakdowns and spoiler-safe summaries to help you catch up quickly.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="text-2xl mb-3">🌍</div>
              <h3 className="text-xl font-semibold text-white mb-2">Streaming Guide</h3>
              <p className="text-slate-300">
                Where to watch Resident Alien on Peacock and Netflix, plus region-related availability notes.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="text-2xl mb-3">🦋</div>
              <h3 className="text-xl font-semibold text-white mb-2">Cast and Characters</h3>
              <p className="text-slate-300">
                Profiles for main and recurring characters, actor mapping, and relationship context.
              </p>
            </div>

            {/* Feature Card 4 */}
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="text-2xl mb-3">🎯</div>
              <h3 className="text-xl font-semibold text-white mb-2">Ending Explained</h3>
              <p className="text-slate-300">
                Clear explanations for finale events, unresolved threads, and major story reveals.
              </p>
            </div>

            {/* Feature Card 5 */}
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="text-2xl mb-3">📚</div>
              <h3 className="text-xl font-semibold text-white mb-2">Lore and Theories</h3>
              <p className="text-slate-300">
                Alien factions, world-building details, and evidence-backed fan theories.
              </p>
            </div>

            {/* Feature Card 6 */}
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="text-2xl mb-3">🌍</div>
              <h3 className="text-xl font-semibold text-white mb-2">Watch Links and Platforms</h3>
              <p className="text-slate-300">
                Direct links to official show pages on SYFY, Peacock, Netflix, and verified social channels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-12 px-4 bg-slate-900/30">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>Community-Driven</h2>
            <p>
              Resident Alien Netflix Wiki is built <strong>by the community, for the community</strong>. We welcome contributions,
              feedback, and suggestions from viewers and fans at all levels. Our content is constantly evolving based on:
            </p>
            <ul>
              <li><strong>Viewer feedback:</strong> Your suggestions help us improve and expand our resources</li>
              <li><strong>Community discoveries:</strong> New episode insights and continuity clarifications shared by fans</li>
              <li><strong>Platform and release updates:</strong> We monitor official updates and adjust our content accordingly</li>
              <li><strong>Meta shifts:</strong> We track story and engagement trends and update guides based on real audience interests</li>
            </ul>
            <p>
              <strong>Want to contribute?</strong> Whether you've discovered a new source, corrected timeline detail, or idea for a new guide, we'd love to hear from you! Reach out through our contact channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>About the Team</h2>
            <p>
              Resident Alien Netflix Wiki is maintained by a dedicated team of passionate viewers, editors, and developers who love
              Resident Alien as much as you do. We're fans first, constantly checking official updates, episodes, and cast announcements.
            </p>
            <p>
              Our team combines expertise in:
            </p>
            <ul>
              <li><strong>TV analysis:</strong> Deep understanding of Resident Alien episodes, character arcs, and finale context</li>
              <li><strong>Web development:</strong> Building fast, user-friendly tools and interfaces</li>
              <li><strong>Content creation:</strong> Writing clear, helpful guides and tutorials</li>
              <li><strong>Community management:</strong> Listening to player feedback and fostering a positive environment</li>
            </ul>
            <p className="text-slate-400 italic text-sm">
              Project Codename: "Dreamscape" – Navigating the surreal together.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 px-4 bg-slate-900/30">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>Important Disclaimer</h2>
            <p className="text-yellow-400/90">
              <strong>Resident Alien Netflix Wiki is an unofficial fan-made website.</strong> We are NOT affiliated with,
              endorsed by, or associated with the rights holders of Resident Alien or any official entities.
            </p>
            <p>
              All show trademarks, titles, images, and related assets are the property of their respective owners.
              We use series-related content under fair use principles for informational and educational purposes only.
            </p>
            <p>
              Resident Alien Netflix Wiki is a non-profit, community resource created by fans, for fans.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>Get in Touch</h2>
            <p>
              We'd love to hear from you! Whether you have questions, suggestions, found a bug, or just want to say hi:
            </p>
            <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
              <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <h3 className="text-lg font-semibold text-white mb-2">General Inquiries</h3>
                <a href="mailto:contact@residentaliennetflix.wiki" className="text-[hsl(var(--nav-theme-light))] hover:underline">
                  contact@residentaliennetflix.wiki
                </a>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <h3 className="text-lg font-semibold text-white mb-2">Bug Reports</h3>
                <a href="mailto:support@residentaliennetflix.wiki" className="text-[hsl(var(--nav-theme-light))] hover:underline">
                  support@residentaliennetflix.wiki
                </a>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <h3 className="text-lg font-semibold text-white mb-2">Content Submissions</h3>
                <a href="mailto:contribute@residentaliennetflix.wiki" className="text-[hsl(var(--nav-theme-light))] hover:underline">
                  contribute@residentaliennetflix.wiki
                </a>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <h3 className="text-lg font-semibold text-white mb-2">Partnerships</h3>
                <a href="mailto:partnerships@residentaliennetflix.wiki" className="text-[hsl(var(--nav-theme-light))] hover:underline">
                  partnerships@residentaliennetflix.wiki
                </a>
              </div>
            </div>
            <p className="text-slate-400 text-sm">
              <strong>Response Time:</strong> We aim to respond to all inquiries within 2-3 business days.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-purple-900/30 to-blue-900/30 border-y border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Community</h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Stay updated with the latest guides, cast updates, and Resident Alien news.
            Bookmark this site and check back regularly for new content!
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[hsl(var(--nav-theme-light))] text-white font-semibold hover:opacity-90 transition"
          >
            Explore the Wiki
          </Link>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Link href="/" className="text-[hsl(var(--nav-theme-light))] hover:underline">
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  )
}
