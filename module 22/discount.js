/* 
1. if ticket numbers is less than 100, per ticket price: 100;
2. if ticket numbers is more than 100 but less than 200, first 100 ticket will be 100/;
3. rest tickets wil be 90 taka per piece;


first 100 ---> 100tk;
101-200 ---> 90tk;
200+ ----> 70tk
*/

function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90; 
    const restTicketRate = 70;

    if(ticketQuantity <= 100){
        const price = (ticketQuantity * first100Rate)
        return price;
    }
    else if(ticketQuantity <= 200){
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPirce = restTicketQuantity * second100Rate;

        const totalPrice = first100Price + restTicketPirce;
        return totalPrice;
    }
    else{
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketQuantity = ticketQuantity -200;
        const restTicketPirce = restTicketQuantity * restTicketRate;
        const totalCost = first100Price + second100Price + restTicketPirce;

        return totalCost;

    }
}

const price = ticketPrice(201)

console.log(price)