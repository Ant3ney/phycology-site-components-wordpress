import keyValueStyle from './style';

export default function KeyValueRow({ content }) {
	let style = keyValueStyle();
	return (
		<div>
			{content.hrt ? <hr></hr> : <></>}
			<p>{`${content.key ? `${content.key} ` : ''}${content.value}`}</p>
		</div>
	);
}
