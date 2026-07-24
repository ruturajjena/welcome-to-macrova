/**
 * ============================================================================
 *  MACROVA — SINGLE SOURCE OF TRUTH
 * ============================================================================
 *  Every string, colour, feature, review, FAQ, language and in-phone "app
 *  screen" the site renders lives in THIS file. Nothing user-visible is
 *  hard-coded in components. To re-skin or re-copy the site, edit here only.
 *
 *  Quick edits:
 *   - Change the accent colour ....... theme.colors.light/dark.accent
 *   - Swap App Store / Play links .... theme.brand.stores
 *   - Edit an in-phone screen ........ theme.screens.<key>
 *   - Reorder walkthrough features ... theme.walkthrough (order = scroll order)
 *   - Add/remove a language .......... theme.languages
 *  See README.md for the full guide.
 * ============================================================================
 */

/* ------------------------------------------------------------------ types -- */

export type ScreenKey =
  | "goal"
  | "home"
  | "scanner"
  | "plan"
  | "lab"
  | "success";

export interface FloatingCard {
  /** lucide-react icon name, resolved in components/ui/Icon.tsx */
  icon: string;
  title: string;
  subtitle: string;
  /** anchor position around the phone, in % of the phone box */
  x: number;
  y: number;
  /** parallax depth 0..1 (higher = moves more on scroll) */
  depth?: number;
}

export interface WalkthroughFeature {
  id: string;
  tag?: string;
  icon: string;
  title: string;
  body: string;
  screen: ScreenKey;
  card: FloatingCard;
}

/* ------------------------------------------------------------------ theme -- */

