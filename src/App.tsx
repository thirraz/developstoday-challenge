import { useState } from "react"
import { Link } from "react-router-dom"
import CarSelector from "./components/CarSelector"
import YearSelector from "./components/YearSelector"

function App() {
	const [carMake, setCarMake] = useState("-- SELECT A MAKE --")
	const [year, setYear] = useState("-- SELECT A YEAR --")
	const isOptionsNull =
		carMake == "-- SELECT A MAKE --" || year == "-- SELECT A YEAR --"

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		if (isOptionsNull) e.preventDefault()
	}

	return (
		<div className="relative bg-gradient-to-br from-slate-950 to-slate-800 text-slate-300 min-h-screen flex flex-col gap-7 items-center justify-center">
			<div className="flex gap-4">
				<CarSelector onChange={setCarMake} />

				<YearSelector onChange={setYear} yearRange={[2015, 2024]} />
			</div>

			<Link
				data-isOptionNull={isOptionsNull}
				className="bg-white text-blue-950 font-bold px-7 py-2 rounded-lg hover:-translate-y-1 duration-200 data-[isOptionNull=true]:bg-gray-700 data-[isOptionNull=true]:border-slate-600 data-[isOptionNull=true]:text-zinc-400"
				to={`/results/${carMake}/${year}`}
				onClick={handleClick}
			>
				Next
			</Link>
		</div>
	)
}

export default App
