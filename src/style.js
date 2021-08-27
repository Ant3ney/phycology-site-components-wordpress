export default function style() {
	return {
		outerClasses: () => {
			let classes = 'contact-me-container';
			return classes;
		},
		outerStyle: () => {
			return {};
		},
		labelInputContainerClass: dskSize => {
			let classes = `label-input-container col-12 col-sm-${dskSize}`;
			return classes;
		},
	};
}
