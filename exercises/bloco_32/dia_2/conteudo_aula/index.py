import random
random_number = random.randint(1, 10)
guess = ""

while guess != random_number:
    guess = int(input('Qual seu palpite?'))

print('O número sorteado era: ', guess)

import sys
if __name__ == "__main__":
    for argument in sys.argv:
        print('Received -> ', argument)

print("Maria", "João", "Miguel", "Ana")  # saída: Maria João Miguel Ana
print("Maria", "João", "Miguel", "Ana", sep=", ")  # saída: Maria, João, Miguel, Ana

# duas linhas
print("Em duas ")
print("linhas.")

# mesma linha
print("Na mesma", end="")
print("linha.")

err = 'Arquivo não encontrado'
print(f'Erro aconteceu: {err}', file=sys.stderr)