import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Upload, Sparkles } from "lucide-react";

const SubmitTool = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    link: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast({
      title: "Tool submitted!",
      description: "Thank you for contributing. We’ll review your tool soon.",
    });

    setFormData({
      name: "",
      category: "",
      description: "",
      link: "",
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-grow py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex justify-center mb-4">
              <Sparkles className="h-10 w-10 text-primary animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Submit Your AI Tool
            </h1>
            <p className="text-lg text-muted-foreground">
              Share your favorite AI tools with the community! Fill out the form
              below to get started.
            </p>
          </div>

          {/* Form */}
          <Card className="max-w-3xl mx-auto p-8 bg-gradient-card border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Tool Name
                </label>
                <Input
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter the tool name"
                  className="bg-background border-border"
                />
              </div>

              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Category
                </label>
                <Input
                  id="category"
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleChange}
                  placeholder="e.g. Content Creation, Productivity, etc."
                  className="bg-background border-border"
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Description
                </label>
                <Textarea
                  id="description"
                  name="description"
                  required
                  rows={5}
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe what the tool does and why it’s useful..."
                  className="bg-background border-border resize-none"
                />
              </div>

              <div>
                <label
                  htmlFor="link"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Tool Link
                </label>
                <Input
                  id="link"
                  name="link"
                  type="url"
                  required
                  value={formData.link}
                  onChange={handleChange}
                  placeholder="https://example.com"
                  className="bg-background border-border"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-primary hover:opacity-90 transition-all flex items-center justify-center"
                size="lg"
              >
                <Upload className="mr-2 h-5 w-5" /> Submit Tool
              </Button>
            </form>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SubmitTool;
