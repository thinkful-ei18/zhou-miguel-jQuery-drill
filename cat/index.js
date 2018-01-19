//mouse click
$('.thumbnail')
.on('click', function(e){
  let myUrl = $(e.currentTarget).find('img').attr('src')
  let myAlt = $(e.currentTarget).find('img').attr('alt')
  console.log('src='+myUrl+'alt='+myAlt)
  $('.hero img').attr({'src':myUrl}).attr({'alt':myAlt});
})

