module.export.calculator = function (){
    
    let number = Number();

    return {
        sum: (actionNumber) => number += actionNumber,
        mult: (actionNumber) => number *= actionNumber,
        div: (actionNumber) => number /= actionNumber,
        sub: (actionNumber) => number -= actionNumber,
        set: (setValue) => number = setValue,
        currentValue: () => number,
     }
}