import { AboutProfile } from '@/components/about/AboutProfile';
import { AboutBio } from '@/components/about/AboutBio';
import { AboutCredentials } from '@/components/about/AboutCredentials';
import { AboutBooks } from '@/components/about/AboutBooks';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutProfile />
      <AboutBio />
      <AboutCredentials />
      <AboutBooks />
    </div>
  );
} 