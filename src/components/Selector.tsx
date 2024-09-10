type Props = {
	onChange: any
	children: React.ReactNode
	label: string
}

function Selector({ label, children, onChange }: Props) {
	return (
		<select
			onChange={e => onChange(e.target.value)}
			className="bg-gray-950 hover:bg-slate-700  outline-none px-4 py-2 text-lg cursor-pointer focus:border rounded-md max-w-56 hover:scale-105 duration-200"
		>
			<option className="text-left" value="select a make">
				{label}
			</option>

			{children}
		</select>
	)
}

export default Selector
