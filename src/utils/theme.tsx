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
				},
				success: {
					300: { value: '#178155' }
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