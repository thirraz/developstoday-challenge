import { ImSpinner9 } from "react-icons/im"

function Spinner() {
	return (
		<div className="bg-gradient-to-br from-slate-950 to-slate-800 h-screen w-screen grid place-items-center">
			<ImSpinner9 className="w-10 h-10 animate-spin text-white mx-auto" />
		</div>
	)
}

export default Spinner
