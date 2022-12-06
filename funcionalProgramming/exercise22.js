/*Fill in the urlSlug function so it converts a string 
title and returns the hyphenated version for the URL. 
You can use any of the methods covered in this section, 
and don't use replace.*/


// Only change code below this line
function urlSlug(title) {

    return title
      .toLowerCase()
      .trim()
      .split(/\s+/)
      .join("-");
      
  }
  // Only change code above this line
  urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");