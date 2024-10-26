import React from 'react';
import { Trophy, TrendingUp, Users, Award } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

const achievements = [
  {
    name: "Top 25 MEP Contractors",
    description: "Listed among the Top 25 MEP Contractors in the Middle East by leading industry magazine",
    source: "Industry Magazine Recognition",
    year: "2023",
    category: "Industry Recognition",
    impact: "Positioned among industry leaders in the Middle East"
  },
  {
    name: "Revenue Growth",
    description: "Increased annual revenues from 50M to 250M through strategic leadership",
    source: "Company Performance",
    year: "2013-2017",
    category: "Business Growth",
    impact: "500% revenue growth over 4 years"
  },
  {
    name: "Project Portfolio",
    description: "Successfully managed MEP works valued at over 1 Billion AED for Meydan One Mall",
    source: "Project Achievement",
    year: "2017-Present",
    category: "Project Excellence",
    impact: "Largest single project value in portfolio"
  },
  {
    name: "Healthcare Excellence",
    description: "Led MEP execution for Al Jalila Children Specialty Hospital valued at 250 Million AED",
    source: "Project Milestone",
    year: "2017-Present",
    category: "Healthcare",
    impact: "Landmark healthcare project in Dubai"
  }
];

interface FeatureCardProps {
  Icon: React.ElementType;
  title: string;
  description: string;
  achievement: {
    category: string;
    description: string;
    name: string;
    impact: string;
    source: string;
    year: string;
  };
}

const FeatureCard: React.FC<FeatureCardProps> = ({ Icon, title, description, achievement }) => (
  <HoverCard>
    <HoverCardTrigger asChild>
      <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon className="h-5 w-5 text-blue-500" />
              <CardTitle className="text-lg sm:text-xl">{title}</CardTitle>
            </div>
            <Badge variant="secondary" className="text-xs sm:text-sm">{achievement.category}</Badge>
          </div>
          <CardDescription className="text-sm sm:text-base">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{achievement.description}</p>
        </CardContent>
      </Card>
    </HoverCardTrigger>
    <HoverCardContent className="w-80">
      <div className="space-y-2">
        <h4 className="text-sm font-semibold">{achievement.name}</h4>
        <p className="text-xs sm:text-sm">{achievement.impact}</p>
        <div className="flex items-center pt-2">
          <span className="text-xs text-gray-500">{achievement.source} • {achievement.year}</span>
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
);

const AchievementTimeline: React.FC<{ achievement: typeof achievements[0] }> = ({ achievement }) => (
  <div className="relative pl-8 pb-8 last:pb-0">
    <div className="absolute left-0 top-0 h-full w-px bg-gray-200 dark:bg-gray-800">
      <div className="absolute left-[-4px] top-1 h-2 w-2 rounded-full bg-blue-500" />
    </div>
    <div className="space-y-2">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <Badge variant="outline" className="text-xs sm:text-sm">{achievement.year}</Badge>
        <Badge className="text-xs sm:text-sm">{achievement.category}</Badge>
      </div>
      <h3 className="font-medium text-sm sm:text-base">{achievement.name}</h3>
      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
        {achievement.description}
      </p>
      <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
        <span>{achievement.source}</span>
        <span>•</span>
        <span>{achievement.impact}</span>
      </div>
    </div>
  </div>
);

export default function RecognitionsPage() {
  const features = [
    {
      Icon: Trophy,
      title: "Industry Recognition",
      description: "Leading MEP professional in Middle East",
      achievement: achievements[0]
    },
    {
      Icon: TrendingUp,
      title: "Business Growth",
      description: "Exceptional revenue and portfolio growth",
      achievement: achievements[1]
    },
    {
      Icon: Users,
      title: "Team Leadership",
      description: "Organizational transformation expert",
      achievement: achievements[2]
    },
    {
      Icon: Award,
      title: "Project Excellence",
      description: "Iconic project delivery",
      achievement: achievements[3]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <div className="space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold">Professional Recognitions</h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Celebrating excellence in MEP engineering and project management
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="outline" className="text-xs sm:text-sm">25+ Years Experience</Badge>
            <Badge variant="outline" className="text-xs sm:text-sm">UAE Market Leader</Badge>
            <Badge variant="outline" className="text-xs sm:text-sm">Project Excellence</Badge>
          </div>
        </div>

        <Separator />

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>

        {/* Achievements Timeline */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Trophy className="h-5 w-5" />
              <span>Achievement Timeline</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px] sm:h-[400px] pr-4">
              {achievements.map((achievement, idx) => (
                <AchievementTimeline key={idx} achievement={achievement} />
              ))}
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-blue-50 dark:bg-blue-950 mt-8 sm:mt-12">
          <CardContent className="flex flex-col sm:flex-row items-center justify-between p-6 sm:p-8 gap-4">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-semibold">Want to learn more?</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Discover our full portfolio of successful projects
              </p>
            </div>
            <Button variant="default" className="w-full sm:w-auto">
              View Portfolio
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
