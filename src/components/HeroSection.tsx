import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Shield, Users } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Know Who's Calling
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Identify unknown callers, block spam calls, and take control of your phone with our community-driven database
          </p>
        </div>

        <div className="bg-gradient-card p-8 rounded-2xl shadow-card border border-border max-w-md mx-auto mb-12">
          <div className="flex gap-3 mb-4">
            <Input 
              placeholder="Enter phone number to lookup"
              className="bg-background/50 border-border/50 text-foreground placeholder:text-muted-foreground"
            />
            <Button variant="default" size="icon" className="bg-gradient-primary shadow-primary hover:shadow-glow transition-all duration-300">
              <Search className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">Search our database of millions of numbers</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gradient-card p-6 rounded-xl shadow-card border border-border">
            <div className="bg-gradient-primary p-3 rounded-full w-fit mx-auto mb-4">
              <Search className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Instant Lookup</h3>
            <p className="text-muted-foreground text-sm">
              Identify any phone number instantly with our comprehensive database
            </p>
          </div>

          <div className="bg-gradient-card p-6 rounded-xl shadow-card border border-border">
            <div className="bg-gradient-primary p-3 rounded-full w-fit mx-auto mb-4">
              <Shield className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Spam Protection</h3>
            <p className="text-muted-foreground text-sm">
              Block unwanted calls and protect yourself from phone scams
            </p>
          </div>

          <div className="bg-gradient-card p-6 rounded-xl shadow-card border border-border">
            <div className="bg-gradient-primary p-3 rounded-full w-fit mx-auto mb-4">
              <Users className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Community Driven</h3>
            <p className="text-muted-foreground text-sm">
              Powered by millions of users worldwide sharing caller information
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};