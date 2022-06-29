//import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
const dev = process.env.NODE_ENV === 'development';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
	kit: {
		//adapter: adapter(),
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		prerender: {
			default: true
		},
		//paths: {
		//	base: dev ? '' :  '/abschied'
		//},
		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	}
};

export default config;
