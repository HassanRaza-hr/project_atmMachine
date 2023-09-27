//Develop a TS program that show the working of an ATM machine such
//  - User should login by entering his/her unique account number and a secret PIN
//  - User can check account balance 
//  - User can withdraw money 
//  - User can check his/her previous transections in the current login
//  - User should be asked at the end of each function that if he/she wants to end transections or perform any other transections if the user choose more transections he/she must be shown all the options again and he / she can perform any transections.
//  In the current login means if user logged in and performed 5 transections he/she have an option to check these 5 transections
//  If he/she choosed to end the transections the data should be removed.
import inquirer from "inquirer";
var balance = 655;
var listOfAccounts = [2345, 2395, 3432];
var pins = [1122, 2211, 3830];
let login = await inquirer.prompt([{
        name: "accountnumber",
        type: "input",
        message: "please enter your username"
    }, {
        name: "password",
        type: "password",
        message: "now please enter your password"
    }]);
if (true) {
    var overview = await inquirer.prompt([{
            name: "mainInterface",
            type: "list",
            choices: ["BalanceCheck", "CashWithdraw", "PreviousTransactions", "endTransaction"],
            message: "Please choose your need base function"
        }]);
    if (overview.mainInterface == "BalanceCheck") {
        console.log(`your current balance is ${balance}$`);
    }
    else if (overview.mainInterface == "CashWithdraw") {
        console.log("please enter your amount");
        var withdrawalAmount = await inquirer.prompt([{
                name: "amount",
                type: "number",
                message: "please enter your withdrawal amount"
            }]);
        console.log("your cash is being withdrawal.thanks for your transaction");
    }
    else if (overview.mainInterface == "PreviousTransactions") {
        console.log("your previous transactions are");
    }
    else if (overview.mainInterface == "endTransaction") {
        console.log("do you want to proceed other transactions,if you want then type Y otherwise type N");
        var endTrans = await inquirer.prompt([{
                name: "endUser",
                type: "input",
                message: "please enter to procceed"
            }]);
        if (endTrans.endUser == "Y") {
        }
        else {
            console.log("Thanks for the transaction");
        }
        ;
    }
    ;
}
;
