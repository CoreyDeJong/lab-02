
  $.ajax('/data/page-1.json', {method: 'GET', dataType: 'JSON'})
  .then(data => {
  data.forEach(animal => {
    new Animal(animal).render();
  })
})


// copy the template 
// fill the template with each object instance
// render that to the page
let animalArray = [];

function Animal(obj){
this.title = obj.title;
this.image_url=obj.image_url;
this.description = obj.description;
this.horns = obj.horns;
this.keyword = obj.keyword;
animalArray.push(this);
}

Animal.prototype.render = function(){
// select all the html in the template
const myTemplate = $('#photo-template').html();

// make a new section 
const $newSection = $('<section></section>');
// fill that new section with the template html
$newSection.html(myTemplate);
// find the h2, and assign it to the name
$newSection.find('h2').text(this.title);
// find the image and assign it to the image_url
$newSection.find('img').attr('src', this.image_url);
// find the p and assign it to the hobbies
$newSection.find('p').text(this.description);

// append it to the main
$('main').append($newSection);
}