import Layout from '../components/MyLayout';
import Link from 'next/link';

const PostLink = (props) => (
	<li>
		<Link href="/p/[id]" as={`/p/${props.id}`}>
			<a>{props.id}</a>
		</Link>
	</li>
);
const Index = () => (
	<div>
		<Layout>
			<h1>MY BLOG</h1>
			<ul>
				<PostLink id="Hello Next.js" />
				<PostLink id="Learn Next.js is awesome" />
				<PostLink id="Deploy apps with Zeit" />
			</ul>
		</Layout>
	</div>
);

export default Index;
