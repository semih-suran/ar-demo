// Tab switcher between Photos / Video / 3D View. Matches Amazon's media-tab UX.
type Tab = 'photos' | 'video' | '3d'

const TABS: { id: Tab; label: string }[] = [
  { id: 'photos', label: 'Photos' },
  { id: 'video', label: 'Video' },
  { id: '3d', label: '3D View' },
]

export function MediaTabs({
  active,
  onChange,
}: {
  active: Tab
  onChange: (next: Tab) => void
}) {
  return (
    <div
      role="tablist"
      aria-label="Product media"
      className="flex gap-1 rounded-full bg-white/70 p-1 ring-1 ring-black/5 backdrop-blur"
    >
      {TABS.map((tab) => {
        const isActive = tab.id === active
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            className={
              'flex-1 rounded-full px-4 py-2 text-sm font-medium transition ' +
              (isActive
                ? 'bg-[#0b0b0f] text-white shadow-sm'
                : 'text-[#0b0b0f]/70 hover:text-[#0b0b0f]')
            }
          >
            {tab.label}
          </button>
        )
      })}
    </div>
  )
}