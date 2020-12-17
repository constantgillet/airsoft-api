# Introduction

Gophish was built from the ground-up with a JSON API that makes it easy for developers and sysadmins to automate simulated phishing campaigns.

These docs describe how to use the [Gophish](https://getgophish.com) API. We hope you enjoy these docs, and please don't hesitate to [file an issue](https://github.com/gophish/gophish/issues/new) if you see anything missing.



## Use Cases

There are many reasons to use the Gophish API. The most common use case is to gather report information for a given campaign, so that you can build custom reports in software you're most familiar with, such as Excel or Numbers.

However, automating the creation of campaigns and campaign attributes such as templates, landing pages, and more provides the ability to create a fully automated phishing simulation program. This would allow campaigns to be run throughout the year automatically. This also allows the Gophish administrator to be included in the campaigns, since they wouldn't know exactly which day it would start!

## Routes

### ADD a reference

Use this route for adding a reference to the database

**Route**
```http
POST /references
```
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

Use this route for getting a reference from the database

**Route**
```http
GET /references/:id
```
**Parameters**

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | `number` | **Required**. The id of the reference that you want getting data |


**Response**

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

The `message` attribute contains a message commonly used to indicate errors or, in the case of deleting a resource, success that the resource was properly deleted.

The `success` attribute describes if the transaction was successful or not.

The `data` attribute contains any other metadata associated with the response. This will be an escaped string containing JSON data.

## Status Codes

Gophish returns the following status codes in its API:

| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 201 | `CREATED` |
| 400 | `BAD REQUEST` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR` |