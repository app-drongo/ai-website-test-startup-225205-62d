'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Zap, Shield, Rocket, Star, Users, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_HERO = {
  badge: '🚀 Now in Beta',
  title: 'Build the Future with AI-Powered Development',
  subtitle:
    "Transform your ideas into production-ready applications with our cutting-edge platform. Join thousands of developers already building tomorrow's tech today.",
  primaryCtaText: 'Start Building Free',
  primaryCtaHref: '/signup',
  secondaryCtaText: 'Watch Demo',
  secondaryCtaHref: '/demo',
  heroImageUrl:
    'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80',
  heroImageAlt: 'Modern tech workspace with multiple screens showing code and analytics',
  features: ['AI-Powered Code Generation', 'Real-time Collaboration', 'Enterprise Security'],
  stats: [
    { icon: 'Users', value: '50K+', label: 'Active Developers' },
    { icon: 'TrendingUp', value: '99.9%', label: 'Uptime' },
    { icon: 'Star', value: '4.9/5', label: 'User Rating' },
  ],
  trustBadge: 'Trusted by 500+ startups worldwide',
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

  const handlePrimaryClick = () => {
    navigate(config.primaryCtaHref);
  };

  const handleSecondaryClick = () => {
    navigate(config.secondaryCtaHref);
  };

  const getIcon = (iconName: string) => {
    const icons = {
      Users: Users,
      TrendingUp: TrendingUp,
      Star: Star,
      Zap: Zap,
      Shield: Shield,
      Rocket: Rocket,
    };
    const IconComponent = icons[iconName as keyof typeof icons] || Zap;
    return <IconComponent className="h-6 w-6" />;
  };

  return (
    <section id="hero" className="bg-background text-foreground py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content Column */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {/* Badge */}
            <div className="flex justify-center lg:justify-start">
              <Badge
                variant="secondary"
                className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-medium"
              >
                <span data-editable="badge">{config.badge}</span>
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-center lg:text-left">
                <span data-editable="title">{config.title}</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl text-center lg:text-left leading-relaxed">
                <span data-editable="subtitle">{config.subtitle}</span>
              </p>
            </div>

            {/* Features Carousel */}
            <div className="bg-muted/50 rounded-lg p-4 border border-border">
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 p-2 rounded-full">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <div className="min-h-[24px] flex items-center">
                  <span
                    className="text-sm font-medium transition-all duration-500"
                    data-editable={`features[${currentFeature}]`}
                  >
                    {config.features[currentFeature]}
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={handlePrimaryClick}
                data-editable-href="primaryCtaHref"
                data-href={config.primaryCtaHref}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg font-semibold group"
              >
                <span data-editable="primaryCtaText">{config.primaryCtaText}</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={handleSecondaryClick}
                data-editable-href="secondaryCtaHref"
                data-href={config.secondaryCtaHref}
                className="border-border hover:bg-accent hover:text-accent-foreground px-8 py-3 text-lg font-semibold"
              >
                <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
              </Button>
            </div>

            {/* Trust Badge */}
            <div className="text-center lg:text-left">
              <p className="text-sm text-muted-foreground">
                <span data-editable="trustBadge">{config.trustBadge}</span>
              </p>
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
                    data-editable-src="heroImageUrl"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </CardContent>
              </Card>

              {/* Floating Stats Cards */}
              <div className="absolute -bottom-6 -left-6 right-6 grid grid-cols-3 gap-2">
                {config.stats.map((stat, idx) => (
                  <Card key={idx} className="bg-card/95 backdrop-blur-sm border-border shadow-lg">
                    <CardContent className="p-3 text-center">
                      <div className="flex justify-center mb-1 text-primary">
                        {getIcon(stat.icon)}
                      </div>
                      <div
                        className="text-sm font-bold text-foreground"
                        data-editable={`stats[${idx}].value`}
                      >
                        {stat.value}
                      </div>
                      <div
                        className="text-xs text-muted-foreground"
                        data-editable={`stats[${idx}].label`}
                      >
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
