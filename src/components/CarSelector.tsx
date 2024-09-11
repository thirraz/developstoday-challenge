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

	const { Results }: any = carMakes

	return (
		<Selector onChange={onChange} label="-- SELECT A MAKE --">
			{Results.map(({ MakeId, MakeName }: CarMakeType) => (
				<option className="bg-slate-900" key={MakeId} value={MakeId}>
					{MakeName}
				</option>
			))}
		</Selector>
	)
}

export default CarSelector
