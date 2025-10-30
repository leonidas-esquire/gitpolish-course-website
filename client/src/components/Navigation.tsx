import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1E1E1E] border-b border-[#3E3E42] sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-3 cursor-pointer">
              <div className="text-2xl font-bold text-[#4EC9B0]">GitPolish Protocol™</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/">
              <span className="text-[#D4D4D4] hover:text-[#4EC9B0] cursor-pointer transition-colors">
                Home
              </span>
            </Link>
            <Link href="/curriculum">
              <span className="text-[#D4D4D4] hover:text-[#4EC9B0] cursor-pointer transition-colors">
                Curriculum
              </span>
            </Link>
            <Link href="/module-1">
              <span className="text-[#D4D4D4] hover:text-[#4EC9B0] cursor-pointer transition-colors">
                Module 1
              </span>
            </Link>
            <Link href="/certification">
              <span className="text-[#D4D4D4] hover:text-[#4EC9B0] cursor-pointer transition-colors">
                Certification
              </span>
            </Link>
            <Link href="/resources">
              <span className="text-[#D4D4D4] hover:text-[#4EC9B0] cursor-pointer transition-colors">
                Resources
              </span>
            </Link>
            <Button className="bg-[#4EC9B0] text-[#1E1E1E] hover:bg-[#3BA890]">
              Enroll Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#D4D4D4]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <Link href="/">
              <div className="block text-[#D4D4D4] hover:text-[#4EC9B0] py-2 cursor-pointer">
                Home
              </div>
            </Link>
            <Link href="/curriculum">
              <div className="block text-[#D4D4D4] hover:text-[#4EC9B0] py-2 cursor-pointer">
                Curriculum
              </div>
            </Link>
            <Link href="/module-1">
              <div className="block text-[#D4D4D4] hover:text-[#4EC9B0] py-2 cursor-pointer">
                Module 1
              </div>
            </Link>
            <Link href="/certification">
              <div className="block text-[#D4D4D4] hover:text-[#4EC9B0] py-2 cursor-pointer">
                Certification
              </div>
            </Link>
            <Link href="/resources">
              <div className="block text-[#D4D4D4] hover:text-[#4EC9B0] py-2 cursor-pointer">
                Resources
              </div>
            </Link>
            <Button className="w-full bg-[#4EC9B0] text-[#1E1E1E] hover:bg-[#3BA890]">
              Enroll Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
