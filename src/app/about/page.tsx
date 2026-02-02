import { About } from '@/components/about/About';
import { Skills } from '@/components/skills/Skills';

export default function AboutPage() {
  return (
    <div>
      <div className='wrapper'>
        <div className='container'>
          <main className='main'>
            <About />
            <Skills />
          </main>
        </div>
      </div>
    </div>
  );
}
