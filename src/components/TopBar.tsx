export type Mode = 'lunch' | 'beer'

interface Props {
  mode: Mode
  setMode: (m: Mode) => void
  status: string
  onLocate: () => void
}

export default function TopBar({ mode, setMode, status, onLocate }: Props) {
  return (
    <>
      <div className="header-top">
        <div className="brand">
          <h1>
            <span className="title">Krögläget</span>
          </h1>
        </div>
        <button
          className={`locate ${status === 'granted' ? 'on' : ''}`}
          onClick={onLocate}
          title="Använd min position"
        >
          {status === 'loading' ? <span className="spinner" /> : '📍'}
        </button>
      </div>

      <div className="modes" role="tablist" aria-label="Läge">
        <button
          className={mode === 'lunch' ? 'active' : ''}
          onClick={() => setMode('lunch')}
        >
          🍽️ Lunch
        </button>
        <button
          className={mode === 'beer' ? 'active' : ''}
          onClick={() => setMode('beer')}
        >
          🍺 Öl
        </button>
      </div>
    </>
  )
}
