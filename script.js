var dateDiffInDays = function (date1, date2) {
  //   write your code here
	 const utcDate1 = Date.UTC(
    parseInt(date1.substring(0, 4)), // Year
    parseInt(date1.substring(5, 7)) - 1, // Month (zero-based)
    parseInt(date1.substring(8, 10)) // Day
  );
	const utcDate2 = Date.UTC(
    parseInt(date2.substring(0, 4)), // Year
    parseInt(date2.substring(5, 7)) - 1, // Month (zero-based)
    parseInt(date2.substring(8, 10)) // Day
  );

  // Calculate the difference in milliseconds between the two dates
  const diffInMs = utcDate2 - utcDate1;

  // Convert milliseconds to days
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  return diffInDays;
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
