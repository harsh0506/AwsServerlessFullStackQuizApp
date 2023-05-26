import requests
import random
import time
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Access environment variables
api_key = os.getenv('VITE_APIURL')

trivia_api = 'https://opentdb.com/api.php?amount=20&category=23&difficulty=medium&type=multiple'


def Input_data(trivia_api):
    # Make a request to the API
    response = requests.get(trivia_api)
    print(response.json())


    url = api_key

    headers = {
        "Content-Type": "application/json"
    }


# Check the status code to make sure the request was successful
    if response.status_code == 200:
        # Convert the response from JSON to a Python dictionary
        data = response.json()["results"]

        list1 = []
        count = 12004

        for i in range(len(data)):
            dict1 = {}
            my_values = [data[i]["correct_answer"], data[i]["incorrect_answers"]
                         [0], data[i]["incorrect_answers"][1], data[i]["incorrect_answers"][2]]
            random.shuffle(my_values)
            dict1["subject"] = "History"
            dict1["answer"] = data[i]["correct_answer"]
            dict1["option1"] = my_values[0]
            dict1["option2"] = my_values[1]
            dict1['option3'] = my_values[2]
            dict1['option4'] = my_values[3]
            dict1["question"] = data[i]["question"]
            dict1["id"] = str(count)
            count +=1 
            list1.append(dict1)
            response = requests.post(url, json=dict1, headers=headers)
            print("element included")
            

    # Do something with the data
        print(list1)
    else:
        # If the request was unsuccessful, print an error message
        print(f"Error: {response.status_code}")

Input_data(trivia_api)

def Put_Random_where_sting_is_empty():
    response = requests.get("http://localhost:4500/MCQs")
    data = response.json()
    for i in range(len(data["mcqs"])):
        if data["mcqs"][i]["Sub"] == "":
            id = data["mcqs"][i]["ID"]
            url = f"http://localhost:4500/MCQ/{id}"
            res = requests.put(url=url, data={"Sub" : "general"})
            print(res.json())
        

#Put_Random_where_sting_is_empty()