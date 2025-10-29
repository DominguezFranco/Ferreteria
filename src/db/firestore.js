import  db  from '../db/db'; 
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


export const getProducts = async (categoryId) => {
    try {
        let q;
        if (categoryId) {
            
            q = query(productsCollection, where('categoria', '==', categoryId));
        } else {
            
            q = productsCollection;
        }

        const querySnapshot = await getDocs(q);

        
        const products = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        return products;
    } catch (error) {
        console.error("Error al obtener productos:", error);
        
        return []; 
    }
};


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


export const createOrder = async (orderData) => {
    try {
        const orderWithDate = {
            ...orderData,
            date: Timestamp.fromDate(new Date()),
            status: 'generated', 
        };

        
        const orderRef = await addDoc(ordersCollection, orderWithDate);

        return orderRef.id;
    } catch (error) {
        console.error("Error al generar la orden:", error);
        throw new Error("No se pudo completar la compra. Intente nuevamente.");
    }
};