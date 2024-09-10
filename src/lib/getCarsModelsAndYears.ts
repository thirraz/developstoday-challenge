export async function getCarsModelsAndYears(
	makeId: string | undefined,
	year: string | undefined
) {
	const res = await fetch(
		`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
	)

	const data = await res.json()

	return data
}
