import time
from flask import Flask, flash, request, redirect, url_for, abort, send_from_directory, send_file, jsonify, Response

#from flask_cors import CORS, cross_origin
import logging
from werkzeug.utils import secure_filename
import json
import os
from werkzeug.datastructures import ImmutableMultiDict

import pandas as pd
import tensorflow as tf
from sklearn import metrics
from sklearn.svm import SVC
from keras import Sequential
from keras.layers import Dense
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from sklearn.neighbors import KNeighborsClassifier
from sklearn.linear_model import LogisticRegression
from scikitplot.metrics import plot_confusion_matrix

UPLOAD_FOLDER = '/home/lenovo/react-flask-app/api'
ALLOWED_EXTENSIONS = {'csv'}


app = Flask(__name__)	
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/name',  methods=["POST"])
def get_name():
	#print(request.get_json())
	name = request.get_json()["name"]
	return json.dumps({"nameq":name})


@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/get_image', methods = ["GET"])
def get_image():
    #return send_from_directory(app.config['UPLOAD_FOLDER'],path)
    #return "hi"
    filename = 'figure.png'
    return send_file(filename, mimetype='image/png')

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/upload', methods = ["POST"])
def upload():
    res = {}
    res['file-present'] = False
    res['file-name'] = False
    res['file-upload'] = False
    res['file-extenion'] = False
    if 'file' not in  request.files:
        print('no file part')
        return json.dumps(res)
    else:
        res['file-present'] = True
        file = request.files['file']
        print(file)
        if(file.filename == ''):
            return json.dumps(res)
        else:
            res['file-name'] = True
            if allowed_file(file.filename):
                res['file-extenion'] = True
                #filename = secure_filename(file.filename)
                if request.form['choice'] == 'training':
                    filename='training.csv'
                else:
                    filename='testing.csv'
                file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
                res['file-upload']=True
                return json.dumps(res)
            else:
                return json.dumps(res)

@app.route('/download', methods=['POST'])
def download():
    #filename = request.get_json()['filename']
    #filename = 'results.csv'
    #f = open(filename)
    return send_file('/home/lenovo/react-flask-app/api/result.csv')



@app.route('/models', methods=['POST'])
def models():
    data = request.get_json()

    if data['model'] == 'svm':
        training = pd.read_csv('training.csv')
        testing = pd.read_csv('testing.csv')

        x_train = training.drop(columns=['target'])
        y_train = training['target']

        x_test = testing.drop(columns=['target'])
        y_test_actual = testing['target']

        classifier = SVC(kernel = data['kernel'])
        classifier.fit(x_train, y_train)

        y_test_obtained = classifier.predict(x_test)

        testing['obtained'] = y_test_obtained
        testing.to_csv('result.csv', index=False)

        plot_confusion_matrix(y_test_actual, y_test_obtained)
        plt.savefig('figure.png')

    if data['model'] == 'knn':
        training = pd.read_csv('training.csv')
        testing = pd.read_csv('testing.csv')

        x_train = training.drop(columns=['target'])
        y_train = training['target']

        x_test = testing.drop(columns=['target'])
        y_test_actual = testing['target']

        classifier = KNeighborsClassifier(n_neighbors = data['k'])
        classifier.fit(x_train, y_train)

        y_test_obtained = classifier.predict(x_test)

        testing['obtained'] = y_test_obtained
        testing.to_csv('result.csv', index=False)

        plot_confusion_matrix(y_test_actual, y_test_obtained)
        plt.savefig('figure.png')

    if data['model'] == 'logistic_regression':
        training = pd.read_csv('training.csv')
        testing = pd.read_csv('testing.csv')

        x_train = training.drop(columns=['target'])
        y_train = training['target']

        x_test = testing.drop(columns=['target'])
        y_test_actual = testing['target']

        classifier = LogisticRegression(random_state = 0, solver = "liblinear", penalty = data['penalty'])
        classifier.fit(x_train, y_train)

        y_test_obtained = classifier.predict(x_test)

        testing['obtained'] = y_test_obtained
        testing.to_csv('result.csv', index=False)

        plot_confusion_matrix(y_test_actual, y_test_obtained)
        plt.savefig('figure.png')

    if data['model'] == 'linear_regression':
        training = pd.read_csv('training.csv')
        testing = pd.read_csv('testing.csv')

        x_train = training.drop(columns=['target'])
        y_train = training['target']

        x_test = testing.drop(columns=['target'])
        y_test_actual = testing['target']

        classifier = LinearRegression()
        classifier.fit(x_train, y_train)

        y_test_obtained = classifier.predict(x_test)

        testing['obtained'] = y_test_obtained
        testing.to_csv('result.csv', index=False)

        plt.scatter(x_train, y_train, color='blue')
        plt.scatter(x_test, y_test_actual, color='green')
        plt.plot(x_test, y_test_obtained, color='red')
        plt.title("MSE: " + str(metrics.mean_squared_error(y_test_actual, y_test_obtained)))
        plt.legend(['Fitted Line', 'Training Data', 'Actual Testing Data'])
        plt.savefig('figure.png')

    if data['model'] == 'nn':
        training = pd.read_csv('training.csv')
        testing = pd.read_csv('testing.csv')

        x_train = training.drop(columns=['target'])
        y_train = training['target']

        x_test = testing.drop(columns=['target'])
        y_test_actual = testing['target']

        model = Sequential()
        model.add(Dense(data['layers_dims'][0], activation=data['layers_activation'][0], input_shape=(x_train.shape[1],)))
        for i in range(1, len(data['layers_dims'])):
            model.add(Dense(data['layers_dims'][i], activation=data['layers_activation'][i]))
        model.add(Dense(1))
        model.compile(optimizer='adam', loss='mean_squared_error')
        model.fit(x_train, y_train, validation_split=0.2, epochs=30)

        y_test_obtained = model.predict(x_test)

        testing['obtained'] = y_test_obtained
        testing.to_csv('result.csv', index=False)

    return jsonify([]), 200
