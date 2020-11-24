let userColumns = prompt("How many columns do you want?")
let userRows = prompt("How many rows do you want?")

for (i = 0; i < userRows; i++){
  document.writeln("<br />")
  for (j = 0; j < userColumns; j++)
    document.write('*')
  }