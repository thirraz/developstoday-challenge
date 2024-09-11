import { useQuery } from "@tanstack/react-query"
import { getCarsModelsAndYears } from "../lib/getCarsModelsAndYears"
import { CarInfosResponse } from "../types/APITypes"

export function useCarInfos(
	makeId: string | undefined,
	year: string | undefined
) {
	const {
		isPending: isFetching,
		error,
		data: carMakesAndModels
	} = useQuery<CarInfosResponse>({
		queryKey: ["cars-models-and-years"],
		queryFn: () => getCarsModelsAndYears(makeId, year)
	})

	return { isFetching, error, carMakesAndModels }
}
