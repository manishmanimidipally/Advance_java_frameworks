package com.example.myspring.demoSpringBoot.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class HomeController{
	
	@RequestMapping("/")
	public String greet() {
		return """
        <html>
        <head>
            <title>MamidipallyManish API</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 40px;
                    background-color: #f4f4f4;
                }

                .container {
                    background: white;
                    padding: 30px;
                    border-radius: 10px;
                    max-width: 800px;
                    margin: auto;
                }

                h1 {
                    color: #333;
                }

                h2 {
                    color: #555;
                }

                .endpoint {
                    background: #f1f1f1;
                    padding: 12px;
                    margin: 10px 0;
                    border-radius: 5px;
                }

                .method {
                    font-weight: bold;
                    color: blue;
                }
            </style>
        </head>

        <body>
            <div class="container">

                <h1>Welcome to MamidipallyManish Website 👋</h1>

                <h2>Product API Endpoints</h2>

                <div class="endpoint">
                    <span class="method">GET</span>
                    /products
                    → Get all products
                </div>

                <div class="endpoint">
                    <span class="method">GET</span>
                    /products/{id}
                    → Get an individual product
                </div>

                <div class="endpoint">
                    <span class="method">POST</span>
                    /products
                    → Add a new product
                </div>

                <div class="endpoint">
                    <span class="method">PUT</span>
                    /products
                    → Update an existing product
                </div>

                <div class="endpoint">
                    <span class="method">DELETE</span>
                    /products/{id}
                    → Delete a product
                </div>

            </div>
        </body>
        </html>
        """;
	}
}
