import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, AlertTriangle, PhoneOff, TrendingUp } from "lucide-react";

export const SpamProtection = () => {
  const spamStats = [
    { label: "Spam Calls Blocked Today", value: "2.3M", icon: PhoneOff },
    { label: "Numbers in Database", value: "500M+", icon: Shield },
    { label: "Active Users", value: "300M+", icon: TrendingUp },
  ];

  const recentSpam = [
    { number: "+1 555-123-9999", name: "Telemarketer", reports: 1247, risk: "High" },
    { number: "+1 555-987-6543", name: "Robocaller", reports: 892, risk: "High" },
    { number: "+1 555-456-7890", name: "Scam Alert", reports: 2156, risk: "Critical" },
    { number: "+1 555-111-2222", name: "Unknown Caller", reports: 445, risk: "Medium" },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-hero">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Spam Protection</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI-powered system analyzes millions of calls daily to protect you from unwanted calls and scams
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {spamStats.map((stat, index) => (
            <Card key={index} className="p-6 bg-gradient-card border-border shadow-card text-center">
              <div className="bg-gradient-primary p-3 rounded-full w-fit mx-auto mb-4">
                <stat.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-gradient-card border-border shadow-card">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="h-6 w-6 text-destructive" />
            <h3 className="text-2xl font-bold">Recently Reported Spam Numbers</h3>
          </div>
          
          <div className="space-y-4">
            {recentSpam.map((spam, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-background/30 rounded-lg border border-border/50">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-mono text-lg">{spam.number}</span>
                    <Badge 
                      variant={spam.risk === "Critical" ? "destructive" : spam.risk === "High" ? "destructive" : "secondary"}
                      className={spam.risk === "Critical" ? "bg-destructive/20" : spam.risk === "High" ? "bg-destructive/10" : ""}
                    >
                      {spam.risk} Risk
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{spam.name}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">{spam.reports} reports</div>
                  <div className="text-xs text-muted-foreground">in 24 hours</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
            <div className="flex items-center gap-2 text-accent">
              <Shield className="h-4 w-4" />
              <span className="font-medium">Protection Active</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              These numbers are automatically blocked for all users based on community reports
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};