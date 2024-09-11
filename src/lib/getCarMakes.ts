export async function getCarMakes() {
	const res = await fetch(
		"https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"
	)

	const data = (await res).json()

	return data
}
