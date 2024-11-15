# Product Management System

A simple system for managing products using JSON data, built with JavaScript. This system allows you to add, update, and filter products based on specific criteria.

## Features

- **Parse JSON Data**: Reads JSON data and converts it into a usable data structure.
- **Add a New Product**: Adds a new product to the catalog, following the same structure as existing products.
- **Update Product Price**: Updates the price of a product using its unique ID.
- **Filter by Availability**: Returns a list of available products (in stock).
- **Filter by Category**: Returns products within a specified category (e.g., "Electronics").

## JSON Structure

Each product in the catalog has the following properties:
- **id**: Unique identifier for the product.
- **name**: Name of the product.
- **category**: Category of the product (e.g., Electronics, Furniture).
- **price**: Price of the product.
- **available**: Boolean indicating if the product is in stock.

## Tasks

1. **Parse JSON Data**  
   - Reads JSON data and converts it into a JavaScript object.

2. **Add a New Product**  
   - Adds a product to the catalog array with properties like `id`, `name`, `category`, `price`, and `available`.

3. **Update Product Price**  
   - Updates the price of a product given its ID. If the product is not found, returns an error message.

4. **Filter Products by Availability**  
   - Filters and returns products that are in stock.

5. **Filter Products by Category**  
   - Returns a list of products in a specified category.

## Usage

- Ensure JSON data is correctly structured.
- Call the functions to add, update, or filter products as required.

---

# E-commerce Platform Database Management

A comprehensive MongoDB script collection for managing an e-commerce platform with **Customers** and **Orders** collections. This database system allows CRUD operations and advanced aggregations to handle customer orders and relationships efficiently.

## Database Structure

### Collections
1. **Customers Collection**  
   Contains customer details such as name, email, address, phone, and registration date.

   - **Example Document:**
     ```json
     {
       "_id": ObjectId("unique_id"),
       "name": "John Doe",
       "email": "johndoe@example.com",
       "address": {
         "street": "123 Main St",
         "city": "Springfield",
         "zipcode": "12345"
       },
       "phone": "555-1234",
       "registration_date": ISODate("2023-01-01T12:00:00Z")
     }
     ```

2. **Orders Collection**  
   Stores order information linked to a specific customer, including order date, status, items ordered, and total value.

   - **Example Document:**
     ```json
     {
       "_id": ObjectId("unique_id"),
       "order_id": "ORD123456",
       "customer_id": ObjectId("unique_customer_id"),
       "order_date": ISODate("2023-05-15T14:00:00Z"),
       "status": "shipped",
       "items": [
         { "product_name": "Laptop", "quantity": 1, "price": 1500 },
         { "product_name": "Mouse", "quantity": 2, "price": 25 }
       ],
       "total_value": 1550
     }
     ```

## Part 1: Basic MongoDB Commands and Queries

### Tasks

1. **Create and Insert Data**
   - Create collections for `customers` and `orders`.
   - Insert 5 sample documents into each collection, with each order linked to a customer.

2. **Find Orders for a Specific Customer**
   - Query to retrieve all orders for a customer by their name (e.g., "John Doe").

3. **Find Customer for a Specific Order**
   - Retrieve the customer details for a specific order ID (e.g., `order_id = "ORD123456"`).

4. **Update Order Status**
   - Update the order status to "delivered" for a specific order ID.

5. **Delete an Order**
   - Delete an order by its `order_id` (e.g., `order_id = "ORD123456"`).

## Part 2: Aggregation Pipeline

### Tasks

1. **Calculate Total Value of All Orders by Customer**
   - Aggregate the total value of orders for each customer.

2. **Group Orders by Status**
   - Count and group orders by their status (e.g., shipped, delivered).

3. **List Customers with Their Recent Orders**
   - Retrieve each customer’s details and their most recent order information.

4. **Find the Most Expensive Order by Customer**
   - Find the highest value order for each customer.

## Part 3: Real-World Scenario with Relationships

### Tasks

1. **Find Customers Who Placed Orders in the Last Month**
   - Retrieve customers who placed at least one order in the past 30 days with their most recent order date.

2. **Find All Products Ordered by a Specific Customer**
   - List distinct products ordered by a customer with the total quantity ordered for each product.

3. **Top 3 Customers with Most Expensive Orders**
   - Retrieve the top 3 customers who spent the most on their orders, sorted in descending order.

4. **Add a New Order for an Existing Customer**
   - Insert a new order for an existing customer (e.g., "Jane Smith") with at least two items.

## Part 4: Bonus Challenge

### Tasks

1. **Find Customers Without Orders**
   - List all customers who have not placed any orders.

2. **Calculate Average Number of Items per Order**
   - Compute the average number of items across all orders.

3. **Join Customer and Order Data Using $lookup**
   - Use the `$lookup` aggregation operator to join `customers` and `orders` collections, returning customer details along with their order information.

---

