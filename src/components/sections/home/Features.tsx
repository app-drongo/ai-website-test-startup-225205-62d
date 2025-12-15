'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Shield, BarChart3, GitBranch, Clock, Users } from 'lucide-react';

const DEFAULT_FEATURES = {
  sectionTitle: 'Everything You Need for Modern Testing',
  sectionSubtitle:
    "Comprehensive AI-powered testing tools designed for today's development workflows",
  features: [
    {
      icon: 'Zap',
      title: 'AI-Powered Test Generation',
      description:
        'Automatically generate comprehensive test suites using advanced machine learning algorithms that understand your codebase.',
      badge: 'Smart',
    },
    {
      icon: 'Shield',
      title: 'Advanced Security Testing',
      description:
        'Identify vulnerabilities and security flaws before they reach production with our integrated security scanning.',
      badge: 'Secure',
    },
    {
      icon: 'BarChart3',
      title: 'Real-Time Analytics',
      description:
        'Get instant insights into test performance, coverage metrics, and quality trends with beautiful dashboards.',
      badge: 'Insights',
    },
    {
      icon: 'GitBranch',
      title: 'Seamless CI/CD Integration',
      description:
        'Integrate effortlessly with your existing development pipeline and popular tools like GitHub, GitLab, and Jenkins.',
      badge: 'DevOps',
    },
    {
      icon: 'Clock',
      title: 'Lightning Fast Execution',
      description:
        'Run thousands of tests in parallel with our optimized cloud infrastructure, reducing feedback time by 90%.',
      badge: 'Speed',
    },
    {
      icon: 'Users',
      title: 'Team Collaboration',
      description:
        'Enable seamless collaboration between developers, QA engineers, and stakeholders with shared test environments.',
      badge: 'Teamwork',
    },
  ],
} as const;

type FeaturesProps = Partial<typeof DEFAULT_FEATURES>;

const iconMap = {
  Zap,
  Shield,
  BarChart3,
  GitBranch,
  Clock,
  Users,
};

export default function Features(props: FeaturesProps) {
  const config = { ...DEFAULT_FEATURES, ...props };

  return (
    <section id="features" className="bg-background text-foreground py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="sectionTitle">{config.sectionTitle}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            <span data-editable="sectionSubtitle">{config.sectionSubtitle}</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {config.features.map((feature, idx) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];

            return (
              <Card
                key={idx}
                className="bg-card text-card-foreground border-border hover:bg-accent/5 transition-colors duration-300 group"
              >
                <CardContent className="p-8">
                  {/* Icon and Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="bg-primary/10 text-primary p-3 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                      <span data-editable={`features[${idx}].badge`}>{feature.badge}</span>
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">
                      <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      <span data-editable={`features[${idx}].description`}>
                        {feature.description}
                      </span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16 p-8 bg-muted/30 rounded-2xl border border-border">
          <h3 className="text-2xl font-semibold mb-4">Ready to Transform Your Testing?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of development teams who have already revolutionized their testing
            workflows with our AI-powered platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4" />
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="w-4 h-4" />
              <span>Team Collaboration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
