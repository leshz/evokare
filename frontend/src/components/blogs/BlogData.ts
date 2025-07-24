export interface Blog {
  slug: string;
  title: string;
  description: string;
  image: string;
}

export const blogs: Blog[] = [
  {
    slug: "why-your-brain-loves-overthinking",
    title: "Why Your Brain Loves Overthinking — And How To Quiet It",
    description: "Explore the neuroscience behind overthinking and learn practical strategies to break the cycle of mental noise.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    slug: "the-psychology-of-procrastination",
    title: "The Psychology Of Procrastination: It's Not Laziness, It's Fear",
    description: "Learn what your delay tactics are really trying to protect you from — and how to turn avoidance into action.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  },
  {
    slug: "what-happens-in-your-brain-when-you-finally-say-no",
    title: "What Happens In Your Brain When You Finally Say 'No'",
    description: "Saying no activates more than boundaries — it activates self-respect. Dive into the mental benefits of assertiveness.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
  {
    slug: "the-psychology-of-self-sabotage",
    title: "The Psychology Of Self-Sabotage — And How To Break Free",
    description: "Why do we ruin things that matter most to us? Here's the psychology behind it and how to stop the cycle.",
    image: "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=400&q=80",
  },
  {
    slug: "the-10-second-mental-habit",
    title: "The 10-Second Mental Habit That Can Change Your Whole Day",
    description: "It's free, simple, and backed by science. Try this one tiny shift that therapists swear by to instantly reset your mood.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
  {
    slug: "the-anxiety-you-dont-see",
    title: "The Anxiety You Don't See: Smiling, Laughing, And Failing Apart Inside",
    description: "You're holding it together on the outside — but here's what's really going on beneath the surface.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
]; 