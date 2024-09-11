import { motion, useScroll, useSpring } from "framer-motion"
import { useRef } from "react"

type Props = {
	children: React.ReactNode
}

function GridContainer({ children }: Props) {
	const containerRef = useRef(null)
	const { scrollYProgress } = useScroll({
		container: containerRef
	})
	const scaleY = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001
	})

	return (
		<div
			ref={containerRef}
			className="relative max-h-[calc(100dvh-4rem)] grid col-2 border-b rounded-md border-slate-200 max-w-[800px] mx-auto overflow-y-scroll divide-y divide-slate-700"
		>
			<motion.div
				className="fixed top-0 bottom-0 right-0 w-4 bg-slate-400 z-50 origin-top rounded-b-xl "
				style={{ scaleY }}
			/>
			<h2 className="sticky top-0 px-6 py-4 bg-slate-200 text-zinc-900">
				Make Name
			</h2>
			<h2 className="sticky top-0 col-start-2 px-6 py-4 bg-slate-200 text-zinc-900">
				Model Name
			</h2>
			{children}
		</div>
	)
}

export default GridContainer
