function calls(){

    const input = prompt("Please enter a number between 1-3:");
    switch ( input)
    {
        case '1': call1();
        break;
        case '2': call2();
        break;
        case '3': call3();
        break;
    }
}
function call1()
{ console.log('In function one');

}
function call2()
{ console.log('In function two');

}
function call3()
{ console.log('In function three');

}
calls()