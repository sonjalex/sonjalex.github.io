import math
from flask import Flask

app = Flask(__name__)
@app.route('/prime_number/<int:luku>')
def tarkista_alkuluku(luku):
    response = {
        "Number": luku,
        "isPrime": alkuluku(luku)
    }
    return response

def alkuluku(luku):
    if luku <= 1:
        return False
    for x in range(2, math.isqrt(luku) + 1):
        if luku % x == 0:
            return False
    return True

if __name__ == '__main__':
    app.run(use_reloader=True, host='127.0.0.1', port=3000)