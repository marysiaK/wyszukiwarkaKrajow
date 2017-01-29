var url = 'https://restcountries.eu/rest/v1/name/';

var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
 	var countryName = $('#country-name').val();
if(!countryName.length) countryName = 'Poland';

$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
}

function showCountriesList(resp) {
 countriesList.empty();
 resp.forEach(function(item) {

    var countryDiv = $('<div class="country">');
  $('<h1>').text(item.name).appendTo(countryDiv);
  $('<li>').text(item.area).appendTo(countryDiv);
  $('<li>').text(item.capital).appendTo(countryDiv);
  $('<li>').text(item.currencies).appendTo(countryDiv);
  $('<li>').text(item.demonym).appendTo(countryDiv);
  $('<li>').text(item.nativeName).appendTo(countryDiv);
  $('<li>').text(item.population).appendTo(countryDiv);
    countryDiv.appendTo(countriesList);

    countryDiv.find('li').hide();

    countryDiv.click(function() {
      countryDiv.find('li').slideToggle();
    });

  });

}