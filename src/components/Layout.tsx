import React from 'react';
import { Home, Award, Images, Mail, UserCircle, Menu } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentScreen: string;
  onNavigate: (screen: string) => void;
}

export default function Layout({ children, currentScreen, onNavigate }: LayoutProps) {
  return (
    <div className="bg-background text-on-background min-h-screen font-body-md selection:bg-secondary-container selection:text-on-secondary-container overflow-x-hidden relative">
      {/* Side Navigation (Desktop) */}
      <nav className="hidden md:flex fixed left-0 top-0 h-full flex-col py-inset-container shadow-sm bg-surface-container-lowest z-40 w-64 rounded-r-xl">
        <div className="px-gutter mb-stack-lg">
          <h1 className="font-headline-md text-headline-md text-primary tracking-tight">MinhFolio</h1>
        </div>
        
        <div className="px-gutter mb-stack-md flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-surface-container-lowest soft-card-shadow relative z-10 mb-stack-sm">
            <img 
              src="/avatar.jpg" 
              alt="Chân dung Chu Tuệ Minh" 
              className="w-full h-full object-cover" 
            />
          </div>
          <h2 className="font-headline-md text-[20px] font-bold text-on-surface">Chu Tuệ Minh</h2>
          <p className="font-body-md text-[14px] text-on-surface-variant">25040142 · Sư phạm Anh</p>
        </div>

        <ul className="flex flex-col gap-stack-xs flex-1">
          <li className="mx-stack-xs">
            <button 
              onClick={() => onNavigate('home')}
              className={`w-full flex items-center gap-stack-sm p-stack-sm rounded-lg font-label-caps transition-colors duration-200 ${
                currentScreen === 'home' 
                  ? 'text-primary border-r-4 border-secondary-container bg-primary-container text-on-primary-container' 
                  : 'text-on-surface-variant hover:bg-surface-container-high'
              }`}
            >
              <Home className="w-5 h-5" />
              Giới thiệu
            </button>
          </li>
          <li className="mx-stack-xs">
            <button 
              onClick={() => onNavigate('projects')}
              className={`w-full flex items-center gap-stack-sm p-stack-sm rounded-lg font-label-caps transition-colors duration-200 ${
                currentScreen === 'projects' 
                  ? 'text-primary border-r-4 border-secondary-container bg-primary-container text-on-primary-container' 
                  : 'text-on-surface-variant hover:bg-surface-container-high'
              }`}
            >
              <Award className="w-5 h-5" />
              Bài tập
            </button>
          </li>
          <li className="mx-stack-xs">
            <button 
              onClick={() => onNavigate('summary')}
              className={`w-full flex items-center gap-stack-sm p-stack-sm rounded-lg font-label-caps transition-colors duration-200 ${
                currentScreen === 'summary' 
                  ? 'text-primary border-r-4 border-secondary-container bg-primary-container text-on-primary-container' 
                  : 'text-on-surface-variant hover:bg-surface-container-high'
              }`}
            >
              <Images className="w-5 h-5" />
              Tổng kết
            </button>
          </li>
          <li className="mx-stack-xs">
            <button className="w-full flex items-center gap-stack-sm text-on-surface-variant p-stack-sm hover:bg-surface-container-high transition-colors duration-200 rounded-lg font-label-caps">
              <Mail className="w-5 h-5" />
              ULIS · ĐHQGHN
            </button>
          </li>
        </ul>

      </nav>

      {/* Top Navigation (Mobile) */}
      <header className="md:hidden fixed top-0 w-full z-50 flex justify-between items-center px-gutter py-stack-sm bg-background/80 backdrop-blur-md">
        <h1 className="font-headline-md text-headline-md font-bold text-primary tracking-tight">MinhFolio</h1>
        <div className="flex items-center gap-4">
            <button className="text-on-surface hover:scale-105 transition-transform duration-200">
            <UserCircle className="w-6 h-6" />
            </button>
            <button className="text-on-surface">
                <Menu className="w-6 h-6" />
            </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="md:ml-64 min-h-screen relative overflow-hidden flex flex-col">
        {children}
        
        {/* Footer */}
        <footer className="bg-surface-container-high py-stack-lg border-t border-surface-variant mt-auto">
            <div className="w-full flex flex-col md:flex-row justify-between items-center px-gutter gap-stack-md max-w-7xl mx-auto">
            <div className="flex items-center gap-2">
                <span className="font-headline-md text-headline-md text-primary">MinhFolio</span>
            </div>
            <p className="font-label-caps text-on-surface text-center md:text-left">
                © 2026 Chu Tuệ Minh · 25040142 · ULIS
            </p>
            <div className="flex gap-4">
                <a href="#" className="font-label-caps text-on-surface-variant hover:text-primary transition-colors">Giới thiệu</a>
                <a href="#" className="font-label-caps text-on-surface-variant hover:text-primary transition-colors">Bài tập</a>
                <a href="#" className="font-label-caps text-on-surface-variant hover:text-primary transition-colors">Tổng kết</a>
            </div>
            </div>
        </footer>
      </main>
    </div>
  );
}
