"use client"

import { useEffect, useRef } from 'react'
import L from 'leaflet'

// Fix for default markers in Leaflet with Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

interface MapMarker {
  id: string
  lat: number
  lng: number
  title: string
  description: string
  type: 'donation' | 'request' | 'completed'
  icon?: string
}

interface LeafletMapProps {
  center?: [number, number]
  zoom?: number
  markers?: MapMarker[]
  height?: string
  className?: string
  onMarkerClick?: (marker: MapMarker) => void
}

const LeafletMap: React.FC<LeafletMapProps> = ({
  center = [20.5937, 78.9629], // Center of India
  zoom = 6,
  markers = [],
  height = '400px',
  className = '',
  onMarkerClick
}) => {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<L.Map | null>(null)
  const markersRef = useRef<L.Marker[]>([])

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return

    // Initialize map
    const map = L.map(mapRef.current).setView(center, zoom)

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map)

    mapInstanceRef.current = map

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [center, zoom])

  useEffect(() => {
    if (!mapInstanceRef.current) return

    // Clear existing markers
    markersRef.current.forEach(marker => {
      mapInstanceRef.current?.removeLayer(marker)
    })
    markersRef.current = []

    // Create custom icons for different marker types
    const createIcon = (type: string) => {
      const color = type === 'donation' ? '#22c55e' : type === 'request' ? '#3b82f6' : '#6b7280'
      return L.divIcon({
        html: `
          <div style="
            background-color: ${color};
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: 3px solid white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
          ">
            <div style="
              width: 8px;
              height: 8px;
              background-color: white;
              border-radius: 50%;
            "></div>
          </div>
        `,
        className: 'custom-marker',
        iconSize: [20, 20],
        iconAnchor: [10, 10]
      })
    }

    // Add new markers
    markers.forEach(markerData => {
      const marker = L.marker([markerData.lat, markerData.lng], {
        icon: createIcon(markerData.type)
      }).addTo(mapInstanceRef.current!)

      // Add popup
      marker.bindPopup(`
        <div style="min-width: 200px;">
          <h3 style="margin: 0 0 8px 0; font-weight: bold; color: #1f2937;">${markerData.title}</h3>
          <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">${markerData.description}</p>
          <span style="
            background-color: ${markerData.type === 'donation' ? '#dcfce7' : markerData.type === 'request' ? '#dbeafe' : '#f3f4f6'};
            color: ${markerData.type === 'donation' ? '#166534' : markerData.type === 'request' ? '#1e40af' : '#374151'};
            padding: 2px 8px;
            border-radius: 12px;
            font-size: 12px;
            font-weight: 500;
          ">
            ${markerData.type.charAt(0).toUpperCase() + markerData.type.slice(1)}
          </span>
        </div>
      `)

      // Add click handler
      if (onMarkerClick) {
        marker.on('click', () => onMarkerClick(markerData))
      }

      markersRef.current.push(marker)
    })

    // Fit map to markers if there are any
    if (markers.length > 0) {
      const group = new L.FeatureGroup(markersRef.current)
      mapInstanceRef.current.fitBounds(group.getBounds().pad(0.1))
    }
  }, [markers, onMarkerClick])

  return (
    <div 
      ref={mapRef} 
      style={{ height, width: '100%' }} 
      className={`rounded-lg overflow-hidden ${className}`}
    />
  )
}

export default LeafletMap
