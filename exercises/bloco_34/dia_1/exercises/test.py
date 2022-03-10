from parsel import Selector
import requests

URL_BASE = "http://books.toscrape.com/"
response = requests.get(URL_BASE)
selector = Selector(text=response.text)

href = selector.css(".product_pod .image_container a::attr(href)").get()
img = selector.css(".product_pod .image_container a img::attr(src)").get()
title = selector.css(".product_pod h3 a::attr(title)").get()
price = selector.css(".product_pod .product_price .price_color").re_first(r"£\d+\.\d{2}")

dict = {}
book_link = URL_BASE + href
detail_response = requests.get(book_link)
detail_selector = Selector(text=detail_response.text)
description = detail_selector.css("#product_description ~ p::text").get()

suffix = "...more"
if description.endswith(suffix):
    description = description[:-len(suffix)]

print(img)
