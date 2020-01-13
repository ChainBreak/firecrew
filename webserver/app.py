#!/usr/bin/env python3

from flask import Flask, render_template
import threading
app = Flask(__name__)

@app.route('/')
def default():
    print(threading.current_thread().name)
    return render_template('main.html')
