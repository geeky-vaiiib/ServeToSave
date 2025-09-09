"use client"

import { useEffect, useRef, useState } from 'react'
import L from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup, useMap, Circle } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Heart, Utensils, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

// Fix for default markers in Leaflet with Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl

interface MapMarker {
  id: string
  lat: number
  lng: number
  title: string
  description: string
  type: 'donation' | 'request' | 'completed'
  quantity?: string
  dietType?: string
  urgency?: 'low' | 'medium' | 'high'
  expiryTime?: string
  postedTime?: string
  distance?: string
  icon?: string
}

interface LeafletMapProps {
  center?: [number, number]
  zoom?: number
  markers?: MapMarker[]
  height?: string
  className?: string
  onMarkerClick?: (marker: MapMarker) => void
  showUserLocation?: boolean
}

// Location finder component
const LocationFinder = () => {
  const map = useMap()
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null)

  useEffect(() => {
    map.locate({
      setView: true,
      maxZoom: 16,
    })

    map.on('locationfound', (e: L.LocationEvent) => {
      setUserLocation([e.latlng.lat, e.latlng.lng])
    })

    return () => {
      map.off('locationfound')
    }
  }, [map])

  return userLocation ? (
    <Circle
      center={userLocation}
      pathOptions={{ fillColor: 'blue', color: 'blue' }}
      radius={500}
    />
  ) : null
}

// Custom Marker component
const CustomMarker = ({ marker, onMarkerClick }: { marker: MapMarker; onMarkerClick?: (marker: MapMarker) => void }) => {
  const MarkerIcon = marker.type === 'donation' ? Utensils : marker.type === 'request' ? Heart : CheckCircle2
  
  const icon = L.divIcon({
    html: `
      <div class="relative p-2 bg-white rounded-full shadow-lg transform hover:scale-110 transition-transform duration-200">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${
          marker.type === 'donation' ? '#22c55e' : 
          marker.type === 'request' ? '#3b82f6' : 
          '#6b7280'
        }" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          ${
            marker.type === 'donation' ? 
            '<path d="M3 2v7c0 2 2 4 4 4h12c2 0 4-2 4-4V2"/><path d="M7 2h0a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/><path d="M17 2h0a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/>' :
            marker.type === 'request' ?
            '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>' :
            '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>'
          }
        </svg>
      </div>
    `,
    className: '',
    iconSize: [40, 40],
    iconAnchor: [20, 20]
  })

  return (
    <Marker 
      position={[marker.lat, marker.lng]} 
      icon={icon}
      eventHandlers={{
        click: () => onMarkerClick && onMarkerClick(marker)
      }}
    >
      <Popup>
        <Card className="border-0 shadow-none">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-lg">{marker.title}</CardTitle>
                <CardDescription className="text-sm">
                  {marker.distance && `${marker.distance} away • `}
                  {marker.postedTime && `Posted ${marker.postedTime}`}
                </CardDescription>
              </div>
              <Badge 
                className={
                  marker.type === 'donation' ? 'bg-green-100 text-green-800 hover:bg-green-100' :
                  marker.type === 'request' ? 'bg-blue-100 text-blue-800 hover:bg-blue-100' :
                  'bg-gray-100 text-gray-800 hover:bg-gray-100'
                }
              >
                {marker.type.charAt(0).toUpperCase() + marker.type.slice(1)}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <p>{marker.description}</p>
              {marker.quantity && (
                <p>
                  <span className="font-medium">Quantity:</span> {marker.quantity}
                </p>
              )}
              {marker.dietType && (
                <p>
                  <span className="font-medium">Diet Type:</span> {marker.dietType}
                </p>
              )}
              {marker.urgency && (
                <p>
                  <span className="font-medium">Urgency:</span>{' '}
                  <Badge variant="outline" className={
                    marker.urgency === 'high' ? 'text-red-600 border-red-200' :
                    marker.urgency === 'medium' ? 'text-yellow-600 border-yellow-200' :
                    'text-green-600 border-green-200'
                  }>
                    {marker.urgency.charAt(0).toUpperCase() + marker.urgency.slice(1)}
                  </Badge>
                </p>
              )}
              {marker.expiryTime && (
                <p>
                  <span className="font-medium">Available until:</span> {marker.expiryTime}
                </p>
              )}
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <Button variant="outline" size="sm">View Details</Button>
              <Button 
                size="sm"
                className={marker.type === 'donation' ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'}
              >
                {marker.type === 'donation' ? 'Request' : 'Donate'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </Popup>
    </Marker>
  )
}

const LeafletMap: React.FC<LeafletMapProps> = ({
  center = [20.5937, 78.9629], // Center of India
  zoom = 6,
  markers = [],
  height = '400px',
  className = '',
  onMarkerClick,
  showUserLocation = false
}) => {
  return (
    <div style={{ height, width: '100%' }} className={`rounded-lg overflow-hidden ${className}`}>
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {showUserLocation && <LocationFinder />}
        {markers.map((marker) => (
          <CustomMarker 
            key={marker.id} 
            marker={marker} 
            onMarkerClick={onMarkerClick} 
          />
        ))}
      </MapContainer>
    </div>
  )
}

export default LeafletMap
