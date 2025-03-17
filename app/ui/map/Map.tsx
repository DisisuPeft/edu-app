
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, Polyline } from 'react-leaflet';
import { LatLng } from 'leaflet';
import { Alert } from "@/alerts/toast"
import { useEditTask } from "@/hooks";
import { LeafletMouseEvent } from "leaflet";
// import { LocationEvent } from "leaflet"
// export interface Props {
//     position: [number, number]
//     zoom: number
// }

// function LocationMarker(){
//     const [position, setPosition] = useState<LatLng|null>(null)
//     const [markers, setMarkers] = useState<LatLng[]>([]);
//     const map = useMapEvents({
//         click(e) {
//             if (markers.length < 2) {
//                 setMarkers(prev => [...prev, e.latlng]);
//             }else {
//                 Alert({ title: "Alerta", text: "Solo se pueden agregar 2 marcadores cuando es una tarea", icon: "warning" });
//             }  
//         },
//       });
//     useEffect(() => {
//         map.locate()
//         // console.log(markers)
//     }, [map, markers]);

//     map.on('locationfound', (e) => {
//         setPosition(e.latlng);
//         map.flyTo(e.latlng, map.getZoom());
//     });

//     const calculateDistance = (point1: LatLng, point2: LatLng) => {
//         return (point1.distanceTo(point2) / 1000).toFixed(2);
//     } 

//     const getMidPoint = (point1: LatLng, point2: LatLng) => {
//         return latLng(
//             (point1.lat + point2.lat) / 2,
//             (point1.lng + point2.lng) / 2
//         )
//     }

//     return (
//         <>
//         {/* Marcador de la ubicacion */}
//             {position && (
//                 <Marker position={position}>
//                     <Popup>Aqui</Popup>
//                 </Marker>
//             )}
//             {markers.map((marker, idx) => (
//                 <Marker key={`${marker.lat}-${marker.lng}-${idx}`} position={marker}>
//                     <Popup>
//                         Marcador #{idx + 1}
//                     </Popup>
//                 </Marker>
//             ))}
//             {/* Dibujo entre dos lineas */}
//             {markers.length >= 2 && (
//                 <>
//                     <Polyline 
//                         positions={markers}
//                         color="blue"
//                         weight={3}
//                         opacity={0.7}
//                     />

//                     {/* {markers.slice(1).map((marker, idx) => {
//                         // console.log(marker)
//                         const prevMarker = markers[idx];
//                         const distance = calculateDistance(prevMarker, marker)
//                         const midpoint = getMidPoint(prevMarker, marker)

