// Code your solution here

function findMatching(drivers, arg){
    const newArray = drivers.filter(
        function(string){
            if(string.toLowerCase() == arg.toLowerCase()){
                return string.toLowerCase;
            }
        }
    );
    return newArray;
}

function fuzzyMatch(drivers, arg){
    const newArray = drivers.filter(
        function(string){
            if(string.substring(0,2) === arg.substring(0,2)){
                return string;
            }
        }
    )
    return newArray;
}

function matchName(driver, arg){
    const newArray = driver.filter(
        function(driver){
            if(driver.name === arg){
                return driver;
            }
        }
    )
    return newArray;
}