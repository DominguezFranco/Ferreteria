# 🛠 Ferretería E-commerce

Este proyecto es una aplicación de comercio electrónico (e-commerce) desarrollada en **React** para la venta de productos de ferretería. Utiliza **Firebase Firestore** como base de datos para almacenar el catálogo de productos y gestionar las órdenes de compra.

## 🚀 Tecnologías Principales

- **ReactJS**: Framework principal.
- **React Router Dom**: Gestión de la navegación.
- **Firebase / Firestore**: Base de datos NoSQL y servicios de Backend.
- **Context API**: Gestión del estado global del carrito de compras.

## ✨ Características Implementadas

- **Catálogo Dinámico**: El listado de productos se carga dinámicamente desde Firestore.
- **Vista por Categoría y Detalle**: Navegación por categorías y visualización detallada de cada producto.
- **Carrito de Compras (Context)**: Almacenamiento y gestión del estado del carrito a través de un Context global.
- **Contador de Items (`ItemCount`)**: Permite seleccionar cantidad y valida contra el stock disponible.
- **Checkout y Generación de Órdenes**: Al confirmar la compra, se genera un documento en la colección `orders` de Firestore y se notifica al usuario el ID de su orden.

## ⚙️ Configuración del Proyecto

1. **Clonar el Repositorio:**
    ```bash
    git clone [https://github.com/DominguezFranco/Ferreteria.git](https://github.com/DominguezFranco/Ferreteria.git)
    cd Ferreteria
    ```

2. **Instalar Dependencias:**
    ```bash
    npm install
    # Asegúrate de instalar firebase si no está:
    npm install firebase
    ```

3. **Configuración de Firebase:**
    - Crea tu proyecto en Firebase.
    - Edita el archivo **src/db/db.js** e inserta tus credenciales.

4. **Ejecutar la Aplicación:**
    ```bash
    npm run dev
    ```
