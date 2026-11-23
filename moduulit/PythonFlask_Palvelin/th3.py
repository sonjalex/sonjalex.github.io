import json
from flask import Flask, request

app = Flask(__name__)

@app.route('/add')
def lisaa_sana():
    args = request.args
    en = args.get("en")
    fi = args.get("fi")

    try:
        with open("dictionary.json", "r", encoding="utf-8") as f:
            sanakirja = json.load(f)
    except FileNotFoundError:
        sanakirja = {}

    sanakirja[en] = fi

    with open("dictionary.json", "w", encoding="utf-8") as f:
        json.dump(sanakirja, f, ensure_ascii=False, indent=4)

    response = {
        "message": "Sana lisätty",
        "en": en,
        "fi": fi
    }
    return response

if __name__ == '__main__':
    app.run(use_reloader=True, host='127.0.0.1', port=3000)