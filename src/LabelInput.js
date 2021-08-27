import labelInputStyle from './style';

export default function ({ labelID, label, makeTextArea, dskSize }) {
	let style = labelInputStyle();

	return (
		<div className={style.labelInputContainerClass(dskSize)}>
			<label for={labelID}>{label}</label>
			{makeTextArea ? (
				<textarea className='contact-input' id={labelID}></textarea>
			) : (
				<input className='contact-input' id={labelID} type='text' />
			)}
		</div>
	);
}
