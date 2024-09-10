type Props = {
	children: React.ReactNode
}

function GridContainer({ children }: Props) {
	return (
		<div className="relative max-h-[calc(100dvh-4rem)] grid col-2 border-b rounded-md border-slate-200 max-w-[800px] mx-auto overflow-y-scroll divide-y divide-slate-700">
			<h2 className="sticky top-0 px-6 py-4 bg-slate-200 text-zinc-900">
				Make Name
			</h2>
			<h2 className="sticky top-0 col-start-2 px-6 py-4 bg-slate-200 text-zinc-900">
				Model Name
			</h2>
			{children}
		</div>
	)
}

export default GridContainer
