import { createSystem, defaultConfig } from "@chakra-ui/react";

const system = createSystem(defaultConfig, {
	theme: {
		tokens: {
			colors: {
				brand: {
					100: { value: '#D13536' },
					900: { value: '#EF0909' },
				},
                dark: {
                    900: {value: '#121212'}
                },
				gray: {
					50: { value: '#EFEFEF' },
                    70: { value: '#A0A0A0' },
					90: { value: '#6F7777' },
					200: { value: '#80808033'}
				},
				success: {
					300: { value: '#178155' }
				},
				blue: {
					50: { value: '#F3F5FBB2'},
					100: { value: '#F7F8FC'}
				},
				yellow: {
					500: { value: '#E7A300'}
				}
			},
			fonts: {
				heading: { value: `"DM Sans", sans-serif` },
				body: { value: `"DM Sans", sans-serif` },
				mono: { value: `"DM Sans", sans-serif` },
			},
		}
	}
});

export default system;