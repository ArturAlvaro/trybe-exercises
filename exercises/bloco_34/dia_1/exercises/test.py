from parsel import Selector
import requests

URL_BASE = "https://en.wikipedia.org/wiki/List_of_programming_languages"
response = requests.get("https://en.wikipedia.org/wiki/List_of_programming_languages")
selector = Selector(text=response.text)

name = selector.css(".div_col ul li a::attr(title)").get()
print(name)