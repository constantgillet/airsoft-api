# Introduction

Gophish was built from the ground-up with a JSON API that makes it easy for developers and sysadmins to automate simulated phishing campaigns.

These docs describe how to use the [Gophish](https://getgophish.com) API. We hope you enjoy these docs, and please don't hesitate to [file an issue](https://github.com/gophish/gophish/issues/new) if you see anything missing.



## Use Cases

There are many reasons to use the Airsoft Api. The first is that this Api allows access to a large database of airsoft replicas, with a lot of data available. The purpose of this API is to use it on your e-commerce sites in order to facilitate the referencing of the replicas or to automate certain tasks such as the choice of packages to facilitate the sending or the self-filling of the replica's characteristics from a few elements.

## Routes

### ADD a reference

Use this route for adding a reference to the database

**Route**
```http
POST /references
```

**Body Content-Type**
* multipart/form-data

**Parameters**

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` | **Required**. The reference name |
| `image` | `file` | **Required**. The reference image |
| `category` | `string` | **Required**. The reference category |
| `brand` | `string` | **Required**. The reference brand |
| `power` | `number` | **Required**. The airsoft gun power |
| `price` | `number` | **Required**. The airsoft gun price |
| `weight` | `number` | **Required**. The airsoft gun weight |
| `length` | `number` | **Required**. The airsoft gun length |
| `familly` | `string` | **Required**. The airsoft gun familly |
| `email` | `string` | **Required**. Email of who added the reference |

**Response**

```javascript
{
  "code": 201,
  "status": "success",
  "message": "Reference created"
}
```

### Get a reference

Use this route for getting a specific reference from the database

**Route**
```http
GET /references/:id
```
**Parameters**

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | `number` | **Required**. The id of the reference that you want getting data |

**Response example**

```javascript
{
  "code": 200,
  "status": "success",
  "message": "Reference created",
  "annonce": {
    "id": 1,
    "name": "Name of the reference",
    "category": "categoryName",
    "status": 0,
    "brand": "cybergun",
    "power": 222,
    "price": 600,
    "weight": 200,
    "length": 1234,
    "familly": "bullpup",
    "image": "/uploads/image.jpg"       
  }
  
}
```

### Get all the reference

Use this route for getting and searching mutiples references from the database

**Route**
```http
GET /references
```
**Parameters**

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `q` | `string` | **Required**. The query to search a reference |
| `limit` | `number` | **Required**. The number of results, the base value is 8 |
| `order_by` | `string` | **Required**. How to order the results |
| `category` | `string` | **Required**. The category of the references that you search|

**Response example**

```javascript
{
  "code": 200,
  "status": "success",
  "message": "You got the references",
  "data": {
    "references": [
       {
        "id": 3,
        "name": "Name of the reference",
        "category": "referenceCategory",
        "status": 0,
        "brand": "cybergun",
        "power": 222,
        "price": 600,
        "weight": 200,
        "length": 1234,
        "familly": "bullpup",
        "image": "/uploads/2020-12-17T14-57-26.013Zlogo2.jpg"
      },
    ]
  }
}
```

## Responses

Many API endpoints return the JSON representation of the resources created or edited. However, if an invalid request is submitted, or some other error occurs, Gophish returns a JSON response in the following format:

```javascript
{
  "code" : number,
  "status" : string,
  "message" : string
  "data": number
}
```

The `code` attribute is the status code.

The `status` attribute describes if the request was successful or not.

The `message` attribute contains a message commonly used to indicate errors or, in the case of deleting a resource, success that the resource was properly deleted.

The `data` attribute contains any other metadata associated with the response. This will be an escaped string containing JSON data.

## Status Codes

The airsoft API returns the following status codes in its API:

| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 201 | `CREATED` |
| 400 | `BAD REQUEST` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR` |