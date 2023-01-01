## Dashboard App | [Demo](https://my-eccomerce-dashboard.netlify.app/)

### _Dashboard_

![Image text](https://res.cloudinary.com/the-kings-company/image/upload/v1672610383/Portafolio/English/Dashboard%20app/3_vah90n.jpg)

This project was migrated from CRA to VITE, and refactored several times while i was learning new things, the commits of this repository start when the project was migrated to VITE.

This project is part of what at the beginning was a much bigger one but I decided to divide its frontend into two parts so that everything is much more orderly, easy to maintain and make changes, the project itself is an e-commerce which consists of the following parts:

- User application (e-commerce itself).
    * React js.
    * Redux toolkit (actions by using custom hooks).
- Admin/moderator application (dashboard).
    * React js.
    * Redux toolkit (actions by using custom hooks).
- Backend.
    * Node js - Express.
    * MongoDb - Mongoose.

#### Roles, functionalities and permissions.

There are two possible roles in the dashboard **Administrator** and **Moderator**.

##### **Administrator**
This is the most important role and the one which has the most relevant functionalities and permissions in the application, these permissions serve to monitor and control the actions of the moderator(s).

To log in as administrator once we are on the login page we must click on the administrator button and it will load the credentials in the inputs of the form, and then we must click on the login button.
![Image text](https://res.cloudinary.com/the-kings-company/image/upload/v1668310995/Portafolio/DashboardApp/login_admin_nvjqrt.jpg)

###### Functionalities and permissions:
- Create, edit, send products to the trash and even delete products permanently.
- Create, edit, send users to the trash and even delete users permanently.
    - It should be noted that you can assign these users their role.
        - User.
        - Moderator.
        - Admin.
- Monitor from the records section all actions related to products and users carried out by yourself, another administrator or by moderators.
- If a product is deleted first it will be sent to the trash and from there only the administrator can delete them permanently, the same happens with the users but in this case only the administrator will be able to send them to the trash.
- Mark as sent the orders of the products by customers from the sales section.
- View the statistics of the number of products, users, sales, registrations.

##### **Moderator**
This role is more for an assistant or collaborator in the dashboard, he has sufficient permissions to carry out very important collaborative activities, but in most cases if he makes an error it will be recorded and if he deletes a product by mistake, that error will not be permanent.

To log in as a moderator, once we are on the login page, we must click on the moderator button and it will load the credentials in the inputs of the form, and then we must click on the login button.
![Image text](https://res.cloudinary.com/the-kings-company/image/upload/v1668310995/Portafolio/DashboardApp/login_mod_h6bm8k.jpg)

###### Functionalities and permissions:
- Create, edit and send products to trash.
- Mark as sent the orders of the products by customers from the sales section.
- See only the statistics of the number of products and sales on the home page

## instalación



First install the dependencies and then start the local server.

```sh
$ git clone https://github.com/lucasgojeda/eccomerce-app-dashboard.git
$ cd eccomerce-app-dashboard
$ npm i
$ npm run dev
```

It should be noted that we must have the following environment variable configured.

```sh
VITE_REACT_APP_API_URL= 'Backend URL'
```




