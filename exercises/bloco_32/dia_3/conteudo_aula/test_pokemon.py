import json
from pokemon import retrieve_pokemons_by_type, retrieve_pokemons_by_type_inside_file
from io import StringIO
from unittest.mock import mock_open, patch

def test_retrieve_pokemons_by_type():
    # definimos um pokemon do tipo grama
    grass_type_pokemon = {
        "national_number": "001",
        "evolution": None,
        "name": "Bulbasaur",
        "type": ["Grass", "Poison"],
        "total": 318,
        "hp": 45,
        "attack": 49,
        "defense": 49,
        "sp_atk": 65,
        "sp_def": 65,
        "speed": 45,
    }
    # definimos um pokemon tipo agua
    water_type_pokemon = {
        "national_number": "007",
        "evolution": None,
        "name": "Squirtle",
        "type": ["Water"],
        "total": 314,
        "hp": 44,
        "attack": 48,
        "defense": 65,
        "sp_atk": 50,
        "sp_def": 64,
        "speed": 43,
    }
    # cria arquivo em memória
    fake_file = StringIO(
        json.dumps({ 'results': [grass_type_pokemon, water_type_pokemon] })
    )
    # quando pesquisamos por pokemons do tipo grama, o poke tipo agua não retorna
    assert retrieve_pokemons_by_type('Grass', fake_file) == [
        grass_type_pokemon
    ]

def test_retrieve_pokemons_by_type_inside_file():
    # definimos um pokemon do tipo grama
    grass_type_pokemon = {
        "national_number": "001",
        "evolution": None,
        "name": "Bulbasaur",
        "type": ["Grass", "Poison"],
        "total": 318,
        "hp": 45,
        "attack": 49,
        "defense": 49,
        "sp_atk": 65,
        "sp_def": 65,
        "speed": 45,
    }
    # definimos também um pokemon do tipo água
    water_type_pokemon = {
        "national_number": "007",
        "evolution": None,
        "name": "Squirtle",
        "type": ["Water"],
        "total": 314,
        "hp": 44,
        "attack": 48,
        "defense": 65,
        "sp_atk": 50,
        "sp_def": 64,
        "speed": 43,
    }
    pokemon_json_content = json.dumps({ 'results': [grass_type_pokemon, water_type_pokemon] })
    # substituímos a função padrão do python open por mock_open
    with patch('builtins.open', mock_open(read_data=pokemon_json_content)):
        # o nome do arquivo não é importante
        # parâmetros não utilizados são chamados de 'dummy'
        assert retrieve_pokemons_by_type_inside_file('Grass', 'dummy') == [
            grass_type_pokemon
        ]
