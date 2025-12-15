'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const DEFAULT_REVIEWS = {
  title: 'Trusted by Development Teams Worldwide',
  subtitle: 'See what our customers say about transforming their testing workflows',
  reviews: [
    {
      id: '1',
      name: 'Sarah Chen',
      role: 'Senior QA Engineer',
      company: 'TechFlow Inc',
      avatar:
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      content:
        "This AI-powered testing platform has revolutionized our development cycle. We've reduced testing time by 70% while catching more bugs than ever before. The automation capabilities are simply outstanding.",
      featured: true,
    },
    {
      id: '2',
      name: 'Marcus Rodriguez',
      role: 'Lead Developer',
      company: 'StartupLab',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      content:
        'The intelligent test generation saved us weeks of manual work. Our team can now focus on building features instead of writing repetitive test cases. Game-changer for our startup.',
      featured: false,
    },
    {
      id: '3',
      name: 'Emily Watson',
      role: 'DevOps Manager',
      company: 'CloudScale Systems',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      content:
        "Integration was seamless and the results were immediate. Our CI/CD pipeline is now more reliable, and we've eliminated flaky tests completely. Highly recommend for any serious development team.",
      featured: false,
    },
  ],
} as const;

type ReviewsProps = Partial<typeof DEFAULT_REVIEWS>;

export default function Reviews(props: ReviewsProps) {
  const config = { ...DEFAULT_REVIEWS, ...props };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-primary text-primary' : 'fill-muted text-muted'}`}
      />
    ));
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  return (
    <section id="reviews" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {config.reviews.map((review, idx) => (
            <Card
              key={review.id}
              className={`bg-card text-card-foreground border-border hover:shadow-lg transition-all duration-300 ${
                review.featured ? 'md:col-span-2 lg:col-span-1 ring-2 ring-primary/20' : ''
              }`}
            >
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">{renderStars(review.rating)}</div>

                {/* Review Content */}
                <blockquote className="text-foreground mb-6 leading-relaxed">
                  <span data-editable={`reviews[${idx}].content`}>"{review.content}"</span>
                </blockquote>

                {/* Reviewer Info */}
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage
                      src={review.avatar}
                      alt={`${review.name} avatar`}
                      data-editable-src={`reviews[${idx}].avatar`}
                    />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {getInitials(review.name)}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="font-semibold text-foreground">
                      <span data-editable={`reviews[${idx}].name`}>{review.name}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <span data-editable={`reviews[${idx}].role`}>{review.role}</span>
                      {' at '}
                      <span data-editable={`reviews[${idx}].company`}>{review.company}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex">{renderStars(5)}</div>
              <span className="text-sm font-medium">5.0 average rating</span>
            </div>
            <div className="text-sm">
              <span className="font-semibold text-foreground">500+</span> development teams
            </div>
            <div className="text-sm">
              <span className="font-semibold text-foreground">99.9%</span> uptime SLA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
