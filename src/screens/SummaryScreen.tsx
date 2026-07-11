import { GraduationCap, Lightbulb, Brain, Star, ThumbsUp, Minus, TrendingDown, Map as MapIcon, BarChart } from 'lucide-react';

export default function SummaryScreen() {
  return (
    <div className="flex-1 px-4 md:px-inset-container py-inset-container w-full">
      {/* Page Header */}
      <div className="mb-stack-lg relative">
        <h1 className="font-display-lg-mobile md:font-display-lg text-primary mb-stack-xs relative z-10">
          Tổng kết hành trình
        </h1>
        <p className="font-body-lg text-on-surface-variant max-w-2xl relative z-10">
          Nhìn lại quá trình hình thành năng lực số, tư duy nghiên cứu, kỹ năng cộng tác và trách nhiệm khi ứng dụng AI trong học tập.
        </p>
        
        {/* Decorative Sticker */}
        <img 
          src="/previews/infographic-ai.png" 
          alt="Growth" 
          className="absolute -top-8 -right-4 w-32 h-32 object-none object-[100%_100%] sticker-shadow rotate-12 opacity-80 md:opacity-100 hidden sm:block" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-stack-lg">
        {/* Journey Timeline */}
        <div className="lg:col-span-8 space-y-stack-md">
          <h2 className="font-headline-md text-headline-md text-primary mb-stack-sm flex items-center gap-2">
            <MapIcon className="w-6 h-6 text-secondary-container" />
            Những điều đã học được
          </h2>
          
          <div className="relative pl-2">
            {/* Timeline Item 1 */}
            <div className="timeline-item relative mb-stack-md timeline-line">
              <div className="absolute left-0 top-0 w-12 h-12 bg-primary-container rounded-full flex items-center justify-center z-10 shadow-sm border-4 border-background">
                <GraduationCap className="w-6 h-6 text-on-primary-container" />
              </div>
              <div className="ml-16 bg-surface-container-lowest rounded-xl p-stack-md soft-card-shadow border-t-4 border-tertiary-fixed-dim hover:-translate-y-1 transition-transform duration-300">
                <h3 className="font-body-lg font-bold text-on-surface mb-2">Xây dựng nền tảng số</h3>
                <p className="text-on-surface-variant">Từ bài quản lý tệp, mình hình thành thói quen tổ chức dữ liệu khoa học. Bài nghiên cứu FtF–CMC tiếp tục rèn khả năng tìm kiếm, đánh giá độ tin cậy và tổng hợp nguồn.</p>
                <div className="mt-4 flex gap-2">
                  <span className="px-3 py-1 bg-surface-container rounded-full text-xs font-bold text-on-surface-variant">Quản lý dữ liệu</span>
                  <span className="px-3 py-1 bg-surface-container rounded-full text-xs font-bold text-on-surface-variant">Nghiên cứu</span>
                </div>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="timeline-item relative mb-stack-md timeline-line">
              <div className="absolute left-0 top-0 w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center z-10 shadow-sm border-4 border-background">
                <Lightbulb className="w-6 h-6 text-on-secondary-container" />
              </div>
              <div className="ml-16 bg-surface-container-lowest rounded-xl p-stack-md soft-card-shadow border-t-4 border-secondary-container hover:-translate-y-1 transition-transform duration-300">
                <h3 className="font-body-lg font-bold text-on-surface mb-2">Từ người dùng đến người điều phối</h3>
                <p className="text-on-surface-variant">Thử nghiệm prompt giúp mình giao tiếp rõ ràng hơn với AI. Vai trò trưởng nhóm ở Bài 4 giúp mình biết phân rã nhiệm vụ, quản lý tiến độ và xử lý xung đột bằng công cụ số.</p>
                <div className="mt-4 flex gap-2">
                  <span className="px-3 py-1 bg-surface-container rounded-full text-xs font-bold text-on-surface-variant">Prompt</span>
                  <span className="px-3 py-1 bg-surface-container rounded-full text-xs font-bold text-on-surface-variant">Điều phối nhóm</span>
                </div>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="timeline-item relative">
              <div className="absolute left-0 top-0 w-12 h-12 bg-tertiary-fixed rounded-full flex items-center justify-center z-10 shadow-sm border-4 border-background">
                <Brain className="w-6 h-6 text-on-tertiary-container" />
              </div>
              <div className="ml-16 bg-surface-container-lowest rounded-xl p-stack-md soft-card-shadow border-t-4 border-primary hover:-translate-y-1 transition-transform duration-300">
                <h3 className="font-body-lg font-bold text-on-surface mb-2">Sáng tạo có trách nhiệm</h3>
                <p className="text-on-surface-variant">Poster “Be the Change for Earth” cho thấy AI có thể tăng tốc sáng tạo, nhưng sản phẩm cuối vẫn cần con người kiểm tra ngôn ngữ, bố cục và bản quyền. Bài 6 củng cố nguyên tắc Control, Check, Customize, Cite và Critique.</p>
                <div className="mt-4 flex gap-2">
                  <span className="px-3 py-1 bg-surface-container rounded-full text-xs font-bold text-on-surface-variant">Sáng tạo AI</span>
                  <span className="px-3 py-1 bg-surface-container rounded-full text-xs font-bold text-on-surface-variant">Liêm chính</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Self-Evaluation Badges */}
        <div className="lg:col-span-4 space-y-stack-md">
          <h2 className="font-headline-md text-headline-md text-primary mb-stack-sm flex items-center gap-2">
            <BarChart className="w-6 h-6 text-secondary-container" />
            Tự đánh giá
          </h2>
          
          <div className="grid grid-cols-2 gap-stack-sm">
            {/* Excellent */}
            <div className="bg-surface-container-lowest rounded-xl p-stack-sm soft-card-shadow flex flex-col items-center justify-center text-center group hover:bg-tertiary-fixed transition-colors duration-300 cursor-pointer border border-transparent hover:border-tertiary-container relative overflow-hidden">
              <div className="w-16 h-16 mb-2 rounded-full bg-surface-container-low flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-tertiary-fixed-dim" fill="currentColor" />
              </div>
              <span className="font-body-md font-bold text-on-surface">Tư duy phản biện</span>
            </div>

            {/* Good */}
            <div className="bg-surface-container-lowest rounded-xl p-stack-sm soft-card-shadow flex flex-col items-center justify-center text-center group hover:bg-primary-fixed transition-colors duration-300 cursor-pointer border border-transparent hover:border-primary relative overflow-hidden">
              <div className="w-16 h-16 mb-2 rounded-full bg-surface-container-low flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ThumbsUp className="w-8 h-8 text-primary" fill="currentColor" />
              </div>
              <span className="font-body-md font-bold text-on-surface">Cộng tác số</span>
            </div>

            {/* Average */}
            <div className="bg-surface-container-lowest rounded-xl p-stack-sm soft-card-shadow flex flex-col items-center justify-center text-center group hover:bg-secondary-fixed transition-colors duration-300 cursor-pointer border border-transparent hover:border-secondary relative overflow-hidden">
              <div className="w-16 h-16 mb-2 rounded-full bg-surface-container-low flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Minus className="w-8 h-8 text-secondary" strokeWidth={4} />
              </div>
              <span className="font-body-md font-bold text-on-surface">Sáng tạo</span>
            </div>

            {/* Needs Work */}
            <div className="bg-surface-container-lowest rounded-xl p-stack-sm soft-card-shadow flex flex-col items-center justify-center text-center group hover:bg-error-container transition-colors duration-300 cursor-pointer border border-transparent hover:border-error relative overflow-hidden">
              <div className="w-16 h-16 mb-2 rounded-full bg-surface-container-low flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <TrendingDown className="w-8 h-8 text-error" />
              </div>
              <span className="font-body-md font-bold text-on-surface">Trách nhiệm AI</span>
            </div>
          </div>

          {/* Selected State Example */}
          <div className="mt-stack-md p-stack-md bg-secondary-fixed-dim rounded-xl border-2 border-secondary-container relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2">
              <img 
                src="/previews/infographic-ai.png" 
                alt="Idea" 
                className="w-12 h-12 object-none object-[0%_0%] opacity-50 rotate-12" 
              />
            </div>
            <h4 className="font-body-lg font-bold text-on-secondary-container mb-1">Định hướng tiếp theo</h4>
            <p className="font-body-md text-on-secondary-fixed">Tiếp tục rèn kỹ năng xác thực nguồn, bảo vệ dữ liệu và biến AI thành trợ lý phản biện thay vì công cụ làm thay.</p>
            <button className="mt-3 px-4 py-2 bg-on-secondary-container text-on-primary rounded-xl font-body-md font-bold text-sm hover:opacity-90 transition-opacity">
              Mục tiêu cá nhân
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
