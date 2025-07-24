import { AboutBio } from '@/components/about/AboutBio';
import { AboutCredentials } from '@/components/about/AboutCredentials';
import { AboutBooks } from '@/components/about/AboutBooks';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutBio />
      <AboutCredentials />
      <AboutBooks />
    </div>
  );
} 