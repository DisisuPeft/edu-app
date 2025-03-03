export interface Category {
    id?: number; 
    name: string;
    created_at?: string; 
    updated_at?: string;
}

export interface TypeVehicle {
    id?: number;
    name: string;
    category: number | Category; 
    created_at?: string;
    updated_at?: string;
}

export interface Vehicle {
    id?: number;
    description: string;
    model_year?: string | null; 
    vehicle_type?: number | TypeVehicle | null; 
    category?: number | Category | null; 
    capacity?: number | null;
    created_at?: string;
    updated_at?: string;
}