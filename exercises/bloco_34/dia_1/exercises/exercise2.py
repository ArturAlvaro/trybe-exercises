from parsel import Selector
import requests
import json

URL_BASE = "https://en.wikipedia.org/wiki/List_of_programming_languages"

languages = []
response = requests.get(URL_BASE)
selector = Selector(text=response.text)
for language in selector.css(".div-col"):
    name = language.css("ul a::attr(title)").getall()
    
    languages.append(name)

print(languages)



with open('languages.json', 'w') as file:
    json.dump(languages, file, indent=4)
