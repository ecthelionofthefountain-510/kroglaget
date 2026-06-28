import { useState } from 'react'
import { useFavorites } from './hooks/useFavorites'
import { useGeolocation } from './hooks/useGeolocation'
import LunchView from './components/LunchView'
import BeerView from './components/BeerView'
import type { Mode } from './components/TopBar'

export default function App() {
  const [mode, setMode] = useState<Mode>('lunch')
  const { isFavorite, toggle } = useFavorites()
  const { coords, status, request } = useGeolocation()

  const fav = { isFavorite, toggle }
  const geo = { coords, status, request }

  return (
    <div className="app">
      {mode === 'lunch' ? (
        <LunchView mode={mode} setMode={setMode} fav={fav} geo={geo} />
      ) : (
        <BeerView mode={mode} setMode={setMode} fav={fav} geo={geo} />
      )}
    </div>
  )
}
