export default function style() {
	return {
		outerClasses: () => {
			let classes = 'info-section-container pe-3 pb-3';
			return classes;
		},
		infoSectionOuterClasses: size => {
			let classes = `info-section-outer`;
			classes += getColsFromSizeObj(size);
			return classes;
		},
		infoSectionInnerClasses: size => {
			let classes = `info-section-inner generic-section-container`;
			return classes;
		},
		infoSectionStyle: () => {},
		infoImageClassesOuter: size => {
			let classes = 'info-image-outer';
			classes += getColsFromSizeObj(size);
			return classes;
		},
		infoImageClassesInner: size => {
			let classes = 'info-image-inner generic-section-container';
			return classes;
		},
		googleMapsClassesOuter: size => {
			let classes = 'google-maps-outer';
			classes += getColsFromSizeObj(size);
			return classes;
		},
		googleMapsClassesInner: () => {
			let classes = 'google-maps-inner generic-section-container';
			return classes;
		},
		listTextClassesOuter: size => {
			let classes = 'list-text-outer';
			return classes;
		},
		listTextClassesInner: () => {
			let classes = 'list-text-inner';
			return classes;
		},
		listTextInnerStyle: ({ columns } = {}) => {
			console.log('columns: ' + columns);
			if (columns.indexOf('px') >= 0) {
				columns = columns.split('px')[0];
			}
			return {
				columns: columns,
			};
		},
	};
}

function getColsFromSizeObj(size) {
	let classes = ` col-${size.xs} col-sm-${size.sm} col-md-${size.md} col-lg-${size.xl}`;
	return classes;
}
