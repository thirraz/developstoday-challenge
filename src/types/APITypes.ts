type CarInfosResults = {
	Make_ID: number
	Make_Name: string
	Model_ID: number
	Model_Name: string
}

export type CarMakeType = {
	MakeId: string
	MakeName: string
	VehicleTypeId?: number
	VehicleTypeName?: string
}

export type CarInfosResponse = {
	Count: number
	Message: string
	SearchCriteria: string
	Results: CarInfosResults[]
}
