import { useQuery } from "@tanstack/react-query"
import { getCarMakes } from "../lib/getCarMakes"
import { CarMakeType } from "../types/APITypes"

type CarMakesResponse = {
	Count: number
	Message: string
	SearchCriteria: string
	Results: CarMakeType[]
}

export function useCarMakes() {
	const {
		isPending: isFetching,
		error,
		data: carMakes
	} = useQuery<CarMakesResponse>({
		queryKey: ["car-makes"],
		queryFn: () => getCarMakes()
	})

	return { isFetching, error, carMakes }
}
