
import { ThemeProvider } from "@/components/ui/theme-provider"
import '@/styles/main.scss'
import MasterLayout from "@/components/theme/layout/MasterLayout"
const App = () => {
  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <MasterLayout />
    </ThemeProvider>
    </>
  )
}

export default App
