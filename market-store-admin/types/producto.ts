export interface Producto {
  categoriaId: string | number;
  nombre: string;
  precio: string | number;
  stock: string | number;
  medida: string;
  imagen: string | null;
  resumen: string;
  descripcion: string;
  estado: boolean;

  id?: string | number;
  descuento?: string | number;
  palabrasclave?: string;
  iniciodescuento?: string;
  findescuento?: string;
}
