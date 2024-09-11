import { motion, useScroll, useSpring } from "framer-motion"
import { useRef } from "react"
import GridHeading from "./GridHeading"

type Props = {
	children: React.ReactNode
}

function GridContainer({ children }: Props) {
	const containerRef = useRef(null)
	const { scrollYProgress } = useScroll({
		container: containerRef
	})

	return (
		<div
			ref={containerRef}
			className="relative max-h-[calc(100dvh-4rem)] grid col-2 border-b rounded-md border-slate-200 max-w-[800px] mx-auto overflow-y-scroll divide-y divide-slate-700"
		>
			<motion.div
				className="fixed top-0 bottom-0 right-0 w-4 bg-slate-400 z-50 origin-top "
				style={{ scaleY: scrollYProgress }}
			/>
			<GridHeading />
			{children}
		</div>
	)
}

export default GridContainer
