import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, MessageSquare, ThumbsUp, Flag, Globe, Star } from "lucide-react";

export const CommunityFeatures = () => {
  const communityStats = [
    { icon: Users, label: "Active Contributors", value: "50M+" },
    { icon: Flag, label: "Numbers Reported", value: "1B+" },
    { icon: MessageSquare, label: "Comments Added", value: "200M+" },
    { icon: ThumbsUp, label: "Helpful Ratings", value: "500M+" },
  ];

  const recentContributions = [
    {
      user: "Sarah M.",
      action: "reported spam",
      number: "+1 555-789-0123",
      time: "2 mins ago",
      helpful: 47,
    },
    {
      user: "Mike R.",
      action: "verified business",
      number: "+1 555-456-7890",
      time: "15 mins ago",
      helpful: 23,
    },
    {
      user: "Jenny L.",
      action: "added comment",
      number: "+1 555-321-9876",
      time: "1 hour ago",
      helpful: 156,
    },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powered by Community</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join millions of users worldwide who contribute to making phone calls safer for everyone
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {communityStats.map((stat, index) => (
            <Card key={index} className="p-6 bg-gradient-card border-border shadow-card text-center">
              <div className="bg-gradient-primary p-3 rounded-full w-fit mx-auto mb-4">
                <stat.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-gradient-card border-border shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Recent Community Activity</h3>
            </div>
            
            <div className="space-y-4">
              {recentContributions.map((contribution, index) => (
                <div key={index} className="p-4 bg-background/30 rounded-lg border border-border/50">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                        <span className="text-xs text-primary-foreground font-semibold">
                          {contribution.user[0]}
                        </span>
                      </div>
                      <span className="font-medium">{contribution.user}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {contribution.time}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {contribution.action} <span className="font-mono">{contribution.number}</span>
                  </p>
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="h-3 w-3 text-accent" />
                    <span className="text-xs text-accent">{contribution.helpful} found this helpful</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8 bg-gradient-card border-border shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Global Impact</h3>
            </div>
            
            <div className="space-y-6">
              <div className="text-center p-6 bg-background/30 rounded-lg border border-border/50">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="text-2xl font-bold">4.9/5</span>
                </div>
                <p className="text-muted-foreground">Average user rating</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Spam calls blocked this month</span>
                  <span className="font-bold text-accent">89M+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Countries served</span>
                  <span className="font-bold text-accent">190+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">User satisfaction rate</span>
                  <span className="font-bold text-accent">98%</span>
                </div>
              </div>
              
              <Button className="w-full bg-gradient-primary shadow-primary hover:shadow-glow transition-all duration-300 mt-6">
                Join the Community
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};