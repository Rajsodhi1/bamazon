# bamazon
Raj's Bamazon repository:
[https://github.com/Rajsodhi1/bamazon]

Description:
This is an Amazon-like storefront that users interact with in their terminal using NODE and MYSQL. THey app displays the inventory, takes the user's order and adjusts the stock from the store's inventory.

IMAGE OF APP
![gif](https://raw.githubusercontent.com/Rajsodhi1/bamazon/master/giphy.gif)

User Guide:
In order to run this in your terminal you will need to install the Require and MYSQL NPM packages. Once running the app will produce a list of items in the inventory for sale. You will see the item, the items category, the price, the quantity in stock, as well as a corresponding id number for each item. You are prompted to select an item you wish to purchase, and subsequently how many of that item. Once purchased you can make a new purchase or leave the store.

Code Snippet:

![code](https://raw.githubusercontent.com/Rajsodhi1/bamazon/master/codesnip.png)


this snippet takes the quantity of the item the customer wishes to purchase, and then updates the MYSQL database inventory to reflect that. This part is important for showing understanding of how to properly interact with sql databases.


One issue I had was getting the function to leave the store (quit the app) to work. I initially tried to make the quit command "BYE", and tried to use toUpperCase but it was conflicting with other inputs. I settled with just making the command "bye", so lowercase to begin with, and that simplified the code and made it run smoothly.

I also tried to add a store logo by logging lines of ASCII art, but the terminal had some issues with that and it was not logging properly. I believe the main issue was using certain characters like "/" or "\". I can solve this in the future by using different characters or just choosing a different logo where I would not have to use those problem ones.

Take Away:

My main take away from this was interacting and updating tables in MySQL. It is one thing to update it manually with commands in the code, but here we were allowing end users to interact with the table's data in a simple way. This was possible by using Inquirer to prompt the user and then to store and use their responses to manipulate the table.

Raj Sodhi
[https://github.com/Rajsodhi1]