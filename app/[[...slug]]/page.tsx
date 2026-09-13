import App from '../../src/App';
import { getProjects } from '@/lib/project';
import { getSkills } from '@/lib/skills'
import { getBlogPosts  } from '@/lib/blog';

export function generateStaticParams() {
  return [{ slug: ['']}];
};

export default  async function Page() {
  const projects = await getProjects();
  const skills = await getSkills();
  const posts = await getBlogPosts();

  return <App projects={projects} 
  skills={skills}
  posts={posts}
  />;
}

