import Selector from "./Selector"

type Props = {
	yearRange: number[]
	onChange: any
}

const STEPS = 1

function YearSelector({ yearRange, onChange }: Props) {
	const yearRangeFn = (start: number, stop: number, step: number) =>
		Array.from(
			{ length: (stop - start) / step + 1 },
			(_, index) => start + index * step
		)

	return (
		<Selector onChange={onChange} label="-- SELECT A YEAR -- ">
			{yearRangeFn(yearRange[0], yearRange[1], STEPS).map((year, i) => (
				<option key={i} value={year}>
					{year}
				</option>
			))}
		</Selector>
	)
}

export default YearSelector