export const theme = {
  /* ---------------------------------------------------------------- brand -- */
  brand: {
    name: "Macrova",
    /** rendered as "macro" + "va" in the logo lockup */
    logo: { lead: "macro", tail: "va" },
    domain: "https://macrova.in",
    tagline: "Free AI nutrition, calorie & workout tracker",
    // Google Play link is the real production listing (from the live site).
    // Apple link is a best-guess placeholder — swap for the real App Store URL.
    stores: {
      apple: "https://apps.apple.com/app/macrova",
      google:
        "https://play.google.com/store/apps/details?id=com.ruturajjena.junkfoodtracker",
    },
    social: [
      { label: "Instagram", href: "https://www.instagram.com/macrova_ai", icon: "Instagram" },
      { label: "X", href: "https://x.com/macrova_app", icon: "Twitter" },
    ],
  },

  /* --------------------------------------------------------------- colours --
   * Light is the default. Dark is applied when <html data-theme="dark">.
   * Values are the Macrova brand colours sampled from macrova.in:
   *   accent  #34C8E0 (teal)   accent2 #7DEBC4 (mint)   accent-ink #04201F
   */
  colors: {
    light: {
      bg: "#FAFAFB",
      "bg-soft": "#F1F3F5",
      surface: "#FFFFFF",
      "surface-2": "#F5F7F8",
      border: "#E7EAEC",
      ink: "#0C1418",
      muted: "#57646C",
      faint: "#8A97A0",
      accent: "#12B5CE", // slightly deepened for AA contrast on light bg
      "accent-2": "#37C9A6",
      "accent-ink": "#04201F",
    },
    dark: {
      bg: "#0B0B0F",
      "bg-soft": "#101319",
      surface: "#14181F",
      "surface-2": "#1A1F27",
      border: "#252B34",
      ink: "#F4F7F8",
      muted: "#A6B2BC",
      faint: "#6C7A85",
      accent: "#34C8E0",
      "accent-2": "#7DEBC4",
      "accent-ink": "#04201F",
    },
    /** gentle background blooms (accent glows) — [colorVar, opacity] */
    blooms: {
      light: "rgba(18,181,206,0.14)",
      dark: "rgba(52,200,224,0.16)",
    },
  },

  /* ------------------------------------------------------------------ nav -- */
  nav: {
    links: [
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#how" },
      { label: "Preview", href: "#preview" },
      { label: "Reviews", href: "#reviews" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: { label: "Download Free", href: "#download" },
  },

  /* ---------------------------------------------------------------- hero -- */
  hero: {
    eyebrow: "AI meal & workout plans · Free",
    // Segments let us gradient-highlight specific words. accent=true → gradient text.
    headline: [
      { text: "Your AI meal plan " },
      { text: "& workout split", accent: true },
      { text: ", built in one tap." },
    ],
    subhead:
      "Tell Macrova your goal and its AI instantly builds a full week of meals and a personalized gym plan around your body — then tracks every macro from a single photo. Your whole nutrition coach, free in your pocket.",
    primary: { label: "Get your free plan", href: "#download" },
    secondary: { label: "See how it works", href: "#how" },
    trust: "Now on iOS & Android · Free — no card needed · 7 languages",
    // Cards that float around the hero phone (home screen).
    cards: [
      { icon: "Sparkles", title: "Plan ready", subtitle: "Generated in 8s", x: -14, y: 16, depth: 0.6 },
      { icon: "Camera", title: "Photo logged", subtitle: "Macros in seconds", x: 88, y: 40, depth: 0.9 },
      { icon: "Flame", title: "Protein goal hit", subtitle: "128 / 130g", x: -10, y: 72, depth: 0.75 },
    ] as FloatingCard[],
  },

  /* --------------------------------------------------------------- stats -- */
  stats: [
    { value: 5, prefix: "", suffix: "", label: "AI tools in one app" },
    { value: 7, prefix: "", suffix: "", label: "Languages supported" },
    { value: 1, prefix: "", suffix: "s", label: "To log a meal by photo" },
    { value: 0, prefix: "$", suffix: "", label: "Free to download" },
  ],

  /* --------------------------------------- scroll-pinned feature walkthrough -- */
  // Order here == the order screens appear as you scroll the pinned section.
  walkthrough: [
    {
      id: "plans",
      tag: "Most loved",
      icon: "Wand2",
      title: "A full meal plan & workout split — generated for you.",
      body:
        "Pick your goal and Macrova's AI instantly builds a week of meals with exact macros and a personalized gym program with sets, reps, and rest. Don't like it? Regenerate in seconds.",
      screen: "plan",
      card: { icon: "Sparkles", title: "Plan ready", subtitle: "Generated in 8s", x: 86, y: 18, depth: 0.8 },
    },
    {
      id: "scanner",
      icon: "ScanLine",
      title: "Log food with a photo. Point, shoot, done.",
      body:
        "The AI identifies your meal and logs the full macro breakdown instantly — no searching, no weighing, no guessing.",
      screen: "scanner",
      card: { icon: "Camera", title: "Photo logged", subtitle: "620 kcal · P/C/F", x: -12, y: 26, depth: 0.85 },
    },
    {
      id: "targets",
      icon: "Target",
      title: "Targets that fit you.",
      body:
        "Lose fat, build muscle, or maintain — Macrova sets precise daily calorie and macro goals for your body and updates them as you progress.",
      screen: "home",
      card: { icon: "Flame", title: "Daily target", subtitle: "2,150 kcal", x: 88, y: 64, depth: 0.7 },
    },
    {
      id: "lab",
      icon: "FlaskConical",
      title: "AI Health Lab.",
      body:
        "Go beyond calorie counts. Macrova spots gaps in your nutrition and delivers personalized weekly recommendations to keep you improving.",
      screen: "lab",
      card: { icon: "Activity", title: "Weekly insight", subtitle: "Fiber trending up", x: -12, y: 66, depth: 0.8 },
    },
  ] as WalkthroughFeature[],

  /* ------------------------------------------------------------ how it works -- */
  how: {
    heading: "From goal to plan in three steps.",
    subhead: "No spreadsheets. No guesswork. Just tell Macrova what you want.",
    steps: [
      {
        icon: "Target",
        title: "Set your goal",
        body:
          "Tell Macrova what you're working toward — weight loss, muscle gain, or better habits. It sets your daily calorie and macro targets automatically.",
      },
      {
        icon: "Camera",
        title: "Log your meals",
        body:
          "Search a global food database, scan a barcode, or just snap a photo. Calories and macros update instantly after every meal.",
      },
      {
        icon: "Sparkles",
        title: "Let AI do the rest",
        body:
          "Generate a weekly meal and workout plan with one tap, then review your AI Health Lab insights to keep improving week over week.",
      },
    ],
  },

  /* ----------------------------------------------------------- languages -- */
  languages: {
    heading: "Speaks your language.",
    subhead: "Macrova is fully localized in 7 languages.",
    note: "More languages coming soon.",
    list: [
      { code: "EN", name: "English", native: "English" },
      { code: "HI", name: "Hindi", native: "हिंदी" },
      { code: "OR", name: "Odia", native: "ଓଡ଼ିଆ" },
      { code: "FR", name: "French", native: "Français" },
      { code: "ES", name: "Spanish", native: "Español" },
      { code: "DE", name: "German", native: "Deutsch" },
      { code: "JA", name: "Japanese", native: "日本語" },
    ],
  },

  /* ------------------------------------------------------------- preview -- */
  preview: {
    heading: "A closer look at Macrova.",
    caption: "A clean, intelligent tracker designed to feel effortless.",
    // Which screens scroll by in the marquee reel, with a small caption each.
    reel: [
      { screen: "home", label: "Daily Blueprint" },
      { screen: "scanner", label: "AI Scanner" },
      { screen: "plan", label: "AI Plan" },
      { screen: "lab", label: "AI Health Lab" },
      { screen: "goal", label: "Set your goal" },
    ] as { screen: ScreenKey; label: string }[],
  },

  /* ------------------------------------------------------------- reviews -- */
  reviews: {
    heading: "Loved by early users.",
    subhead: "Real feedback from people who ditched three apps for one.",
    items: [
      {
        quote:
          "Finally a nutrition app that doesn't make me feel like I need a degree in dietetics. The AI meal plans are genuinely useful and the photo logging is fast.",
        name: "A",
        role: "Early adopter",
        tag: "Google Play Review",
        rating: 5,
      },
      {
        quote:
          "The workout + nutrition combo in one app is exactly what I needed. I've tried five trackers — Macrova is the only one I've actually stuck with.",
        name: "R",
        role: "Verified user",
        tag: "Google Play Review",
        rating: 5,
      },
      {
        quote:
          "AI Health Lab is a feature I didn't know I needed. Seeing my weekly eating patterns laid out clearly pushed me to actually be consistent.",
        name: "S",
        role: "Verified user",
        tag: "Google Play Review",
        rating: 5,
      },
    ],
  },

  /* ----------------------------------------------------------------- faq -- */
  faq: {
    heading: "Questions, answered.",
    items: [
      {
        q: "What is Macrova?",
        a: "Macrova is a free AI-powered nutrition and macro tracker for iOS and Android. It logs food from a photo, sets personalized calorie and macro targets based on your goals, and generates AI meal plans and AI workout plans — so calorie counting, macro tracking, and workout planning live in one app instead of three.",
      },
      {
        q: "Is Macrova really free?",
        a: "Yes. You can download Macrova and use its core AI meal planning, photo food logging, calorie and macro tracking, and workout plans for free — no credit card required to get started.",
      },
      {
        q: "How does photo food logging work?",
        a: "Point your camera at your plate and take a photo. Macrova's AI identifies the meal and estimates the calories and full protein / carbs / fat breakdown in about a second, then logs it to your day — no searching or weighing needed.",
      },
      {
        q: "Can it build my workout plan too?",
        a: "Absolutely. Alongside your meal plan, Macrova generates a personalized weekly gym split — for example Push / Pull / Legs — with exact sets, reps, and rest built around your goal. Regenerate it any time.",
      },
      {
        q: "Which languages are supported?",
        a: "Macrova is fully localized in 7 languages: English, Hindi, Odia, French, Spanish, German, and Japanese, with more on the way.",
      },
      {
        q: "Is my data private?",
        a: "Your nutrition and health data is yours. Macrova uses it only to power your plans and insights inside the app — see the privacy policy for the full details.",
      },
    ],
  },

  /* ------------------------------------------------------------ download -- */
  download: {
    eyebrow: "Your plan is waiting",
    heading: "Your free AI nutrition coach is one tap away.",
    subhead:
      "Set your goal, snap your meals, and let Macrova build the week for you. Free on iOS & Android.",
    qrLabel: "Scan to download",
    trust: "No card needed · 7 languages · iOS & Android",
  },

  /* -------------------------------------------------------------- footer -- */
  footer: {
    blurb:
      "The free AI nutrition, calorie & workout tracker. Meal plans, photo food logging and gym splits — in one app.",
    columns: [
      {
        title: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "How it works", href: "#how" },
          { label: "Preview", href: "#preview" },
          { label: "Reviews", href: "#reviews" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "FAQ", href: "#faq" },
          { label: "Support", href: "/support/" },
          { label: "Download", href: "#download" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy", href: "/privacy/" },
          { label: "Support", href: "/support/" },
        ],
      },
    ],
    credit: "Built with Handset — crafted for people who move.",
    copyright: `© ${new Date().getFullYear()} Macrova. All rights reserved.`,
  },

  /* ================================================================= SCREENS ==
   * The literal content shown inside the phone's app screens. Editing these
   * changes the demo UI without touching any component mechanics.
   * ========================================================================== */
  screens: {
    goal: {
      title: "Set your goal",
      question: "What are you working toward?",
      helper: "We'll tailor your calories and macros to match.",
      chips: [
        { icon: "TrendingDown", label: "Lose fat", selected: true },
        { icon: "Dumbbell", label: "Build muscle", selected: false },
        { icon: "Minus", label: "Maintain", selected: false },
      ],
      cta: "Continue",
      progress: { current: 1, total: 4 },
    },

    home: {
      greeting: "Good morning,",
      name: "Alex",
      dateLabel: "Today",
      ring: { left: 1240, unit: "kcal left", goal: 2150, eaten: 910 },
      macros: [
        { label: "Protein", value: 68, goal: 130, unit: "g", tone: "accent" },
        { label: "Carbs", value: 120, goal: 210, unit: "g", tone: "amber" },
        { label: "Fat", value: 34, goal: 70, unit: "g", tone: "violet" },
      ],
      mealsTitle: "Today's meals",
      meals: [
        { initials: "🥣", name: "Greek yogurt & berries", kcal: 240, time: "8:20" },
        { initials: "🥗", name: "Grilled chicken bowl", kcal: 620, time: "13:05" },
        { initials: "🍎", name: "Apple & almonds", kcal: 210, time: "16:40" },
      ],
      tabs: [
        { icon: "Home", label: "Home", active: true },
        { icon: "ScanLine", label: "Scan", active: false },
        { icon: "Wand2", label: "Plan", active: false },
        { icon: "FlaskConical", label: "Lab", active: false },
      ],
    },

    scanner: {
      title: "AI Scanner",
      hint: "Center your plate in the frame",
      detected: {
        name: "Grilled chicken bowl",
        kcal: 620,
        confidence: "98% match",
        macros: [
          { label: "Protein", value: 52, unit: "g" },
          { label: "Carbs", value: 61, unit: "g" },
          { label: "Fat", value: 18, unit: "g" },
        ],
      },
      cta: "Log meal",
    },

    plan: {
      title: "AI Plan",
      regenerate: "Regenerate",
      tabs: ["Meals", "Workout"],
      week: [
        { day: "Mon", meals: [{ name: "Oats & whey", kcal: 420 }, { name: "Chicken & rice", kcal: 640 }, { name: "Salmon & greens", kcal: 520 }] },
        { day: "Tue", meals: [{ name: "Eggs & toast", kcal: 380 }, { name: "Turkey wrap", kcal: 560 }, { name: "Tofu stir-fry", kcal: 610 }] },
        { day: "Wed", meals: [{ name: "Smoothie bowl", kcal: 400 }, { name: "Beef & quinoa", kcal: 680 }, { name: "Shrimp pasta", kcal: 590 }] },
      ],
      workout: {
        splitName: "Push / Pull / Legs",
        days: [
          { name: "Push", focus: "Chest · Shoulders · Triceps", sets: "5 exercises · 18 sets" },
          { name: "Pull", focus: "Back · Biceps", sets: "5 exercises · 17 sets" },
          { name: "Legs", focus: "Quads · Hamstrings · Calves", sets: "6 exercises · 20 sets" },
        ],
        sample: [
          { name: "Bench press", detail: "4 × 8 · 90s rest" },
          { name: "Incline DB press", detail: "3 × 10 · 75s rest" },
          { name: "Cable fly", detail: "3 × 12 · 60s rest" },
        ],
      },
    },

    lab: {
      title: "AI Health Lab",
      subtitle: "Your week in review",
      // 7-day series (0..100) drawn as an SVG line/area chart
      chart: {
        label: "Nutrition score",
        series: [58, 64, 61, 72, 70, 82, 88],
        days: ["M", "T", "W", "T", "F", "S", "S"],
        delta: "+14%",
      },
      insights: [
        {
          icon: "TrendingUp",
          title: "Protein consistency is up",
          body: "You hit your protein goal 5 of 7 days — up from 3 last week. Keep it going.",
        },
        {
          icon: "Leaf",
          title: "Add more fiber",
          body: "You're ~8g under daily fiber. Try adding berries or lentils to lunch.",
        },
      ],
    },

    success: {
      badge: "Plan ready 🎉",
      title: "Your week is built",
      subtitle: "7 days of meals + a personalized split, ready to go.",
      summary: [
        { icon: "Utensils", label: "Meals planned", value: "21" },
        { icon: "Dumbbell", label: "Workouts", value: "3-day split" },
        { icon: "Flame", label: "Daily target", value: "2,150 kcal" },
      ],
      cta: "Start day 1",
    },
  },

  /* ------------------------------------------------------------------ seo -- */
  seo: {
    title:
      "Macrova — Free AI Nutrition, Calorie & Workout Tracker for iOS & Android",
    description:
      "Macrova is a free AI nutrition and calorie tracker for iOS and Android. Generate AI meal plans and workout splits in one tap, log food from a single photo, and track your macros. Free — no card, 7 languages.",
    keywords: [
      "AI nutrition tracker",
      "free calorie tracker",
      "AI meal plans",
      "photo food logging",
      "macro tracking app",
      "workout planner",
      "AI workout split",
      "calorie counter iOS Android",
    ],
    ogImageAlt:
      "Macrova app — AI meal plans, photo food logging and workout splits",
  },
} as const;

export type Theme = typeof theme;
export default theme;
