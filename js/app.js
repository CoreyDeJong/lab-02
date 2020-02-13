'use strict'

$.ajax('/data/page-1.json', {method: 'GET', dataType: 'JSON'})
  .then(data => {
    data.forEach(animal => {
      new Animal(animal).render()
    })
    filter();
    renderKeyword();
  })


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

//keyword options
const newOptionArray = [];

function filter (){
  animalArray.forEach(keys => {
    if (!newOptionArray.includes(keys.keyword)){
      newOptionArray.push(keys.keyword);
    }
  })
}

function renderKeyword() {
  const $option = $('select')
  newOptionArray.forEach(keyword => {
    const $newOption = $(`<option value:"${keyword}">${keyword}</option>`);
    $option.append($newOption);
  });

  $('select').on('change',function(){
    let $selected = this.value;
    
  })
}

