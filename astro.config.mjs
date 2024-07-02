import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	site: 'https://wordpress-handbook.travelopia.com',
  	base: '/',
	integrations: [
		starlight({
			title: 'Wordpress Engineering Handbook',
			customCss: [
				'./src/assets/css/tailwind.css',
			],
			social: {
				github: 'https://github.com/Travelopia/wordpress-engineering-handbook',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Pages',
					autogenerate: { directory: 'pages' },
				},
			],
		}),
		tailwind({
			// Disable the default base styles:
			applyBaseStyles: false,
		})
	],
});
