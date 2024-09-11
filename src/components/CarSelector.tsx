import Selector from "./Selector"
import SmSpinner from "./SmSpinner"
import { useCarMakes } from "../hooks/useCarMakes"
import { CarMakeType } from "../types/APITypes"

type Props = {
	onChange: any
}

function CarSelector({ onChange }: Props) {
	const { carMakes, error, isFetching } = useCarMakes()

	if (isFetching) return <SmSpinner />
	if (error) return <p>ERROR</p>

	const sortedResults = carMakes?.Results.sort((a, b) =>
		a.MakeName.localeCompare(b.MakeName)
	)
	console.log(sortedResults)

	return (
		<Selector onChange={onChange} label="-- SELECT A MAKE --">
			{sortedResults!
				.map(({ MakeId, MakeName }: CarMakeType) => (
					<option className="bg-slate-900" key={MakeId} value={MakeId}>
						{MakeName}
					</option>
				))
				.sort()}
		</Selector>
	)
}

export default CarSelector
