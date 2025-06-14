export const serializeError = (error: unknown) => {
    if (typeof error !== 'object' || !error || !('status' in error)) return 'Error desconocido';
  
    const status = (error as any).status;
    const data = (error as any).data;
    const message = data || 'Algo salió mal';
  
    return `${message}`;
};