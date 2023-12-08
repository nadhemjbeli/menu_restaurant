# Menu Restaurant - MERN Project

## Description
Menu Restaurant is a web application built using the MERN stack that allows users to browse a restaurant menu, place orders, and interact with the available dishes.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features
- View a list of available dishes
- Search for specific dishes
- Send Contact message to the admin to consult
- Admin authentication and authorization
- Admin can manage the menus

## Installation
To run this project locally, follow these steps:

1. Clone the repository: <br />
    git clone https://github.com/nadhemjbeli/menu_restaurant.git
2. Navigate to the backend directory:<br />
    cd menu_restaurant/back
3. Install dependencies:<br />
   npm install
4. Start the Node.js server on port 5000:<br />
   node App
   Open a new terminal.

5. Navigate to the frontend directory:<br />
    cd menu_restaurant/front
6. Run the Sass watcher to compile header.scss to header.css:
   node-sass components/header.scss components/header.css --watch
7. Start the front development server:
   npm start
8. Access the application in your browser at `http://localhost:3000`.

## Usage
Once the application is running, you can:
- Browse through the available dishes
- Search for specific dishes using the search functionality
- Place orders by adding items to the cart and proceeding to checkout

## Technologies Used
This project uses the following technologies:
- MongoDB
- Express.js
- React.js
- Node.js
- Sass
- Bootstrap
- Other libraries and dependencies (list them here)

## Contributing
Contributions to the project are welcome! To contribute:
1. Fork the repository
2. Create a new branch (`git checkout -b feature/contribution`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/contribution`)
6. Create a pull request

Please follow the code formatting and guidelines to maintain consistency.

## License
This project is licensed under the [MIT License](LICENSE).
