'use strict'

$.ajax('data/page-2.json', {method: 'GET', dataType: 'JSON'})
  .then(data => {
    data.forEach(animal => {
      new Animal(animal);
    })
  })

let animalArray = [];

function Animal(obj){
  this.title = obj.title;
  this.image_url = obj.image_url;
  this.description = obj.description;
  this.horns = obj.horns;
  this.keyword = obj.keyword;
  animalArray.push(this);
}

Animal.prototype.render = function(){
  // const source = $('#temp').html();
  // const template = Handlebars.compile(source);
  // const context = { title: this.title, image_url: this.image_url, description: this.description};
  // return template(context);


}

animalArray.forEach(animal=>{
  $('#photo-template').append(animal.render())
})


// //keyword options
// const newOptionArray = [];

// function filter (){
//   animalArray.forEach(keys => {
//     if (!newOptionArray.includes(keys.keyword)){
//       newOptionArray.push(keys.keyword);
//     }
//   })
// }

// function renderKeyword() {
//   const $option = $('select')
//   newOptionArray.forEach(keyword => {
//     const $newOption = $(`<option value:"${keyword}">${keyword}</option>`);
//     $option.append($newOption);
//   });
// }

// function clickEvent(event) {
//   const sect = $('section');
//   sect.each((index,value)=>{
//     if( $(value).attr('keyword') === event.target.value){
//       $(value).show();
//     } else{
//       $(value).hide();
//     }
//   }
//   )
// }
// $('select').change(clickEvent);

// $(function() {});