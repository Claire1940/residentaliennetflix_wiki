"use client";

import { Suspense, lazy } from "react";
import {
  BookOpen,
  MonitorPlay,
  ListVideo,
  Users,
  FileText,
  Star,
  MapPinned,
  Library,
  Check,
  ExternalLink,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { useMessages } from "next-intl";
import { VideoFeature } from "@/components/home/VideoFeature";
import { LatestGuidesAccordion } from "@/components/home/LatestGuidesAccordion";
import { NativeBannerAd, AdBanner } from "@/components/ads";
import { SidebarAd } from "@/components/ads/SidebarAd";
import { scrollToSection } from "@/lib/scrollToSection";
import type { ContentItemWithType } from "@/lib/getLatestArticles";
import type { ModuleLinkMap } from "@/lib/buildModuleLinkMap";

const HeroStats = lazy(() => import("@/components/home/HeroStats"));
const FAQSection = lazy(() => import("@/components/home/FAQSection"));
const CTASection = lazy(() => import("@/components/home/CTASection"));

const LoadingPlaceholder = ({ height = "h-64" }: { height?: string }) => (
  <div className={`${height} animate-pulse rounded-xl border border-border bg-white/5`} />
);

interface HomePageClientProps {
  latestArticles: ContentItemWithType[];
  moduleLinkMap: ModuleLinkMap;
  locale: string;
}

export default function HomePageClient({ latestArticles, locale }: HomePageClientProps) {
  const t = useMessages() as any;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://residentaliennetflix.wiki";

  const navCards = [
    { id: "season-5-final-season-status", icon: BookOpen, title: t.tools.cards[0].title, description: t.tools.cards[0].description },
    { id: "where-to-watch-streaming-guide", icon: MonitorPlay, title: t.tools.cards[1].title, description: t.tools.cards[1].description },
    { id: "season-4-episode-guide", icon: ListVideo, title: t.tools.cards[2].title, description: t.tools.cards[2].description },
    { id: "cast-and-characters-guide", icon: Users, title: t.tools.cards[3].title, description: t.tools.cards[3].description },
    { id: "story-recap-and-ending-explained", icon: FileText, title: t.tools.cards[4].title, description: t.tools.cards[4].description },
    { id: "reviews-and-ratings", icon: Star, title: t.tools.cards[5].title, description: t.tools.cards[5].description },
    { id: "filming-locations-guide", icon: MapPinned, title: t.tools.cards[6].title, description: t.tools.cards[6].description },
    { id: "comic-source-material-guide", icon: Library, title: t.tools.cards[7].title, description: t.tools.cards[7].description },
  ];

  return (
    <div className="home-shell min-h-screen bg-background text-foreground">
      <aside className="fixed top-20 z-10 hidden w-40 xl:block" style={{ left: "calc((100vw - 896px) / 2 - 180px)" }}>
        <SidebarAd type="sidebar-160x300" adKey={process.env.NEXT_PUBLIC_AD_SIDEBAR_160X300} />
      </aside>
      <aside className="fixed top-20 z-10 hidden w-40 xl:block" style={{ right: "calc((100vw - 896px) / 2 - 180px)" }}>
        <SidebarAd type="sidebar-160x600" adKey={process.env.NEXT_PUBLIC_AD_SIDEBAR_160X600} />
      </aside>

      <section className="relative overflow-hidden px-4 pb-14 pt-24 md:pb-20 md:pt-32">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8 text-center scroll-reveal">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--nav-theme)/0.3)] bg-[hsl(var(--nav-theme)/0.1)] px-3 py-1.5 md:mb-6 md:px-4 md:py-2">
              <Sparkles className="h-4 w-4 text-[hsl(var(--nav-theme-light))]" />
              <span className="text-xs font-medium md:text-sm">{t.hero.badge}</span>
            </div>
            <h1 className="mb-4 text-4xl font-bold leading-[1.05] sm:text-5xl md:mb-6 md:text-7xl">{t.hero.title}</h1>
            <p className="mx-auto mb-8 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg md:mb-10 md:max-w-3xl md:text-2xl">{t.hero.description}</p>
            <div className="mb-10 flex flex-col justify-center gap-3 sm:flex-row md:mb-12 md:gap-4">
              <button onClick={() => scrollToSection("season-4-episode-guide")} className="inline-flex items-center justify-center gap-2 rounded-lg bg-[hsl(var(--nav-theme))] px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[hsl(var(--nav-theme)/0.9)] md:px-8 md:py-4 md:text-lg">
                <BookOpen className="h-5 w-5" />
                {t.hero.getFreeCodesCTA}
              </a>
              <a href="https://www.peacocktv.com/watch-online/tv/resident-alien/7067427714335486112" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3.5 text-base font-semibold transition-colors hover:bg-white/10 md:px-8 md:py-4 md:text-lg">
                {t.hero.playOnSteamCTA}
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
          <Suspense fallback={<LoadingPlaceholder height="h-32" />}>
            <HeroStats stats={Object.values(t.hero.stats)} />
          </Suspense>
        </div>
      </section>

      <section className="px-4 py-10 md:py-12">
        <div className="container mx-auto max-w-5xl scroll-reveal">
          <div className="relative overflow-hidden rounded-2xl">
            <VideoFeature videoId="yTtqHLUIpNg" title="Resident Alien Season 4 Official Trailer" />
          </div>
        </div>
      </section>

      <section className="bg-white/[0.02] px-4 py-14 md:py-20">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-8 text-center scroll-reveal md:mb-12">
            <h2 className="mb-3 text-3xl font-bold md:mb-4 md:text-5xl">
              {t.tools.title} <span className="text-[hsl(var(--nav-theme-light))]">{t.tools.titleHighlight}</span>
            </h2>
            <p className="text-base text-muted-foreground md:text-lg">{t.tools.subtitle}</p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
            <div className="hidden" aria-hidden="true">
              <a href="#season-5-final-season-status">season-5-final-season-status</a>
              <a href="#where-to-watch-streaming-guide">where-to-watch-streaming-guide</a>
              <a href="#season-4-episode-guide">season-4-episode-guide</a>
              <a href="#cast-and-characters-guide">cast-and-characters-guide</a>
              <a href="#story-recap-and-ending-explained">story-recap-and-ending-explained</a>
              <a href="#reviews-and-ratings">reviews-and-ratings</a>
              <a href="#filming-locations-guide">filming-locations-guide</a>
              <a href="#comic-source-material-guide">comic-source-material-guide</a>
            </div>
            {navCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <a key={card.id} href={`#${card.id}`} onClick={(e) => { e.preventDefault(); scrollToSection(card.id); }} className="group cursor-pointer rounded-xl border border-border bg-card p-4 text-left transition-all duration-300 hover:border-[hsl(var(--nav-theme)/0.5)] hover:shadow-lg hover:shadow-[hsl(var(--nav-theme)/0.1)] md:p-6">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[hsl(var(--nav-theme)/0.1)] transition-colors group-hover:bg-[hsl(var(--nav-theme)/0.2)] md:mb-4 md:h-12 md:w-12">
                    <Icon className="h-5 w-5 text-[hsl(var(--nav-theme-light))] md:h-6 md:w-6" />
                  </div>
                  <h3 className="mb-1.5 text-sm font-semibold md:text-base">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <NativeBannerAd adKey={process.env.NEXT_PUBLIC_AD_NATIVE_BANNER || ""} />
      <LatestGuidesAccordion articles={latestArticles} locale={locale} max={12} />

      <AdBanner type="banner-300x250" adKey={process.env.NEXT_PUBLIC_AD_BANNER_300X250} className="md:hidden" />
      <AdBanner type="banner-728x90" adKey={process.env.NEXT_PUBLIC_AD_BANNER_728X90} className="hidden md:flex" />

      <section id="season-5-final-season-status" className="scroll-mt-24 px-4 py-14 md:py-20"><div className="container mx-auto max-w-5xl"><div className="mb-8 text-center md:mb-12"><h2 className="mb-3 text-3xl font-bold md:mb-4 md:text-5xl">{t.modules.season5FinalSeasonStatus.title}</h2><p className="mx-auto max-w-3xl text-base text-muted-foreground md:text-lg">{t.modules.season5FinalSeasonStatus.intro}</p></div><div className="grid grid-cols-1 gap-4 md:grid-cols-2">{t.modules.season5FinalSeasonStatus.items.map((item: any, i: number)=><div key={i} className="rounded-xl border border-border bg-white/5 p-6"><h3 className="mb-2 font-bold text-[hsl(var(--nav-theme-light))]">{item.label}</h3><p className="mb-2 text-sm">{item.status}</p><p className="text-sm text-muted-foreground">{item.description}</p></div>)}</div></div></section>

      <section id="where-to-watch-streaming-guide" className="scroll-mt-24 bg-white/[0.02] px-4 py-14 md:py-20"><div className="container mx-auto max-w-5xl"><div className="mb-8 text-center md:mb-12"><h2 className="mb-3 text-3xl font-bold md:mb-4 md:text-5xl">{t.modules.whereToWatchStreamingGuide.title}</h2><p className="mx-auto max-w-3xl text-base text-muted-foreground md:text-lg">{t.modules.whereToWatchStreamingGuide.intro}</p></div><div className="grid grid-cols-1 gap-4 md:grid-cols-2">{t.modules.whereToWatchStreamingGuide.items.map((item: any, i: number)=><div key={i} className="rounded-xl border border-border bg-white/5 p-6"><h3 className="mb-2 font-bold text-[hsl(var(--nav-theme-light))]">{item.platform}</h3><p className="text-sm text-muted-foreground">{item.details}</p></div>)}</div></div></section>

      <section id="season-4-episode-guide" className="scroll-mt-24 px-4 py-14 md:py-20"><div className="container mx-auto max-w-5xl"><div className="mb-8 text-center md:mb-12"><h2 className="mb-3 text-3xl font-bold md:mb-4 md:text-5xl">{t.modules.season4EpisodeGuide.title}</h2><p className="mx-auto max-w-3xl text-base text-muted-foreground md:text-lg">{t.modules.season4EpisodeGuide.intro}</p></div><div className="space-y-3">{t.modules.season4EpisodeGuide.items.map((item: any, i: number)=><div key={i} className="rounded-xl border border-border bg-white/5 p-5"><h3 className="font-bold">Episode {item.episode}: {item.title}</h3><p className="text-sm text-muted-foreground">{item.tv_air_date} • {item.runtime}</p><p className="mt-2 text-sm">{item.summary}</p></div>)}</div></div></section>

      <section id="cast-and-characters-guide" className="scroll-mt-24 bg-white/[0.02] px-4 py-14 md:py-20"><div className="container mx-auto max-w-5xl"><div className="mb-8 text-center md:mb-12"><h2 className="mb-3 text-3xl font-bold md:mb-4 md:text-5xl">{t.modules.castAndCharactersGuide.title}</h2><p className="mx-auto max-w-3xl text-base text-muted-foreground md:text-lg">{t.modules.castAndCharactersGuide.intro}</p></div><div className="grid grid-cols-1 gap-4 md:grid-cols-2">{t.modules.castAndCharactersGuide.items.map((item: any, i: number)=><div key={i} className="rounded-xl border border-border bg-white/5 p-6"><h3 className="font-bold text-[hsl(var(--nav-theme-light))]">{item.actor}</h3><p className="text-sm">{item.character}</p><p className="mt-2 text-sm text-muted-foreground">{item.description}</p></div>)}</div></div></section>

      <section id="story-recap-and-ending-explained" className="scroll-mt-24 px-4 py-14 md:py-20"><div className="container mx-auto max-w-5xl"><div className="mb-8 text-center md:mb-12"><h2 className="mb-3 text-3xl font-bold md:mb-4 md:text-5xl">{t.modules.storyRecapAndEndingExplained.title}</h2><p className="mx-auto max-w-3xl text-base text-muted-foreground md:text-lg">{t.modules.storyRecapAndEndingExplained.intro}</p></div><div className="space-y-4">{t.modules.storyRecapAndEndingExplained.steps.map((step:any, i:number)=><div key={i} className="flex gap-3 rounded-xl border border-border bg-white/5 p-5"><div className="flex h-8 w-8 items-center justify-center rounded-full border border-[hsl(var(--nav-theme)/0.5)] bg-[hsl(var(--nav-theme)/0.15)] text-sm font-bold text-[hsl(var(--nav-theme-light))]">{i+1}</div><div><h3 className="font-bold">{step.title}</h3><p className="mt-1 text-sm text-muted-foreground">{step.description}</p></div></div>)}</div></div></section>

      <section id="reviews-and-ratings" className="scroll-mt-24 bg-white/[0.02] px-4 py-14 md:py-20"><div className="container mx-auto max-w-5xl"><div className="mb-8 text-center md:mb-12"><h2 className="mb-3 text-3xl font-bold md:mb-4 md:text-5xl">{t.modules.reviewsAndRatings.title}</h2><p className="mx-auto max-w-3xl text-base text-muted-foreground md:text-lg">{t.modules.reviewsAndRatings.intro}</p></div><div className="grid grid-cols-1 gap-4 md:grid-cols-3">{t.modules.reviewsAndRatings.items.map((item:any, i:number)=><div key={i} className="rounded-xl border border-border bg-white/5 p-6 text-center"><p className="text-sm text-muted-foreground">{item.label}</p><p className="mt-2 text-3xl font-bold text-[hsl(var(--nav-theme-light))]">{item.score}</p><p className="mt-2 text-sm">{item.note}</p></div>)}</div></div></section>

      <section id="filming-locations-guide" className="scroll-mt-24 px-4 py-14 md:py-20"><div className="container mx-auto max-w-5xl"><div className="mb-8 text-center md:mb-12"><h2 className="mb-3 text-3xl font-bold md:mb-4 md:text-5xl">{t.modules.filmingLocationsGuide.title}</h2><p className="mx-auto max-w-3xl text-base text-muted-foreground md:text-lg">{t.modules.filmingLocationsGuide.intro}</p></div><div className="grid grid-cols-1 gap-4 md:grid-cols-2">{t.modules.filmingLocationsGuide.items.map((item:any, i:number)=><div key={i} className="rounded-xl border border-border bg-white/5 p-6"><h3 className="font-bold text-[hsl(var(--nav-theme-light))]">{item.place}</h3><p className="mt-2 text-sm text-muted-foreground">{item.description}</p></div>)}</div></div></section>

      <section id="comic-source-material-guide" className="scroll-mt-24 bg-white/[0.02] px-4 py-14 md:py-20"><div className="container mx-auto max-w-5xl"><div className="mb-8 text-center md:mb-12"><h2 className="mb-3 text-3xl font-bold md:mb-4 md:text-5xl">{t.modules.comicSourceMaterialGuide.title}</h2><p className="mx-auto max-w-3xl text-base text-muted-foreground md:text-lg">{t.modules.comicSourceMaterialGuide.intro}</p></div><div className="grid grid-cols-1 gap-4 md:grid-cols-2">{t.modules.comicSourceMaterialGuide.items.map((item:any, i:number)=><div key={i} className="rounded-xl border border-border bg-white/5 p-6"><h3 className="font-bold">{item.name}</h3><p className="mt-2 text-sm text-muted-foreground">{item.description}</p></div>)}</div></div></section>

      <section className="px-4 py-12">
        <div className="container mx-auto max-w-5xl rounded-xl border border-[hsl(var(--nav-theme)/0.3)] bg-[hsl(var(--nav-theme)/0.05)] p-6">
          <div className="mb-3 flex items-center gap-2"><BookOpen className="h-5 w-5 text-[hsl(var(--nav-theme-light))]" /><h3 className="font-bold">{t.modules.homeQuickNotes.title}</h3></div>
          <ul className="space-y-2">{t.modules.homeQuickNotes.notes.map((note:string, i:number)=><li key={i} className="flex items-start gap-2 text-sm text-muted-foreground"><Check className="mt-0.5 h-4 w-4 text-[hsl(var(--nav-theme-light))]" />{note}</li>)}</ul>
        </div>
      </section>

      <Suspense fallback={<LoadingPlaceholder />}>
        <FAQSection title={t.faq.title} titleHighlight={t.faq.titleHighlight} subtitle={t.faq.subtitle} questions={t.faq.questions} />
      </Suspense>
      <Suspense fallback={<LoadingPlaceholder />}>
        <CTASection title={t.cta.title} description={t.cta.description} joinCommunity={t.cta.joinCommunity} joinGame={t.cta.joinGame} />
      </Suspense>

      <footer className="border-t border-border bg-white/[0.02]">
        <div className="container mx-auto px-4 py-12 text-sm text-muted-foreground">
          <p>{t.footer.description}</p>
          <div className="mt-4 flex flex-wrap gap-4">
            <a href="https://www.syfy.com/resident-alien" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-[hsl(var(--nav-theme-light))]">SYFY <ExternalLink className="h-3 w-3" /></a>
            <a href="https://www.peacocktv.com/watch-online/tv/resident-alien/7067427714335486112" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-[hsl(var(--nav-theme-light))]">Peacock <ExternalLink className="h-3 w-3" /></a>
            <a href="https://www.netflix.com/title/81405070" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-[hsl(var(--nav-theme-light))]">Netflix <ExternalLink className="h-3 w-3" /></a>
          </div>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Resident Alien Netflix Wiki",
            url: siteUrl,
          }),
        }}
      />
    </div>
  );
}
