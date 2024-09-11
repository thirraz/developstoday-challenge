import { useParams } from "react-router-dom"
import GridContainer from "../GridContainer"
import GridItem from "./GridItem"
import { useQuery } from "@tanstack/react-query"
import { getCarsModelsAndYears } from "../lib/getCarsModelsAndYears"
import Spinner from "./Spinner"

type CarNameAndModel = { Make_Name: string; Model_Name: string }

function CarInfos() {
	const { makeId, year } = useParams()

	const {
		isPending,
		error,
		data: carMakesAndModels
	} = useQuery({
		queryKey: ["cars-models-and-years"],
		queryFn: () => getCarsModelsAndYears(makeId, year)
	})

	if (isPending) return <Spinner />
	if (error) return <p>ERROR</p>

	const { Results } = carMakesAndModels

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-800 text-slate-300 pt-4">
			<GridContainer>
				{Results.map(({ Make_Name, Model_Name }: CarNameAndModel) => (
					<>
						<GridItem
							className="col-start-1 border-r borde-slate-200"
							content={Make_Name}
						/>
						<GridItem className="col-start-2" content={Model_Name} />
					</>
				))}
			</GridContainer>
		</div>
	)
}

export default CarInfos
