'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, ArrowRight } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_REVIEWS = {
  title: 'Trusted by Industry Leaders',
  subtitle: 'See what our customers are saying about our platform',
  ctaText: 'Read All Reviews',
  ctaHref: '/reviews',
  reviews: [
    {
      id: '1',
      name: 'Sarah Chen',
      role: 'CTO at TechFlow',
      avatar:
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      rating: 5,
      content:
        'This platform has completely transformed how we handle our development workflow. The AI-powered insights are game-changing.',
      company: 'TechFlow',
    },
    {
      id: '2',
      name: 'Marcus Rodriguez',
      role: 'Founder & CEO',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      rating: 5,
      content:
        'Incredible ROI and seamless integration. Our team productivity increased by 300% in just two months.',
      company: 'InnovateLab',
    },
    {
      id: '3',
      name: 'Emily Watson',
      role: 'Head of Engineering',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      rating: 5,
      content:
        "The best investment we've made for our startup. Outstanding support team and cutting-edge features.",
      company: 'StartupX',
    },
  ],
} as const;

type ReviewsProps = Partial<typeof DEFAULT_REVIEWS>;

export default function Reviews(props: ReviewsProps) {
  const config = { ...DEFAULT_REVIEWS, ...props };
  const navigate = useSmartNavigation();

  const handleCTAClick = () => {
    navigate(config.ctaHref);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-muted-foreground'
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {config.reviews.map((review, idx) => (
            <Card
              key={review.id}
              className="bg-card text-card-foreground border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage
                      src={review.avatar}
                      alt={review.name}
                      data-editable-src={`reviews[${idx}].avatar`}
                    />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {review.name
                        .split(' ')
                        .map(n => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold">
                      <span data-editable={`reviews[${idx}].name`}>{review.name}</span>
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      <span data-editable={`reviews[${idx}].role`}>{review.role}</span>
                    </p>
                    <p className="text-xs text-muted-foreground">
                      <span data-editable={`reviews[${idx}].company`}>{review.company}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-4">{renderStars(review.rating)}</div>

                <blockquote className="text-foreground leading-relaxed">
                  <span data-editable={`reviews[${idx}].content`}>"{review.content}"</span>
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={handleCTAClick}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 group"
            data-editable-href="ctaHref"
            data-href={config.ctaHref}
          >
            <span data-editable="ctaText">{config.ctaText}</span>
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </div>
      </div>
    </section>
  );
}
