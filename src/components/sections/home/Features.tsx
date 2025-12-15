'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FEATURES = {
  title: 'What Our Customers Say',
  subtitle: 'Join thousands of satisfied customers who trust our platform',
  ctaText: 'Read All Reviews',
  ctaHref: '/reviews',
  showCta: true,
  reviews: [
    {
      id: '1',
      name: 'Sarah Chen',
      role: 'CTO at TechFlow',
      company: 'TechFlow',
      rating: 5,
      content:
        'This platform transformed our development workflow. The AI-powered features saved us countless hours and improved our code quality significantly.',
      avatar:
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      verified: true,
    },
    {
      id: '2',
      name: 'Marcus Rodriguez',
      role: 'Lead Developer',
      company: 'InnovateLabs',
      rating: 5,
      content:
        'Outstanding support and incredibly intuitive interface. Our team was up and running in minutes, not hours. The performance improvements are remarkable.',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      verified: true,
    },
    {
      id: '3',
      name: 'Emily Watson',
      role: 'Product Manager',
      company: 'StartupX',
      rating: 5,
      content:
        "The analytics and insights provided are game-changing. We've increased our deployment frequency by 300% while maintaining zero downtime.",
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      verified: true,
    },
  ],
  stats: {
    totalReviews: '2,500+',
    averageRating: '4.9',
    satisfactionRate: '98%',
  },
} as const;

type FeaturesProps = Partial<typeof DEFAULT_FEATURES>;

export default function Features(props: FeaturesProps) {
  const config = { ...DEFAULT_FEATURES, ...props };
  const navigate = useSmartNavigation();

  const handleCtaClick = () => {
    navigate(config.ctaHref);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'
        }`}
      />
    ));
  };

  return (
    <section id="features" className="bg-background text-foreground py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">
                <span data-editable="stats.totalReviews">{config.stats.totalReviews}</span>
              </div>
              <div className="text-sm text-muted-foreground">Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary flex items-center justify-center gap-1">
                <span data-editable="stats.averageRating">{config.stats.averageRating}</span>
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              </div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">
                <span data-editable="stats.satisfactionRate">{config.stats.satisfactionRate}</span>
              </div>
              <div className="text-sm text-muted-foreground">Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {config.reviews.map((review, idx) => (
            <Card
              key={review.id}
              className="bg-card text-card-foreground hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary mb-4" />

                {/* Review Content */}
                <blockquote className="text-foreground mb-6 leading-relaxed">
                  <span data-editable={`reviews[${idx}].content`}>"{review.content}"</span>
                </blockquote>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">{renderStars(review.rating)}</div>

                {/* Reviewer Info */}
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Image
                      src={review.avatar}
                      alt={`${review.name} avatar`}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                      data-editable-src={`reviews[${idx}].avatar`}
                    />
                    {review.verified && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground flex items-center gap-2">
                      <span data-editable={`reviews[${idx}].name`}>{review.name}</span>
                      {review.verified && (
                        <Badge variant="secondary" className="text-xs">
                          Verified
                        </Badge>
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <span data-editable={`reviews[${idx}].role`}>{review.role}</span>
                      {review.company && (
                        <>
                          {' at '}
                          <span data-editable={`reviews[${idx}].company`}>{review.company}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        {config.showCta && (
          <div className="text-center">
            <Button
              onClick={handleCtaClick}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
              data-editable-href="ctaHref"
              data-href={config.ctaHref}
            >
              <span data-editable="ctaText">{config.ctaText}</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
