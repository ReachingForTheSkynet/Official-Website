from flask import Flask, render_template, send_from_directory, jsonify, request

class Main():
    def __init__(self):
        app = Flask(__name__, static_url_path="/static")
        @app.route("/")
        def _home():
            return render_template('index.html')
        if __name__ == '__main__':
            app.run(debug=True)
i = Main()
