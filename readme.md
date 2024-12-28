# Portfolio Tracker Application

This project is a **Portfolio Tracker Application** that allows users to manage and analyze their stock portfolios. Users can add, view, edit, and delete stock holdings while tracking real-time stock prices and key portfolio metrics.

## Features

### Frontend:
- Built using **React**.
- Responsive UI.
- Key components include:
  - **Dashboard**: Displays portfolio metrics (e.g., total value, top-performing stock, portfolio distribution).
  - **Stock Table**: Lists current stock holdings with options to edit or delete.
  - **Add/Edit Stock Form**: Form to input stock details (name, ticker, quantity, buy price).

### Backend:
- Built with **Java** and **Spring Boot**.
- RESTful API with endpoints for CRUD operations and portfolio value calculation.
- Integrates with a real-time stock price API to fetch live stock data.
- **MySQL** for database management with JPA and Hibernate.
- Exception handling and meaningful HTTP status codes.

### Deployment:
- **Frontend** deployed on **Vercel**.
- **Backend** deployed on **Render**.

---

## Project Structure

### Frontend
- `/src`
  - `components`
    - `Dashboard.js`: Displays metrics about the portfolio.
    - `StockTable.js`: Lists all stocks and provides edit/delete functionality.
    - `AddEditStockForm.js`: Form for adding or editing stock details.
  - `App.js`: Main routing file.

### Backend
- `PortfolioApplication.java`: Main Spring Boot application class.
- `Stock.java`: Entity class representing a stock.
- `StockController.java`: REST controller for handling API requests.
- `StockService.java`: Service layer implementing business logic.
- `StockRepository.java`: Repository interface for database operations.

### Configuration
- `application.properties`: Contains database connection details and API configurations.
- `schema.sql`: Database schema for stock table.

---

## Prerequisites

### Tools:
1. **Java** (version 11 or above).
2. **Node.js** (version 14 or above).
3. **MySQL** (version 8.0 or above).

### APIs:
- A stock price API like [Alpha Vantage](https://www.alphavantage.co/).

---

## Installation

### Backend:
1. Clone the repository.
2. Navigate to the backend folder.
3. Update `application.properties` with your MySQL credentials and stock API details.
   Example configuration:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/portfolio_db
   spring.datasource.username=your_mysql_username
   spring.datasource.password=your_mysql_password
   spring.jpa.hibernate.ddl-auto=update
   api.stock-price.base-url=https://www.alphavantage.co/query
   api.stock-price.api-key=your_actual_api_key
   ```
   - Replace `your_mysql_username` with your MySQL username.
   - Replace `your_mysql_password` with your MySQL password.
   - Replace `your_actual_api_key` with your API key obtained from Alpha Vantage.

4. Run:
   ```bash
   mvn spring-boot:run
   ```

### Frontend:
1. Navigate to the frontend folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

---

## Running the Application (Step-by-Step)

### For the Developer:
1. Clone the project repository from GitHub.
2. Configure the backend:
   - Open `application.properties` in the backend folder.
   - Update the following details:
     - `spring.datasource.username`: Replace with your MySQL username.
     - `spring.datasource.password`: Replace with your MySQL password.
     - `api.stock-price.api-key`: Replace with your API key from Alpha Vantage.
3. Start the backend:
   - Navigate to the backend folder in the terminal.
   - Run the backend using:
     ```bash
     mvn spring-boot:run
     ```
4. Start the frontend:
   - Navigate to the frontend folder in the terminal.
   - Start the frontend using:
     ```bash
     npm start
     ```
5. Open the application in your browser at `http://localhost:3000`.

### For a Guest User:
1. Access the deployed **Frontend** via the provided **Vercel** link.
2. Interact with the application to:
   - View the portfolio dashboard.
   - Add, edit, or delete stock holdings.
   - Monitor real-time updates of portfolio metrics.
3. The **Backend** is connected to the frontend, running on **Render**, to serve data dynamically.

---

## API Endpoints

### Stock Management:
- `POST /api/stocks`: Add a new stock.
- `PUT /api/stocks/{id}`: Update an existing stock.
- `DELETE /api/stocks/{id}`: Delete a stock.
- `GET /api/stocks`: Fetch all stocks.

### Portfolio Metrics:
- `GET /api/stocks/portfolio-value`: Get the total portfolio value.

---

## Environment Variables

Ensure to set up the following variables for API integration:
- `spring.datasource.url`: Database connection URL.
- `spring.datasource.username`: MySQL username.
- `spring.datasource.password`: MySQL password.
- `api.stock-price.base-url`: The base URL of the stock price API.
- `api.stock-price.api-key`: API key for authentication.

### Example Values:
- **Database Configuration**:
  ```properties
  spring.datasource.url=jdbc:mysql://localhost:3306/portfolio_db
  spring.datasource.username=your_mysql_username
  spring.datasource.password=your_mysql_password
  ```
- **Stock API Configuration**:
  ```properties
  api.stock-price.base-url=https://www.alphavantage.co/query
  api.stock-price.api-key=your_actual_api_key
  ```

---

## Deployment

### Frontend:
- Build the frontend application:
  ```bash
  npm run build
  ```
- Deploy the `build` folder to **Vercel**.

### Backend:
- Package the application:
  ```bash
  mvn package
  ```
- Deploy the generated JAR file to **Render**.

---

## License

This project is licensed under the MIT License.

---

## Author
 Name:Udhayarekha 
 for queries contact:udayarekhaarathi@gmail.com