//                         return (
//                             <Marker 
//                             key={`distance-${idx}`}
//                             position={midpoint}
//                             icon={L.divIcon({
//                                 className: 'distance-label',
//                                 html: `<div style="background: white; padding: 5px; border: 1px solid #666; border-radius: 3px;">
//                                             ${distance} km
//                                         </div>`,
//                             })}    
//                             />
//                         )
//                     })} */}
//                 </>
//             )}
//         </>
//     )
// }
// export default function Map() {
// //   const { position, zoom } = props
// //   const [selected, setSelected] = useState(false)  
// //   const []
// // TGZ l: 16.7510 lo: -93.1150
//   return (
//     <MapContainer
//         center={{ lat: 16.7510, lng: -93.1150 }}
//         zoom={13}
//         scrollWheelZoom={false}
//         style={{ height: "500px", width: "100%" }}
//     >
//         <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <LocationMarker />
//     </MapContainer>
//   )
// }
type RouteData = {
    coordinates: [number, number][];
    distance: number;
    duration: number;
    waypoints: [];
};
type onRouteChange = (routeData: RouteData) => void;
function LocationMarker({onRouteChange}:{onRouteChange: (routeData: RouteData) => void}) {
    const [position, setPosition] = useState<LatLng | null>(null);
    const [markers, setMarkers] = useState<LatLng[]>([]);
    // const [routeCoordinates, setRouteCoordinates] = useState<[number, number][]>([]);
    // const [distance, setDistance] = useState<number>(0);
    // const [duration, setDuration] = useState<number>(0);
    const [routeData, setRouteData] = useState<RouteData>({
        coordinates: [],
        distance: 0,
        duration: 0,
        waypoints: []
    });
    const map = useMapEvents({
        click(e) {
            const newMarkers = [...markers, e.latlng];    
            // Si tenemos 2 o más puntos, calculamos la ruta
            if (newMarkers.length <= 10) {
                setMarkers(newMarkers);
                calculateRoute(newMarkers);
            }else{
                Alert({title:"Alerta",text:"En tareas solo se pueden agregar 2 marcadores",icon:"warning"})
            }
        },
    });

    useEffect(() => {
        map.locate();
    }, [map]);
    // useEffect(() => {
    //     if (routeData.coordinates && routeData.distance && routeData.duration) {
    //         setFormData(prevData => ({
    //             ...prevData,
    //             coordinates: routeData.coordinates,
    //             estimated_distance: routeData.distance,
    //             estimated_time: routeData.duration
    //         }));
    //     }
    // }, [routeData]);

    map.on('locationfound', (e) => {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
    });

    // Función para calcular la ruta usando OSRM
    const calculateRoute = async (points: LatLng[]) => {
        try {
            const coordinates = points
                .map(point => `${point.lng},${point.lat}`)
                .join(';');

            const response = await fetch(
                `https://router.project-osrm.org/route/v1/driving/${coordinates}?overview=full&geometries=geojson`
            );
            const data = await response.json();
            // console.log(data)
            if (data.routes && data.routes[0]) {
                const transformedCoordinates = data.routes[0].geometry.coordinates.map(
                    coord => [coord[1], coord[0]]
                );
                
                setRouteData({
                    coordinates: transformedCoordinates,
                    distance: data.routes[0].distance,
                    duration: data.routes[0].duration,
                    waypoints: data.waypoints
                });
            }
        } catch (error) {
            console.error('Error calculando la ruta:', error);
        }
    };

    const formatDuration = (seconds: number) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        return `${hours > 0 ? `${hours}h ` : ''}${minutes}min`;
    };

    const handleMarkerRemove = (e: LeafletMouseEvent, index: number) => {
        // e.originalEvent.preventDefault();
        // e.originalEvent.stopPropagation();
        // console.log(e)
        const newMarkers = markers.filter((_, idx) => idx !== index);
        setMarkers(newMarkers);
        
        // Recalcular la ruta si quedan al menos 2 puntos
        if (newMarkers.length >= 2) {
            calculateRoute(newMarkers);
        } else {
            // Limpiar la ruta si no hay suficientes puntos
            // setRouteCoordinates([]);
            // setDistance(0);
            // setDuration(0);
            setRouteData({
                coordinates: [],
                distance: 0,
                duration: 0,
                waypoints: []
            });
        }
    };
    useEffect(() => {
        if (routeData.coordinates && routeData.distance && routeData.duration) {
            onRouteChange({
                coordinates: routeData.coordinates,
                distance: routeData.distance,
                duration: routeData.duration,
                waypoints: routeData.waypoints
            });
        }
    }, [routeData]);

    useEffect(()=>{
        // console.log(formData)
        // console.log(routeData)
    })

    return (
        <>
            {position && (
                <Marker position={position}>
                    <Popup>📍 ¡Tu ubicación actual!</Popup>
                </Marker>
            )}
            
            {markers.map((marker, idx) => (
                <Marker 
                    key={`${marker.lat}-${marker.lng}-${idx}`} 
                    position={marker}
                    eventHandlers={{
                        contextmenu: (e) => {
                            e.originalEvent.preventDefault();
                            handleMarkerRemove(e, idx);
                        }
                    }}
                >
                    <Popup closeButton={false}>
                        <div 
                            onClick={(e) => e.stopPropagation()}
                            style={{ cursor: 'default' }}
                        >
                            Punto #{idx + 1}
                            <br />
                            <button 
                                onClick={(e) => handleMarkerRemove(e, idx)}
                                style={{
                                    marginTop: '8px',
                                    padding: '4px 8px',
                                    backgroundColor: '#ff4444',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer'
                                }}
                            >
                                Eliminar marcador
                            </button>
                        </div>
                    </Popup>
                </Marker>
            ))}

            {/* Ruta real por calles */}
            {routeData.coordinates.length > 0 && (
                <>
                    <Polyline 
                        positions={routeData.coordinates}
                        color="#0066ff"
                        weight={4}
                        opacity={0.7}
                    >
                        <Popup>
                            <strong>Distancia:</strong> {(routeData.distance / 1000).toFixed(1)} km<br/>
                            <strong>Tiempo estimado:</strong> {formatDuration(routeData.duration)}
                        </Popup>
                    </Polyline>
                </>
            )}
        </>
    );
}

export default function Map() {
    const {formData, setFormData, submit} = useEditTask()
    const handleFormMap = (routeData: RouteData) => {
        setFormData(prev => ({
            ...prev,
            estimated_distance: routeData.distance,
            estimated_time: routeData.duration,
            coordinates: routeData.coordinates,
            waypoints: routeData.waypoints
        }))
        submit()
    }
    return (
        <div className="flex flex-col gap-[30px]">
            <MapContainer
            center={{ lat: 16.7510, lng: -93.1150 }}
            zoom={13}
            scrollWheelZoom={true}
            style={{ height: "500px", width: "100%" }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LocationMarker onRouteChange={handleFormMap} />
            </MapContainer>
            <div className="flex justify-end">
                <button className="bg-slate-950 rounded-md w-[100px] p-2" onClick={submit}>Guardar</button>
            </div>
        </div>
    );
}