export type Instructor = {
  id: string;
  firstName: string;
  lastName: string;
  role: string;
  bio: string;
  image: string;
};

export type YogaClass = {
  slug: string;
  name: string;
  level: "Beginner" | "Intermediate";
  instructorId: string;
  month: string;
  image: string;
  location: string;
  time: string;
  tags: string[];
  summary: string;
  body: string[];
};

export const instructors: Instructor[] = [
  {
    id: "karen",
    firstName: "Karen",
    lastName: "Miller",
    role: "Yoga Therapist",
    bio: "Karen is a certified yoga therapist, offering personalized instruction to help you reach your goals.",
    image: "/images/Karen.jpg",
  },
  {
    id: "jasmine",
    firstName: "Jasmine",
    lastName: "Stark",
    role: "Pilates Instructor",
    bio: "Jasmine is a highly qualified Pilates instructor who will help you achieve balance and stability.",
    image: "/images/Jasmine.jpg",
  },
  {
    id: "rona",
    firstName: "Rona",
    lastName: "Nichols",
    role: "Yoga instructor & Founder",
    bio: "Rona is a certified yoga instructor who founded Flowga. She specializes in breathing techniques and meditation.",
    image: "/images/Rona.jpg",
  },
  {
    id: "danny",
    firstName: "Danny",
    lastName: "Underwood",
    role: "Yoga instructor",
    bio: "Danny is an experienced yoga teacher, offering classes for all levels and abilities.",
    image: "/images/Danny.jpg",
  },
];

