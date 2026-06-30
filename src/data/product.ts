import {
  Activity,
  BatteryCharging,
  BrainCircuit,
  Droplets,
  HeartPulse,
  ShieldCheck,
} from 'lucide-react';
import type { FaqItem, Feature, GalleryImage, Specification, Testimonial } from '../types/product';

export const product = {
  id: 'ai-smart-watch-x-pro',
  name: 'AI Smart Watch X Pro',
  price: 399,
  tagline: 'Trợ lý AI trên cổ tay cho sức khỏe, năng suất và phong cách sống hiện đại.',
  webhookUrl: 'https://jsonplaceholder.typicode.com/posts',
};

export const features: Feature[] = [
  {
    title: 'AI Health Coach',
    description: 'Phân tích nhịp tim, giấc ngủ và mức stress để gợi ý thói quen cá nhân hóa mỗi ngày.',
    icon: BrainCircuit,
  },
  {
    title: 'ECG & SpO2 24/7',
    description: 'Theo dõi chỉ số quan trọng liên tục với cảnh báo sớm khi có dấu hiệu bất thường.',
    icon: HeartPulse,
  },
  {
    title: 'Pin 7 ngày',
    description: 'Chip tiết kiệm năng lượng và sạc nhanh từ 0 đến 80% trong 32 phút.',
    icon: BatteryCharging,
  },
  {
    title: 'Workout Insight',
    description: 'Tự nhận diện 120+ bài tập và đo tải vận động theo thời gian thực.',
    icon: Activity,
  },
  {
    title: 'Kháng nước 5 ATM',
    description: 'Sẵn sàng cho bơi lội, mưa lớn và lịch trình di chuyển cường độ cao.',
    icon: Droplets,
  },
  {
    title: 'Private by Design',
    description: 'Mã hóa dữ liệu sức khỏe trên thiết bị và đồng bộ an toàn qua cloud.',
    icon: ShieldCheck,
  },
];

export const specifications: Specification[] = [
  { label: 'Màn hình', value: '1.9 inch LTPO OLED, 2.000 nits' },
  { label: 'Vật liệu', value: 'Titanium grade 5, kính sapphire' },
  { label: 'Cảm biến', value: 'ECG, SpO2, nhiệt độ da, GPS dual-band' },
  { label: 'Pin', value: '7 ngày tiêu chuẩn, 36 giờ GPS liên tục' },
  { label: 'Kết nối', value: 'Bluetooth 5.4, Wi-Fi, LTE eSIM' },
  { label: 'Hệ điều hành', value: 'XOS AI với voice assistant offline' },
];

export const gallery: GalleryImage[] = [
  { src: '/assets/og-watch.svg', alt: 'AI Smart Watch X Pro front view', title: 'Midnight Titanium' },
  { src: '/assets/og-watch.svg', alt: 'AI Smart Watch X Pro health dashboard', title: 'AI Health Rings' },
  { src: '/assets/og-watch.svg', alt: 'AI Smart Watch X Pro sport mode', title: 'Sport Loop' },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Minh Anh',
    role: 'Product Designer',
    quote: 'Mình dùng X Pro để theo dõi stress trước deadline. Gợi ý thở và nghỉ ngắn thực sự hữu ích.',
  },
  {
    name: 'Quang Huy',
    role: 'Founder',
    quote: 'Trợ lý AI tóm tắt lịch, nhắc thói quen và lọc thông báo tốt hơn bất kỳ smartwatch nào mình từng dùng.',
  },
  {
    name: 'Linh Phạm',
    role: 'Marathon Runner',
    quote: 'GPS ổn định, pin bền và insight phục hồi sau chạy giúp mình luyện tập có kế hoạch hơn.',
  },
];

export const faqs: FaqItem[] = [
  {
    question: 'AI Smart Watch X Pro có dùng được với iPhone và Android không?',
    answer: 'Có. Ứng dụng X Pro hỗ trợ iOS 16 trở lên và Android 11 trở lên, đồng bộ sức khỏe, thông báo và cài đặt trợ lý AI.',
  },
  {
    question: 'Dữ liệu sức khỏe có được bảo mật không?',
    answer: 'Dữ liệu nhạy cảm được mã hóa trên thiết bị trước khi đồng bộ. Người dùng có thể xóa lịch sử và tắt cloud sync bất kỳ lúc nào.',
  },
  {
    question: 'Webhook trong demo có gửi dữ liệu thật không?',
    answer: 'Mặc định app gọi endpoint giả lập trong service. Khi triển khai production, chỉ cần đổi URL webhook trong file data hoặc biến môi trường.',
  },
];
