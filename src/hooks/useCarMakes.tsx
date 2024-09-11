import { useQuery } from "@tanstack/react-query"
import { fetchData } from "../lib/getCarMakes"
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
		queryFn: () => fetchData(),
		staleTime: 60000,
		gcTime: 60000
	})

	return { isFetching, error, carMakes }
}
