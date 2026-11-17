// src/components/layout/TopBar.tsx
import Icon, { type IconName } from '@/components/ui/Icon'

const items: {
  long: string
  short: string
  value: string
  icon: IconName
}[] = [
  { long: 'Teléfono', short: 'Teléfono', value: '090947482', icon: 'phone' },
  { long: 'Emergencias', short: 'Emergencias', value: '807465099', icon: 'alert' },
  { long: 'Servicios de Pólizas', short: 'Pólizas', value: '236447', icon: 'file' },
]

export default function TopBar() {
  return (
    <div className="topBar">
      <ul>
        {items.map(({ long, short, value, icon }) => (
          <li key={long}>
            <a href={`tel:${value}`}>
              <Icon name={icon} size={18} className="topBar-icon" />
              <span className="topBar-text">
                <span className="topBar-label topBar-label--long">{long}: </span>
                <span className="topBar-label topBar-label--short">{short}</span>
                <span className="topBar-value">{value}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}