import { Vehicle } from "./VehiclesInterface";

export interface Plan {
    id?: number; 
    name: string;
    total_estimated_distance?: number | null;
    total_estimated_time?: string | null;
    total_actual_distance?: number | null;
    total_actual_time?: string | null;
    total_stops: number;
    created_at?: string | null; 
    updated_at?: string | null;
}


export interface Task {
    id?: number | undefined; 
    name?: string | null;
    description?: string | null;
    coordinates: [number, number][] | null;
    waypoints: [] | null;
    // position: object | null;
    // destination?: number | null;
    estimated_distance?: number | null;
    estimated_time?: number | null; 
    status?: number | null;
    start_time?: string | null;
    end_time?: string | null;
    actual_time?: string | null;
    actual_distance?: number | null;
    vehicles?: number[] | Vehicle | null; 
    plans?: number | Plan | null; 
    created_at?: string | null; 
    updated_at?: string | null;
}

export interface Coordinates {
    id?: number | null | undefined,
    longitud?: number | null | undefined,
    latitud?: number | null | undefined
    task: Task
}

export interface Routes {
    id?: number | null | undefined,
    inicio_latitud?: number | null | undefined,
    inicio_longitud?: number | null | undefined,
    street_inicio?: string | null | undefined, 
    destino_latitud?: number | null | undefined,
    destino_longitud?: number | null | undefined,
    street_destino?: string | null | undefined,
    task?: Task
}