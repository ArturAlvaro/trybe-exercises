from parsel import Selector
import requests
import json


URL_BASE = "http://books.toscrape.com/catalogue/"

books = []
next_page_url = 'page-1.html'
while next_page_url:
    response = requests.get(URL_BASE + next_page_url)
    selector = Selector(text=response.text)
    for book_name in selector.css(".product_pod"):
        img = book_name.css(".image_container a img::attr(src)").get()
        title = book_name.css("h3 a::attr(title)").get()
        price = book_name.css(".product_price .price_color::text").re(r"£\d+\.\d{2}")

        #Busca detalhes dos livros
        href = selector.css("h3 a::attr(href)").get()
        book_link = URL_BASE + href
        detail_response = requests.get(book_link)
        detail_selector = Selector(text=detail_response.text)
        description = detail_selector.css("#product_description ~ p::text").get()

        books.append({
            'name': title,
            'image': img,
            'price': price,
            'url': book_link,
            'description': description
        })
        print(title)
    next_page_url = selector.css(".next a::attr(href)").get()


with open('data.json', 'w') as file:
    json.dump(books, file, indent=4)

# response = requests.get("https://en.wikipedia.org/wiki/List_of_programming_languages")
# title = selector.css(".product_pod h3 a::attr(title)").get()
# title = selector.css(".div-col ul li a::attr(title)").get()