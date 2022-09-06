let operation = prompt (`Seleccione que desea comprar:
1. azucar
2. arroz
3. papa
4. vino`)

let suma = " "
let total = 0

while (pedido != "ESC" && pedido != "esc")
    switch (pedido){
        case"1":
            suma=500
            break;
        case"2":
            suma=250
            break;
        case "3":
            suma=180;
            break;
        case"4":
            suma=200;
            break;     
    }
    total += suma