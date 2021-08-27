export default function style() {
	return {
		outerClasses: ({ imgFirst } = {}) => {
			let classes = 'fancy-text-container';
			imgFirst ? (classes += ' imgFirst') : '';

			return classes;
		},
		outerStyle: () => {
			return {};
		},
	};
}
