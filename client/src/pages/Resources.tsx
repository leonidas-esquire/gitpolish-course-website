import Navigation from "@/components/Navigation";
import { BookOpen, ExternalLink, Download, Video, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Resources() {
  const resources = [
    {
      category: "Official Documentation",
      icon: BookOpen,
      items: [
        { name: "GitHub Docs", description: "Comprehensive official documentation for all GitHub features", url: "https://docs.github.com" },
        { name: "Git Documentation", description: "Complete reference for Git commands and workflows", url: "https://git-scm.com/doc" },
        { name: "Markdown Guide", description: "Master Markdown syntax for professional documentation", url: "https://www.markdownguide.org" }
      ]
    },
    {
      category: "Learning Platforms",
      icon: Video,
      items: [
        { name: "GitHub Skills", description: "Interactive courses for hands-on GitHub practice", url: "https://skills.github.com" },
        { name: "Git Immersion", description: "Guided tour through Git fundamentals with exercises", url: "http://gitimmersion.com" },
        { name: "Learn Git Branching", description: "Visual interactive tool for understanding Git branching", url: "https://learngitbranching.js.org" }
      ]
    },
    {
      category: "Tools & Extensions",
      icon: Download,
      items: [
        { name: "GitHub CLI (gh)", description: "Command-line interface for GitHub operations", url: "https://cli.github.com" },
        { name: "GitKraken", description: "Visual Git client for easier repository management", url: "https://www.gitkraken.com" },
        { name: "VS Code Git Extensions", description: "GitLens and GitHub Pull Requests for enhanced workflow", url: "https://marketplace.visualstudio.com" }
      ]
    },
    {
      category: "Books & Articles",
      icon: FileText,
      items: [
        { name: "Pro Git (Free eBook)", description: "Comprehensive guide to Git by Scott Chacon", url: "https://git-scm.com/book/en/v2" },
        { name: "GitHub Guides", description: "Official guides on workflows and best practices", url: "https://guides.github.com" },
        { name: "Awesome README", description: "Curated list of excellent README examples", url: "https://github.com/matiassingers/awesome-readme" }
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
              Course Resources
            </h1>
            <p className="text-xl text-[#D4D4D4]">
              Additional materials and references to enhance your learning journey
            </p>
          </div>

          {/* Course Materials */}
          <div className="bg-[#252526] border border-[#3E3E42] rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#D4D4D4] mb-6">Course Materials</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-[#3E3E42] rounded-lg p-6 hover:border-[#4EC9B0] transition-colors">
                <FileText size={32} className="text-[#4EC9B0] mb-3" />
                <h3 className="text-lg font-semibold text-[#D4D4D4] mb-2">Course Blueprint</h3>
                <p className="text-[#858585] text-sm mb-4">
                  Complete course structure with all 6 modules and 40 scenarios
                </p>
                <Button className="w-full bg-[#4EC9B0] text-[#1E1E1E] hover:bg-[#3BA890] text-sm">
                  <Download size={14} className="mr-2" />
                  Download
                </Button>
              </div>

              <div className="border border-[#3E3E42] rounded-lg p-6 hover:border-[#4EC9B0] transition-colors">
                <FileText size={32} className="text-[#4EC9B0] mb-3" />
                <h3 className="text-lg font-semibold text-[#D4D4D4] mb-2">Student Workbook</h3>
                <p className="text-[#858585] text-sm mb-4">
                  Exercises, lab worksheets, and progress tracking
                </p>
                <Button className="w-full bg-[#4EC9B0] text-[#1E1E1E] hover:bg-[#3BA890] text-sm">
                  <Download size={14} className="mr-2" />
                  Download
                </Button>
              </div>

              <div className="border border-[#3E3E42] rounded-lg p-6 hover:border-[#4EC9B0] transition-colors">
                <FileText size={32} className="text-[#4EC9B0] mb-3" />
                <h3 className="text-lg font-semibold text-[#D4D4D4] mb-2">Exam & Project Guide</h3>
                <p className="text-[#858585] text-sm mb-4">
                  Certification exam and capstone project guidelines
                </p>
                <Button className="w-full bg-[#4EC9B0] text-[#1E1E1E] hover:bg-[#3BA890] text-sm">
                  <Download size={14} className="mr-2" />
                  Download
                </Button>
              </div>
            </div>
          </div>

          {/* External Resources */}
          <div className="space-y-8">
            {resources.map((section, sectionIndex) => {
              const Icon = section.icon;
              return (
                <div key={sectionIndex} className="bg-[#252526] border border-[#3E3E42] rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Icon size={28} className="text-[#4EC9B0]" />
                    <h2 className="text-2xl font-bold text-[#D4D4D4]">{section.category}</h2>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {section.items.map((item, itemIndex) => (
                      <a
                        key={itemIndex}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-[#3E3E42] rounded-lg p-4 hover:border-[#4EC9B0] transition-colors group"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-[#CE9178] font-semibold group-hover:text-[#4EC9B0] transition-colors">
                            {item.name}
                          </h3>
                          <ExternalLink size={16} className="text-[#858585] flex-shrink-0" />
                        </div>
                        <p className="text-[#858585] text-sm">{item.description}</p>
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Practice Repositories */}
          <div className="bg-[#252526] border border-[#3E3E42] rounded-lg p-8 mt-8">
            <h2 className="text-2xl font-bold text-[#D4D4D4] mb-6">Practice Repositories</h2>
            <p className="text-[#858585] mb-6">
              Apply your skills by contributing to these beginner-friendly open source projects
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { name: "First Contributions", description: "Beginner-friendly repo for practicing pull requests", url: "https://github.com/firstcontributions/first-contributions" },
                { name: "Good First Issue", description: "Find open source projects welcoming new contributors", url: "https://goodfirstissue.dev" },
                { name: "Exercism", description: "Practice coding with Git workflow integration", url: "https://exercism.org" }
              ].map((repo, index) => (
                <a
                  key={index}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#3E3E42] rounded-lg p-4 hover:border-[#4EC9B0] transition-colors group"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-[#CE9178] font-semibold group-hover:text-[#4EC9B0] transition-colors">
                      {repo.name}
                    </h3>
                    <ExternalLink size={16} className="text-[#858585] flex-shrink-0" />
                  </div>
                  <p className="text-[#858585] text-sm">{repo.description}</p>
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#252526] border border-[#3E3E42] rounded-lg p-8 mt-8 text-center">
            <h3 className="text-2xl font-bold text-[#D4D4D4] mb-4">
              Need More Help?
            </h3>
            <p className="text-[#858585] mb-6">
              Explore these resources to deepen your understanding and enhance your skills
            </p>
            <Button className="bg-[#4EC9B0] text-[#1E1E1E] hover:bg-[#3BA890] px-8">
              Back to Course
            </Button>
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
