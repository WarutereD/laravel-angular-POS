## About Project
- Setup
1. Clone the repository
2. Run
--bash
`composer install` or `composer update`

3. Setup a mysql database called laravel in phpmyadmin 
- Run
--bash
`php artisan migrate`

4. Seed category data into the tbl_category
- Run
--bash
`php artisan db:seed`

5. Once the db is setup
- Run
--bash
`php artisan serve`

POS Laravel backend server endpoints
# Products
- {SERVER_URL}/api/products         GET
- {SERVER_URL}/api/products/{id}    GET
- {SERVER_URL}/api/products/add     POST
- {SERVER_URL}/api/products/{id}    PUT
- {SERVER_URL}/api/products/{id}    DELETE

# Categories
- {SERVER_URL}/api/categories       GET
- {SERVER_URL}/api/categories/add   POST

# Sales
- {SERVER_URL}/api/sales            POST


