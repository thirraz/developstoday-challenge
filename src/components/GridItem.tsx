import { twMerge } from "tailwind-merge"

type Props = {
	content: string
	className: string
}

function GridItem({ content, className }: Props) {
	return (
		<p
			className={twMerge(
				"px-3 py-4 hover:bg-slate-800 duration-200",
				className
			)}
		>
			{content}
		</p>
	)
}

export default GridItem
