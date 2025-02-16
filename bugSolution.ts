function printName(name: string | null | undefined): void {
  // Solution 1: Optional chaining
  console.log(name?.toUpperCase() ?? 'No name provided');

  // Solution 2: Check for null or undefined
  if (name !== null && name !== undefined) {
    console.log(name.toUpperCase());
  } else {
    console.log('No name provided');
  }
}

printName(null); // Output: No name provided
printName('John'); // Output: JOHN
printName(undefined); // Output: No name provided