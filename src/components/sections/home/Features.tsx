'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Zap, Shield, Rocket, Star, ArrowRight } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FEATURES = {
  title: 'Everything you need to scale',
  subtitle: 'Powerful features designed for modern tech teams',
  description:
    'From startups to enterprise, our platform grows with you. Built with cutting-edge technology and designed for performance.',
  ctaText: 'Start Free Trial',
  ctaHref: '/signup',
  features: [
    {
      icon: 'Zap',
      title: 'Lightning Fast',
      description: 'Built on modern infrastructure with sub-100ms response times globally',
      highlight: '99.9% uptime',
    },
    {
      icon: 'Shield',
      title: 'Enterprise Security',
      description: 'SOC 2 compliant with end-to-end encryption and advanced threat protection',
      highlight: 'Bank-grade security',
    },
    {
      icon: 'Rocket',
      title: 'Scale Infinitely',
      description:
        'Auto-scaling architecture that handles millions of requests without breaking a sweat',
      highlight: 'Zero downtime',
    },
  ],
  benefits: ['Real-time collaboration', 'Advanced analytics dashboard', '24/7 expert support'],
} as const;

type FeaturesProps = Partial<typeof DEFAULT_FEATURES>;

export default function Features(props: FeaturesProps) {
  const config = { ...DEFAULT_FEATURES, ...props };
  const navigate = useSmartNavigation();

  const handleCTAClick = () => {
    navigate(config.ctaHref);
  };

  const getIcon = (iconName: string) => {
    const icons = {
      Zap: Zap,
      Shield: Shield,
      Rocket: Rocket,
    };
    const IconComponent = icons[iconName as keyof typeof icons] || Star;
    return <IconComponent className="h-8 w-8" />;
  };

  return (
    <section id="features" className="bg-background text-foreground py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
          <p className="text-lg text-muted-foreground">
            <span data-editable="description">{config.description}</span>
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {config.features.map((feature, idx) => (
            <Card
              key={idx}
              className="bg-card text-card-foreground border-border hover:shadow-lg transition-all duration-300 group"
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-primary text-primary-foreground p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {getIcon(feature.icon)}
                  </div>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    <span data-editable={`features[${idx}].highlight`}>{feature.highlight}</span>
                  </Badge>
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  <span data-editable={`features[${idx}].description`}>{feature.description}</span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits List */}
        <div className="bg-muted text-muted-foreground rounded-2xl p-8 mb-12">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
              Plus everything else you need
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {config.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="bg-primary text-primary-foreground p-1 rounded-full flex-shrink-0">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-foreground font-medium">
                    <span data-editable={`benefits[${idx}]`}>{benefit}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            onClick={handleCTAClick}
            data-editable-href="ctaHref"
            data-href={config.ctaHref}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold group"
          >
            <span data-editable="ctaText">{config.ctaText}</span>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </div>
      </div>
    </section>
  );
}
