import { DayKey, DayMenuSchedule, FeedbackEntry, MealInfo, MealType } from '../types';

export const MEAL_ORDER: MealType[] = ['tiffin', 'lunch', 'snacks', 'dinner'];

export const MEAL_META: Record<MealType, MealInfo> = {
  tiffin: { label: 'Tiffin', iconName: 'Coffee', time: '07:00 AM - 08:40 AM' },
  lunch: { label: 'Lunch', iconName: 'Sun', time: '12:00 PM - 01:00 PM' },
  snacks: { label: 'Snacks', iconName: 'Cookie', time: '04:40 PM - 05:00 PM' },
  dinner: { label: 'Dinner', iconName: 'Moon', time: '06:30 PM - 08:00 PM' }
};

export const MENU: Record<DayKey, DayMenuSchedule> = {
  monday: {
    label: 'Monday',
    tiffin: ['Idli', 'Bonda', 'Chutney', 'Bombay chutney'],
    lunch: ['Rice', 'Fry curry', 'Normal curry', 'Sambar / Dal', 'Pickle', 'Curd'],
    snacks: ['Pakoda'],
    dinner: ['Rice', 'Fry curry', 'Normal curry', 'Sambar / Dal', 'Pickle', 'Curd']
  },
  tuesday: {
    label: 'Tuesday',
    tiffin: ['Onion dosa', 'Idli', 'Normal chutney', 'Bombay chutney'],
    lunch: ['Rice', 'Fry curry', 'Normal curry', 'Sambar / Dal', 'Pickle', 'Curd'],
    snacks: ['Masala vada'],
    dinner: ['Rice', 'Egg bhurji', 'Kabuli chana curry', 'Sambar / Dal', 'Pickle', 'Curd']
  },
  wednesday: {
    label: 'Wednesday',
    tiffin: ['Vada', 'Idli', 'Normal chutney', 'Bombay chutney'],
    lunch: ['Rice', 'Fry curry', 'Normal curry', 'Sambar / Dal', 'Pickle', 'Curd'],
    snacks: ['Bananas'],
    dinner: ['Vegetable fried rice', 'Egg fried rice', 'Potato curry', 'Pickle', 'Curd']
  },
  thursday: {
    label: 'Thursday',
    tiffin: ['Upma', 'Idli', 'Normal chutney', 'Bombay chutney'],
    lunch: ['Rice', 'Normal curry', 'Fry curry', 'Sambar / Dal', 'Pickle', 'Curd'],
    snacks: ['Samosa'],
    dinner: ['Rice', 'Sambar / Dal', 'Fry curry', 'Normal curry', 'Pickle', 'Curd']
  },
  friday: {
    label: 'Friday',
    tiffin: ['Uttapam', 'Idli', 'Bombay chutney', 'Normal chutney'],
    lunch: ['Rice', 'Normal curry', 'Fry curry', 'Sambar / Dal', 'Pickle', 'Curd'],
    snacks: ['Roasted/boiled peanuts'],
    dinner: ['Rice', 'Fry curry', 'Normal curry', 'Sambar / Dal', 'Pickle', 'Curd']
  },
  saturday: {
    label: 'Saturday',
    tiffin: ['Masala dosa', 'Idli', 'Normal chutney', 'Bombay chutney'],
    lunch: ['Fry curry', 'Rice', 'Normal curry', 'Sambar / Dal', 'Pickle', 'Curd'],
    snacks: ['Punugulu'],
    dinner: ['Khichdi / tiffins', 'Potato curry', 'Normal chutney', 'Bombay chutney', 'Pickle', 'Curd']
  },
  sunday: {
    label: 'Sunday',
    tiffin: ['Poori / banda', 'Normal chutney', 'Bombay chutney', 'Idli'],
    lunch: ['Biryani', 'Chicken curry', 'Chicken gravy', 'Kachambari', 'Pickle', 'Curd'],
    snacks: ['Bun / banda', 'Cream bun', 'Egg bonda', 'Sweet corn'],
    dinner: ['Rice', 'Fry curry', 'Normal curry', 'Sambar / Dal', 'Pickle', 'Curd']
  }
};

export const DAY_ORDER: DayKey[] = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday'
];

export const CANTEEN_CATEGORIES = [
  {
    id: 'tiffin',
    name: 'Tiffin',
    items: [
      'Puri',
      'Idly',
      'Mysore Bonda',
      'Onion Dosa',
      'Masala Dosa',
      'Normal Chutney',
      'Bombay Chutney'
    ]
  },
  {
    id: 'meals',
    name: 'Meals & Specials',
    items: [
      'Half Meals / Full Meals',
      'Veg Biryani',
      'Chicken Biryani',
      'Chapathi',
      'Parota',
      'Chicken Curry',
      'Fish Fry',
      'Fried Rice',
      'Omlette',
      'Tea',
      'Coffee'
    ]
  }
];

