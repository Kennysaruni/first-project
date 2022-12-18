const masterDiv = document.querySelector('div#choose')
const currSearch = document.querySelector('search-bar')
const from = document.querySelector('input#from')
const to = document.querySelector('input#to')
// currSearch.addEventListener('submit',(e) => {
//   e.preventDefault()
//   const fromval = from.value
//   const toVal = to.value
// })
function myFetch(){
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9875652ae1msh37837c1b985fbc1p1a8f8ajsn2f01cc8bca06',
		'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
	}
};

fetch('https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?from=USD&to=EUR%2CGBP', options)
	.then(response => response.json())
  .then(currency => currencyList(currency))
	.catch(err => console.error(err));   
}
function renderDom(){
  const myDiv = document.createElement('div')
  myDiv.className = 'my-div'
  myDiv.innerHTML =`
  <div id="search">
  <form id='search-bar'>
      <label for="membership">Convert From:</label>
      <input id='from' type='text' name='search'>
      <input type='submit' name='submit'/>
      <label for="membership">Convert to:</label>
      <input id='to' type='text' name='search'>
      <input type='submit' name='submit'/>
    </form>
  </div> 
  `
  masterDiv.appendChild(myDiv)
}
renderDom()
myFetch()
    masterDiv.addEventListener('click', (e) => console.log(e.target))