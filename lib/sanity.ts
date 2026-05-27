import { createClient } from "@sanity/client";

// Build a Sanity client if keys are present
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = "2026-05-27";

export const sanityClient = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    })
  : null;

export interface Author {
  name: string;
  avatar?: string;
  bio?: string;
}

export interface Category {
  title: string;
  slug: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  publishedAt: string;
  author: Author;
  categories: Category[];
  excerpt: string;
  body: string; // HTML-styled body text
  readTime: string;
  coverImage?: string;
}

// 13 Wix Blog Posts static mock database
export const MOCK_POSTS: BlogPost[] = [
  {
    title: "The Future of Assistive Communication is Wearable",
    slug: "the-future-of-assistive-communication-is-wearable",
    publishedAt: "2026-05-15T10:00:00Z",
    readTime: "3 min read",
    author: { name: "Catherine Katambo", bio: "Founder & Mother, Vocasafe Watch™" },
    categories: [{ title: "Wearable AAC Tech", slug: "wearable-aac-tech" }, { title: "Vocasafe", slug: "vocasafewatch" }],
    excerpt: "Explore why wrist-worn systems are changing the landscape of Augmentative and Alternative Communication (AAC), moving speech tools from isolated desks directly to children's play corridors.",
    coverImage: "/images/63726496919930.png",
    body: `
      <p>For decades, Augmentative and Alternative Communication (AAC) has relied on heavy plastic desks, thick books of paper cards, and more recently, standard tablet computers locked in bulky cases. While these options are fantastic in structured educational zones or during dedicated speech therapy sessions, they create immediate physical barriers during active, daily play.</p>
      
      <p>Imagine a playground: swings are flying, children are running, sandboxes are wet, and water toys are active. If an autistic child or a non-verbal individual has their voice tethered to a heavy iPad, that voice is left sitting on a classroom desk. It cannot go to the swings. It cannot go near sensory water troughs. The child is left completely silent, unable to indicate basic preferences or calls for support.</p>
      
      <p><strong>The Solution is Wearable</strong></p>
      <p>By moving symbol-based communication directly to the user's wrist, we are launching an absolute paradigm shift. A durable, waterproof wearable assistive communication platform stays attached all day. It becomes an extension of the body, traveling down slides, into mud, and on water swings, ensuring communication is truly borders-free. Wrist-worn AAC is the logical future of assistive speech tech, and Vocasafe is driving this transition.</p>
    `
  },
  {
    title: "Designing for Zero Friction: The Future of AAC",
    slug: "designing-for-zero-friction-the-future-of-aac",
    publishedAt: "2026-05-10T09:30:00Z",
    readTime: "4 min read",
    author: { name: "Vocasafe Watch Team", bio: "Engineering & Co-Design Specialists" },
    categories: [{ title: "Safety Innovations", slug: "safety-innovations" }, { title: "Wearable AAC Tech", slug: "wearable-aac-tech" }],
    excerpt: "Zero-friction is our core engineering benchmark. Learn how custom sensory-friendly silicone straps and adaptive environment screens protect users from sensory overload.",
    coverImage: "/images/Gemini_Generated_Image_2y5zil2y5zil2y5z.png",
    body: `
      <p>In product design, friction is defined as any barrier that slows down a user's target action. For neurodivergent individuals and developmental speech users, standard consumer smartwatches create immense sensory friction. High-pitched warning alerts, blinding bright visuals, complex screen taps, and restrictive, sweaty straps can lead directly to sensory defensiveness and meltdowns.</p>
      
      <p>At Vocasafe, our core design benchmark is <strong>Zero Friction</strong>. This means modifying hardware and software configurations to meet the cognitive, visual, and motor profiles of sensitive users:</p>
      
      <ul style="margin-left: 20px; list-style-type: disc;">
        <li style="margin-bottom: 6px;"><strong>Sensory Strap Design:</strong> We utilize ultra-soft medical-grade silicone that is lightweight, sensory-safe, and avoids sweat buildup.</li>
        <li style="margin-bottom: 6px;"><strong>Adaptive Contrast screens:</strong> Lower contrast palettes and simplified layouts reduce visual fatigue.</li>
        <li style="margin-bottom: 6px;"><strong>Haptic pings:</strong> Replacing harsh beep buzzers with gentle haptic maps that indicate card selections discretely.</li>
      </ul>
      
      <p>By listening to our co-design panels of parents, occupational therapists, and autistic advisors, we ensure our wearable is built strictly with compassionate, zero-friction systems.</p>
    `
  },
  {
    title: "The Silent Danger: Why Communication is the Missing Link in Autism Safety",
    slug: "the-silent-danger-why-communication-is-the-missing-link-in-autism-safety",
    publishedAt: "2026-05-01T14:00:00Z",
    readTime: "4 min read",
    author: { name: "Catherine Katambo", bio: "Founder & Mother, Vocasafe Watch™" },
    categories: [{ title: "Autism Parenting", slug: "autism-parenting" }, { title: "Safety Solutions", slug: "safety-solutions" }],
    excerpt: "A parent's deep-dive into autism elopement. Discover why standard GPS tags are not enough, and why communication is the ultimate cornerstone of real-world safety.",
    coverImage: "/images/disp- vocasafe.webp",
    body: `
      <p>When an autistic child wanders or elopes from a safe space, every second counts. Many families rely on standard GPS tracking tags clipped to backpacks or belt loops. While location tracking is critical, these devices are fundamentally passive. They tell you where a child is, but they do not give the child a voice once they get there.</p>
      
      <p>If a non-verbal child is separated from their caregiver in a busy metro station or park, they cannot state their name, declare allergies, or seek assistance from developmental helpers. They are completely silent, resulting in extreme distress and heightened risk.</p>
      
      <p><strong>Communication is Safety</strong></p>
      <p>That is the silent danger of passive trackers. At Vocasafe, we believe communication is the ultimate foundation of safety. By placing a symbol-based AAC communication keyboard directly on a waterproof watch panel alongside GPS antennas, the user can instantly express alarm, state their name, or signal for help, turning a passive sensor into an active lifeline.</p>
    `
  },
  {
    title: "Why Communication Must Travel Beyond the Classroom",
    slug: "why-communication-must-travel-beyond-the-classroom",
    publishedAt: "2026-04-20T11:00:00Z",
    readTime: "3 min read",
    author: { name: "Vocasafe Watch Team", bio: "Engineering & Co-Design Specialists" },
    categories: [{ title: "Education", slug: "education" }, { title: "Tech for Independence", slug: "tech-for-independence" }],
    excerpt: "Recess, playgrounds, and buses are high-friction areas for children with speech delays. Learn why school communication tools must expand past structured desks.",
    coverImage: "/images/watch illustration.avif",
    body: `
      <p>School special education classrooms are excellent, structured learning spaces. But what happens when the school bell rings? Playground recess, school bus rides, physical education, and cafeteria lines are high-stim, unstructured environments where children face intense social contact. Yet, bulky speech tablets are frequently left behind in classroom desks to avoid damage.</p>
      
      <p>This means that during the most social hours of the school day, non-verbal students are left completely silent. They cannot negotiate play in sandboxes, ask to join swing lines, or indicate a sensory crisis to teachers on duty.</p>
      
      <p>Vocasafe Watch™ changes this dynamic. A wrist-worn speech keyboard stays on the child's body throughout physical education and recess, encouraging inclusive interactions and ensuring their voice travels anywhere, anytime.</p>
    `
  },
  {
    title: "Beyond Tracking: Why Vocasafe Is the Ultimate Wearable AAC Device",
    slug: "beyond-tracking-why-vocasafe-is-a-communication-device-first",
    publishedAt: "2026-04-12T10:00:00Z",
    readTime: "4 min read",
    author: { name: "Catherine Katambo", bio: "Founder & Mother, Vocasafe Watch™" },
    categories: [{ title: "Wearable AAC Innovations", slug: "wearable-aac-innovations" }, { title: "Vocasafe", slug: "vocasafewatch" }],
    excerpt: "Discover why Vocasafe is built as a communication device first, and a tracking device second, maintaining clinical focus and user dignity.",
    coverImage: "/images/vocasafe watch prototype1.png",
    body: `
      <p>When we discuss safety wearables for neurodivergent children, the first concept that comes to mind is tracking. Standard GPS locators are ubiquitous. However, treating a child purely as a node to be tracked compromises user dignity and clinical effectiveness.</p>
      
      <p><strong>A Communication-First Focus</strong></p>
      <p>Vocasafe Watch™ is built as a communication device first, and a safety tracker second. Our primary engineering goal is to ensure the user has symbol-based vocabulary access in all conditions. GPS alerts and caregiver SOS audio streams act as quiet, supporting layers that run silently in the background, maintaining clinical focus and protecting the child's dignity while they learn to navigate their world independently.</p>
    `
  },
  {
    title: "The Art of Saying \"Yes\": A Guide to Safe Outings for Autistic Children",
    slug: "safe-outings-for-autistic-children",
    publishedAt: "2026-04-02T15:00:00Z",
    readTime: "5 min read",
    author: { name: "Catherine Katambo", bio: "Founder & Mother, Vocasafe Watch™" },
    categories: [{ title: "Autism Parenting", slug: "autism-parenting" }, { title: "Safe Outings", slug: "safe-outings" }],
    excerpt: "Helpful, lived-experience tips for navigating busy parks and family outings with autism, while using wearable tracking safeguards.",
    body: `
      <p>Navigating family outings with an autistic child who has elopement tendencies can feel overwhelming. Many parents find themselves constantly saying "no" to protect safety, limiting outings to safe, confined rooms. But saying "yes" to outdoor adventures is vital for sensory development and active community inclusion.</p>
      
      <p>Here is a guide to safe, stress-free outings:</p>
      <ul style="margin-left: 20px; list-style-type: disc;">
        <li style="margin-bottom: 6px;"><strong>Prep the Route:</strong> Use visual calendars to outline the trip steps.</li>
        <li style="margin-bottom: 6px;"><strong>Define Boundaries:</strong> Set clear physical markers (e.g. 'stay near the red benches').</li>
        <li style="margin-bottom: 6px;"><strong>Leverage Wearable Safeguards:</strong> A rugged, wrist-worn GPS tracker with active boundaries lets you step back, letting your child explore with less restrictive supervision.</li>
      </ul>
    `
  },
  {
    title: "Beyond the Blue Dot: Redefining Safety for Neurodivergent Families",
    slug: "beyond-the-blue-dot-redefining-safety-for-neurodivergent-families",
    publishedAt: "2026-03-25T11:30:00Z",
    readTime: "4 min read",
    author: { name: "Catherine Katambo", bio: "Founder & Mother, Vocasafe Watch™" },
    categories: [{ title: "Safety Solutions", slug: "safety-solutions" }, { title: "Autism Parenting", slug: "autism-parenting" }],
    excerpt: "Standard blue dot maps don't capture developmental distress. Discover Vocasafe's vision for smart, contextual vitals and audio metrics.",
    body: `
      <p>Standard tracking maps display a single blue dot. While knowing your child is 50 yards away is helpful, a blue dot doesn't capture context. It doesn't tell you if your child is laughing on swings or experiencing a developmental sensory crisis near loud lawnmowers.</p>
      
      <p>At Vocasafe, we are redefining safety. Our vitals integrations (galvanic skin responses) and caregiver audio check streams are actively developed to give parents crucial context, mapping distress alerts to prevent meltdowns before they occur.</p>
    `
  },
  {
    title: "The Impact of Technology on Community-Driven Crowdfunding and Inclusion",
    slug: "the-impact-of-technology-on-community-driven-crowdfunding-and-inclusion",
    publishedAt: "2026-03-12T09:00:00Z",
    readTime: "3 min read",
    author: { name: "Vocasafe Watch Team", bio: "Engineering & Co-Design Specialists" },
    categories: [{ title: "Crowdfunding Impact", slug: "crowdfunding-impact" }, { title: "Vision & Community Impact", slug: "vision-community-impact" }],
    excerpt: "Independent crowdfunding is bypassing corporate blockades. Discover how community backers are accelerating critical hardware tech.",
    body: `
      <p>Historically, medical tech development has been locked behind massive corporate boards and clinical distributors, resulting in high costs and slow product updates. Independent community-driven crowdfunding is shifting this dynamic.</p>
      
      <p>By backing pre-seed startups like Vocasafe directly, communities accelerate waterproof, custom silicone hardware prototyping and bypass institutional gatekeepers, bringing affordable assistive wearables to classrooms years faster.</p>
    `
  },
  {
    title: "How to take speech therapy out of the \"speech room\" and into the real world",
    slug: "how-to-take-speech-therapy-out-of-the-speech-room-and-into-the-real-world",
    publishedAt: "2026-03-01T10:00:00Z",
    readTime: "4 min read",
    author: { name: "Vocasafe Watch Team", bio: "Engineering & Co-Design Specialists" },
    categories: [{ title: "Therapy", slug: "therapy" }, { title: "Education", slug: "education" }],
    excerpt: "Helpful tips for speech-language pathologists looking to transition vocabulary targets from desk tables directly into active playgrounds.",
    body: `
      <p>Speech-Language Pathologists do incredible work. However, general vocabulary acquisition often hits a roadblock: generalization. A child can confidently select 'apple' or 'help' symbols at a desk clinic, but fail to utilize them during unstructured park activities.</p>
      
      <p>To take therapy into the real world, speech tools must travel with the child. Wearable wrist-worn speech grids allow therapists to model concepts directly during playground run sessions, supporting high vocabulary retention.</p>
    `
  },
  {
    title: "Fostering Inclusive Environments with Communication Accessibility",
    slug: "fostering-inclusive-environments-with-communication-accessibility",
    publishedAt: "2026-02-18T13:00:00Z",
    readTime: "3 min read",
    author: { name: "Vocasafe Watch Team", bio: "Engineering & Co-Design Specialists" },
    categories: [{ title: "Inclusive Communication", slug: "inclusive-communication" }, { title: "Tech for Independence", slug: "tech-for-independence" }],
    excerpt: "Creating truly accessible parks and communities. Learn how public libraries, pools, and museums can support symbol-based speech wearables.",
    body: `
      <p>True community inclusion is a multi-dimensional puzzle. While physical ramp access is standard, visual communication accessibility is frequently ignored. public spaces like libraries, municipal pools, and museums can dramatically support neurodiversity by displaying standard symbol maps and welcoming wrist-worn speech devices.</p>
    `
  },
  {
    title: "Inside the Technology: How AI Is Transforming Assistive Communication",
    slug: "inside-the-technology-how-ai-is-transforming-assistive-communication-across-languages-and-lives",
    publishedAt: "2026-02-05T10:00:00Z",
    readTime: "4 min read",
    author: { name: "Vocasafe Watch Team", bio: "Engineering & Co-Design Specialists" },
    categories: [{ title: "Wearable AAC Tech", slug: "wearable-aac-tech" }, { title: "Safety Innovations", slug: "safety-innovations" }],
    excerpt: "A deep-dive into semantic prediction. Learn how localized AI models suggest environment-specific communication symbols on-screen.",
    body: `
      <p>Artificial Intelligence has high promise for developmental speech support. Vocasafe is actively mapping localized predictive models. By analyzing context keys, our future software will automatically suggest environment-appropriate symbol arrays (e.g. showing pool-related terms when GPS checks detect the county water swings), reducing on-screen tap cycles for rapid communication.</p>
    `
  },
  {
    title: "Boost Communication Accessibility with Practical Tips",
    slug: "boost-communication-accessibility-with-practical-tips",
    publishedAt: "2026-01-22T14:30:00Z",
    readTime: "3 min read",
    author: { name: "Vocasafe Watch Team", bio: "Engineering & Co-Design Specialists" },
    categories: [{ title: "Inclusive Communication", slug: "inclusive-communication" }, { title: "Autism Parenting", slug: "autism-parenting" }],
    excerpt: "Fast, actionable tips for families, school helpers, and educators looking to streamline symbol-based language teaching.",
    body: `
      <p>Encouraging symbol-based language acquisition doesn't require exhaustive training. Use these simple tips: 1) Model vocabulary on your own tablet, 2) Celebrate all independent selections, 3) Match speech boards to the child's daily schedule (e.g., meals, baths, swings) for logical connection points.</p>
    `
  },
  {
    title: "The Story Behind the Pivot: Early Lessons and AI/Multilingual Design",
    slug: "the-story-behind-the-pivot-early-lessons-and-how-ai-and-multilingual-design-are-redefining-inclusiv",
    publishedAt: "2026-01-10T09:00:00Z",
    readTime: "5 min read",
    author: { name: "Catherine Katambo", bio: "Founder & Mother, Vocasafe Watch™" },
    categories: [{ title: "Company Insights", slug: "company-insights" }, { title: "Wearable AAC Tech", slug: "wearable-aac-tech" }],
    excerpt: "Founder Catherine Katambo outlines our pivot from clinical tablet apps to independent waterproof wearable assistive communication platforms, driven by user co-design panels.",
    body: `
      <p>When Vocasafe began, we initially focused on a standard tablet app. However, consistent feedback from parents and occupational therapists highlighted a massive roadblock: tablet durability. Students threw them during sensory overload, or left them behind near muddy swinger zones.</p>
      
      <p>This led to our pivotal shift: developing a waterproof, dedicated wearable assistive communication platform chassis. By taking complete ownership of the hardware, we bypass app stores restrictions, integrate vital sensor checks directly, and guarantee all children carry a durable, uncompromised voice.</p>
    `
  }
];

