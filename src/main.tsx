import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Maintenance from "./Pages/MaintenancePage"
import DevStatus from "./components/devStatus"

export function Root() {
    const [isDev, setIsDev] = useState<boolean>(window.location.hash === '#dev')
    const [isMaintenance] = useState<boolean>(true)

    useEffect(() => {
        const onHashChange = () => setIsDev(window.location.hash === '#dev')
        window.addEventListener('hashchange', onHashChange)
        return () => window.removeEventListener('hashchange', onHashChange)
    }, [])

    if (isMaintenance && !isDev) {
        return <Maintenance />
    }
    else if (isMaintenance && isDev ) {
        return (
            <>
                <DevStatus />
                <App />
            </>
        )
    } else {
        return <App />
    }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
