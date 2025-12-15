'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ArrowRight, Quote } from 'lucide-react';
import Image from 'next/image';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_REVIEWS = {
  title: 'What Our Customers Say',
  subtitle: 'Join thousands of satisfied customers who trust our platform',
  ctaText: 'Read All Reviews',
  ctaHref: '/reviews',
  reviews: [
    {
      id: '1',
      name: 'Sarah Chen',
      role: 'Product Manager',
      company: 'TechFlow',
      rating: 5,
      content:
        'This platform has completely transformed how we handle our workflow. The automation features saved us 20+ hours per week.',
      avatar:
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
    },
    {
      id: '2',
      name: 'Marcus Rodriguez',
      role: 'Founder',
      company: 'StartupLab',
      rating: 5,
      content:
        'Incredible ROI and seamless integration. Our team productivity increased by 40% within the first month of implementation.',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    },
    {
      id: '3',
      name: 'Emily Watson',
      role: 'CTO',
      company: 'InnovateCorp',
      rating: 5,
      content:
        "The best investment we've made for our tech stack. Outstanding support team and continuous feature improvements.",
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    },
  ],
  stats: [
    { label: 'Customer Rating', value: '4.9/5' },
    { label: 'Reviews', value: '2,500+' },
    { label: 'Satisfaction', value: '98%' },
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
        className={`w-4 h-4 ${i < rating ? 'fill-primary text-primary' : 'text-muted'}`}
      />
    ));
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

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
          {config.stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                <span data-editable={`stats[${idx}].value`}>{stat.value}</span>
              </div>
              <div className="text-muted-foreground">
                <span data-editable={`stats[${idx}].label`}>{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {config.reviews.map((review, idx) => (
            <Card
              key={review.id}
              className="bg-card text-card-foreground border-border hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">{renderStars(review.rating)}</div>

                {/* Review Content */}
                <blockquote className="text-foreground mb-6 leading-relaxed">
                  <span data-editable={`reviews[${idx}].content`}>"{review.content}"</span>
                </blockquote>

                {/* Reviewer Info */}
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-muted">
                    <Image
                      src={review.avatar}
                      alt={`${review.name} avatar`}
                      fill
                      className="object-cover"
                      data-editable-src={`reviews[${idx}].avatar`}
                    />
                  </div>
                  <div>
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

        {/* CTA */}
        <div className="text-center">
          <Button
            onClick={handleCTAClick}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
            data-editable-href="ctaHref"
            data-href={config.ctaHref}
          >
            <span data-editable="ctaText">{config.ctaText}</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