export async function getPosts(): Promise<BlogPost[]> {
  if (sanityClient) {
    try {
      const query = `*[_type == "post"] | order(publishedAt desc) {
        title,
        "slug": slug.current,
        publishedAt,
        author->{ name, bio },
        categories[]->{ title, "slug": slug.current },
        excerpt,
        "body": body,
        readTime,
        "coverImage": mainImage.asset->url
      }`;
      const data = await sanityClient.fetch(query);
      if (data && data.length > 0) return data;
    } catch (e) {
      console.error("❌ Sanity Fetch Error. Falling back to local static posts database:", e);
    }
  }
  return MOCK_POSTS;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (sanityClient) {
    try {
      const query = `*[_type == "post" && slug.current == $slug][0] {
        title,
        "slug": slug.current,
        publishedAt,
        author->{ name, bio },
        categories[]->{ title, "slug": slug.current },
        excerpt,
        "body": body,
        readTime,
        "coverImage": mainImage.asset->url
      }`;
      const data = await sanityClient.fetch(query, { slug });
      if (data) return data;
    } catch (e) {
      console.error(`❌ Sanity Fetch Error for slug [${slug}]. Falling back to local database:`, e);
    }
  }
  return MOCK_POSTS.find((p) => p.slug === slug) || null;
}
