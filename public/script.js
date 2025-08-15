
   
let age = window.prompt("Enter your age ")
let maxAge = window.prompt("Enter your maxAge")
let numPerDay = window.prompt("Enter your Number Per Day")

totalRequired = (numPerDay * 365) * (maxAge - age);

if (confirm(`Is everything correct`)){
    console.log(document.write(" You will need " + totalRequired + " Cheeseburgers to last you until the ripe of old age " + maxAge))
}else{
    document.write("Run the code again")
}







        
        