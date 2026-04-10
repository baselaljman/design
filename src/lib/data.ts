
import { Wrench, Paintbrush, RefreshCcw, ShieldAlert, Settings, Zap, Thermometer } from 'lucide-react';
import { PlaceHolderImages } from './placeholder-images';

export const services = [
  {
    title: 'سمكرة سيارات',
    description: 'إصلاح جميع صدمات الهيكل بأحدث التقنيات والمعدات الاحترافية لضمان عودة السيارة لحالتها الأصلية.',
    icon: Wrench,
    image: PlaceHolderImages.find(img => img.id === 'service-bodywork')?.imageUrl,
  },
  {
    title: 'رش بوية فرن',
    description: 'دهان حراري بأعلى معايير الجودة مع مطابقة الألوان بالكمبيوتر لضمان لمسة نهائية مثالية.',
    icon: Paintbrush,
    image: PlaceHolderImages.find(img => img.id === 'service-painting')?.imageUrl,
  },
  {
    title: 'تجديد كامل',
    description: 'إعادة إحياء وتجديد السيارات القديمة والمتضررة كلياً داخلياً وخارجياً.',
    icon: RefreshCcw,
    image: PlaceHolderImages.find(img => img.id === 'service-renewal')?.imageUrl,
  },
  {
    title: 'إصلاح الأيرباق',
    description: 'فحص وإصلاح وبرمجة أنظمة الأكياس الهوائية (Airbags) لضمان سلامة الركاب.',
    icon: ShieldAlert,
    image: PlaceHolderImages.find(img => img.id === 'service-airbag')?.imageUrl,
  },
  {
    title: 'ميكانيكا عامة',
    description: 'صيانة المحركات وناقل الحركة وجميع الأجزاء الميكانيكية بأيدي فنيين متخصصين.',
    icon: Settings,
    image: PlaceHolderImages.find(img => img.id === 'service-mechanic')?.imageUrl,
  },
  {
    title: 'كهرباء السيارات',
    description: 'فحص وتشخيص وإصلاح جميع الأعطال الكهربائية المعقدة وبرمجة الحساسات.',
    icon: Zap,
    image: PlaceHolderImages.find(img => img.id === 'service-electricity')?.imageUrl,
  },
  {
    title: 'صيانة التكييف',
    description: 'فحص تسريب الفريون، شحن الفريون الأصلي، وإصلاح الكومبريسور والرديتر.',
    icon: Thermometer,
    image: PlaceHolderImages.find(img => img.id === 'service-ac')?.imageUrl,
  },
];

export const beforeAfterCases = [
  {
    id: 1,
    title: 'إصلاح صدمة جانبية',
    before: PlaceHolderImages.find(img => img.id === 'ba-1-before')?.imageUrl,
    after: PlaceHolderImages.find(img => img.id === 'ba-1-after')?.imageUrl,
  },
  {
    id: 2,
    title: 'رش صدام أمامي',
    before: PlaceHolderImages.find(img => img.id === 'ba-2-before')?.imageUrl,
    after: PlaceHolderImages.find(img => img.id === 'ba-2-after')?.imageUrl,
  },
  {
    id: 3,
    title: 'تجديد خلفية السيارة',
    before: PlaceHolderImages.find(img => img.id === 'ba-3-before')?.imageUrl,
    after: PlaceHolderImages.find(img => img.id === 'ba-3-after')?.imageUrl,
  },
];

export const carBrands = [
  { name: 'Mercedes', logo: 'https://1000logos.net/wp-content/uploads/2018/04/Mercedes-Benz-Logo.png' },
  { name: 'BMW' },
  { name: 'Audi' },
  { name: 'Lexus' },
  { name: 'Toyota' },
  { name: 'Nissan' },
  { name: 'Honda' },
  { name: 'Porsche' },
  { name: 'Land Rover' },
  { name: 'GMC' }
];

export const features = [
  {
    title: 'ضمان 5 سنوات',
    description: 'نقدم ضماناً حقيقياً لمدة 5 سنوات على جميع أعمال السمكرة والدهان.',
    icon: '🛡️'
  },
  {
    title: 'مطابقة ألوان بالكمبيوتر',
    description: 'نستخدم أحدث أجهزة خلط الألوان لضمان مطابقة لون الوكالة 100%.',
    icon: '🎨'
  },
  {
    title: 'خدمة سطحة مجانية',
    description: 'نوفر خدمة سحب السيارة للمركز مجاناً لعملائنا داخل مدينة الرياض.',
    icon: '🚚'
  }
];
