# ALX Project 0x14

## API Overview

The MoviesDatabase API provides access to a large collection of movie-related data, including details about films, actors, directors, genres, ratings, and more. It allows developers to fetch structured information based on search queries, IDs, or filters. With multiple endpoints, the API supports retrieving movie metadata, trending content, cast information, and additional media resources.

## Version

The current version of the API is **v1**.

## Available Endpoints

* **/titles** – Retrieves information about movies and TV shows based on filters such as year, genre, or title.
* **/titles/{id}** – Fetches detailed information for a specific movie or show by its ID.
* **/titles/search/title** – Searches for movies or shows by title.
* **/titles/search/keyword** – Searches content using keywords.
* **/titles/random** – Returns a random movie or show.
* **/actors** – Provides details about actors.
* **/actors/{id}** – Returns detailed information about a specific actor.

## Request and Response Format

### Request Format

Requests are typically made using HTTPS with query parameters depending on the endpoint. A standard request includes:

* HTTP Method: **GET**
* Base URL: `https://moviesdatabase.p.rapidapi.com/`
* Headers: Include API key and host information.

**Example Request:**

```
GET https://moviesdatabase.p.rapidapi.com/titles/search/title?title=Inception
Headers:
  X-RapidAPI-Key: your_api_key
  X-RapidAPI-Host: moviesdatabase.p.rapidapi.com
```

### Response Format

Responses are returned in JSON format. A typical response includes:

* `results`: Array of movie objects.
* `page`: Current page of pagination.
* `next`: URL for the next page.
* Movie object fields: `id`, `titleText`, `releaseDate`, `primaryImage`, etc.

**Example Response:**

```
{
  "results": [
    {
      "id": "tt1375666",
      "titleText": {
        "text": "Inception"
      },
      "releaseDate": {
        "year": 2010,
        "month": 7,
        "day": 16
      }
    }
  ],
  "page": 1,
  "next": "/titles/search/title?title=Inception&page=2"
}
```

## Authentication

The MoviesDatabase API uses API key authentication provided by RapidAPI. Each request must include the following headers:

* **X-RapidAPI-Key**: Your unique API key.
* **X-RapidAPI-Host**: The API host name.

Without these headers, the request will be rejected.

## Error Handling

Common error responses include:

* **400 Bad Request** – Invalid parameters or missing required fields.
* **401 Unauthorized** – API key missing or invalid.
* **404 Not Found** – Requested resource does not exist.
* **429 Too Many Requests** – Rate limit exceeded.

In TypeScript or JavaScript, wrap requests in `try...catch` blocks and inspect `response.status` to handle errors gracefully.

## Usage Limits and Best Practices

* **Rate Limits**: RapidAPI imposes limits depending on your subscription plan. Exceeding these will return `429 Too Many Requests`.
* **Caching**: Cache frequent requests to reduce API calls and improve performance.
* **Efficient Filtering**: Use query parameters to fetch only the data you need.
* **Error Handling**: Always validate responses before using data.
* **Security**: Never expose your API key in client-side code. Prefer using a backend server for API requests.
