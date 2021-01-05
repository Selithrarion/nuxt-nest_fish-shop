import colors from 'vuetify/es5/util/colors';

export default {
	head: {
		titleTemplate: '%s - nuxt',
		title: 'nuxt',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},
	css: [],
	plugins: [],
	components: true,
	buildModules: ['@nuxtjs/vuetify'],
	modules: ['@nuxtjs/axios', 'nuxt-i18n'],
	axios: {
		baseURL: process.env.SERVER_URL,
	},
	i18n: {
		locales: [
			{
				code: 'en',
				file: 'en-US.js',
			},
			{
				code: 'ru',
				file: 'ru-RU.js',
			},
		],
		langDir: 'lang/',
		defaultLocale: 'en',
		lazy: true,
		baseUrl: process.env.BASE_URL,
		detectBrowserLanguage: {
			useCookie: true,
			cookieKey: 'i18n_redirected',
			onlyOnRoot: true,
		},
	},
	vuetify: {
		customVariables: ['~/assets/variables.scss'],
		theme: {
			themes: {
				light: {
					primary: colors.deepPurple.accent1,
					secondary: colors.grey.lighten1,
					error: colors.red.accent1,
					success: colors.teal.accent1,
				},
			},
		},
	},
	build: {},
};
