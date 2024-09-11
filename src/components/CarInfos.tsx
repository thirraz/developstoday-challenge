import { useParams } from "react-router-dom"
import GridContainer from "./GridContainer"
import GridItem from "./GridItem"
import { useCarInfos } from "../hooks/useCarInfos"
import Spinner from "./Spinner"

type CarNameAndModel = { Make_Name: string; Model_Name: string }

function CarInfos() {
	const { makeId, year } = useParams()

	const { carMakesAndModels, error, isFetching } = useCarInfos(makeId, year)

	if (isFetching) return <Spinner />
	if (error) return <p>ERROR</p>

	console.log(carMakesAndModels)

	const { Results }: any = carMakesAndModels
	const sortedModels = Results.sort((a: string, b: string) =>
		// @ts-ignore
		a.Model_Name.localeCompare(b.Model_Name)
	)

	console.log(sortedModels)

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-800 text-slate-300 pt-4">
			<GridContainer>
				{sortedModels.map(({ Make_Name, Model_Name }: CarNameAndModel) => (
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
