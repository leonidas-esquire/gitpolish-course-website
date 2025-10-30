import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Download, PlayCircle, FileText, CheckCircle2 } from "lucide-react";

export default function Module1() {
  return (
    <div className="min-h-screen bg-[#1E1E1E]">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="text-[#569CD6] font-semibold mb-2">Module 1</div>
            <h1 className="text-5xl font-bold text-[#4EC9B0] mb-4">
              GitPolish Foundations & Repository Setup
            </h1>
            <p className="text-xl text-[#D4D4D4]">
              Master the foundational pillars of Repository Architecture and Documentation Excellence
            </p>
          </div>

          {/* Module Overview */}
          <div className="bg-[#252526] border border-[#3E3E42] rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#D4D4D4] mb-4">Module Overview</h2>
            <p className="text-[#D4D4D4] mb-6">
              This foundational module introduces you to the GitPolish Protocol™ framework and teaches 
              you how to create professional repositories from day one. You will learn the importance 
              of Repository Architecture and Documentation Excellence—two of the five pillars of the 
              GitPolish Protocol™.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <div className="text-[#858585] text-sm mb-1">Duration</div>
                <div className="text-[#D4D4D4] font-semibold">4-6 hours</div>
              </div>
              <div>
                <div className="text-[#858585] text-sm mb-1">Scenarios</div>
                <div className="text-[#D4D4D4] font-semibold">Scenarios 1-10</div>
              </div>
              <div>
                <div className="text-[#858585] text-sm mb-1">Labs</div>
                <div className="text-[#D4D4D4] font-semibold">2 hands-on labs</div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#D4D4D4] mb-3">Learning Objectives</h3>
              <ul className="space-y-2">
                {[
                  "Create a new GitHub repository following professional best practices",
                  "Onboard a new developer to a project efficiently and systematically",
                  "Manage feature requests and enhancements using GitHub Issues",
                  "Create and maintain a professional README.md for all audiences",
                  "Apply Repository Architecture and Documentation Excellence pillars",
                  "Transform basic Git knowledge into professional repository management"
                ].map((objective, index) => (
                  <li key={index} className="flex items-start gap-2 text-[#D4D4D4]">
                    <CheckCircle2 size={20} className="text-[#4EC9B0] flex-shrink-0 mt-0.5" />
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Course Materials */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Presentation Slides */}
            <div className="bg-[#252526] border border-[#3E3E42] rounded-lg p-6">
              <PlayCircle size={32} className="text-[#4EC9B0] mb-4" />
              <h3 className="text-xl font-bold text-[#D4D4D4] mb-2">
                Presentation Slides
              </h3>
              <p className="text-[#858585] mb-4">
                21 professional slides covering all Module 1 content with scenarios, labs, and assessments
              </p>
              <a 
                href="manus-slides://XT8IocHCrNzUe0kFrAvkud" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-[#4EC9B0] text-[#1E1E1E] hover:bg-[#3BA890]">
                  View Slides
                </Button>
              </a>
            </div>

            {/* Student Workbook */}
            <div className="bg-[#252526] border border-[#3E3E42] rounded-lg p-6">
              <FileText size={32} className="text-[#4EC9B0] mb-4" />
              <h3 className="text-xl font-bold text-[#D4D4D4] mb-2">
                Student Workbook
              </h3>
              <p className="text-[#858585] mb-4">
                Comprehensive workbook with exercises, lab worksheets, and self-assessment questions
              </p>
              <Button className="w-full bg-[#4EC9B0] text-[#1E1E1E] hover:bg-[#3BA890]">
                <Download size={16} className="mr-2" />
                Download Workbook
              </Button>
            </div>
          </div>

          {/* Scenarios Covered */}
          <div className="bg-[#252526] border border-[#3E3E42] rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#D4D4D4] mb-6">Scenarios Covered</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Kicking Off a New Client Project with a Professional Repository",
                "Onboarding a New Developer to a Client Project",
                "Managing Feature Requests and Enhancements",
                "Handing Off a Project to a Client",
                "Transforming a Messy Repository into a Professional One",
                "Preparing a Repository for Investor Due Diligence",
                "Setting Up an Open Source Project",
                "Managing Multiple Client Projects with Consistent Standards",
                "Implementing Continuous Integration/Continuous Deployment (CI/CD)",
                "Resolving Merge Conflicts in a Team Environment"
              ].map((scenario, index) => (
                <div key={index} className="flex items-start gap-2 text-[#D4D4D4]">
                  <span className="text-[#569CD6] font-semibold flex-shrink-0">{index + 1}.</span>
                  <span>{scenario}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Labs */}
          <div className="bg-[#252526] border border-[#3E3E42] rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#D4D4D4] mb-6">Hands-On Labs</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-[#4EC9B0] pl-4">
                <h3 className="text-lg font-semibold text-[#D4D4D4] mb-2">
                  Lab 1.1: Creating Your First Professional Repository
                </h3>
                <p className="text-[#858585] mb-2">
                  Create a professional repository for a fictional client project (TaskFlow) that demonstrates 
                  mastery of Repository Architecture and Documentation Excellence.
                </p>
                <div className="text-sm text-[#858585]">Duration: 30 minutes</div>
              </div>
              
              <div className="border-l-4 border-[#4EC9B0] pl-4">
                <h3 className="text-lg font-semibold text-[#D4D4D4] mb-2">
                  Lab 1.2: Writing a Professional README
                </h3>
                <p className="text-[#858585] mb-2">
                  Create a comprehensive README.md for "WeatherNow API," a fictional weather data service, 
                  demonstrating mastery of Documentation Excellence.
                </p>
                <div className="text-sm text-[#858585]">Duration: 45 minutes</div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-[#252526] border border-[#3E3E42] rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-[#D4D4D4] mb-4">
              Ready to Start Learning?
            </h3>
            <p className="text-[#858585] mb-6">
              Begin with the presentation slides, complete the labs, and use the workbook to track your progress
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="manus-slides://XT8IocHCrNzUe0kFrAvkud" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="bg-[#4EC9B0] text-[#1E1E1E] hover:bg-[#3BA890] px-8">
                  <PlayCircle size={16} className="mr-2" />
                  View Slides
                </Button>
              </a>
              <Button variant="outline" className="border-[#4EC9B0] text-[#4EC9B0] hover:bg-[#4EC9B0] hover:text-[#1E1E1E] px-8">
                <Download size={16} className="mr-2" />
                Download Materials
              </Button>
            </div>
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