export const CANTEEN_ITEMS = [
  'Puri',
  'Idly',
  'Mysore Bonda',
  'Onion Dosa',
  'Masala Dosa',
  'Normal Chutney',
  'Bombay Chutney',
  'Half Meals / Full Meals',
  'Veg Biryani',
  'Chicken Biryani',
  'Chapathi',
  'Parota',
  'Chicken Curry',
  'Fish Fry',
  'Fried Rice',
  'Omlette',
  'Tea',
  'Coffee'
];

export const REASONS = [
  'Undercooked',
  'Overcooked',
  'Too spicy',
  'Bland / tasteless',
  'Cold',
  'Less quantity',
  'Stale / smell',
  'Too oily',
  'Other'
];

export function getTodayKey(): DayKey {
  const idx = new Date().getDay();
  const map: DayKey[] = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  return map[idx];
}

export function getCurrentMealTime(): MealType {
  const hours = new Date().getHours();
  if (hours >= 6 && hours < 11) return 'tiffin';
  if (hours >= 11 && hours < 16) return 'lunch';
  if (hours >= 16 && hours < 19) return 'snacks';
  return 'dinner';
}

export function getDateString(offsetDays = 0): string {
  const d = new Date();
  d.setDate(d.getDate() - offsetDays);
  return d.toISOString().slice(0, 10);
}

// Initial seed entries spread across recent days to demonstrate the live feedback & 7-day trend
export const INITIAL_ENTRIES: FeedbackEntry[] = [
  {
    id: 'seed-1',
    category: 'mess',
    day: getTodayKey(),
    meal: 'lunch',
    rating: 4,
    reasons: [],
    comment: 'Curd was fresh and fry curry was well seasoned today. Good job.',
    date: getDateString(0),
    ts: Date.now() - 1000 * 60 * 45,
    upvotes: 6
  },
  {
    id: 'seed-2',
    category: 'mess',
    day: getTodayKey(),
    meal: 'lunch',
    rating: 2,
    reasons: ['Cold', 'Bland / tasteless'],
    comment: 'Rice was lukewarm when served at 1:15 PM and dal had barely any salt.',
    date: getDateString(0),
    ts: Date.now() - 1000 * 60 * 110,
    upvotes: 11
  },
  {
    id: 'seed-3',
    category: 'mess',
    day: getTodayKey(),
    meal: 'tiffin',
    rating: 5,
    reasons: [],
    comment: 'Chutneys were freshly ground and hot crispy bondas were fantastic!',
    date: getDateString(0),
    ts: Date.now() - 1000 * 60 * 240,
    upvotes: 14
  },
  {
    id: 'seed-4',
    category: 'canteen',
    day: null,
    meal: null,
    rating: 4,
    reasons: [],
    comment: 'Parota was hot and crispy with good salna.',
    date: getDateString(0),
    ts: Date.now() - 1000 * 60 * 300,
    upvotes: 4
  },
  {
    id: 'seed-5',
    category: 'mess',
    day: 'sunday',
    meal: 'lunch',
    rating: 5,
    reasons: [],
    comment: 'Sunday special Biryani and chicken gravy was top tier. Please keep this quality.',
    date: getDateString(1),
    ts: Date.now() - 1000 * 60 * 60 * 22,
    upvotes: 29
  },
  {
    id: 'seed-6',
    category: 'mess',
    day: 'saturday',
    meal: 'tiffin',
    rating: 4,
    reasons: [],
    comment: 'Masala dosa was crisp. More potato filling would make it perfect.',
    date: getDateString(2),
    ts: Date.now() - 1000 * 60 * 60 * 46,
    upvotes: 8
  },
  {
    id: 'seed-7',
    category: 'mess',
    day: 'friday',
    meal: 'dinner',
    rating: 3,
    reasons: ['Too oily'],
    comment: 'Curry was swimming in oil, had to drain it with spoon.',
    date: getDateString(3),
    ts: Date.now() - 1000 * 60 * 60 * 70,
    upvotes: 17
  },
  {
    id: 'seed-8',
    category: 'mess',
    day: 'thursday',
    meal: 'snacks',
    rating: 4,
    reasons: [],
    comment: 'Samosas were hot and crispy, mint chutney was nice.',
    date: getDateString(4),
    ts: Date.now() - 1000 * 60 * 60 * 94,
    upvotes: 5
  },
  {
    id: 'seed-9',
    category: 'mess',
    day: 'wednesday',
    meal: 'dinner',
    rating: 4,
    reasons: [],
    comment: 'Egg fried rice was good, potato curry paired nicely.',
    date: getDateString(5),
    ts: Date.now() - 1000 * 60 * 60 * 118,
    upvotes: 12
  },
  {
    id: 'seed-10',
    category: 'mess',
    day: 'tuesday',
    meal: 'dinner',
    rating: 3,
    reasons: ['Less quantity', 'Too spicy'],
    comment: 'Egg bhurji got over too quickly and chana curry was extremely hot.',
    date: getDateString(6),
    ts: Date.now() - 1000 * 60 * 60 * 142,
    upvotes: 19
  }
];
