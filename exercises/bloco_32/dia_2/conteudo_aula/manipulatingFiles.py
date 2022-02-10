from operator import mod


file = open('arquivo.txt', mode='w')

file.write('nome idade\n')
file.write('Maria 45\n')
file.write('Miguel 33\n')

print('Tulio 22', file=file)

LINES = ['Alberto 35\n', 'Betina 22\n', 'João 42\n', 'Victor 19\n']
file.writelines(LINES)

file.close()

arquivos = []
for index in range(10240):
    arquivos.append(open(f'arquivo{index}.txt', 'w'))

# escrita
file = open('arquivo.txt', mode='w')
file.write('Trybe S2')
file.close()

# leitura
file = open('arquivo.txt', mode='r')
content = file.read()
print(content)
file.close()

# escrita iterável
file = open('arquivo.txt', mode='w')
LINES = ['Olá\n', 'mundo\n', 'belo\n', 'do\n', 'Python\n']
file.writelines(LINES)
file.close()

# leitura
file = open('arquivo.txt', mode='r')
for line in file:
    print(line)
file.close()

# escrita
file = open('arquivo.dat', mode='wb')
file.write(b'C\cx3\xa1ssio 30')
file.close()

# leitura
file = open('arquivo.dat', mode='rb')
content = file.read()
print(content)
file.close()
