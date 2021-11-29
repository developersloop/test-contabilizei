$('#cnab').on('change', function($el) {
  $(this).css('color', 'black')
  $('.container').css('height','auto')
  let file = $el.target.files[0]
  let reader = new FileReader()
  
  reader.onload = function (e) {
      let data = reader.result.split('****')
      let normalize = data.map(dt => {
        const [word, digits] = dt.match(/\D+|\d+/g);
        let brokenString = dt.split(' ')
        let firstTerm = dt.split(' ')[brokenString.length-1].match(/\D+|\d+/g)[1]
        let vb = `${firstTerm} | ${word} | ${digits}`
        return vb.replaceAll('undefined', '-')
      })
      normalize.forEach(element => {
        $("#list").append(`
          <div class="d-flex-row list-group">
            <li>${element}</li>
          </div>
        `);
      });
  }
  reader.readAsText(file)
})