export const classes: YogaClass[] = [
  {
    slug: "hot-yoga",
    name: "Hot Yoga",
    level: "Beginner",
    instructorId: "karen",
    month: "February 2024",
    image: "/images/hot.jpg",
    location: "Sidney",
    time: "5:30 pm",
    tags: ["Heated Practice", "Dynamic Yoga"],
    summary:
      "Welcome to our invigorating Hot Yoga class, where the heat intensifies the practice and elevates your physical and mental experience.",
    body: [
      "Welcome to our invigorating Hot Yoga class, where the heat intensifies the practice and elevates your physical and mental experience. Hot Yoga is a dynamic and challenging style of yoga performed in a heated room, promoting detoxification, flexibility, and improved circulation. Led by our experienced instructors, our Hot Yoga class offers a heated and empowering atmosphere, welcoming practitioners of all levels.",
      "During our Hot Yoga class, you will flow through a series of postures in the heated environment, allowing your muscles to warm up quickly and deepen your stretches. The heat also encourages sweating, which aids in flushing out toxins and purifying the body. As you synchronize your breath with each movement, you'll experience a profound sense of focus and mental clarity. Whether you're looking to build strength, increase flexibility, or simply embrace the intensity of the practice, our Hot Yoga class will leave you feeling rejuvenated and revitalized. Join us in our heated yoga studio and embrace the transformative power of Hot Yoga.",
    ],
  },
  {
    slug: "kundalini-yoga",
    name: "Kundalini Yoga",
    level: "Intermediate",
    instructorId: "karen",
    month: "February 2024",
    image: "/images/Kundalini.jpg",
    location: "London",
    time: "4:30 pm",
    tags: ["Yoga For Inner Strength", "Energy Awakening"],
    summary:
      "Welcome to our transformative Kundalini Yoga class, where the awakening of energy and consciousness takes center stage.",
    body: [
      "Welcome to our transformative Kundalini Yoga class, where the awakening of energy and consciousness takes center stage. Kundalini Yoga is a powerful and dynamic practice that combines breathwork, movement, mantra, and meditation to unlock your inner potential and expand your awareness. Led by our dedicated instructors, our Kundalini Yoga class offers a vibrant and uplifting atmosphere, suitable for practitioners of all levels.",
      "During our Kundalini Yoga class, you will experience a blend of physical postures, called kriyas, and rhythmic breathing techniques, which stimulate the flow of energy along the spine. Through this unique practice, you'll tap into your inner strength and cultivate a sense of balance and clarity. The use of sacred mantras and meditation helps to elevate your consciousness and connect with your higher self. Whether you're seeking spiritual growth or a profound sense of well-being, our Kundalini Yoga class will guide you on a journey of self-discovery and empowerment. Join us in our welcoming yoga studio and embrace the transformative power of Kundalini Yoga.",
    ],
  },
  {
    slug: "yin-yoga",
    name: "Yin Yoga",
    level: "Beginner",
    instructorId: "jasmine",
    month: "February 2024",
    image: "/images/Yin.jpg",
    location: "New York",
    time: "4:30 pm",
    tags: ["Beginner-Friendly Yoga", "Yoga For Relaxation"],
    summary:
      "Welcome to our blissful Yin Yoga class, where stillness and surrender lead to profound relaxation and inner peace.",
    body: [
      "Welcome to our blissful Yin Yoga class, where stillness and surrender lead to profound relaxation and inner peace. Yin Yoga is a gentle and meditative practice that involves holding passive poses for an extended period, allowing deep stretching of the connective tissues and a release of tension in the body. Led by our compassionate instructors, our Yin Yoga class offers a serene and tranquil environment, welcoming practitioners of all levels.",
      "During our Yin Yoga class, you will experience a slow-paced and introspective practice, encouraging mindfulness and a deep connection to your breath and sensations. By holding poses for several minutes, you'll access the deeper layers of your body, promoting flexibility and improved circulation. This practice is a perfect complement to more dynamic forms of yoga and a great way to cultivate relaxation and stress relief. Whether you're looking to enhance your flexibility or seeking a moment of quiet reflection, our Yin Yoga class will leave you feeling rejuvenated and balanced. Join us in our inviting yoga studio and embark on a journey of self-discovery and profound relaxation.",
    ],
  },
  {
    slug: "iyengar-yoga",
    name: "Iyengar Yoga",
    level: "Intermediate",
    instructorId: "danny",
    month: "February 2024",
    image: "/images/Iyengar.jpeg",
    location: "London",
    time: "4:30 pm",
    tags: ["Alignment Based Yoga", "Meditation and Breathing Techniques"],
    summary:
      "Welcome to our transformative Iyengar Yoga class, where precision and alignment lay the foundation for a balanced and stable practice.",
    body: [
      "Welcome to our transformative Iyengar Yoga class, where precision and alignment lay the foundation for a balanced and stable practice. Iyengar Yoga is a unique style that focuses on perfecting the alignment of each posture through the use of props and detailed instructions. Led by our dedicated instructors, our Iyengar Yoga class offers a supportive and nurturing environment, suitable for practitioners of all levels.",
      "During our Iyengar Yoga class, you will explore the subtleties of yoga asanas, enhancing your body's strength, flexibility, and balance. With an emphasis on correct body alignment, you'll gain a deeper understanding of the postures and their therapeutic benefits. The use of props such as blocks, straps, and blankets ensures that everyone can access the benefits of each pose, making it an ideal practice for both beginners and experienced yogis. Delve into the world of Iyengar Yoga and experience how this method can cultivate not only physical vitality but also mental clarity and inner serenity. Join us in our welcoming yoga studio and embark on a journey of self-awareness and mindful exploration.",
    ],
  },
  {
    slug: "vinyasa-flow",
    name: "Vinyasa Flow",
    level: "Beginner",
    instructorId: "karen",
    month: "February 2024",
    image: "/images/Vinyasa.jpeg",
    location: "Sidney",
    time: "5:30 pm",
    tags: ["Dynamic Yoga", "Yoga For Energy"],
    summary:
      "Welcome to our invigorating Vinyasa Flow class, where movement becomes a dance, and breath guides your every step.",
    body: [
      "Welcome to our invigorating Vinyasa Flow class, where movement becomes a dance, and breath guides your every step. Vinyasa Flow is a dynamic and fluid style of yoga that seamlessly links breath with movement, creating a graceful and rhythmic sequence. Led by our passionate instructors, our Vinyasa Flow class offers a vibrant and energetic atmosphere, catering to practitioners of all levels.",
      "During our Vinyasa Flow class, you will experience a seamless flow of postures, promoting strength, flexibility, and increased vitality. Each movement is synchronized with your breath, allowing you to find a harmonious balance between mindfulness and physicality. With creative sequencing and the freedom to modify poses, you'll be encouraged to explore and challenge your boundaries, fostering growth both on and off the mat. Whether you're new to yoga or an experienced practitioner, our Vinyasa Flow class will elevate your practice, leaving you feeling refreshed, focused, and fully alive. Join us for this transformative journey and discover the art of movement, breath, and self-expression in our welcoming yoga studio.",
    ],
  },
  {
    slug: "hatha-yoga",
    name: "Hatha Yoga",
    level: "Beginner",
    instructorId: "rona",
    month: "January 2024",
    image: "/images/Hatha.jpeg",
    location: "New York",
    time: "5:00 am",
    tags: ["Mind-Body Wellness", "Beginner-Friendly Yoga", "Meditation and Breathing Techniques"],
    summary:
      "Welcome to our rejuvenating Hatha Yoga class, where harmony and balance await you.",
    body: [
      "Welcome to our rejuvenating Hatha Yoga class, where harmony and balance await you. Hatha Yoga is the perfect fusion of physical postures (asanas) and breathing techniques (pranayama) designed to align your mind, body, and spirit. Led by our experienced and compassionate instructors, our Hatha Yoga class offers a tranquil space to explore the fundamentals of yoga, catering to practitioners of all levels.",
      "During our Hatha Yoga class, you will be guided through a series of gentle stretches, promoting flexibility and enhancing your body's strength and stamina. With a focus on breath-awareness, you will experience a sense of deep relaxation and mental clarity, leaving behind the stresses of daily life. Whether you are a beginner or an experienced yogi, our Hatha Yoga class encourages self-discovery and personal growth, fostering a profound sense of inner peace and overall well-being. Join us on the mat and embark on a transformative journey to embrace the union of mind, body, and soul in our welcoming yoga studio.",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "I never knew how much yoga could help me until I started coming to Flowga. The instructors are amazing and have taught me so much. I'm so grateful!",
    name: "Johnny Dorand",
    role: "Yoga Enthusiast",
    image: "/images/Home-testemonial.png",
  },
  {
    quote:
      "I never knew how much yoga could help me until I started coming to Flowga. The instructors are amazing and have taught me so much. I'm so grateful!",
    name: "Johnny Dorand",
    role: "Yoga Enthusiast",
    image: "/images/Home-testemonial-3.png",
  },
];

export const locations = [
  {
    city: "Durham",
    address: "12 Main St,",
    region: "Durham DH1 2ST",
    lat: 54.7753,
    lng: -1.5849,
  },
  {
    city: "Sunderland",
    address: "31 Sample St,",
    region: "Sunderland SR2 1RE",
    lat: 54.9069,
    lng: -1.3838,
  },
  {
    city: "Newcastle",
    address: "52 North St,",
    region: "Newcastle NE1 5FG",
    lat: 54.9783,
    lng: -1.6178,
  },
];

export const navLinks = [
  { href: "/classes", label: "Classes" },
  { href: "/instructors", label: "Instructors" },
  { href: "/the-yoga-handbook", label: "The Yoga Handbook" },
];

export const footerLinks = [
  { href: "/classes", label: "Classes" },
  { href: "/instructors", label: "Instructors" },
  { href: "/the-yoga-handbook", label: "The Yoga Book" },
];

export const handbookPrice = 29;

export function getInstructor(id: string) {
  return instructors.find((i) => i.id === id);
}

export function getClass(slug: string) {
  return classes.find((c) => c.slug === slug);
}

export function classesForInstructor(instructorId: string) {
  return classes.filter((c) => c.instructorId === instructorId);
}
