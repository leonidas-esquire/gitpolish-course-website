import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import { CheckCircle2, BookOpen, Award, Users, Clock, Target } from "lucide-react";

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen bg-[#1E1E1E]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#4EC9B0] mb-6">
            Master Professional GitHub Repository Management
          </h1>
          <p className="text-xl text-[#D4D4D4] mb-8 leading-relaxed">
            Transform from a Git user into a professional repository manager with the 
            <span className="text-[#4EC9B0] font-semibold"> GitPolish Protocol™</span> — 
            a comprehensive certification course covering 40 real-world scenarios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/curriculum">
              <Button className="bg-[#4EC9B0] text-[#1E1E1E] hover:bg-[#3BA890] text-lg px-8 py-6">
                View Curriculum
              </Button>
            </Link>
            <Link href="/module-1">
              <Button variant="outline" className="border-[#4EC9B0] text-[#4EC9B0] hover:bg-[#4EC9B0] hover:text-[#1E1E1E] text-lg px-8 py-6">
                Start Module 1
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#252526] py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#4EC9B0] mb-2">6</div>
              <div className="text-[#858585]">Comprehensive Modules</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#4EC9B0] mb-2">40</div>
              <div className="text-[#858585]">Real-World Scenarios</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#4EC9B0] mb-2">25-35</div>
              <div className="text-[#858585]">Hours of Content</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#4EC9B0] mb-2">100%</div>
              <div className="text-[#858585]">Hands-On Practice</div>
            </div>
          </div>
        </div>
      </section>

      {/* Five Pillars Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-[#4EC9B0] text-center mb-4">
            The Five Pillars of GitPolish Protocol™
          </h2>
          <p className="text-[#858585] text-center mb-12">
            A systematic framework for professional repository management
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Repository Architecture",
                description: "Build scalable, well-organized repository structures from day one",
                icon: Target
              },
              {
                title: "Documentation Excellence",
                description: "Create comprehensive documentation that serves all stakeholders",
                icon: BookOpen
              },
              {
                title: "Code Quality",
                description: "Implement systematic code review and quality assurance processes",
                icon: CheckCircle2
              },
              {
                title: "Security",
                description: "Secure repositories with proper access control and data protection",
                icon: Award
              },
              {
                title: "Automation",
                description: "Streamline workflows with CI/CD and automated testing",
                icon: Clock
              }
            ].map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div key={index} className="bg-[#252526] border border-[#3E3E42] p-6 rounded-lg hover:border-[#4EC9B0] transition-colors">
                  <Icon className="text-[#4EC9B0] mb-4" size={32} />
                  <h3 className="text-xl font-semibold text-[#D4D4D4] mb-2">{pillar.title}</h3>
                  <p className="text-[#858585]">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Course Structure Section */}
      <section className="bg-[#252526] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#4EC9B0] text-center mb-12">
              What You'll Learn
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  module: "Module 1",
                  title: "GitPolish Foundations & Repository Setup",
                  scenarios: "Scenarios 1-10",
                  description: "Master repository architecture and documentation excellence"
                },
                {
                  module: "Module 2",
                  title: "Documentation & Collaboration",
                  scenarios: "Scenarios 11-20",
                  description: "Advanced documentation strategies and team collaboration"
                },
                {
                  module: "Module 3",
                  title: "Code Quality & Review Processes",
                  scenarios: "Scenarios 21-25",
                  description: "Implement professional code review workflows"
                },
                {
                  module: "Module 4",
                  title: "Security & Compliance",
                  scenarios: "Scenarios 26-30",
                  description: "Secure repositories and manage sensitive data"
                },
                {
                  module: "Module 5",
                  title: "Automation & CI/CD",
                  scenarios: "Scenarios 31-35",
                  description: "Automate workflows with GitHub Actions"
                },
                {
                  module: "Module 6",
                  title: "Advanced Workflows & Scaling",
                  scenarios: "Scenarios 36-40",
                  description: "Manage complex projects and scale operations"
                }
              ].map((module, index) => (
                <div key={index} className="bg-[#1E1E1E] border border-[#3E3E42] p-6 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="text-[#569CD6] font-semibold mb-1">{module.module}</div>
                      <h3 className="text-xl font-bold text-[#D4D4D4] mb-2">{module.title}</h3>
                      <p className="text-[#858585] text-sm mb-2">{module.scenarios}</p>
                      <p className="text-[#D4D4D4]">{module.description}</p>
                    </div>
                    <CheckCircle2 className="text-[#4EC9B0] flex-shrink-0" size={24} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Award className="text-[#4EC9B0] mx-auto mb-6" size={64} />
          <h2 className="text-4xl font-bold text-[#4EC9B0] mb-6">
            Earn Your Professional Certification
          </h2>
          <p className="text-xl text-[#D4D4D4] mb-8">
            Complete the comprehensive exam and capstone project to earn your GitPolish Protocol™ 
            Professional Certification — a recognized credential that demonstrates your mastery 
            of professional repository management.
          </p>
          <Link href="/certification">
            <Button className="bg-[#4EC9B0] text-[#1E1E1E] hover:bg-[#3BA890] text-lg px-8 py-6">
              Learn About Certification
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#252526] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#D4D4D4] mb-4">
            Ready to Transform Your GitHub Skills?
          </h2>
          <p className="text-[#858585] mb-8">
            Start your journey to becoming a GitPolish Protocol™ Certified Professional
          </p>
          <Link href="/module-1">
            <Button className="bg-[#4EC9B0] text-[#1E1E1E] hover:bg-[#3BA890] text-lg px-8 py-6">
              Start Learning Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E1E1E] border-t border-[#3E3E42] py-8">
        <div className="container mx-auto px-4 text-center text-[#858585]">
          <p>© 2025 GitPolish Protocol™ Certification Course. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
