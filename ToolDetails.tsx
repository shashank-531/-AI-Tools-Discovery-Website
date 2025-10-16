import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toolsData } from "@/data/toolsData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ExternalLink, ArrowLeft, Star, CheckCircle2 } from "lucide-react";

const ToolDetails = () => {
  const { id } = useParams<{ id: string }>();
  const tool = toolsData.find(t => t.id === id);

  if (!tool) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Tool Not Found</h1>
            <Link to="/">
              <Button>Return to Home</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all tools
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header */}
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-4xl font-bold text-foreground mb-4">
                      {tool.name}
                    </h1>
                    <div className="flex items-center gap-3 flex-wrap">
                      <Badge variant="secondary" className="text-sm">
                        {tool.category}
                      </Badge>
                      <Badge 
                        variant="outline" 
                        className={`text-sm ${tool.pricing === "Free" ? "border-green-500 text-green-600" : ""}`}
                      >
                        {tool.pricing}
                      </Badge>
                      {tool.rating && (
                        <div className="flex items-center gap-1 text-foreground">
                          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold">{tool.rating}</span>
                          <span className="text-muted-foreground">/5</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground">
                  {tool.description}
                </p>
              </div>

              {/* Detailed Description */}
              <Card className="p-6 bg-gradient-card border-border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  About {tool.name}
                </h2>
                <p className="text-foreground leading-relaxed">
                  {tool.detailedDescription || tool.description}
                </p>
              </Card>

              {/* Key Features */}
              <Card className="p-6 bg-gradient-card border-border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Key Features
                </h2>
                <ul className="space-y-3">
                  {tool.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="p-6 bg-gradient-card border-border sticky top-24">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">
                      Pricing
                    </h3>
                    <p className="text-2xl font-bold text-foreground">
                      {tool.pricing}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">
                      Category
                    </h3>
                    <p className="text-foreground">
                      {tool.category}
                    </p>
                  </div>

                  {tool.rating && (
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-2">
                        User Rating
                      </h3>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-5 w-5 ${
                                star <= Math.round(tool.rating!)
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-foreground font-semibold">
                          {tool.rating}/5
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="pt-4 space-y-3">
                    <Button 
                      asChild 
                      className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                      size="lg"
                    >
                      <a href={tool.link} target="_blank" rel="noopener noreferrer">
                        Visit Official Website
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    
                    <Button 
                      asChild 
                      variant="outline" 
                      className="w-full"
                      size="lg"
                    >
                      <Link to="/">
                        Browse More Tools
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ToolDetails;
