import listStyleStyleRow from './style';
export default function ListTextRow({ content }) {
	let style = listStyleStyleRow();
	return (
		<>
			{content.hrt ? <hr></hr> : <></>}
			<ul style={style.listTextInnerStyle({ columns: content.columns })} className={style.listTextClassesInner()}>
				{content.values.map((value, i) => {
					return (
						<li>
							<p>{value}</p>
						</li>
					);
				})}
			</ul>
		</>
	);
}
