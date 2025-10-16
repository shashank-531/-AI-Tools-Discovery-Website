import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Users, Sparkles, Code } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              AI Tools Discovery Website
            </h1>
            <p className="text-lg text-muted-foreground">
              Your comprehensive directory for discovering, comparing, and choosing the best AI tools 
              to supercharge your productivity and creativity.
            </p>
          </div>

          {/* Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 bg-gradient-card border-border">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                  <Target className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-3">Our Mission</h2>
                  <p className="text-muted-foreground">
                    We aim to simplify the discovery of AI tools by providing a curated, organized 
                    directory that helps professionals, students, and enthusiasts find the perfect 
                    AI solutions for their specific needs.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-card border-border">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary flex-shrink-0">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-3">Who We Serve</h2>
                  <p className="text-muted-foreground">
                    Content creators, developers, designers, business professionals, researchers, 
                    and anyone looking to leverage AI technology to enhance their work and productivity.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Technology Stack */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Built with Modern Technology
              </h2>
              <p className="text-muted-foreground">
                Our platform is built using cutting-edge web technologies to ensure 
                a fast, responsive, and delightful user experience.
              </p>
            </div>

            <Card className="p-8 bg-gradient-card border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent flex-shrink-0">
                  <Code className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Technology Stack</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Frontend</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• React.js for dynamic UI</li>
                        <li>• TypeScript for type safety</li>
                        <li>• Tailwind CSS for styling</li>
                        <li>• Vite for fast development</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Features</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Responsive design</li>
                        <li>• Fast search & filtering</li>
                        <li>• Modern UI components</li>
                        <li>• Optimized performance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Problem We Solve */}
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 bg-gradient-primary text-primary-foreground border-0">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 flex-shrink-0">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-3">Problem We Solve</h2>
                  <p className="text-primary-foreground/90 mb-4">
                    With thousands of AI tools emerging rapidly, it's overwhelming to find the right 
                    one for your needs. We solve this by:
                  </p>
                  <ul className="space-y-2 text-primary-foreground/90">
                    <li>✓ Curating and organizing tools by category</li>
                    <li>✓ Providing clear descriptions and key features</li>
                    <li>✓ Offering easy comparison between tools</li>
                    <li>✓ Including pricing information upfront</li>
                    <li>✓ Maintaining an up-to-date directory</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
