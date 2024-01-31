export function getCurrentDate() {
    // Create a new Date object to get the current date and time
    const currentDate = new Date();
  
    // Define an array of month names
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    // Get the day, month, date, and year
    const day = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
    const month = monthNames[currentDate.getMonth()];
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();
  
    // Display the information
    return ` ${day}, ${month}, ${date}, ${year}`
    // console.log(`Current day:`);
    // console.log(`Current month: `);
    // console.log(`Current date: `);
    // console.log(`Current year: `);
  }
  
  // Call the function to display the current date
  getCurrentDate();
  