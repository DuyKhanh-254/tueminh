import { ArrowRight, BookOpen, Flame, MessageSquare, FileEdit, Globe } from 'lucide-react';

interface IntroductionScreenProps {
  onNavigate: (screen: string) => void;
}

export default function IntroductionScreen({ onNavigate }: IntroductionScreenProps) {
  return (
    <div className="pt-20 md:pt-12 px-gutter md:px-12 max-w-7xl mx-auto pb-stack-lg flex-1 w-full">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-center relative">
        {/* Decorative Stickers Background */}
        <div className="absolute inset-0 pointer-events-none z-0 hidden md:block">
          <img 
            src="/previews/bai-5.png" 
            alt="Idea Sticker" 
            className="absolute top-10 left-[40%] w-16 h-16 object-cover object-[0%_0%] sticker-shadow rotate-12 opacity-80" 
          />
          <img 
            src="/previews/infographic-ai.png" 
            alt="Books Sticker" 
            className="absolute bottom-20 right-10 w-20 h-20 object-cover object-[100%_100%] sticker-shadow -rotate-6 opacity-90" 
          />
        </div>

        {/* Left: Text Content */}
        <div className="lg:col-span-7 relative z-10 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 bg-tertiary-fixed-dim/20 text-tertiary-container px-4 py-1.5 rounded-full font-label-caps w-max">
            <span className="w-2 h-2 rounded-full bg-tertiary-fixed"></span>
            Portfolio kỹ năng số · ULIS
          </div>
          <h2 className="font-display-lg-mobile md:font-display-lg text-primary tracking-tight leading-tight">
            Xin chào, mình là Chu Tuệ Minh.<br/>
            <span className="text-secondary-container">Sinh viên Sư phạm Anh</span> tại ULIS.
          </h2>
          <p className="font-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Mã sinh viên 25040142. Portfolio này lưu giữ sáu sản phẩm thực hành về quản lý dữ liệu, nghiên cứu học thuật, Prompt Engineering, cộng tác số, sáng tạo nội dung và sử dụng AI có trách nhiệm.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <button onClick={() => onNavigate('projects')} className="bg-primary text-on-primary px-6 py-3 rounded-xl font-label-caps shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200 flex items-center gap-2">
              Xem sáu bài tập
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right: Collage / Card Feature */}
        <div className="lg:col-span-5 relative z-10 h-[400px] md:h-[500px]">
          <div className="absolute top-8 right-0 w-[85%] h-[85%] bg-surface-container-high rounded-xl rotate-3 soft-card-shadow"></div>
          <div className="absolute top-0 right-4 w-[90%] h-[90%] bg-surface-container-lowest rounded-xl -rotate-2 p-4 soft-card-shadow flex flex-col">
            <div className="w-full flex-1 rounded-lg overflow-hidden bg-surface-variant relative">
              <img 
                src="/avatar.jpg" 
                alt="Chân dung Chu Tuệ Minh" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="pt-4 flex justify-between items-center">
              <div>
                <p className="font-label-caps text-on-surface-variant">Ngành học</p>
                <p className="font-headline-md text-[18px] text-on-surface">Sư phạm Anh · ULIS</p>
              </div>
              <div className="w-10 h-10 bg-secondary-fixed/30 rounded-full flex items-center justify-center text-secondary">
                <BookOpen className="w-5 h-5" />
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-4 rounded-xl soft-card-shadow border-t-4 border-tertiary-fixed flex items-center gap-3">
            <div className="w-12 h-12 bg-tertiary-fixed/20 rounded-full flex items-center justify-center text-tertiary">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <p className="font-headline-md text-[20px] text-on-surface m-0 leading-none">6 bài tập</p>
              <p className="font-label-caps text-on-surface-variant">Hoàn thành học phần</p>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Bento Grid */}
      <section className="mt-24 mb-16">
        <h3 className="font-headline-md text-[28px] text-primary mb-8 flex items-center gap-3">
          Mục tiêu học tập
          <img 
            src="/previews/bai-3.png" 
            alt="Graduation Cap" 
            className="w-8 h-8 object-cover object-[0%_100%] sticker-shadow -rotate-12" 
          />
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface-container-lowest rounded-xl p-6 soft-card-shadow border-t-4 border-secondary-container hover:-translate-y-2 transition-transform duration-300 group">
            <div className="w-14 h-14 bg-secondary-fixed/30 rounded-full flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h4 className="font-headline-md text-[20px] text-on-surface mb-2">Năng lực nghiên cứu</h4>
            <p className="font-body-md text-on-surface-variant text-[14px]">Tìm kiếm, đánh giá nguồn và phân tích tác động của truyền thông số tới các mối quan hệ xã hội.</p>
          </div>
          
          <div className="bg-surface-container-lowest rounded-xl p-6 soft-card-shadow border-t-4 border-primary-container hover:-translate-y-2 transition-transform duration-300 group">
            <div className="w-14 h-14 bg-primary-fixed/50 rounded-full flex items-center justify-center text-primary-container mb-6 group-hover:scale-110 transition-transform">
              <FileEdit className="w-6 h-6" />
            </div>
            <h4 className="font-headline-md text-[20px] text-on-surface mb-2">Kỹ năng số & AI</h4>
            <p className="font-body-md text-on-surface-variant text-[14px]">Thiết kế prompt, kiểm chứng đầu ra và phối hợp các công cụ AI để nâng cao hiệu quả học tập.</p>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-6 soft-card-shadow border-t-4 border-tertiary-fixed hover:-translate-y-2 transition-transform duration-300 group">
            <div className="w-14 h-14 bg-tertiary-fixed/30 rounded-full flex items-center justify-center text-tertiary-container mb-6 group-hover:scale-110 transition-transform">
              <Globe className="w-6 h-6" />
            </div>
            <h4 className="font-headline-md text-[20px] text-on-surface mb-2">Cộng tác & trách nhiệm</h4>
            <p className="font-body-md text-on-surface-variant text-[14px]">Điều phối dự án trực tuyến, minh bạch việc dùng AI và giữ vững liêm chính học thuật.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
