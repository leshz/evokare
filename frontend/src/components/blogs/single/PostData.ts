import { Blog } from '../BlogData';

export interface ExtendedBlog extends Blog {
  content?: string;
}

export const extendedBlogs: ExtendedBlog[] = [
  {
    slug: "why-your-brain-loves-overthinking",
    title: "Why Your Brain Loves Overthinking — And How To Quiet It",
    description: "Explore the neuroscience behind overthinking and learn practical strategies to break the cycle of mental noise.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    content: `For so long, you've said "yes." Yes to extra responsibilities. Yes to helping when you're already overwhelmed. Yes to things that felt wrong, uncomfortable, or just too much. Maybe you've said yes to keep the peace. Maybe you were afraid of disappointing someone. Maybe you were never taught that "no" was even an option.\n\nBut then—finally—you say it: "No." And everything inside you reacts. That moment, as small as it may seem, is not just a decision. It's a neurological event. It's your brain breaking a long-held pattern, and that can feel terrifying, even if it's what you truly need.\n\nWhen you say "no"—especially when you're used to people-pleasing—your brain lights up with conflict. The amygdala, your emotional alarm system, might go on high alert. It interprets the rejection (real or perceived) as a threat to connection, safety, or acceptance. This is survival-mode wiring—and it's why your body might shake, your heart might race, or your stomach might turn.\n\nBut something else is happening, too. A quiet rebellion is taking place in your prefrontal cortex—the part of the brain responsible for reasoning and self-awareness. When you say "no," you're strengthening the part of yourself that makes conscious choices, rather than automatic ones. You're reclaiming agency. You're teaching your brain that a new pathway: you can say no and still be safe.\n\nThe first few times might feel terrible. Guilt will whisper. Fear will rise. Your brain is detoxing from years of self-abandonment. And then, almost without noticing, something incredible happens—your nervous system begins to calm. You get a new sense of identity and wholeness. You stop living to be accepted, and start living in alignment with your values.\n\nSaying "no" isn't just a boundary with others. It's a deep "yes" to yourself. To your peace, your needs, and your emotional freedom. The next time you say it, and your chest tightens or your hands sweat—know this: your brain is healing. You are unlearning fear. You are remembering who you are. And that is the beginning of healing.`,
  },
  {
    slug: "the-psychology-of-procrastination",
    title: "The Psychology Of Procrastination: It's Not Laziness, It's Fear",
    description: "Learn what your delay tactics are really trying to protect you from — and how to turn avoidance into action.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "what-happens-in-your-brain-when-you-finally-say-no",
    title: "What Happens In Your Brain When You Finally Say 'No'",
    description: "Saying no activates more than boundaries — it activates self-respect. Dive into the mental benefits of assertiveness.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  },
];

export function getPost(slug: string): ExtendedBlog | undefined {
  return extendedBlogs.find((b) => b.slug === slug);
} 