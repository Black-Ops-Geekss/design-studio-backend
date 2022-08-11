# design-studio-backend

## Project Team

1. Zaid Alshibi (TL)
2. Mohammad AL Momani
3. Yaser Odat
4. Salah Alhamawi
5. Hamzah Aldaamas
6. Amani Alsmadi


## Website Description

### Online store where you can request a design to be printed on a product. The user will have the ability whether to choose between an existing design or to add a keyword for the required design then choose it and add the contact information.
The user can have the preferred design printed on a product.
The website can provide the user with enough information to choose their design based on their style.


# User Stories


* As a user, I want to insert my own design 

* As a user, I want to see a library of the designs on the website

* As an admin, I want to be able to edit and delete the designs

* As an admin, I want to be able to view the designers and edite there informations

* As a user, I want to know more about the team working on this website



# Schema

```
Schema For Designs Categories={
    "Category": String,
    "URL": Array
}
```

```
Schema For User Information={
    "Full Name": String,
    "Phone Number": String,
    "Address": String,
    "Email": String,
    "Delivery": Boolean
}
```
