import json

with open('pokemons.json') as file:
    content = file.read() # leitura
    # loads carrega o JSON a partir de um texto
    # load carrega o JSON a partir de um arquivo
    pokemons = json.loads(content)['results']
print(pokemons[0])

with open('pokemons.json') as file:
    pokemons = json.load(file)['results']
print(pokemons[0])

# ESCRITA DE ARQUIVOS JSON

# lê todos
with open('pokemons.json') as file:
    pokemons = json.load(file)['results']

# separamos somente tipo grama
grass_type_pokemons = [
    pokemon for pokemon in pokemons if 'Grass' in pokemon['type']
]

# abre o arquivo para escrevermos apenas pokemons tipo grama
with open('grass_pokemons.json', 'w') as file:
    json_to_write = json.dumps(
        grass_type_pokemons
    ) # conversão de Pthon para formato json(str)
    file.write(json_to_write)

with open('pokemons.json') as file:
    pokemons = json.load(file)['results']

# somente tipo fogo
fire_type_pokemons = [
    pokemon for pokemon in pokemons if 'Fire' in pokemon['type']
]

# abre arquivo para escrita
with open('fire_pokemons.json', 'w') as file:
    # escreve no arquivo já transformando em JSON
    json.dump(fire_type_pokemons, file)