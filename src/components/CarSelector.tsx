import { fetchData } from "../lib/getCarMakes"
import Selector from "./Selector"
import { useQuery } from "@tanstack/react-query"
import SmSpinner from "./SmSpinner"

type Props = {
	onChange: any
}
type CarMakeType = { MakeId: string; MakeName: string }

function CarSelector({ onChange }: Props) {
	const {
		isPending,
		error,
		data: carMakes
	} = useQuery({
		queryKey: ["car-makes"],
		queryFn: () => fetchData()
	})

	if (isPending) return <SmSpinner />
	if (error) return <p>ERROR</p>

	const { Results } = carMakes
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
