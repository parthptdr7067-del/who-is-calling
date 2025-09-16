import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Phone, AlertTriangle, CheckCircle, Users } from "lucide-react";

export const NumberLookup = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [searchResult, setSearchResult] = useState<any>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async () => {
    if (!phoneNumber.trim()) return;
    
    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      setSearchResult({
        number: phoneNumber,
        name: "John Smith",
        carrier: "Verizon",
        location: "New York, NY",
        spamRisk: "Low",
        reportCount: 2,
        isVerified: true,
        category: "Personal"
      });
      setIsSearching(false);
    }, 1500);
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Phone Number Lookup</h2>
          <p className="text-xl text-muted-foreground">
            Search our database to identify any phone number instantly
          </p>
        </div>

        <Card className="p-8 bg-gradient-card border-border shadow-card">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <Input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter phone number (e.g., +1 555-123-4567)"
                className="bg-background/50 border-border/50 text-lg py-6"
              />
            </div>
            <Button 
              onClick={handleSearch}
              disabled={isSearching}
              className="bg-gradient-primary shadow-primary hover:shadow-glow transition-all duration-300 px-8 py-6"
            >
              {isSearching ? (
                <>Searching...</>
              ) : (
                <>
                  <Search className="mr-2 h-4 w-4" />
                  Lookup
                </>
              )}
            </Button>
          </div>

          {searchResult && (
            <Card className="p-6 bg-background/50 border-border/50">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">{searchResult.name}</h3>
                    <p className="text-muted-foreground">{searchResult.number}</p>
                  </div>
                </div>
                {searchResult.isVerified && (
                  <Badge variant="secondary" className="bg-accent/20 text-accent">
                    <CheckCircle className="mr-1 h-3 w-3" />
                    Verified
                  </Badge>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-muted-foreground">Carrier</p>
                  <p className="font-medium">{searchResult.carrier}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">{searchResult.location}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Category</p>
                  <p className="font-medium">{searchResult.category}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Spam Risk</p>
                  <div className="flex items-center gap-2">
                    {searchResult.spamRisk === "Low" ? (
                      <CheckCircle className="h-4 w-4 text-accent" />
                    ) : (
                      <AlertTriangle className="h-4 w-4 text-destructive" />
                    )}
                    <span className={`font-medium ${searchResult.spamRisk === "Low" ? "text-accent" : "text-destructive"}`}>
                      {searchResult.spamRisk}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>{searchResult.reportCount} community reports</span>
              </div>
            </Card>
          )}
        </Card>
      </div>
    </section>
  );
};