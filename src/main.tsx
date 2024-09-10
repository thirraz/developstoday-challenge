import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ResultsComponent from "./components/ResultsComponent.tsx"
import CarInfos from "./components/CarInfos.tsx"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const queryClient = new QueryClient()

const router = createBrowserRouter([
	{ path: "/", element: <App /> },
	{ path: "/results", element: <ResultsComponent /> },
	{ path: "/results/:makeId/:year", element: <CarInfos /> }
])

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
			<ReactQueryDevtools initialIsOpen={true} />
		</QueryClientProvider>
	</StrictMode>
)
