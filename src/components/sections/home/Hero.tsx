'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, CheckCircle, Zap, Shield, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_HERO = {
  headline: 'Ship Bug-Free Code 10x Faster',
  subheadline:
    'AI-powered testing platform that automatically generates, runs, and maintains your test suites. Deploy with confidence every time.',
  primaryCtaText: 'Start Free Trial',
  primaryCtaHref: '/signup',
  secondaryCtaText: 'Watch Demo',
  secondaryCtaHref: '/demo',
  heroImageUrl:
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
  heroImageAlt: 'AI testing dashboard interface',
  keyBenefit: 'Reduce testing time by 90% while catching 99.9% of bugs before production',
  trustBadge: 'Trusted by 10,000+ developers',
  stats: [
    { icon: 'zap', value: '10x', label: 'Faster Testing' },
    { icon: 'shield', value: '99.9%', label: 'Bug Detection' },
    { icon: 'trending', value: '90%', label: 'Time Saved' },
  ],
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handlePrimaryClick = () => {
    navigate(config.primaryCtaHref);
  };

  const handleSecondaryClick = () => {
    navigate(config.secondaryCtaHref);
  };

  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case 'zap':
        return <Zap className="h-5 w-5 text-primary" />;
      case 'shield':
        return <Shield className="h-5 w-5 text-primary" />;
      case 'trending':
        return <TrendingUp className="h-5 w-5 text-primary" />;
      default:
        return <CheckCircle className="h-5 w-5 text-primary" />;
    }
  };

  return (
    <section id="hero" className="bg-background text-foreground py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content Column */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {/* Trust Badge */}
            <Badge
              variant="secondary"
              className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
            >
              <CheckCircle className="h-4 w-4 mr-2" />
              <span data-editable="trustBadge">{config.trustBadge}</span>
            </Badge>

            {/* Headlines */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span data-editable="headline">{config.headline}</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                <span data-editable="subheadline">{config.subheadline}</span>
              </p>
            </div>

            {/* Key Benefit */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <p className="text-lg font-medium text-primary">
                  <span data-editable="keyBenefit">{config.keyBenefit}</span>
                </p>
              </CardContent>
            </Card>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 transform hover:scale-105"
                onClick={handlePrimaryClick}
                data-editable-href="primaryCtaHref"
                data-href={config.primaryCtaHref}
              >
                <span data-editable="primaryCtaText">{config.primaryCtaText}</span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                onClick={handleSecondaryClick}
                data-editable-href="secondaryCtaHref"
                data-href={config.secondaryCtaHref}
              >
                <Play className="h-5 w-5 mr-2" />
                <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {config.stats.map((stat, idx) => (
                <div key={idx} className="text-center space-y-2">
                  <div className="flex justify-center">{getStatIcon(stat.icon)}</div>
                  <div className="text-2xl font-bold text-foreground">
                    <span data-editable={`stats[${idx}].value`}>{stat.value}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span data-editable={`stats[${idx}].label`}>{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Column */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            <div className="relative">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl blur-3xl transform rotate-6"></div>

              {/* Main Image */}
              <Card className="relative bg-card border-border shadow-2xl overflow-hidden">
                <CardContent className="p-0">
                  <Image
                    src={config.heroImageUrl}
                    alt={config.heroImageAlt}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                    data-editable-src="heroImageUrl"
                    priority
                  />
                </CardContent>
              </Card>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-3 rounded-full shadow-lg animate-bounce">
                <Zap className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground p-3 rounded-full shadow-lg animate-pulse">
                <Shield className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
