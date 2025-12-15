'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, ArrowRight, Quote } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_REVIEWS = {
  title: 'What Our Customers Say',
  subtitle:
    "Join thousands of satisfied customers who've transformed their business with our platform",
  ctaText: 'Start Your Free Trial',
  ctaHref: '/signup',
  reviews: [
    {
      id: '1',
      name: 'Sarah Chen',
      role: 'CTO, TechFlow',
      avatar:
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      content:
        'This platform has revolutionized how we handle our development workflow. The AI-powered insights have saved us countless hours and improved our code quality significantly.',
      company: 'TechFlow',
    },
    {
      id: '2',
      name: 'Marcus Rodriguez',
      role: 'Founder, StartupLab',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      content:
        'The ROI was immediate. We saw a 40% increase in productivity within the first month. The team adoption was seamless thanks to the intuitive interface.',
      company: 'StartupLab',
    },
    {
      id: '3',
      name: 'Emily Watson',
      role: 'VP Engineering, CloudScale',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      content:
        'Outstanding support and continuous innovation. The platform evolves with our needs and the customer success team is incredibly responsive.',
      company: 'CloudScale',
    },
  ],
  stats: {
    totalReviews: '2,500+',
    averageRating: '4.9',
    satisfactionRate: '98%',
  },
} as const;

type ReviewsProps = Partial<typeof DEFAULT_REVIEWS>;

export default function Reviews(props: ReviewsProps) {
  const config = { ...DEFAULT_REVIEWS, ...props };
  const navigate = useSmartNavigation();

  const handleCtaClick = () => {
    navigate(config.ctaHref);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted'}`}
      />
    ));
  };

  return (
    <section id="reviews" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              <span data-editable="stats.totalReviews">{config.stats.totalReviews}</span>
            </div>
            <div className="text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
              <span data-editable="stats.averageRating">{config.stats.averageRating}</span>
              <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            </div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              <span data-editable="stats.satisfactionRate">{config.stats.satisfactionRate}</span>
            </div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {config.reviews.map((review, idx) => (
            <Card
              key={review.id}
              className="bg-card text-card-foreground border-border hover:shadow-lg transition-shadow duration-300"
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

                {/* Author */}
                <div className="flex items-center gap-3">
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
                  <div>
                    <div className="font-semibold text-foreground">
                      <span data-editable={`reviews[${idx}].name`}>{review.name}</span>
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
        <div className="text-center">
          <Button
            size="lg"
            onClick={handleCtaClick}
            data-editable-href="ctaHref"
            data-href={config.ctaHref}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg font-semibold group"
          >
            <span data-editable="ctaText">{config.ctaText}</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </div>
      </div>
    </section>
  );
}
