import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';


/*Then('sub categories should be sorted by alphabetically', function () {
  //this.json.children.sort((a, b) => a.url.localeCompare(b.url));
// Check if children exist and sort them alphabetically
if (this.json?.children && Array.isArray(this.json.children)) {
  this.json.children.sort((a, b) => a.url.localeCompare(b.url));

  // Sort subcategories alphabetically for each child
  this.json.children.forEach(category => {
      if (category.subcategories && Array.isArray(category.subcategories)) {
          category.subcategories.sort((a, b) => a.url.localeCompare(b.url));
          
          // Log the sorted subcategories for this category
          //console.log(`Subcategories for category "${category.url}" are sorted:`);
          console.log(category.subcategories.map(sub => sub.url));
      }
  });
}
console.log('this.json structure:', this.json);

});*/

Then('sub categories should be sorted by alphabetically', function () {

  // Ensure `this.json` exists and check if `subCategories` is in the expected format
  if (!this.json || !this.json.subCategories || !Array.isArray(this.json.subCategories)) {
    console.error('Error: Response does not contain a valid "subCategories" array.');
    console.error('Response JSON:', this.json); // Log the full response for debugging
    throw new Error('Response does not contain a valid "subCategories" array.');
  }

  // Extract the subcategory names
  let subcategories = this.json.subCategories.map(x => x.name);

  // Sort the subcategories alphabetically
  let sortedSubcategories = [...subcategories].sort((a, b) => a.localeCompare(b));

  // Ensure subcategories are sorted alphabetically in the response
  this.json.subCategories = this.json.subCategories.sort((a, b) => a.name.localeCompare(b.name));

  // Now check if the original subcategories list is the same as the sorted one
  expect(this.json.subCategories.map(x => x.name)).to.eql(sortedSubcategories);

});