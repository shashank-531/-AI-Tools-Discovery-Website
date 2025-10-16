import { useState, useRef } from "react";
import { Code, Palette, Zap, BarChart, Pencil, Briefcase } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import ToolCard from "@/components/ToolCard";
import Footer from "@/components/Footer";
import { toolsData, categories } from "@/data/toolsData";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const categoryIcons = {
  "Content Creation": Pencil,
  "Coding & Development": Code,
  "Design & Graphics": Palette,
  "Productivity & Automation": Zap,
  "Data Analysis & AI Research": BarChart,
  "Business & Marketing": Briefcase,
};

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("popular");

  // Refs for scrolling
  const categoriesRef = useRef<HTMLElement | null>(null);
  const toolsSectionRef = useRef<HTMLElement | null>(null);

  const handleSearch = (query: string) => {
    setSearchQuery(query.toLowerCase());
  };

  const handleCategoryClick = (categoryName: string) => {
    const newCategory =
      categoryName === selectedCategory ? "all" : categoryName;
    setSelectedCategory(newCategory);

    setTimeout(() => {
      const target = toolsSectionRef.current;
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 80);
  };

  // Filter and sort tools
  const filteredTools = toolsData
    .filter((tool) => {
      const matchesSearch =
        tool.name.toLowerCase().includes(searchQuery) ||
        tool.description.toLowerCase().includes(searchQuery);
      const matchesCategory =
        selectedCategory === "all" || tool.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "popular") return (b.rating || 0) - (a.rating || 0);
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0;
    });

  return (
    <div className="min-h-screen bg-background">
      <Navbar onSearch={handleSearch} />
      <Hero onSearch={handleSearch} />

      {/* Categories Section */}
      <section
        ref={categoriesRef}
        id="categories"
        className="py-16 bg-background"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Explore by Category
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse our curated collection of AI tools organized by use case
              and functionality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.name}
                icon={categoryIcons[category.name as keyof typeof categoryIcons]}
                title={category.name}
                description={category.description}
                count={category.count}
                onClick={() => handleCategoryClick(category.name)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section
        ref={toolsSectionRef}
        className="py-16 bg-muted/30 scroll-mt-24"
        aria-label="tools-section"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                {selectedCategory === "all"
                  ? "Featured AI Tools"
                  : selectedCategory}
              </h2>
              <p className="text-muted-foreground">
                {filteredTools.length}{" "}
                {filteredTools.length === 1 ? "tool" : "tools"} found
              </p>
            </div>

            <div className="flex gap-4 w-full sm:w-auto">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px] bg-card">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="name">Alphabetical</SelectItem>
                </SelectContent>
              </Select>

              {selectedCategory !== "all" && (
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedCategory("all");
                    const target = categoriesRef.current;
                    if (target) {
                      target.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                >
                  Clear Filter
                </Button>
              )}
            </div>
          </div>

          {filteredTools.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No tools found. Try adjusting your search or filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map((tool) => (
                <ToolCard key={tool.id} {...tool} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
