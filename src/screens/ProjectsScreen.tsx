import { ArrowRight, Grid, LayoutDashboard } from 'lucide-react';

const projects = [
  {
    number: 1,
    label: 'QUẢN LÝ DỮ LIỆU',
    title: 'Thao tác cơ bản với tệp và thư mục',
    description: 'Mười hai bước thực hành trên Windows: tạo cấu trúc ThuchanhChuTueMinh, đổi tên, sao chép, di chuyển, xóa và khôi phục tệp.',
    accent: 'border-tertiary-fixed-dim',
    tag: 'text-on-tertiary-container bg-tertiary-fixed/20',
  },
  {
    number: 2,
    label: 'NGHIÊN CỨU HỌC THUẬT',
    title: 'Tìm kiếm và đánh giá thông tin học thuật',
    description: 'Đánh giá 10 nguồn về tương tác trực tiếp (FtF) và tương tác qua máy tính (CMC), từ Google Scholar, JSTOR, Pew Research và các tạp chí chuyên ngành.',
    accent: 'border-secondary-container',
    tag: 'text-on-secondary-container bg-secondary-fixed/50',
  },
  {
    number: 3,
    label: 'PROMPT ENGINEERING',
    title: 'Viết prompt hiệu quả cho các tác vụ học tập',
    description: 'So sánh prompt cơ bản, cải tiến và nâng cao trên ba tác vụ: tóm tắt học thuật, giải thích lạm phát và tạo câu hỏi Cách mạng tháng Tám.',
    accent: 'border-primary-container',
    tag: 'text-on-primary-container bg-primary-fixed',
  },
  {
    number: 4,
    label: 'CỘNG TÁC TRỰC TUYẾN',
    title: 'Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm',
    description: 'Ghi lại vai trò trưởng nhóm/phụ trách nội dung và quá trình dùng Trello, Google Docs, Drive, Zalo, Meet để hoàn thành dự án trong một tuần.',
    accent: 'border-error/50',
    tag: 'text-error bg-error-container/50',
  },
  {
    number: 5,
    label: 'SÁNG TẠO VỚI AI',
    title: 'Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung',
    description: 'Poster infographic môi trường được xây dựng với Gemini, ChatGPT và Canva AI; phân tích rõ phần AI hỗ trợ, phần con người biên tập và vấn đề đạo đức.',
    accent: 'border-primary-container',
    tag: 'text-on-primary-container bg-primary-fixed',
  },
  {
    number: 6,
    label: 'AI CÓ TRÁCH NHIỆM',
    title: 'Sử dụng AI có trách nhiệm trong học tập và nghiên cứu',
    description: 'Dùng Claude hỗ trợ tổng hợp tài liệu về mạng xã hội và tâm lý học đường; bản địa hóa, kiểm chứng, trích dẫn minh bạch và xây dựng bộ 5C cá nhân.',
    accent: 'border-surface-tint',
    tag: 'text-surface-tint bg-surface-variant',
  },
];

export default function ProjectsScreen() {
  return (
    <div className="pt-20 md:pt-10 px-gutter pb-stack-lg max-w-6xl mx-auto min-h-screen relative z-10 w-full flex-1">
      <header className="mb-stack-lg flex justify-between items-end">
        <div>
          <span className="inline-block py-1 px-3 bg-secondary-fixed text-on-secondary-container rounded-full font-label-caps text-label-caps mb-4 shadow-sm border border-secondary-fixed-dim/30">SẢN PHẨM HỌC PHẦN</span>
          <h1 className="font-display-lg text-display-lg text-primary mb-2 relative inline-block">Sáu bài tập</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Các báo cáo thực hành của Chu Tuệ Minh về công nghệ số, nghiên cứu học thuật, cộng tác trực tuyến và ứng dụng AI trong học tập.
          </p>
        </div>
        <div className="hidden md:flex gap-3">
          <button className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors"><Grid className="w-5 h-5" /></button>
          <button className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary shadow-sm border border-outline-variant/30"><LayoutDashboard className="w-5 h-5" /></button>
        </div>
      </header>

      <div className="masonry-grid relative">
        {projects.map((project) => (
          <article key={project.number} className="masonry-item relative group transform hover:-translate-y-2 transition-all duration-300">
            <div className={`bg-surface-container-lowest rounded-xl shadow-soft p-stack-md h-full border-t-4 ${project.accent} flex flex-col justify-between overflow-hidden relative`}>
              <div className="absolute top-0 right-0 w-36 h-36 bg-primary-fixed/20 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
              <div>
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <span className={`font-label-caps text-label-caps px-3 py-1 rounded-full ${project.tag}`}>{project.label}</span>
                  <span className="font-headline-md text-headline-md text-outline-variant">0{project.number}</span>
                </div>
                <div className="h-40 w-full mb-5 rounded-lg overflow-hidden relative z-10 bg-surface-container p-2">
                  <img src={`/previews/bai-${project.number}.png`} alt={`Bìa ${project.title}`} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-2 relative z-10">Bài {project.number}: {project.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 relative z-10">{project.description}</p>
              </div>
              <a href={`/files/Bai-${project.number}-Chu-Tue-Minh.pdf`} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-primary font-label-caps text-label-caps mt-auto group-hover:text-secondary-container transition-colors relative z-10">
                <span>XEM BÁO CÁO PDF</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
