def is_odd(number):
    'Retorna Treu se um número é ímpar, senão False'
    return number % 2 != 0

def divide(a_number, other_number):
    "Retorna a divisão de a_number por other_number"
    return a_number / other_number

# funções vazias para retirar erro do pylance no arquivo de teste
def get_most_ordered_dish_per_costumer(orders):
    return orders

def get_order_frequency_per_costumer(orders):
    return orders