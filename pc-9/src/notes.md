```js
# Express.js - `req.body`, `req.params`, and `req.query`

## 1. `req.body`

`req.body` ka use tab hota hai jab client (frontend, Postman, mobile app, etc.) request ke **body** ke andar data bhejta hai. Ye data generally `POST`, `PUT`, ya `PATCH` requests mein bheja jata hai. Express `app.use(express.json())` middleware ki help se incoming JSON data ko parse karta hai aur usse `req.body` mein store kar deta hai. Backend phir is data ko database mein save, update, ya validate kar sakta hai.

### Example

**Client Request**

```http
POST /users
```

Body:

```json
{
  "name": "Subham",
  "age": 32,
  "city": "Guwahati"
}
```

**Backend**

```js
app.post("/users", (req, res) => {
    console.log(req.body);
    console.log(req.body.name);
    console.log(req.body.age);

    res.send("User created successfully");
});
```

**Output**

```js
{
    name: "Subham",
    age: 32,
    city: "Guwahati"
}
```

```
Subham
32
```

### Common Uses

* User Registration
* Login
* Create Note
* Add Product
* Update Profile

**Remember:** `req.body` = Request Body ke andar ka data.

---

# 2. `req.params`

`req.params` ka use URL ke **dynamic path values** ko access karne ke liye hota hai. Route define karte waqt hum `:` ke saath parameter ka naam likhte hain, jaise `/users/:id` ya `/notes/:index`. Jab client request bhejta hai, Express URL ke us dynamic part ki value nikal kar `req.params` object mein store kar deta hai.

### Example 1

**Route**

```js
app.get("/users/:id", (req, res) => {
    console.log(req.params);
    console.log(req.params.id);

    res.send("User Found");
});
```

**Client Request**

```http
GET /users/25
```

Express automatically banata hai:

```js
req.params = {
    id: "25"
}
```

Output:

```
25
```

---

### Example 2

**Route**

```js
app.get("/products/:category/:id", (req, res) => {
    console.log(req.params);
});
```

**Client Request**

```http
GET /products/mobile/101
```

Output:

```js
{
    category: "mobile",
    id: "101"
}
```

### Common Uses

* User ID
* Product ID
* Order ID
* Note Index

**Remember:** `req.params` = URL ke dynamic path se aane wali values.

---

# 3. `req.query`

`req.query` ka use URL mein `?` ke baad bheje gaye **query parameters** ko access karne ke liye hota hai. Query parameters optional information bhejne ke liye use hote hain aur zyadatar filtering, searching, sorting, aur pagination ke liye use kiye jate hain.

### Example

**Client Request**

```http
GET /users?page=2&limit=5&search=subham
```

**Backend**

```js
app.get("/users", (req, res) => {
    console.log(req.query);

    console.log(req.query.page);
    console.log(req.query.limit);
    console.log(req.query.search);

    res.send("Users");
});
```

Express automatically banata hai:

```js
req.query = {
    page: "2",
    limit: "5",
    search: "subham"
}
```

Output:

```
2
5
subham
```

### Common Uses

* Search
* Filter
* Pagination
* Sorting

**Remember:** `req.query` = URL mein `?` ke baad wali values.

---

# Complete Example

### Client Request

```http
PUT /users/25?admin=true
```

Body:

```json
{
    "name": "Subham",
    "age": 32
}
```

### Backend

```js
app.put("/users/:id", (req, res) => {

    console.log(req.params);
    console.log(req.query);
    console.log(req.body);

});
```

### Output

**req.params**

```js
{
    id: "25"
}
```

**req.query**

```js
{
    admin: "true"
}
```

**req.body**

```js
{
    name: "Subham",
    age: 32
}
```

---

# Summary Table

| Property     | Data kahan se aata hai?   | Example                            |
| ------------ | ------------------------- | ---------------------------------- |
| `req.body`   | Request Body              | `{ "name": "Subham" }`             |
| `req.params` | URL Path (Dynamic Values) | `/users/25` → `req.params.id`      |
| `req.query`  | URL mein `?` ke baad      | `/users?page=2` → `req.query.page` |

---

# Easy Trick to Remember

Socho request ek **parcel** hai.

* **`req.params`** = Parcel ke address par likhi hui information (e.g. `/users/25`).
* **`req.query`** = Address ke saath di gayi extra instructions (e.g. `?page=2&sort=price`).
* **`req.body`** = Parcel ke andar ka actual data (e.g. user details, product details, note information).
```