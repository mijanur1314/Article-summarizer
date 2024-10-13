const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '79d5999085mshe7881e5440be194p1f8d3ajsn49bc470557fb',
		'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
	}
};

const btn = document.querySelector(".btn");
const summary = document.querySelector(".summary");

btn.addEventListener("click", (e) => {
      e.preventDefault()
      const input = document.querySelector("#url").value
      const url = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${input}&lang=en&engine=2`;

      summary.innerText = "Please wait, article is summarizing..."

      if (!/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/.test(input)) {
            summary.innerText = "Invalid URL! Please provide a valid URL"
      }
      else {
            fetch(url, options)
            .then(data => data.json())
            .then(data => {
                  summary.innerText = data?.summary
            })
            .catch(error => {
                  console.log(error)
            })
      }

      
})

// fetch(url, options)
//       .then((data) => {
//       return data.json()
//       })
//       .then((data) => {
//       console.log(data)
//       })
//       .catch((error) => {
//       console.log(error)
//       })
