//mouse click
$('.thumbnail')
.on('click', e => {
  let myUrl = $(this).find('img').attr('src')
  let myAlt = $(this).find('img').attr('alt')
  console.log('src='+myUrl+'alt='+myAlt)
  $('.hero img').attr({'src':myUrl}).attr({'alt':myAlt});
})

