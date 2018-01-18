//mouse click
$('.thumbnails')
  .on('click','.thumbnail',e=>{
    let myUrl = $(e.target).find('img').getAttribute('src')
    let myAlt = $(e.target).find('img').getAttribute('alt')
    console.log('src='+myUrl+'alt='+myAlt)
    $('.hero img').attr({'src':myUrl}).attr({'alt':myAlt});
  })

