
// URL base de la API
const BASE_URL = 'http://localhost:8082/api/v1/product';

// Función para manejar las respuestas de la API
const handleResponse = async (response: Response): Promise<any> => {
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Error en la solicitud');
    }
    return response.json();
};
export const fetchData = async (url: string, method: string = 'GET', data?: any) => {
    const options: RequestInit = {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: data ? JSON.stringify(data) : undefined,
    };

    try {
        const response = await fetch(url, options);
        const responseData = await handleResponse(response);
        return { data: responseData, response };
    } catch (error) {
        console.error(`Error ${method} request to ${url}:`, error);
        throw error;
    }
};

// Función para obtener todos los productos
export const getAllProducts = async () => {
    try {
        const url = `${BASE_URL}/games`;
        return fetchData(url, 'GET');
    } catch (error) {
        console.error('Error fetching all products:', error);
        throw error;
    }
};

  // Función para crear un nuevo producto
export const createProduct = async (newProductDTO: any) => {
    try {
        const url = `${BASE_URL}/game/new`;
        return fetchData(url, 'POST', newProductDTO);
    } catch (error) {
        console.error('Error creating product:', error);
        throw error;
    }
};

  // Función para obtener la lista de productos
export const getProductsList = async (category: any) => {
    try {
      const url = `${BASE_URL}/games${category ? `?category=${category}` : ''}`;
      return fetchData(url);
    } catch (error) {
      console.error('Error fetching products list:', error);
      throw error;
    }
  };
  
  // Función para obtener un producto por ID
export const getProductById = async (id: any) => {
    try {
      const url = `${BASE_URL}/game/${id}`;
      return fetchData(url);
    } catch (error) {
      console.error('Error fetching product by ID:', error);
      throw error;
    }
  };
  
  // Función para obtener productos por nombre
export const getProductByName = async (name: any) => {
    try {
      const url = `${BASE_URL}/games/${name}`;
      return fetchData(url);
    } catch (error) {
      console.error('Error fetching product by name:', error);
      throw error;
    }
  };
  
  // Función para actualizar un producto
export const updateProduct = async (productDTO: any) => {
    try {
      const url = `${BASE_URL}/game/update`;
      return fetchData(url, 'PUT', productDTO);
    } catch (error) {
      console.error('Error updating product:', error);
      throw error;
    }
  };
  
  // Función para eliminar un producto
export const deleteProduct = async (id: any) => {
    try {
      const url = `${BASE_URL}/game/delete/${id}`;
      return fetchData(url, 'DELETE');
    } catch (error) {
      console.error('Error deleting product:', error);
      throw error;
    }
  };
  
  // Función para obtener productos por puntaje
export const getProductByScore = async (score: any) => {
    try {
      const url = `${BASE_URL}/games/score/${score}`;
      return fetchData(url);
    } catch (error) {
      console.error('Error fetching products by score:', error);
      throw error;
    }
  };
  