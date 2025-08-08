import { error } from '@sveltejs/kit';
export const ssr = false;
export async function load({ params }) {
	// if (params.slug == 'hello-world') {
	// 	return {
	// 		title: 'Hello world!',
	// 		content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
	// 	};
	// }

	return {
		slug: params.slug
	}

	// const post = await import(`../../../../minis/${params.slug}.md`);
	// const { title, date } = post.metadata;
	// const content = post.default;
	
	// return {
	// 	content,
	// 	title,
	// 	date
	// }
};