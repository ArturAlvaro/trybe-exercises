while True:
    try:
        x = int(input('Please enter a number: '))
        break
    except ValueError:
        print('Oops! That was no valid number. Try again...')

# exceções com arquivos
try:
    arquivo = open('arquivo.txt', 'r')
except OSError:
    # caso haja exceção
    print('arquivo inexistente')
else:
    # se tudo der certo no try
    print('arquivo manipulado e fechado com sucesso')
    arquivo.close()
finally:
    # sempre será executado, independente de erro
    print('Tentativa de abrir arquivo')

# with
with open('arquivo.txt', 'w') as file:
    file.write('Michelle 27\n')
# o arquivo foi fechado por estar fora do contexto
print(file.closed)
