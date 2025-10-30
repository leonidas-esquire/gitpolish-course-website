import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { BookOpen, Clock, Target } from "lucide-react";

export default function Curriculum() {
  const modules = [
    {
      number: 1,
      title: "GitPolish Foundations & Repository Setup",
      duration: "4-6 hours",
      pillars: "Repository Architecture, Documentation Excellence",
      scenarios: "1-10",
      outcomes: [
        "Create professional repositories from scratch",
        "Onboard developers systematically",
        "Manage feature requests with GitHub Issues",
        "Write comprehensive README documentation"
      ]
    },
    {
      number: 2,
      title: "Documentation & Collaboration",
      duration: "4-6 hours",
      pillars: "Documentation Excellence, Collaboration",
      scenarios: "11-20",
      outcomes: [
        "Master GitHub Issues for project management",
        "Conduct effective code reviews",
        "Manage pull request workflows",
        "Foster team collaboration"
      ]
    },
    {
      number: 3,
      title: "Code Quality & Review Processes",
      duration: "4-6 hours",
      pillars: "Code Quality, Collaboration",
      scenarios: "21-25",
      outcomes: [
        "Implement code review workflows",
        "Establish quality standards",
        "Configure automated quality checks",
        "Maintain consistent code style"
      ]
    },
    {
      number: 4,
      title: "Security & Compliance",
      duration: "3-5 hours",
      pillars: "Security, Repository Architecture",
      scenarios: "26-30",
      outcomes: [
        "Secure repositories and sensitive data",
        "Manage access control effectively",
        "Implement security best practices",
        "Ensure compliance with standards"
      ]
    },
    {
      number: 5,
      title: "Automation & CI/CD",
      duration: "5-7 hours",
      pillars: "Automation, Code Quality",
      scenarios: "31-35",
      outcomes: [
        "Implement GitHub Actions workflows",
        "Automate testing and deployment",
        "Set up CI/CD pipelines",
        "Streamline development workflows"
      ]
    },
    {
      number: 6,
      title: "Advanced Workflows & Scaling",
      duration: "4-6 hours",
      pillars: "All Pillars",
      scenarios: "36-40",
      outcomes: [
        "Manage monorepos effectively",
        "Scale workflows for multiple projects",
        "Handle complex scenarios",
        "Apply all GitPolish principles"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#1E1E1E]">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-[#4EC9B0] mb-4">
              Course Curriculum
            </h1>
            <p className="text-xl text-[#D4D4D4] mb-6">
              A comprehensive learning path covering 40 real-world scenarios across 6 modules
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-[#858585]">
              <div className="flex items-center gap-2">
                <Clock size={20} className="text-[#4EC9B0]" />
                <span>25-35 hours total</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen size={20} className="text-[#4EC9B0]" />
                <span>6 comprehensive modules</span>
              </div>
              <div className="flex items-center gap-2">
                <Target size={20} className="text-[#4EC9B0]" />
                <span>40 practical scenarios</span>
              </div>
            </div>
          </div>

          {/* Modules */}
          <div className="space-y-8">
            {modules.map((module) => (
              <div key={module.number} className="bg-[#252526] border border-[#3E3E42] rounded-lg p-8 hover:border-[#4EC9B0] transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-[#569CD6] font-semibold mb-2">
                      Module {module.number}
                    </div>
                    <h2 className="text-2xl font-bold text-[#D4D4D4] mb-2">
                      {module.title}
                    </h2>
                  </div>
                  {module.number === 1 && (
                    <Link href="/module-1">
                      <Button className="bg-[#4EC9B0] text-[#1E1E1E] hover:bg-[#3BA890]">
                        Start Module
                      </Button>
                    </Link>
                  )}
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 mb-4 text-sm">
                  <div>
                    <div className="text-[#858585] mb-1">Duration</div>
                    <div className="text-[#D4D4D4]">{module.duration}</div>
                  </div>
                  <div>
                    <div className="text-[#858585] mb-1">GitPolish Pillars</div>
                    <div className="text-[#D4D4D4]">{module.pillars}</div>
                  </div>
                  <div>
                    <div className="text-[#858585] mb-1">Scenarios Covered</div>
                    <div className="text-[#D4D4D4]">Scenarios {module.scenarios}</div>
                  </div>
                </div>

                <div>
                  <div className="text-[#858585] mb-2">Learning Outcomes:</div>
                  <ul className="space-y-2">
                    {module.outcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start gap-2 text-[#D4D4D4]">
                        <span className="text-[#4EC9B0] mt-1">▸</span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center bg-[#252526] border border-[#3E3E42] rounded-lg p-8">
            <h3 className="text-2xl font-bold text-[#D4D4D4] mb-4">
              Ready to Begin Your Journey?
            </h3>
            <p className="text-[#858585] mb-6">
              Start with Module 1 and work your way through the complete curriculum
            </p>
            <Link href="/module-1">
              <Button className="bg-[#4EC9B0] text-[#1E1E1E] hover:bg-[#3BA890] text-lg px-8 py-6">
                Start Module 1
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1E1E1E] border-t border-[#3E3E42] py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-[#858585]">
          <p>© 2025 GitPolish Protocol™ Certification Course. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
