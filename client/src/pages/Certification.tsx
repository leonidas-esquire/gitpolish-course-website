import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Award, FileText, Download, CheckCircle2, Clock, Target } from "lucide-react";

export default function Certification() {
  return (
    <div className="min-h-screen bg-[#1E1E1E]">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Award size={64} className="text-[#4EC9B0] mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-[#4EC9B0] mb-4">
              GitPolish Protocol™ Professional Certification
            </h1>
            <p className="text-xl text-[#D4D4D4]">
              Earn a recognized credential that demonstrates your mastery of professional GitHub repository management
            </p>
          </div>

          {/* Certification Overview */}
          <div className="bg-[#252526] border border-[#3E3E42] rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#D4D4D4] mb-4">What is the Certification?</h2>
            <p className="text-[#D4D4D4] mb-6">
              The GitPolish Protocol™ Professional Certification validates your ability to manage GitHub repositories 
              at a professional level. This certification demonstrates that you can apply all five pillars of the 
              GitPolish Protocol™ to real-world scenarios and deliver high-quality, maintainable repositories.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Clock size={32} className="text-[#4EC9B0] mx-auto mb-2" />
                <div className="text-[#D4D4D4] font-semibold mb-1">2-Hour Exam</div>
                <div className="text-[#858585] text-sm">Comprehensive assessment</div>
              </div>
              <div className="text-center">
                <Target size={32} className="text-[#4EC9B0] mx-auto mb-2" />
                <div className="text-[#D4D4D4] font-semibold mb-1">Capstone Project</div>
                <div className="text-[#858585] text-sm">Real-world application</div>
              </div>
              <div className="text-center">
                <Award size={32} className="text-[#4EC9B0] mx-auto mb-2" />
                <div className="text-[#D4D4D4] font-semibold mb-1">80% Pass Rate</div>
                <div className="text-[#858585] text-sm">Professional standard</div>
              </div>
            </div>
          </div>

          {/* Certification Components */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Exam */}
            <div className="bg-[#252526] border border-[#3E3E42] rounded-lg p-6">
              <FileText size={32} className="text-[#4EC9B0] mb-4" />
              <h3 className="text-xl font-bold text-[#D4D4D4] mb-4">Certification Exam</h3>
              <p className="text-[#858585] mb-4">
                A comprehensive 2-hour exam covering all 40 scenarios across the 6 modules
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-[#D4D4D4]">
                  <CheckCircle2 size={16} className="text-[#4EC9B0] flex-shrink-0 mt-1" />
                  <span>20 multiple choice questions (40 points)</span>
                </li>
                <li className="flex items-start gap-2 text-[#D4D4D4]">
                  <CheckCircle2 size={16} className="text-[#4EC9B0] flex-shrink-0 mt-1" />
                  <span>6 short answer questions (30 points)</span>
                </li>
                <li className="flex items-start gap-2 text-[#D4D4D4]">
                  <CheckCircle2 size={16} className="text-[#4EC9B0] flex-shrink-0 mt-1" />
                  <span>3 scenario-based questions (30 points)</span>
                </li>
              </ul>
              <Button className="w-full bg-[#4EC9B0] text-[#1E1E1E] hover:bg-[#3BA890]">
                <Download size={16} className="mr-2" />
                Download Exam Guide
              </Button>
            </div>

            {/* Capstone Project */}
            <div className="bg-[#252526] border border-[#3E3E42] rounded-lg p-6">
              <Target size={32} className="text-[#4EC9B0] mb-4" />
              <h3 className="text-xl font-bold text-[#D4D4D4] mb-4">Capstone Project</h3>
              <p className="text-[#858585] mb-4">
                Create a complete professional repository demonstrating all five GitPolish pillars
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-[#D4D4D4]">
                  <CheckCircle2 size={16} className="text-[#4EC9B0] flex-shrink-0 mt-1" />
                  <span>Professional repository architecture</span>
                </li>
                <li className="flex items-start gap-2 text-[#D4D4D4]">
                  <CheckCircle2 size={16} className="text-[#4EC9B0] flex-shrink-0 mt-1" />
                  <span>Comprehensive documentation</span>
                </li>
                <li className="flex items-start gap-2 text-[#D4D4D4]">
                  <CheckCircle2 size={16} className="text-[#4EC9B0] flex-shrink-0 mt-1" />
                  <span>CI/CD pipeline implementation</span>
                </li>
              </ul>
              <Button className="w-full bg-[#4EC9B0] text-[#1E1E1E] hover:bg-[#3BA890]">
                <Download size={16} className="mr-2" />
                Download Project Guidelines
              </Button>
            </div>
          </div>

          {/* Certification Benefits */}
          <div className="bg-[#252526] border border-[#3E3E42] rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#D4D4D4] mb-6">Certification Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-[#D4D4D4] mb-3">Professional Recognition</h3>
                <ul className="space-y-2">
                  {[
                    "Digital certificate with unique certification number",
                    "GitPolish Protocol™ badge for LinkedIn and professional profiles",
                    "Listing in the official Certified Professionals directory"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2 text-[#D4D4D4]">
                      <span className="text-[#4EC9B0]">▸</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#D4D4D4] mb-3">Career Advancement</h3>
                <ul className="space-y-2">
                  {[
                    "Demonstrate expertise to clients and employers",
                    "Stand out in competitive job markets",
                    "Command higher rates as a consultant"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2 text-[#D4D4D4]">
                      <span className="text-[#4EC9B0]">▸</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Requirements */}
          <div className="bg-[#252526] border border-[#3E3E42] rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#D4D4D4] mb-6">Certification Requirements</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-[#4EC9B0] text-[#1E1E1E] rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#D4D4D4] mb-1">Complete All 6 Modules</h3>
                  <p className="text-[#858585]">
                    Work through all course content, including presentations, exercises, and labs
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-[#4EC9B0] text-[#1E1E1E] rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#D4D4D4] mb-1">Pass the Certification Exam</h3>
                  <p className="text-[#858585]">
                    Score 80% or higher on the comprehensive 2-hour exam
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-[#4EC9B0] text-[#1E1E1E] rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#D4D4D4] mb-1">Complete the Capstone Project</h3>
                  <p className="text-[#858585]">
                    Create a professional repository and submit a detailed project report
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#252526] border border-[#3E3E42] rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-[#D4D4D4] mb-4">
              Ready to Earn Your Certification?
            </h3>
            <p className="text-[#858585] mb-6">
              Start your journey to becoming a GitPolish Protocol™ Certified Professional
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#4EC9B0] text-[#1E1E1E] hover:bg-[#3BA890] px-8">
                <Download size={16} className="mr-2" />
                Download Exam & Project Guide
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
