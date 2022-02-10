from flask import Flask, render_template, jsonify, request
from random import randint
import requests

app = Flask(__name__)


@app.route("/")
def homepage():
    """Show homepage."""

    return render_template("index.html")


@app.route('/api/get-lucky-num', methods=['POST'])
def get_luckly_number():
    name = request.json['name']
    name_message = ""
    
    email = request.json['email']
    email_message = ""
    
    color = request.json['color']
    color_message = ""

    year = request.json['year']
    year_message = ""


    if name == "":
        name_message = "This field is required."
        name = False
   
    
    if email == "":
        email_message = "This field is required."
        email = False
   

    color_choices = ["red", "green", "orange", "blue"]
    if color not in color_choices:
       color_message = "Invalid value, must be one of: red, green, orange, blue."
       color = False

    
    try:
        year = int(year)
        year_range = list(range(1900,2001))
        if year not in year_range:
            year_message = f"Invalid value, must be between 1900 and 2000, inclusive"
            year= False
    except:
        year_message = "Invalid value, must be between 1900 and 2000, inclusives"
        year= False    

    
        
    
    if name and email and color and year:
        num = randint(1,100)
        resp_num_fact = requests.get(f"http://numbersapi.com/{num}")
        resp_year_fact = requests.get(f"http://numbersapi.com/{year}/year")

        data = {
            "num": {
                    "fact": f"{resp_num_fact.text}",
                    "num": f"{num}"
            },
            "year": {
                    "fact": f"{resp_year_fact.text}",
                    "year": f"{year}"
            } 
        } 

        

    else:
        data =  {
            "errors": {
                "color": f'{color_message}',
                "year": f'{year_message}',
                "name":  f'{name_message}',
                "email":  f'{email_message}',
            }
         } 
       
    return jsonify(data)    
    