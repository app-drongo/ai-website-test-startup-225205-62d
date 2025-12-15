'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star, Users, Zap, Shield, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_HERO = {
  title: 'Build the Future with AI-Powered Solutions',
  subtitle:
    "Transform your startup with cutting-edge technology that scales. Join thousands of founders who've accelerated their growth with our platform.",
  ctaText: 'Start Building Today',
  ctaHref: '/get-started',
  secondaryCtaText: 'Watch Demo',
  secondaryCtaHref: '/demo',
  heroImageUrl:
    'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  heroImageAlt: 'Modern tech workspace with multiple screens showing analytics',
  stats: [
    { label: 'Active Users', value: '50K+', icon: 'Users' },
    { label: 'Growth Rate', value: '300%', icon: 'TrendingUp' },
    { label: 'Uptime', value: '99.9%', icon: 'Shield' },
  ],
  features: ['AI-Powered Analytics', 'Real-time Collaboration', 'Enterprise Security'],
  trustBadge: 'Trusted by 500+ startups',
  announcement: '🚀 New: Advanced AI features now available',
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature(prev => (prev + 1) % config.features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [config.features.length]);

  const handlePrimaryCTA = () => {
    navigate(config.ctaHref);
  };

  const handleSecondaryCTA = () => {
    navigate(config.secondaryCtaHref);
  };

  const getIcon = (iconName: string) => {
    const icons = {
      Users: Users,
      TrendingUp: TrendingUp,
      Shield: Shield,
      Zap: Zap,
    };
    const IconComponent = icons[iconName as keyof typeof icons] || Zap;
    return <IconComponent className="h-5 w-5" />;
  };

  return (
    <section id="hero" className="bg-background text-foreground py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Announcement Banner */}
        <div className="text-center mb-8">
          <Badge
            variant="secondary"
            className="bg-primary/10 text-primary border-primary/20 px-4 py-2"
          >
            <span data-editable="announcement">{config.announcement}</span>
          </Badge>
        </div>

        <div className="grid gap-12 lg:gap-20 lg:grid-cols-2 items-center">
          {/* Left Column - Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                <span data-editable="title">{config.title}</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                <span data-editable="subtitle">{config.subtitle}</span>
              </p>

              {/* Rotating Features */}
              <div className="flex items-center space-x-2 text-primary">
                <Zap className="h-5 w-5" />
                <span className="font-medium">
                  <span data-editable={`features[${currentFeature}]`}>
                    {config.features[currentFeature]}
                  </span>
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={handlePrimaryCTA}
                data-editable-href="ctaHref"
                data-href={config.ctaHref}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold group"
              >
                <span data-editable="ctaText">{config.ctaText}</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={handleSecondaryCTA}
                data-editable-href="secondaryCtaHref"
                data-href={config.secondaryCtaHref}
                className="px-8 py-6 text-lg font-semibold border-border hover:bg-accent hover:text-accent-foreground"
              >
                <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
              </Button>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full bg-primary/20 border-2 border-background"
                  />
                ))}
              </div>
              <span data-editable="trustBadge">{config.trustBadge}</span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {config.stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="flex justify-center mb-2 text-primary">{getIcon(stat.icon)}</div>
                  <div className="text-2xl font-bold">
                    <span data-editable={`stats[${idx}].value`}>{stat.value}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span data-editable={`stats[${idx}].label`}>{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <Card className="bg-card border-border overflow-hidden shadow-2xl">
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={config.heroImageUrl}
                    alt={config.heroImageAlt}
                    data-editable-src="heroImageUrl"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    priority
                  />

                  {/* Overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-current" />
                    <span>4.9</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 h-24 w-24 bg-primary/10 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 h-32 w-32 bg-accent/10 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
