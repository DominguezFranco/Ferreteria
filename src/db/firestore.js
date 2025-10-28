import  db  from '../db/db'; // Importa tu instancia de Firestore (desde src/db/db.js)
import { 
    collection, 
    getDocs, 
    getDoc, 
    doc, 
    query, 
    where, 
    addDoc, 
    Timestamp 
} from 'firebase/firestore';

const productsCollection = collection(db, 'products');
const ordersCollection = collection(db, 'orders');

/**
 * Obtiene todos los productos o filtra por categoría.
 */
export const getProducts = async (categoryId) => {
    try {
        let q;
        if (categoryId) {
            // Filtra por categoría
            q = query(productsCollection, where('categoria', '==', categoryId));
        } else {
            // Todos los productos
            q = productsCollection;
        }

        const querySnapshot = await getDocs(q);

        // Mapea los documentos a un array de objetos
        const products = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        return products;
    } catch (error) {
        console.error("Error al obtener productos:", error);
        // Retorna un array vacío para evitar el crash del ItemListContainer
        return []; 
    }
};

/**
 * Obtiene un producto específico por su ID.
 */
export const getProductById = async (id) => {
    try {
        const productRef = doc(db, 'products', id);
        const docSnap = await getDoc(productRef);

        if (docSnap.exists()) {
            return {
                id: docSnap.id,
                ...docSnap.data()
            };
        } else {
            return null; 
        }
    } catch (error) {
        console.error("Error al obtener producto por ID:", error);
        throw error;
    }
};

/**
 * Genera una nueva orden de compra.
 * **NOTA:** Esta versión NO actualiza el stock, solo crea la orden.
 */
export const createOrder = async (orderData) => {
    try {
        const orderWithDate = {
            ...orderData,
            date: Timestamp.fromDate(new Date()),
            status: 'generated', // Añadimos un estado
        };

        // Usa addDoc para crear un nuevo documento con ID automático
        const orderRef = await addDoc(ordersCollection, orderWithDate);

        return orderRef.id; // Retorna el ID de la orden
    } catch (error) {
        console.error("Error al generar la orden:", error);
        throw new Error("No se pudo completar la compra. Intente nuevamente.");
    }
};