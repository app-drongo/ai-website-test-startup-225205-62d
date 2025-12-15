'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Zap, Shield, Rocket, Star, ArrowRight } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FEATURES = {
  title: 'Everything you need to scale your startup',
  subtitle: 'Powerful features designed for modern tech companies',
  ctaText: 'Start Free Trial',
  ctaHref: '/signup',
  badge: '25% SAVING',
  badgeText: 'Annual Billing',
  features: [
    {
      icon: 'Zap',
      title: 'Lightning Fast Performance',
      description: 'Built for speed with edge computing and global CDN distribution',
      highlights: ['99.9% uptime', 'Sub-100ms response', 'Auto-scaling'],
    },
    {
      icon: 'Shield',
      title: 'Enterprise Security',
      description: 'Bank-grade security with SOC2 compliance and end-to-end encryption',
      highlights: ['SOC2 certified', 'Zero-trust architecture', '24/7 monitoring'],
    },
    {
      icon: 'Rocket',
      title: 'Developer Experience',
      description: 'Ship faster with our intuitive APIs and comprehensive documentation',
      highlights: ['RESTful APIs', 'SDK libraries', 'Webhook support'],
    },
  ],
  testimonial: {
    quote: 'This platform helped us scale from 0 to 1M users in just 6 months',
    author: 'Sarah Chen',
    role: 'CTO at TechFlow',
    rating: 5,
  },
} as const;

type FeaturesProps = Partial<typeof DEFAULT_FEATURES>;

export default function Features(props: FeaturesProps) {
  const config = { ...DEFAULT_FEATURES, ...props };
  const navigate = useSmartNavigation();

  const getIcon = (iconName: string) => {
    const icons = {
      Zap: Zap,
      Shield: Shield,
      Rocket: Rocket,
    };
    const IconComponent = icons[iconName as keyof typeof icons] || Zap;
    return <IconComponent className="h-8 w-8" />;
  };

  const handleCTAClick = () => {
    navigate(config.ctaHref);
  };

  return (
    <section id="features" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Badge className="bg-primary text-primary-foreground">
              <span data-editable="badge">{config.badge}</span>
            </Badge>
            <span className="text-muted-foreground" data-editable="badgeText">
              {config.badgeText}
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span data-editable="title">{config.title}</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>

          <Button
            size="lg"
            onClick={handleCTAClick}
            data-editable-href="ctaHref"
            data-href={config.ctaHref}
            className="bg-primary text-primary-foreground hover:bg-primary/90 group"
          >
            <span data-editable="ctaText">{config.ctaText}</span>
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {config.features.map((feature, idx) => (
            <Card
              key={idx}
              className="bg-card text-card-foreground border-border hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-8">
                <div className="bg-primary/10 text-primary rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                  {getIcon(feature.icon)}
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                </h3>

                <p className="text-muted-foreground mb-6">
                  <span data-editable={`features[${idx}].description`}>{feature.description}</span>
                </p>

                <ul className="space-y-2">
                  {feature.highlights.map((highlight, highlightIdx) => (
                    <li key={highlightIdx} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span
                        className="text-sm"
                        data-editable={`features[${idx}].highlights[${highlightIdx}]`}
                      >
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonial */}
        <div className="bg-muted text-muted-foreground rounded-2xl p-8 lg:p-12 text-center">
          <div className="flex justify-center mb-4">
            {Array.from({ length: config.testimonial.rating }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-primary text-primary" />
            ))}
          </div>

          <blockquote className="text-2xl lg:text-3xl font-medium text-foreground mb-6">
            "<span data-editable="testimonial.quote">{config.testimonial.quote}</span>"
          </blockquote>

          <div>
            <div className="font-semibold text-foreground">
              <span data-editable="testimonial.author">{config.testimonial.author}</span>
            </div>
            <div className="text-muted-foreground">
              <span data-editable="testimonial.role">{config.testimonial.role}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
